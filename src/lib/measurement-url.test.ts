// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";
import { measurementPageLocation, measurementReferrer } from "./measurement-url";
import { loadGoogleAnalytics, trackAnalyticsEvent, updateAnalyticsConsent, writeAnalyticsConsent } from "./analytics";

const base = "https://example.test/kontakt/";
const click = "QA_NOT_A_REAL_AD_CLICK_20260920";
const query = "?utm_source=google&utm_medium=cpc&campaign_id=24170826692&gclid=" + click;

describe("privacy-filtered measurement URLs", () => {
  it("keeps Google Ads click identity and configured numeric campaign ID", () => {
    const url = new URL(measurementPageLocation(base + query, true)!);
    expect(url.searchParams.get("gclid")).toBe(click);
    expect(url.searchParams.get("utm_source")).toBe("google");
    expect(url.searchParams.get("utm_medium")).toBe("cpc");
    expect(url.searchParams.get("campaign_id")).toBe("24170826692");
  });
  it.each(["gbraid", "wbraid"])("keeps %s without changing case", key => {
    expect(new URL(measurementPageLocation(base + "?" + key + "=" + click, true)!).searchParams.get(key)).toBe(click);
  });
  it("allows only numeric platform campaign identifiers", () => {
    const url = new URL(measurementPageLocation(base + "?utm_campaign=24170826692&utm_id=24170826692&adgroup_id=12345&creative_id=67890&gad_source=1&gad_campaignid=24170826692", true)!);
    expect(url.searchParams.size).toBe(6);
  });
  it("retains the supported Maps tagging without advertising consent", () => {
    const href = base + "?utm_source=google&utm_medium=organic&utm_campaign=business_profile";
    expect(measurementPageLocation(href, false)).toBe(href);
  });
  it("removes paid campaign parameters without advertising consent", () => {
    expect(measurementPageLocation(base + query + "&gad_source=1&gad_campaignid=24170826692", false)).toBe(base);
  });
  it("removes campaign IDs without advertising consent even without a paid medium", () => {
    expect(measurementPageLocation(base + "?campaign_id=24170826692&utm_id=123&gbraid=" + click, false)).toBe(base);
  });
  it.each(["name", "email", "phone", "message", "health", "anliegen", "token", "booking_token", "utm_term", "utm_content"])("does not forward %s", key => {
    const href = base + query + "&" + key + "=PRIVATE_TEST_VALUE#PRIVATE_FRAGMENT";
    const result = measurementPageLocation(href, true)!;
    expect(result).not.toContain("PRIVATE");
    expect(new URL(result).searchParams.has(key)).toBe(false);
  });
  it("rejects arbitrary free-text values in otherwise supported keys", () => {
    const href = base + "?utm_source=PRIVATE_NAME&utm_medium=PRIVATE_TOPIC&utm_campaign=PRIVATE_TOPIC&campaign_id=PRIVATE_VALUE&gad_source=hello&gclid=user%40example.test";
    expect(measurementPageLocation(href, true)).toBe(base);
  });
  it("rejects duplicate query keys instead of guessing the intended value", () => {
    expect(measurementPageLocation(base + "?gclid=" + click + "&gclid=PRIVATE&utm_source=google&utm_source=PRIVATE", true)).toBe(base);
  });
  it("rejects oversized click IDs", () => {
    expect(measurementPageLocation(base + "?gclid=" + "A".repeat(513), true)).toBe(base);
  });
  it("removes URL credentials and fragments", () => {
    expect(measurementPageLocation("https://PRIVATE:SECRET@example.test/kontakt/#PRIVATE", true)).toBe(base);
  });
  it.each(["/terminverwaltung/", "/termin/verwaltung/", "/terminverwaltung/PRIVATE_TOKEN", "/%74erminverwaltung/"])("does not measure private route %s", path => {
    expect(measurementPageLocation("https://example.test" + path + query, true)).toBeNull();
  });
  it.each(["not a url", "javascript:alert(1)", "data:text/plain,secret"])("fails closed for %s", href => {
    expect(measurementPageLocation(href, true)).toBeNull();
  });
  it("strips referring searches and private tokens", () => {
    expect(measurementReferrer("https://www.google.de/search?q=PRIVATE#PRIVATE")).toBe("https://www.google.de/search");
    expect(measurementReferrer("https://example.test/terminverwaltung/PRIVATE?token=PRIVATE")).toBe("https://example.test/");
    expect(measurementReferrer("")).toBe("");
  });
});

describe("measurement URL integration", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
    localStorage.clear();
    document.head.innerHTML = "";
    delete window.dataLayer;
    delete window.gtag;
  });
  const sets = () => (window.dataLayer || [])
    .filter(item => Object.prototype.toString.call(item) === "[object Arguments]")
    .map(item => Array.from(item as ArrayLike<unknown>))
    .filter(item => item[0] === "set")
    .map(item => item[1] as {page_location?: string})
    .filter(item => typeof item?.page_location === "string");
  it("queues the same safe location before GTM and in a manual page_view", () => {
    window.history.replaceState({}, "", "/kontakt/" + query + "&email=PRIVATE&token=PRIVATE");
    writeAnalyticsConsent("granted");
    trackAnalyticsEvent("page_view", { email: "PRIVATE", page_location: "PRIVATE" });
    const events = window.dataLayer as Array<Record<string, unknown>>;
    const page = events.find(item => item.praxis_event_name === "page_view")!;
    expect(page.praxis_page_location).toContain("gclid=" + click);
    expect(JSON.stringify(events)).not.toContain("PRIVATE");
    expect(sets().at(-1)?.page_location).toBe(page.praxis_page_location);
    const baseIndex = events.findIndex(item => item.event === "gtm.js");
    expect(baseIndex).toBeGreaterThan(0);
    expect(sets().length).toBeGreaterThan(0);
    expect(events.filter(item => item.praxis_event_name === "page_view")).toHaveLength(1);
  });
  it("does not load tags or emit events before consent or after rejection", () => {
    window.history.replaceState({}, "", "/" + query);
    expect(trackAnalyticsEvent("page_view")).toBe(false);
    writeAnalyticsConsent("denied");
    updateAnalyticsConsent("denied");
    expect(trackAnalyticsEvent("page_view")).toBe(false);
    loadGoogleAnalytics();
    expect(document.querySelector("script[data-praxis-gtm]")).toBeNull();
    expect(JSON.stringify(window.dataLayer)).not.toContain(click);
  });
  it("keeps click IDs out of analytics-only measurement", () => {
    window.history.replaceState({}, "", "/" + query);
    writeAnalyticsConsent("analytics");
    updateAnalyticsConsent("analytics");
    expect(trackAnalyticsEvent("page_view")).toBe(true);
    expect(JSON.stringify(window.dataLayer)).not.toContain(click);
  });
  it("updates the global location after navigation without carrying old click IDs", () => {
    window.history.replaceState({}, "", "/" + query);
    writeAnalyticsConsent("granted");
    trackAnalyticsEvent("page_view");
    window.history.replaceState({}, "", "/kontakt/?token=PRIVATE");
    trackAnalyticsEvent("page_view");
    expect(sets().at(-1)?.page_location).toBe(window.location.origin + "/kontakt/");
    expect(document.querySelectorAll("script[data-praxis-gtm]")).toHaveLength(1);
  });
  it("replaces the advertising URL when consent is reduced", () => {
    window.history.replaceState({}, "", "/" + query);
    writeAnalyticsConsent("granted");
    loadGoogleAnalytics();
    writeAnalyticsConsent("analytics");
    updateAnalyticsConsent("analytics");
    expect(sets().at(-1)?.page_location).toBe(window.location.origin + "/");
  });
  it("does not load any Google tag on a private management page", () => {
    window.history.replaceState({}, "", "/terminverwaltung/?" + "token=PRIVATE");
    writeAnalyticsConsent("granted");
    loadGoogleAnalytics();
    expect(trackAnalyticsEvent("page_view")).toBe(false);
    expect(window.dataLayer).toBeUndefined();
  });
});
