// @vitest-environment jsdom
import { beforeEach, describe, expect, it, vi } from "vitest";
let consent: string | null = "granted";
vi.mock("./analytics", () => ({ readAnalyticsConsent: () => consent }));
import { ATTRIBUTION_KEY, classifySource, getAttribution, syncAttribution, validAttribution } from "./attribution";
describe("internal inquiry attribution", () => {
 beforeEach(() => { localStorage.clear(); consent="denied"; syncAttribution(); consent="granted"; history.replaceState({}, "", "/"); });
 it("gives paid click priority over a business-profile marker without retaining click IDs", () => {
  expect(classifySource("https://praxis.de/?gclid=secret&utm_source=google&utm_campaign=business_profile&campaign_id=24170826692",""))
   .toEqual({source:"google_ads",campaign:"24170826692"});
 });
 it("separates marked profiles, Google organic and internal/direct visits", () => {
  expect(classifySource("https://praxis.de/?utm_source=google&utm_medium=organic&utm_campaign=business_profile","")?.source).toBe("google_profile");
  expect(classifySource("https://praxis.de/","https://www.google.de/search?q=private")?.source).toBe("google_organic");
  expect(classifySource("https://praxis.de/","https://praxis.de/kontakt")).toBeNull();
  expect(classifySource("https://praxis.de/","")).toBeNull();
  expect(classifySource("https://praxis.de/","https://google.de.evil.test/")?.source).toBe("other_referral");
 });
 it("does not retain arbitrary campaign strings", () => {
  expect(classifySource("https://praxis.de/?gclid=x&campaign_id=patient@example.com","")?.campaign).toBe("");
 });
 it("keeps first and last known source without replacing them on direct/internal navigation", () => {
  history.replaceState({}, "", "/?gclid=test"); const first=getAttribution();
  history.replaceState({}, "", "/kontakt"); expect(getAttribution()?.last).toEqual(first?.last);
  history.replaceState({}, "", "/?utm_source=google&utm_campaign=business_profile");
  const mixed=getAttribution(); expect(mixed?.first.source).toBe("google_ads"); expect(mixed?.last.source).toBe("google_profile");
  expect(localStorage.getItem(ATTRIBUTION_KEY)).not.toContain("gclid");
 });
 it("clears on denial and does not store with statistics-only consent", () => {
  history.replaceState({}, "", "/?gclid=test"); getAttribution();
  consent="denied"; expect(getAttribution()).toBeNull(); expect(localStorage.getItem(ATTRIBUTION_KEY)).toBeNull();
  consent="analytics"; expect(getAttribution()).toBeNull();
 });
 it("expires old records and tolerates malformed storage", () => {
  localStorage.setItem(ATTRIBUTION_KEY,"broken"); expect(getAttribution()).toBeNull();
  expect(validAttribution({version:1,expires:Date.now()-1})).toBe(false);
 });
 it("does not collect on private booking-management pages", () => {
  history.replaceState({}, "", "/termin/verwaltung/?gclid=test"); expect(getAttribution()).toBeNull();
 });
 it("never lets unavailable storage block the form", () => {
  const spy=vi.spyOn(Storage.prototype,"getItem").mockImplementation(()=>{throw Error("blocked");});
  expect(getAttribution()).toBeNull(); spy.mockRestore();
 });
});

