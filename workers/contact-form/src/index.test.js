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

describe("self-test Worker endpoint", () => {
  it("validates and stores a complete pseudonymous response", async () => {
    const run = vi.fn().mockResolvedValue({ success: true });
    const bind = vi.fn(() => ({ run }));
    const prepare = vi.fn(() => ({ bind }));

    const response = await worker.fetch(request(validPayload()), {
      SELFTEST_DB: { prepare },
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      responseId: "550e8400-e29b-41d4-a716-446655440000",
    });
    expect(prepare).toHaveBeenCalledOnce();
    expect(bind).toHaveBeenCalledOnce();
    expect(run).toHaveBeenCalledOnce();
  });

  it("rejects incomplete or manipulated answer data", async () => {
    const payload = validPayload();
    delete payload.answers.D05;

    const response = await worker.fetch(request(payload), {
      SELFTEST_DB: { prepare: vi.fn() },
    });

    expect(response.status).toBe(400);
  });

  it("does not accept health responses when the database binding is unavailable", async () => {
    const response = await worker.fetch(request(validPayload()), {});
    expect(response.status).toBe(503);
  });
});
