// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  GA_MEASUREMENT_ID,
  getContactLinkAnalyticsEvent,
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

describe("granular Google consent", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.head.innerHTML = "";
    document.cookie = "_ga=; Max-Age=0; Path=/";
    document.cookie = "_gcl_au=; Max-Age=0; Path=/";
    delete window.dataLayer;
    delete window.gtag;
    delete (window as unknown as Record<string, unknown>)[
      `ga-disable-${GA_MEASUREMENT_ID}`
    ];
  });

  it("denies both optional purposes by default", () => {
    setDefaultConsent();

    expect(dataLayerCommands()[0]).toEqual([
      "consent",
      "default",
      expect.objectContaining({
        analytics_storage: "denied",
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

    writeAnalyticsConsent("marketing");
    expect(readAnalyticsConsent()).toBe("marketing");

    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, "invalid");
    expect(readAnalyticsConsent()).toBeNull();
  });

  it("does not emit events before an explicit choice", () => {
    setDefaultConsent();

    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      false,
    );
    expect(document.querySelector("script[data-ga-id]")).toBeNull();
    expect(dataLayerCommands()).not.toContainEqual(
      expect.arrayContaining(["event", "generate_lead"]),
    );
  });

  it("does not emit events after an explicit opt-out", () => {
    setDefaultConsent();
    writeAnalyticsConsent("denied");
    updateAnalyticsConsent("denied");

    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      false,
    );
  });

  it("loads GA once and sends events explicitly to the Munich GA4 property", () => {
    setDefaultConsent();
    writeAnalyticsConsent("granted");
    updateAnalyticsConsent("granted");

    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      true,
    );
    loadGoogleAnalytics();

    expect(document.querySelectorAll("script[data-ga-id]")).toHaveLength(1);
    expect(document.querySelector("script[data-ga-id]")?.getAttribute("src")).toBe(
      `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    );
    expect(dataLayerCommands()).toContainEqual([
      "config",
      GA_MEASUREMENT_ID,
      expect.objectContaining({
        allow_ad_personalization_signals: true,
        allow_google_signals: true,
        send_page_view: false,
      }),
    ]);
    expect(dataLayerCommands()).toContainEqual([
      "event",
      "generate_lead",
      { method: "contact_form", send_to: GA_MEASUREMENT_ID },
    ]);
    expect(trackAnalyticsEvent("whatsapp_click", { method: "whatsapp" })).toBe(
      true,
    );
    expect(trackAnalyticsEvent("email_click", { method: "email" })).toBe(true);
    expect(dataLayerCommands()).toContainEqual([
      "event",
      "whatsapp_click",
      { method: "whatsapp", send_to: GA_MEASUREMENT_ID },
    ]);
    expect(dataLayerCommands()).toContainEqual([
      "event",
      "email_click",
      { method: "email", send_to: GA_MEASUREMENT_ID },
    ]);
  });

  it("restores saved consent and queues GA before an event without manager timing", () => {
    setDefaultConsent();
    writeAnalyticsConsent("granted");

    expect(trackAnalyticsEvent("generate_lead", { method: "contact_form" })).toBe(
      true,
    );

    const commands = dataLayerCommands();
    const consentUpdateIndex = commands.findIndex(
      (command) => command[0] === "consent" && command[1] === "update",
    );
    const configIndex = commands.findIndex(
      (command) => command[0] === "config" && command[1] === GA_MEASUREMENT_ID,
    );
    const eventIndex = commands.findIndex(
      (command) => command[0] === "event" && command[1] === "generate_lead",
    );

    expect(consentUpdateIndex).toBeGreaterThan(-1);
    expect(configIndex).toBeGreaterThan(consentUpdateIndex);
    expect(eventIndex).toBeGreaterThan(configIndex);
    expect(document.querySelectorAll("script[data-ga-id]")).toHaveLength(1);
    expect(
      (window as unknown as Record<string, unknown>)[
        `ga-disable-${GA_MEASUREMENT_ID}`
      ],
    ).toBe(false);
  });

  it("classifies only WhatsApp and email contact links", () => {
    expect(
      getContactLinkAnalyticsEvent("https://wa.me/491743243387"),
    ).toEqual({ eventName: "whatsapp_click", method: "whatsapp" });
    expect(
      getContactLinkAnalyticsEvent(
        "mailto:kontakt@neurofeedback-praxis-muenchen.de",
      ),
    ).toEqual({ eventName: "email_click", method: "email" });
    expect(getContactLinkAnalyticsEvent("/termin")).toBeNull();
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
        ad_personalization: "granted",
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

  it("allows marketing without granting statistics storage", () => {
    setDefaultConsent();
    writeAnalyticsConsent("marketing");
    updateAnalyticsConsent("marketing");

    expect(trackAnalyticsEvent("page_view")).toBe(true);
    expect(dataLayerCommands()).toContainEqual([
      "consent",
      "update",
      {
        analytics_storage: "denied",
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      },
    ]);
    expect(
      (window as unknown as Record<string, unknown>)[
        `ga-disable-${GA_MEASUREMENT_ID}`
      ],
    ).toBe(false);
  });

  it("disables measurement and removes reachable GA cookies after revocation", () => {
    document.cookie = "_ga=test-value; Path=/";
    document.cookie = "_gcl_au=test-value; Path=/";
    writeAnalyticsConsent("denied");
    updateAnalyticsConsent("denied");
    loadGoogleAnalytics();

    expect(document.cookie).not.toContain("_ga=");
    expect(document.cookie).not.toContain("_gcl_au=");
    expect(
      (window as unknown as Record<string, unknown>)[
        `ga-disable-${GA_MEASUREMENT_ID}`
      ],
    ).toBe(true);
  });
});
