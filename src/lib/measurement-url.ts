/**
 * Measurement URLs are not form URLs: keep only explicitly supported technical
 * campaign values. Never pass free-text campaign names, searches or form fields.
 * This module is deliberately storage-free; consent is enforced by analytics.ts.
 */
const SOURCES = new Set(["google", "bing", "google_maps", "google_business_profile"]);
const MEDIA = new Set(["cpc", "ppc", "paidsearch", "organic", "referral"]);
const PAID_MEDIA = new Set(["cpc", "ppc", "paidsearch"]);
const CLICK_KEYS = ["gclid", "gbraid", "wbraid"] as const;
const NUMERIC_KEYS = ["campaign_id", "adgroup_id", "creative_id", "utm_id", "gad_campaignid"] as const;
const ID = /^[0-9]{1,20}$/;
const CLICK_ID = /^[A-Za-z0-9_-]{10,512}$/;

export function isPrivateMeasurementPage(pathname: string): boolean {
  try {
    return /^\/(terminverwaltung|termin\/verwaltung)(\/|$)/i.test(decodeURIComponent(pathname));
  } catch {
    return true;
  }
}

export function measurementPageLocation(href: string, advertisingConsent: boolean): string | null {
  try {
    const input = new URL(href);
    if (!["https:", "http:"].includes(input.protocol) || isPrivateMeasurementPage(input.pathname)) return null;
    // Reconstruct without credentials, fragments or arbitrary query parameters.
    const output = new URL(input.origin + input.pathname);
    const one = (key: string) => {
      const values = input.searchParams.getAll(key);
      return values.length === 1 ? values[0] : "";
    };
    const source = one("utm_source");
    const medium = one("utm_medium");
    const paidVisit = PAID_MEDIA.has(medium) || CLICK_KEYS.some(key => !!one(key));
    const mayKeepCampaign = advertisingConsent || !paidVisit;

    if (mayKeepCampaign) {
      if (SOURCES.has(source)) output.searchParams.set("utm_source", source);
      if (MEDIA.has(medium)) output.searchParams.set("utm_medium", medium);
      const campaign = one("utm_campaign");
      if (campaign === "business_profile" || (advertisingConsent && ID.test(campaign))) {
        output.searchParams.set("utm_campaign", campaign);
      }
    }
    if (advertisingConsent) {
      for (const key of CLICK_KEYS) {
        const value = one(key);
        if (CLICK_ID.test(value)) output.searchParams.set(key, value);
      }
      for (const key of NUMERIC_KEYS) {
        const value = one(key);
        if (ID.test(value)) output.searchParams.set(key, value);
      }
      const gadSource = one("gad_source");
      if (/^[0-9]{1,2}$/.test(gadSource)) output.searchParams.set("gad_source", gadSource);
    }
    return output.href;
  } catch {
    return null;
  }
}

export function measurementReferrer(referrer: string): string {
  if (!referrer) return "";
  try {
    const url = new URL(referrer);
    if (!["https:", "http:"].includes(url.protocol)) return "";
    // Referring search queries, click IDs and private management tokens are not needed.
    return url.origin + (isPrivateMeasurementPage(url.pathname) ? "/" : url.pathname);
  } catch {
    return "";
  }
}
