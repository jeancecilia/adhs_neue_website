import { describe, expect, it, vi } from "vitest";
import worker from "./index.js";

const ITEM_IDS = [
  "A01", "A02", "A03", "A05", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14",
  "B01", "B03", "B04", "B06",
  "C01", "C02", "C03", "C04", "C05",
  "D01", "D02", "D03", "D04", "D05",
];

function validPayload() {
  return {
    responseId: "550e8400-e29b-41d4-a716-446655440000",
    instrumentVersion: "ADHS-ST-0.2",
    consent: true,
    consentVersion: "CONSENT-0.1",
    consentAt: new Date().toISOString(),
    age: null,
    gender: "keine-angabe",
    existingAdhdDx: "keine-angabe",
    diagnosisSource: null,
    adhdMedication: null,
    answers: Object.fromEntries(ITEM_IDS.map((id) => [id, 2])),
  };
}

function request(payload) {
  return new Request("https://neurofeedback-praxis-muenchen.de/api/selftest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://neurofeedback-praxis-muenchen.de",
    },
    body: JSON.stringify(payload),
  });
}

function validContactPayload() {
  return {
    name: "Erika Beispiel",
    email: "erika@example.com",
    service: "adhs-diagnostik",
    timeslot: "vormittags",
    message: "Bitte um Rückruf.",
    healthDataConsent: true,
    website: "",
    linkedResponseId: null,
  };
}

function contactRequest(payload) {
  return new Request("https://neurofeedback-praxis-muenchen.de/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "https://neurofeedback-praxis-muenchen.de",
    },
    body: JSON.stringify(payload),
  });
}

function databaseMock() {
  const run = vi.fn().mockResolvedValue({ success: true });
  const bind = vi.fn(() => ({ run }));
  const prepare = vi.fn(() => ({ bind }));
  return { env: { SELFTEST_DB: { prepare } }, prepare, bind, run };
}

describe("self-test Worker endpoint", () => {
  it("validates and stores a complete pseudonymous response", async () => {
    const { env, prepare, bind, run } = databaseMock();

    const response = await worker.fetch(request(validPayload()), env);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      responseId: "550e8400-e29b-41d4-a716-446655440000",
    });
    expect(prepare).toHaveBeenCalledOnce();
    expect(bind).toHaveBeenCalledOnce();
    expect(run).toHaveBeenCalledOnce();
  });

  it.each([
    ["minimal", 0, [0, 0, 0, 0, 0, 0, 0, 0]],
    ["maximal", 4, [4, 4, 4, 4, 4, 12, 4, 5]],
  ])("stores exact calculated values for a %s profile", async (_name, value, expected) => {
    const payload = validPayload();
    payload.answers = Object.fromEntries(ITEM_IDS.map((id) => [id, value]));
    const { env, bind } = databaseMock();

    const response = await worker.fetch(request(payload), env);

    expect(response.status).toBe(200);
    const bound = bind.mock.calls[0];
    expect(bound.slice(13, 21)).toEqual(expected);
  });

  it("stores separated domain values for a mixed profile", async () => {
    const payload = validPayload();
    payload.answers = Object.fromEntries(ITEM_IDS.map((id) => [id, 0]));
    for (const id of ITEM_IDS) {
      if (id.startsWith("A")) payload.answers[id] = 4;
      if (id.startsWith("B")) payload.answers[id] = 3;
      if (id.startsWith("C")) payload.answers[id] = 1;
    }
    Object.assign(payload.answers, { D01: 3, D02: 2, D03: 1, D04: 0, D05: 4 });
    const { env, bind } = databaseMock();

    const response = await worker.fetch(request(payload), env);

    expect(response.status).toBe(200);
    expect(bind.mock.calls[0].slice(13, 21)).toEqual([4, 3, 1, 1.5, 4, 12, 4, 0]);
  });

  it("rejects incomplete or manipulated answer data", async () => {
    const payload = validPayload();
    delete payload.answers.D05;

    const response = await worker.fetch(request(payload), {
      SELFTEST_DB: { prepare: vi.fn() },
    });

    expect(response.status).toBe(400);
  });

  it.each([
    ["wrong instrument", (payload) => { payload.instrumentVersion = "ADHS-ST-9.9"; }],
    ["missing consent", (payload) => { payload.consent = false; }],
    ["wrong consent version", (payload) => { payload.consentVersion = "CONSENT-9.9"; }],
    ["stale consent", (payload) => { payload.consentAt = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(); }],
    ["future consent", (payload) => { payload.consentAt = new Date(Date.now() + 6 * 60 * 1000).toISOString(); }],
    ["invalid UUID", (payload) => { payload.responseId = "not-a-uuid"; }],
    ["answer below scale", (payload) => { payload.answers.A01 = -1; }],
    ["answer above scale", (payload) => { payload.answers.A01 = 5; }],
    ["non-integer answer", (payload) => { payload.answers.A01 = 2.5; }],
    ["extra answer", (payload) => { payload.answers.EXTRA = 2; }],
    ["age below range", (payload) => { payload.age = 17; }],
    ["age above range", (payload) => { payload.age = 100; }],
    ["invalid gender", (payload) => { payload.gender = "other-value"; }],
    ["diagnosis details without diagnosis", (payload) => { payload.diagnosisSource = "fachaerztlich"; }],
  ])("rejects %s", async (_name, mutate) => {
    const payload = validPayload();
    mutate(payload);
    const { env, run } = databaseMock();

    const response = await worker.fetch(request(payload), env);

    expect(response.status).toBe(400);
    expect(run).not.toHaveBeenCalled();
  });

  it.each([18, 99])("accepts boundary age %s", async (age) => {
    const payload = validPayload();
    payload.age = age;
    const { env } = databaseMock();
    expect((await worker.fetch(request(payload), env)).status).toBe(200);
  });

  it("rejects requests from a foreign origin before storage", async () => {
    const foreignRequest = new Request(
      "https://neurofeedback-praxis-muenchen.de/api/selftest",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Origin: "https://evil.example" },
        body: JSON.stringify(validPayload()),
      },
    );
    const { env, run } = databaseMock();

    const response = await worker.fetch(foreignRequest, env);

    expect(response.status).toBe(403);
    expect(run).not.toHaveBeenCalled();
  });

  it("returns 405 for unsupported methods", async () => {
    const response = await worker.fetch(
      new Request("https://neurofeedback-praxis-muenchen.de/api/selftest"),
      {},
    );
    expect(response.status).toBe(405);
  });

  it("returns 502 and no success response when D1 fails", async () => {
    const run = vi.fn().mockRejectedValue(new Error("synthetic D1 failure"));
    const bind = vi.fn(() => ({ run }));
    const prepare = vi.fn(() => ({ bind }));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const response = await worker.fetch(request(validPayload()), {
      SELFTEST_DB: { prepare },
    });

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: "Storage failed" });
    errorSpy.mockRestore();
  });

  it("does not accept health responses when the database binding is unavailable", async () => {
    const response = await worker.fetch(request(validPayload()), {});
    expect(response.status).toBe(503);
  });
});

describe("contact-form Worker endpoint", () => {
  it("marks a successfully handed-off email as an accepted lead", async () => {
    const send = vi.fn().mockResolvedValue(undefined);

    const response = await worker.fetch(contactRequest(validContactPayload()), {
      EMAIL: { send },
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, accepted: true });
    expect(send).toHaveBeenCalledOnce();
  });

  it("silently rejects the honeypot without accepting or emailing a lead", async () => {
    const send = vi.fn().mockResolvedValue(undefined);
    const payload = validContactPayload();
    payload.website = "https://spam.example";

    const response = await worker.fetch(contactRequest(payload), {
      EMAIL: { send },
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true, accepted: false });
    expect(send).not.toHaveBeenCalled();
  });

  it("does not accept a lead when email handoff fails", async () => {
    const send = vi.fn().mockRejectedValue(new Error("synthetic email failure"));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    const response = await worker.fetch(contactRequest(validContactPayload()), {
      EMAIL: { send },
    });

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: "Delivery failed" });
    errorSpy.mockRestore();
  });
});
