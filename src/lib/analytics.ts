export const GA_MEASUREMENT_ID = "G-0LZ943NZZR";
export const ANALYTICS_CONSENT_STORAGE_KEY =
  "adhs-praxis.analytics-consent.v1";
export const ANALYTICS_CONSENT_VERSION = 2;
export const OPEN_CONSENT_SETTINGS_EVENT = "analytics-consent:open";
const ANALYTICS_CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type AnalyticsConsent =
  | "analytics"
  | "marketing"
  | "granted"
  | "denied";

type Gtag = (...args: unknown[]) => void;

type StoredAnalyticsConsent = {
  version: typeof ANALYTICS_CONSENT_VERSION;
  choice: AnalyticsConsent;
  decidedAt: number;
};

export type ContactLinkAnalyticsEvent = {
  eventName: "whatsapp_click" | "email_click" | "phone_click";
  method: "whatsapp" | "email" | "phone";
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function analyticsDisableKey(): string {
  return `ga-disable-${GA_MEASUREMENT_ID}`;
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<StoredAnalyticsConsent>;
    const validChoice =
      parsed.choice === "analytics" ||
      parsed.choice === "marketing" ||
      parsed.choice === "granted" ||
      parsed.choice === "denied";
    const validDate =
      typeof parsed.decidedAt === "number" &&
      Number.isFinite(parsed.decidedAt) &&
      parsed.decidedAt <= Date.now() &&
      parsed.decidedAt >= Date.now() - ANALYTICS_CONSENT_MAX_AGE_MS;
    if (
      parsed.version !== ANALYTICS_CONSENT_VERSION ||
      !validChoice ||
      !validDate
    ) {
      window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed.choice as AnalyticsConsent;
  } catch {
    try {
      window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
    } catch {
      // Storage can be unavailable in hardened browser configurations.
    }
    return null;
  }
}

export function writeAnalyticsConsent(consent: AnalyticsConsent): void {
  if (typeof window === "undefined") return;

  try {
    const record: StoredAnalyticsConsent = {
      version: ANALYTICS_CONSENT_VERSION,
      choice: consent,
      decidedAt: Date.now(),
    };
    window.localStorage.setItem(
      ANALYTICS_CONSENT_STORAGE_KEY,
      JSON.stringify(record),
    );
  } catch {
    // Consent still applies for the current page when storage is unavailable.
  }
}

export function ensureGtag(): Gtag | null {
  if (typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    // Google's canonical gtag snippet pushes the function's `arguments`
    // object. gtag.js does not reliably process plain nested arrays here.
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
  }

  return window.gtag;
}

export function setDefaultConsent(): void {
  const gtag = ensureGtag();
  if (!gtag) return;

  setAnalyticsDisabled(true);
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500,
  });
  gtag("set", "ads_data_redaction", true);
}

function setAnalyticsDisabled(disabled: boolean): void {
  if (typeof window === "undefined") return;

  const mutableWindow = window as unknown as Record<string, unknown>;
  mutableWindow[analyticsDisableKey()] = disabled;
}

export function updateAnalyticsConsent(consent: AnalyticsConsent): void {
  const gtag = ensureGtag();
  if (!gtag) return;

  const analyticsStorage = hasAnalyticsConsent(consent)
    ? "granted"
    : "denied";
  const advertisingStorage = hasMarketingConsent(consent)
    ? "granted"
    : "denied";

  setAnalyticsDisabled(!hasAnalyticsConsent(consent));
  gtag("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: advertisingStorage,
    ad_user_data: advertisingStorage,
    ad_personalization: advertisingStorage,
  });

  if (!hasAnalyticsConsent(consent)) clearGoogleCookies("_ga");
  if (!hasMarketingConsent(consent)) clearGoogleCookies("_gcl");
}

export function hasAnalyticsConsent(consent: AnalyticsConsent): boolean {
  return consent === "analytics" || consent === "granted";
}

export function hasMarketingConsent(consent: AnalyticsConsent): boolean {
  return consent === "marketing" || consent === "granted";
}

export function loadGoogleAnalytics(): void {
  if (typeof document === "undefined" || typeof window === "undefined") return;
  const consent = readAnalyticsConsent();
  if (!consent || !hasAnalyticsConsent(consent)) return;
  if (!ensureGtag()) return;
  if (document.querySelector("script[data-praxis-gtm]")) return;
  // Consent is queued first. GTM is the sole tag loader; no parallel gtag.js.
  window.dataLayer?.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-M5SJ3HGB";
  script.dataset.praxisGtm = "GTM-M5SJ3HGB";
  document.head.appendChild(script);
}

function pushGtmEvent(
  channel: "analytics" | "contact",
  eventName: string,
  parameters: Record<string, string | number | boolean>,
): boolean {
  if (!ensureGtag()) return false;
  loadGoogleAnalytics();
  // Only technical fields; never forward contact details, answers or messages.
  window.dataLayer?.push({
    event: channel === "contact" ? "praxis_contact" : "praxis_analytics",
    praxis_event_name: eventName,
    praxis_method: typeof parameters.method === "string" ? parameters.method : undefined,
    praxis_page_location: window.location.origin + window.location.pathname,
    praxis_page_path: window.location.pathname,
    praxis_page_title: document.title,
  });
  return true;
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
): boolean {
  const consent = readAnalyticsConsent();
  if (!consent || !hasAnalyticsConsent(consent)) return false;

  // Do not depend on the consent manager's React effect having finished first.
  // A successful form response can arrive while the analytics script is still
  // loading, so apply the stored choice and queue the destination explicitly.
  updateAnalyticsConsent(consent);
  loadGoogleAnalytics();

  const gtag = ensureGtag();
  if (!gtag) return false;

  return pushGtmEvent("analytics", eventName, parameters);
}

export function getContactLinkAnalyticsEvent(
  href: string,
): ContactLinkAnalyticsEvent | null {
  const normalizedHref = href.trim().toLowerCase();

  if (normalizedHref.startsWith("https://wa.me/")) {
    return { eventName: "whatsapp_click", method: "whatsapp" };
  }

  if (normalizedHref.startsWith("tel:")) {
    return { eventName: "phone_click", method: "phone" };
  }

  if (normalizedHref.startsWith("mailto:")) {
    return { eventName: "email_click", method: "email" };
  }

  return null;
}

function clearGoogleCookies(prefix: "_ga" | "_gcl"): void {
  if (typeof document === "undefined") return;

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith(prefix)));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.neurofeedback-praxis-muenchen.de; SameSite=Lax`;
  }
}

export function clearGoogleAnalyticsCookies(): void {
  clearGoogleCookies("_ga");
  clearGoogleCookies("_gcl");
}
