/* Google Apps Script, owned by info@neurofeedback-praxis-muenchen.de.
 * Install with aktivieren(). No historical inquiries are answered.
 */
const PRACTICE = "info@neurofeedback-praxis-muenchen.de";
const FORM_SENDER = "formular@psychotherapie-praxis-in-muenchen.de";
const INQUIRY_SUBJECT = "Neue Terminanfrage: ADHS-Diagnostik (Verdacht auf ADHS)";
const REPLY_SUBJECT = "Ihre Anfrage zur ADHS-Diagnostik";
const REPLY_BODY = [
  "Vielen Dank für Ihre Anfrage.",
  "Gerne bieten wir Ihnen eine strukturierte ADHS-Diagnostik für Erwachsene in unserer Praxis in München-Schwabing an.",
  "Die Diagnostik umfasst eine ausführliche biografische Anamnese, standardisierte diagnostische Verfahren, eine differenzialdiagnostische Einordnung sowie eine persönliche Befundbesprechung. Im Anschluss erhalten Sie eine schriftliche Befundzusammenfassung mit Empfehlungen für das weitere Vorgehen.",
  "Der Gesamtumfang der Diagnostik beträgt etwa 2,5 Stunden. Die Kosten liegen bei 199 Euro. Es handelt sich um eine Privat- bzw. Selbstzahlerleistung; gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht.",
  "Teilen Sie mir gerne kurz mit, ob der Ablauf und die Kosten für Sie soweit verständlich sind oder ob vorab noch Fragen bestehen.",
].join("\n\n");

// Existing Gmail “Praxissignatur”, copied on 29 September 2026.
const SIGNATURE_TEXT = [
  "Jean-Maurice Cecilia-Menzel",
  "Praxisgemeinschaft Menzel",
  "Hyperkinetische Störungen – Therapie,",
  "Test und Edukation",
  "Emotional-motivationale Defizite –",
  "Belohnungssysteme – Arousalmodelle",
  "Forschung und Empirie ADS/ADHS",
  "T: 089 44135911",
  "E: info@neurofeedback-praxis-muenchen.de",
  "www.neurofeedback-praxis-muenchen.de",
  "Hildeboldstraße 1, 80797 München",
].join("\n");
const SIGNATURE_HTML = 'Jean-Maurice Cecilia-Menzel<br>Praxisgemeinschaft Menzel<br>Hyperkinetische Störungen – Therapie,<br>Test und Edukation<br>Emotional-motivationale Defizite –<br>Belohnungssysteme – Arousalmodelle<br>Forschung und Empirie ADS/ADHS<br>T: 089 44135911<br>E: <a href="mailto:info@neurofeedback-praxis-muenchen.de" target="_blank">info@neurofeedback-praxis-muenchen.de</a><br><a href="https://www.neurofeedback-praxis-muenchen.de/" target="_blank">www.neurofeedback-praxis-muenchen.de</a><br>Hildeboldstraße 1, 80797 München';

function address(value) {
  const match = String(value || "").trim().match(/^(?:[^<>]*<)?([^<>\s,;]+@[^<>\s,;]+)>?$/);
  return match ? match[1].toLowerCase() : "";
}

function replyText(data) {
  const greeting = data.salutation === "herr" ? "Sehr geehrter Herr" :
    data.salutation === "frau" ? "Sehr geehrte Frau" : "Guten Tag";
  return greeting + " " + data.name + ",\n\n" + REPLY_BODY + "\n\n" + SIGNATURE_TEXT;
}

function sendReply(data, subject) {
  const text = replyText(data);
  const body = text.slice(0, -(SIGNATURE_TEXT.length + 2));
  const html = body.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
  GmailApp.sendEmail(data.email, subject, text, {
    name: "ADHS Praxis München", replyTo: PRACTICE,
    htmlBody: '<div>' + html + '<br><br><div class="gmail_signature">' + SIGNATURE_HTML + '</div></div>',
  });
}

// Manual formatting check, always sent exclusively to the practice itself.
function signaturTest() {
  assertPracticeAccount();
  sendReply({ email: PRACTICE, name: "Interner Signaturtest", salutation: "" }, "TEST – ADHS-Antwort mit Praxissignatur");
}

function eligibleRecord(message, activatedAt, now) {
  if (message.getSubject() !== INQUIRY_SUBJECT || address(message.getFrom()) !== FORM_SENDER) return null;
  // Require an authenticated notification, not merely a matching From header.
  const auth = message.getHeader("Authentication-Results") || "";
  if (!/dkim=pass\b[^;]*\bheader\.(?:d|i)=@?(?:[a-z0-9-]+\.)*psychotherapie-praxis-in-muenchen\.de\b/i.test(auth)) return null;
  const lines = message.getPlainBody().split(/\r?\n/);
  const recordLine = lines.find(line => line.startsWith("ADHS-AUTOREPLY-V1: "));
  if (!recordLine) return null;
  let data;
  try { data = JSON.parse(recordLine.slice("ADHS-AUTOREPLY-V1: ".length)); } catch (_) { return null; }
  const submittedAt = Date.parse(data.submittedAt);
  const receivedAt = message.getDate().getTime();
  if (data.service !== "adhs-diagnostik" ||
      !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.reference) ||
      typeof data.name !== "string" || !data.name.trim() || data.name.length > 120 || /[\r\n]/.test(data.name) ||
      !["", "herr", "frau"].includes(data.salutation) ||
      !/^[^\s@<>;,]+@[^\s@<>;,]+\.[^\s@<>;,]+$/.test(data.email) ||
      address(message.getReplyTo()) !== data.email || data.email === FORM_SENDER ||
      !Number.isFinite(submittedAt) || submittedAt < activatedAt || receivedAt < activatedAt ||
      submittedAt > now || now - Math.max(submittedAt, receivedAt) < 300000 ||
      now - receivedAt > 7 * 86400000) return null;
  return { ...data, receivedAt };
}

function assertPracticeAccount() {
  if (Session.getEffectiveUser().getEmail().toLowerCase() !== PRACTICE) {
    throw new Error("Bitte dieses Skript ausschließlich im Praxispostfach " + PRACTICE + " aktivieren.");
  }
}

function aktivieren() {
  assertPracticeAccount();
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const props = PropertiesService.getScriptProperties();
    // Re-running setup never rewinds the start date or resets deduplication.
    if (!props.getProperty("ACTIVATED_AT")) props.setProperty("ACTIVATED_AT", String(Date.now()));
    const existing = ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === "anfragenPruefen");
    if (!existing.length) ScriptApp.newTrigger("anfragenPruefen").timeBased().everyMinutes(1).create();
    existing.slice(1).forEach(t => ScriptApp.deleteTrigger(t));
    props.setProperty("ENABLED", "true");
    console.log("Aktiv: ausschließlich neue ADHS-Diagnostik-Anfragen; frühestens nach fünf Minuten.");
  } finally { lock.releaseLock(); }
}

function pausieren() {
  PropertiesService.getScriptProperties().setProperty("ENABLED", "false");
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === "anfragenPruefen").forEach(t => ScriptApp.deleteTrigger(t));
}

function anfragenPruefen() {
  assertPracticeAccount();
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    const props = PropertiesService.getScriptProperties();
    const start = Number(props.getProperty("ACTIVATED_AT"));
    if (props.getProperty("ENABLED") !== "true" || !start) return;
    const now = Date.now();
    const since = Math.floor(Math.max(start, now - 7 * 86400000) / 1000) - 1;
    const query = 'in:anywhere -in:spam -in:trash from:' + FORM_SENDER + ' after:' + since + ' subject:"Neue Terminanfrage"';
    let sent = 0;
    for (let offset = 0; Date.now() - now < 90000; offset += 50) {
      const threads = GmailApp.search(query, offset, 50);
      for (const thread of threads) {
        for (const message of thread.getMessages()) {
          const data = eligibleRecord(message, start, now);
          if (!data) continue;
          const key = "REPLY_" + data.reference;
          if (props.getProperty(key)) continue;
          if (MailApp.getRemainingDailyQuota() < 1) throw new Error("Tageslimit erreicht; offene Anfragen bleiben für den nächsten Lauf erhalten.");
          // Claim before sending. If Google times out after accepting a send,
          // do not blindly retry and send the patient a duplicate.
          props.setProperty(key, JSON.stringify({ at: data.receivedAt, state: "sending" }));
          try {
            sendReply(data, REPLY_SUBJECT);
            props.setProperty(key, JSON.stringify({ at: data.receivedAt, state: "sent" }));
          } catch (_) {
            throw new Error("Versandstatus unklar für Vorgang " + data.reference + ". Bitte in Gesendet prüfen; kein automatischer Doppelversand.");
          }
          if (++sent >= 50) return;
        }
      }
      if (threads.length < 50) break;
    }
    // Retain deduplication longer than the seven-day mailbox search window.
    const properties = props.getProperties();
    for (const key of Object.keys(properties)) {
      if (key.startsWith("REPLY_")) {
        const entry = JSON.parse(properties[key]);
        if (entry.state === "sent" && now - entry.at > 8 * 86400000) props.deleteProperty(key);
      }
    }
  } finally { lock.releaseLock(); }
}

// Exports are ignored by Google Apps Script and used by the local tests.
if (typeof module !== "undefined") module.exports = { eligibleRecord, replyText, REPLY_BODY, SIGNATURE_TEXT, aktivieren, anfragenPruefen, pausieren, signaturTest };
