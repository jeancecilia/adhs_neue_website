import { describe, it, expect } from "vitest";
import { normalizeAttribution, attributionText } from "./attribution.js";
describe("source metadata sanitization", () => {
 it("keeps validated categories separate from self-report", () => {
  const now=Date.now(), touch={source:"google_ads",campaign:"24170826692",at:now};
  const a=normalizeAttribution({attribution:{version:1,first:touch,last:touch,expires:now+100000},reportedSource:"recommendation"});
  expect(a.first.source).toBe("google_ads"); expect(a.reported).toBe("recommendation");
  expect(attributionText(a,"test-id")).toContain("Vorgangsnummer: test-id");
 });
 it("does not echo arbitrary identifiers or executable strings", () => {
  const now=Date.now(), touch={source:"<script>",campaign:"patient@example.com",at:now};
  const a=normalizeAttribution({attribution:{version:1,first:touch,last:touch,expires:now+1000},reportedSource:"__proto__"});
  expect(a.first).toEqual({source:"unknown",campaign:""}); expect(a.reported).toBe("unknown");
  expect(attributionText(a,"test-id")).not.toContain("script");
 });
 it("rejects expired snapshots", () => {
  expect(normalizeAttribution({attribution:{version:1,expires:Date.now()-1}}).first.source).toBe("unknown");
 });
});

