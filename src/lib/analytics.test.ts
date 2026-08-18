// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  GA_MEASUREMENT_ID,
  loadGoogleAnalytics,
  readAnalyticsConsent,
  setDefaultConsent,
  trackAnalyticsEvent,
  updateAnalyticsConsent,
  writeAnalyticsConsent,
} from "./analytics";

function dataLayerCommands(): unknown[][] {
  return (window.dataLayer ?? []).map((command) =>
    Array.from(command as ArrayLike<unknown>),
  );
}

describe("privacy-first Google Analytics", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.head.innerHTML = "";
    document.cookie = "_ga=; Max-Age=0; Path=/";
    delete window.dataLayer;
    delete window.gtag;
    delete (window as unknown as Record<string, unknown>)[
      `ga-disable-${GA_MEASUREMENT_ID}`
    ];
  });

  it("enables analytics while denying advertising storage by default", () => {
    setDefaultConsent();

    expect(dataLayerCommands()[0]).toEqual([
      "consent",
      "default",
      expect.objectContaining({
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        wait_for_update: 500,
      }),
    ]);
  });

  it("queues commands in the canonical gtag arguments format", () => {
    setDefaultConsent();

    const firstCommand = window.dataLayer?.[0];
    expect(Array.isArray(firstCommand)).toBe(false);
    expect(Object.prototype.toString.call(firstCommand)).toBe(
      "[object Arguments]",
    );
  });

  it("persists only an explicit valid consent choice", () => {
    expect(readAnalyticsConsent()).toBeNull();

    writeAnalyticsConsent("granted");
    expect(readAnalyticsConsent()).toBe("granted");

    writeAnalyticsConsent("analytics");
    expect(readAnalyticsConsent()).toBe("analytics");

    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, "invalid");
    expect(readAnalyticsConsent()).toBeNull();
  });

  it("emits non-sensitive lead events when no opt-out is stored", () => {
    setDefaultConsent();

    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      true,
    );
    expect(document.querySelector("script[data-ga-id]")).toBeNull();
    expect(dataLayerCommands()).toContainEqual([
      "event",
      "generate_lead",
      { method: "contact_form" },
    ]);
  });

  it("does not emit events after an explicit opt-out", () => {
    setDefaultConsent();
    writeAnalyticsConsent("denied");
    updateAnalyticsConsent("denied");

    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      false,
    );
  });

  it("loads GA once and emits non-sensitive events after analytics consent", () => {
    setDefaultConsent();
    writeAnalyticsConsent("granted");
    updateAnalyticsConsent("granted");
    loadGoogleAnalytics();
    loadGoogleAnalytics();

    expect(document.querySelectorAll("script[data-ga-id]")).toHaveLength(1);
    expect(document.querySelector("script[data-ga-id]")?.getAttribute("src")).toBe(
      `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    );
    expect(dataLayerCommands()).toContainEqual([
      "config",
      GA_MEASUREMENT_ID,
      expect.objectContaining({
        allow_ad_personalization_signals: false,
        allow_google_signals: false,
        send_page_view: false,
      }),
    ]);
    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      true,
    );
    expect(dataLayerCommands()).toContainEqual([
      "event",
      "generate_lead",
      { method: "contact_form" },
    ]);
  });

  it("grants advertising consent signals after full acceptance", () => {
    setDefaultConsent();
    updateAnalyticsConsent("granted");

    expect(dataLayerCommands()).toContainEqual([
      "consent",
      "update",
      {
        analytics_storage: "granted",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "denied",
      },
    ]);
  });

  it("keeps analytics active without granting advertising measurement", () => {
    setDefaultConsent();
    writeAnalyticsConsent("analytics");
    updateAnalyticsConsent("analytics");

    expect(trackAnalyticsEvent("page_view")).toBe(true);
    expect(dataLayerCommands()).toContainEqual([
      "consent",
      "update",
      {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      },
    ]);
  });

  it("disables measurement and removes reachable GA cookies after revocation", () => {
    document.cookie = "_ga=test-value; Path=/";
    writeAnalyticsConsent("denied");
    updateAnalyticsConsent("denied");
    loadGoogleAnalytics();

    expect(document.cookie).not.toContain("_ga=");
    expect(
      (window as unknown as Record<string, unknown>)[
        `ga-disable-${GA_MEASUREMENT_ID}`
      ],
    ).toBe(true);
  });
});
