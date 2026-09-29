import { readFileSync } from "node:fs";
import vm from "node:vm";
import { describe, it, expect, vi } from "vitest";
import worker from "../../workers/contact-form/src/index.js";

const source = readFileSync(new URL("./Code.js", import.meta.url), "utf8");
const now = Date.now();
const start = now - 600000;
const record = {
  reference: "550e8400-e29b-41d4-a716-446655440000", service: "adhs-diagnostik",
  name: "Erika von Beispiel", salutation: "frau", email: "erika@example.com",
  submittedAt: new Date(now - 300000).toISOString(),
};
function mail(data = record, overrides = {}) {
  return {
    getSubject: () => "Neue Terminanfrage: ADHS-Diagnostik (Verdacht auf ADHS)",
    getFrom: () => "ADHS Praxis München <formular@psychotherapie-praxis-in-muenchen.de>",
    getHeader: () => "mx.google.com; dkim=pass header.i=@psychotherapie-praxis-in-muenchen.de header.s=cf; spf=pass",
    getReplyTo: () => data.email,
    getPlainBody: () => "Neue Terminanfrage über neurofeedback-praxis-muenchen.de\nADHS-AUTOREPLY-V1: " + JSON.stringify(data) + "\n\nName: " + data.name,
    getDate: () => new Date(now - 300000),
    ...overrides,
  };
}
function runtime(messages = [mail()]) {
  const state = { ACTIVATED_AT: String(start), ENABLED: "true" };
  const props = {
    getProperty: key => state[key] || null,
    setProperty: (key, value) => { state[key] = value; },
    getProperties: () => ({ ...state }),
    deleteProperty: key => { delete state[key]; },
  };
  const sendEmail = vi.fn();
  const create = vi.fn();
  const releaseLock = vi.fn();
  class Clock extends Date { static now() { return now; } }
  const context = vm.createContext({
    module: { exports: {} }, Date: Clock, console: { log: vi.fn() },
    Session: { getEffectiveUser: () => ({ getEmail: () => "info@neurofeedback-praxis-muenchen.de" }) },
    PropertiesService: { getScriptProperties: () => props },
    LockService: { getScriptLock: () => ({ tryLock: () => true, waitLock: () => {}, releaseLock }) },
    GmailApp: { search: vi.fn(() => [{ getMessages: () => messages }]), sendEmail },
    MailApp: { getRemainingDailyQuota: () => 100 },
    ScriptApp: { getProjectTriggers: () => [], newTrigger: () => ({ timeBased: () => ({ everyMinutes: () => ({ create }) }) }) },
  });
  vm.runInContext(source, context);
  return { ...context.module.exports, state, sendEmail, create, releaseLock, context };
}

describe("ADHS mailbox automatic reply", () => {
  it("passes the actual Worker notification into the reply parser", async () => {
    const send = vi.fn().mockResolvedValue({ messageId: "notification-id" });
    const response = await worker.fetch(new Request("https://neurofeedback-praxis-muenchen.de/api/contact", {
      method: "POST", headers: { Origin: "https://neurofeedback-praxis-muenchen.de" },
      body: JSON.stringify({ ...record, healthDataConsent: true }),
    }), { EMAIL: { send } });
    expect(response.status).toBe(200);
    const notification = send.mock.calls[0][0];
    const rt = runtime();
    const result = rt.eligibleRecord(mail(record, {
      getPlainBody: () => notification.text, getDate: () => new Date(now),
    }), start, Date.now() + 300000);
    expect(result).toMatchObject({ name: record.name, salutation: "frau", service: "adhs-diagnostik" });
  });
  it("waits a full five minutes from receipt as well as submission", () => {
    const rt = runtime();
    expect(rt.eligibleRecord(mail(), start, now - 1)).toBeNull();
    expect(rt.eligibleRecord(mail(), start, now)).not.toBeNull();
    expect(rt.eligibleRecord(mail(record, { getDate: () => new Date(now - 299999) }), start, now)).toBeNull();
  });
  it("also reads the record from the HTML-derived plain body", () => {
    expect(runtime().eligibleRecord(mail(record, {
      getPlainBody: () => "ADHS-AUTOREPLY-V1: " + JSON.stringify(record) + "\nINTERNE HERKUNFTSZUORDNUNG",
    }), start, now)).not.toBeNull();
  });
  it.each(["adhs-therapie", "neurofeedback", "allgemein"])("does not answer %s", service => {
    expect(runtime().eligibleRecord(mail({ ...record, service }), start, now)).toBeNull();
  });
  it.each([
    ["before activation", { submittedAt: new Date(start - 1).toISOString() }, {}],
    ["future date", { submittedAt: new Date(now + 1).toISOString() }, {}],
    ["invalid recipient", { email: "a@example.com,b@example.com" }, {}],
    ["invented salutation", { salutation: "Dr" }, {}],
    ["missing date", { submittedAt: "invalid" }, {}],
    ["foreign sender", {}, { getFrom: () => "other@example.com" }],
    ["unauthenticated sender", {}, { getHeader: () => "dkim=fail header.d=psychotherapie-praxis-in-muenchen.de" }],
    ["wrong DKIM domain", {}, { getHeader: () => "dkim=pass header.d=evil.example" }],
    ["reply in same thread", {}, { getSubject: () => "Re: Neue Terminanfrage: ADHS-Diagnostik (Verdacht auf ADHS)" }],
    ["different Reply-To", {}, { getReplyTo: () => "other@example.com" }],
    ["old notification without marker", {}, { getPlainBody: () => "Name: Erika Beispiel" }],
  ])("ignores %s", (_name, changes, overrides) => {
    expect(runtime().eligibleRecord(mail({ ...record, ...changes }, overrides), start, now)).toBeNull();
  });
  it.each([["herr", "Sehr geehrter Herr"], ["frau", "Sehr geehrte Frau"], ["", "Guten Tag"]])("uses the explicit salutation %s", (salutation, greeting) => {
    expect(runtime().replyText({ ...record, salutation })).toBe(greeting + " Erika von Beispiel,\n\n" + runtime().REPLY_BODY);
  });
  it("keeps the user's complete wording", () => {
    expect(runtime().REPLY_BODY).toBe([
      "Vielen Dank für Ihre Anfrage.",
      "Gerne bieten wir Ihnen eine strukturierte ADHS-Diagnostik für Erwachsene in unserer Praxis in München-Schwabing an.",
      "Die Diagnostik umfasst eine ausführliche biografische Anamnese, standardisierte diagnostische Verfahren, eine differenzialdiagnostische Einordnung sowie eine persönliche Befundbesprechung. Im Anschluss erhalten Sie eine schriftliche Befundzusammenfassung mit Empfehlungen für das weitere Vorgehen.",
      "Der Gesamtumfang der Diagnostik beträgt etwa 2,5 Stunden. Die Kosten liegen bei 199 Euro. Es handelt sich um eine Privat- bzw. Selbstzahlerleistung; gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht.",
      "Teilen Sie mir gerne kurz mit, ob der Ablauf und die Kosten für Sie soweit verständlich sind oder ob vorab noch Fragen bestehen.",
    ].join("\n\n"));
  });
  it("sends once across repeated runs and duplicate notification messages", () => {
    const rt = runtime([mail(), mail()]);
    rt.anfragenPruefen(); rt.anfragenPruefen();
    expect(rt.sendEmail).toHaveBeenCalledOnce();
    expect(rt.sendEmail).toHaveBeenCalledWith(record.email, "Ihre Anfrage zur ADHS-Diagnostik", rt.replyText(record), expect.objectContaining({ replyTo: "info@neurofeedback-praxis-muenchen.de" }));
    expect(JSON.parse(rt.state["REPLY_" + record.reference]).state).toBe("sent");
  });
  it("does not resend after an ambiguous send error", () => {
    const rt = runtime();
    rt.sendEmail.mockImplementation(() => { throw new Error("timeout"); });
    expect(() => rt.anfragenPruefen()).toThrow("Versandstatus unklar");
    rt.anfragenPruefen();
    expect(rt.sendEmail).toHaveBeenCalledOnce();
    expect(rt.releaseLock).toHaveBeenCalledTimes(2);
  });
  it("retains pending mail when the daily quota is exhausted", () => {
    const rt = runtime();
    rt.context.MailApp.getRemainingDailyQuota = () => 0;
    expect(() => rt.anfragenPruefen()).toThrow("Tageslimit");
    expect(rt.sendEmail).not.toHaveBeenCalled();
    expect(rt.state["REPLY_" + record.reference]).toBeUndefined();
  });
  it("does not run when disabled or not activated", () => {
    const rt = runtime();
    delete rt.state.ACTIVATED_AT;
    rt.anfragenPruefen();
    expect(rt.sendEmail).not.toHaveBeenCalled();
  });
  it("refuses setup in a different account", () => {
    const rt = runtime();
    rt.context.Session.getEffectiveUser = () => ({ getEmail: () => "other@example.com" });
    expect(() => rt.aktivieren()).toThrow("Praxispostfach");
    expect(rt.create).not.toHaveBeenCalled();
  });
});
