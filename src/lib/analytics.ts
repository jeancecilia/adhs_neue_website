export const GA_MEASUREMENT_ID = "G-0LZ943NZZR";
export const ANALYTICS_CONSENT_STORAGE_KEY =
  "adhs-praxis.analytics-consent.v1";
export const OPEN_CONSENT_SETTINGS_EVENT = "analytics-consent:open";

export type AnalyticsConsent = "analytics" | "granted" | "denied";

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
  window.gtag =
    window.gtag ??
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });

  return window.gtag;
}

export function setDefaultConsent(): void {
  const gtag = ensureGtag();
  if (!gtag) return;

  setAnalyticsDisabled(false);
  gtag("consent", "default", {
    analytics_storage: "granted",
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

  const analyticsStorage = consent === "denied" ? "denied" : "granted";
  const advertisingStorage = consent === "granted" ? "granted" : "denied";

  setAnalyticsDisabled(consent === "denied");
  gtag("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: advertisingStorage,
    ad_user_data: advertisingStorage,
    // The practice concerns sensitive health services. Conversion measurement
    // is allowed after acceptance, but visitor-based ad personalization is not.
    ad_personalization: "denied",
  });

  if (consent === "denied") clearGoogleAnalyticsCookies();
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
    allow_ad_personalization_signals: false,
    allow_google_signals: false,
    anonymize_ip: true,
    send_page_view: false,
  });
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
): boolean {
  if (readAnalyticsConsent() === "denied") return false;

  const gtag = ensureGtag();
  if (!gtag) return false;

  gtag("event", eventName, parameters);
  return true;
}

export function clearGoogleAnalyticsCookies(): void {
  if (typeof document === "undefined") return;

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.neurofeedback-praxis-muenchen.de; SameSite=Lax`;
  }
}
