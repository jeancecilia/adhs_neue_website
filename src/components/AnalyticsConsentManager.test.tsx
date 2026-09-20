// @vitest-environment jsdom
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AnalyticsConsentManager from "./AnalyticsConsentManager";

const state = vi.hoisted(() => ({
  path: "/termin", consent: "marketing" as string | null,
  track: vi.fn(), load: vi.fn(),
}));
vi.mock("next/navigation", () => ({ usePathname: () => state.path }));
vi.mock("@/lib/analytics", () => ({
  hasAnalyticsConsent: (value: string) => ["analytics", "granted"].includes(value),
  hasMarketingConsent: (value: string) => ["marketing", "granted"].includes(value),
  readAnalyticsConsent: () => state.consent,
  writeAnalyticsConsent: (value: string) => { state.consent = value; },
  updateAnalyticsConsent: vi.fn(), setDefaultConsent: vi.fn(),
  loadGoogleAnalytics: state.load, trackAnalyticsEvent: state.track,
  getContactLinkAnalyticsEvent: () => null,
  OPEN_CONSENT_SETTINGS_EVENT: "analytics-consent:open",
}));

let host: HTMLDivElement;
let root: Root;
async function render() { await act(async () => { root.render(<AnalyticsConsentManager />); }); }
async function choose(label: string) {
  await act(async () => { window.dispatchEvent(new Event("analytics-consent:open")); });
  const button = Array.from(host.querySelectorAll("button")).find(b => b.textContent?.trim() === label);
  expect(button).toBeDefined();
  await act(async () => { button!.click(); });
}
beforeEach(() => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  state.path = "/termin"; state.consent = "marketing";
  state.track.mockReset().mockImplementation(() => ["analytics", "granted"].includes(state.consent ?? ""));
  state.load.mockClear();
  host = document.createElement("div"); document.body.appendChild(host); root = createRoot(host);
});
afterEach(async () => { await act(async () => root.unmount()); host.remove(); });

describe("page views across consent and SPA navigation", () => {
  it("does not load or attempt analytics for marketing-only consent", async () => {
    await render(); expect(state.load).not.toHaveBeenCalled(); expect(state.track).not.toHaveBeenCalled();
  });
  it("tracks the current page once when marketing-only is upgraded", async () => {
    await render(); state.track.mockClear(); await choose("Alle akzeptieren");
    expect(state.track).toHaveBeenCalledTimes(1);
    expect(state.track).toHaveBeenCalledWith("page_view", expect.objectContaining({ page_path: "/termin" }));
    await choose("Alle akzeptieren"); expect(state.track).toHaveBeenCalledTimes(1);
  });
  it("tracks analytics-only consent and each SPA route once", async () => {
    state.consent = "analytics"; await render(); expect(state.track).toHaveBeenCalledTimes(1);
    state.path = "/adhs-test-muenchen"; await render(); expect(state.track).toHaveBeenCalledTimes(2);
    await render(); await choose("Alle akzeptieren"); expect(state.track).toHaveBeenCalledTimes(2);
  });
  it("does not mark an unaccepted event as successfully tracked", async () => {
    state.consent = "analytics"; state.track.mockReturnValueOnce(false); await render();
    await choose("Alle akzeptieren"); expect(state.track).toHaveBeenCalledTimes(2);
  });
  it("does not track rejected consent, then tracks when accepted", async () => {
    state.consent = "denied"; await render(); expect(state.track).not.toHaveBeenCalled();
    await choose("Alle akzeptieren"); expect(state.track).toHaveBeenCalledTimes(1);
  });
});
