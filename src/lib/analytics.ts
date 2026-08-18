export const GA_MEASUREMENT_ID = "G-0LZ943NZZR";
export const ANALYTICS_CONSENT_STORAGE_KEY =
  "adhs-praxis.analytics-consent.v1";
export const OPEN_CONSENT_SETTINGS_EVENT = "analytics-consent:open";

export type AnalyticsConsent =
  | "analytics"
  | "marketing"
  | "granted"
  | "denied";

type Gtag = (...args: unknown[]) => void;

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
    return stored === "analytics" ||
      stored === "marketing" ||
      stored === "granted" ||
      stored === "denied"
      ? stored
      : null;
  } catch {
    return null;
  }
}

export function writeAnalyticsConsent(consent: AnalyticsConsent): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
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

  setAnalyticsDisabled(consent === "denied");
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
  if (document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) return;

  const gtag = ensureGtag();
  if (!gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.dataset.gaId = GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    allow_ad_personalization_signals: true,
    allow_google_signals: true,
    anonymize_ip: true,
    send_page_view: false,
  });
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
): boolean {
  const consent = readAnalyticsConsent();
  if (!consent || consent === "denied") return false;

  const gtag = ensureGtag();
  if (!gtag) return false;

  gtag("event", eventName, parameters);
  return true;
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
