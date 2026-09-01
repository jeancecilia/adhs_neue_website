import { describe, expect, it } from "vitest";
import { isAcceptedContactSubmission } from "./contactSubmission";

describe("contact submission acceptance", () => {
  it("accepts only an explicit successful backend handoff", async () => {
    const response = Response.json({ ok: true, accepted: true });

    await expect(isAcceptedContactSubmission(response)).resolves.toBe(true);
  });

  it.each([
    ["honeypot response", Response.json({ ok: true, accepted: false })],
    ["legacy generic success", Response.json({ ok: true })],
    ["malformed success", new Response("not-json", { status: 200 })],
    [
      "backend failure",
      Response.json(
        { ok: true, accepted: true },
        { status: 502 },
      ),
    ],
  ])("rejects a %s", async (_label, response) => {
    await expect(isAcceptedContactSubmission(response)).resolves.toBe(false);
  });
});
