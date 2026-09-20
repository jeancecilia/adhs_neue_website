import { readAnalyticsConsent } from "./analytics";

export const ATTRIBUTION_KEY = "praxis.source.v1";
export const SOURCE_LABELS = {
  unknown: "Unbekannt / nicht zuordenbar",
  google_ads: "Google Ads (bezahlter Klick)",
  google_organic: "Google-Suche (organisch)",
  google_profile: "Google-Unternehmensprofil (Maps oder Suche)",
  other_referral: "Andere Website",
  recommendation: "Persönliche Empfehlung",
  other: "Anderer Weg",
} as const;
export type Source = keyof typeof SOURCE_LABELS;
type Touch = { source: Source; campaign: string; at: number };
export type Attribution = { version: 1; first: Touch; last: Touch; expires: number };
const TTL = 30 * 86400000;
const known = (s: unknown): s is Source => typeof s === "string" && Object.hasOwn(SOURCE_LABELS, s);

// Only classifications are retained: never full URLs, searches, click IDs or contact data.
export function classifySource(href: string, referrer: string): Omit<Touch, "at"> | null {
  try {
    const url = new URL(href), q = url.searchParams;
    const source = (q.get("utm_source") || "").toLowerCase();
    const medium = (q.get("utm_medium") || "").toLowerCase();
    const rawCampaign = q.get("campaign_id") || "";
    const campaign = /^\d{6,20}$/.test(rawCampaign) ? rawCampaign : "";
    if (["gclid", "gbraid", "wbraid"].some(k => !!q.get(k)) ||
        (source === "google" && ["cpc", "ppc", "paidsearch"].includes(medium)))
      return { source: "google_ads", campaign };
    if (source === "google" && q.get("utm_campaign") === "business_profile")
      return { source: "google_profile", campaign: "" };
    if (source === "google" && medium === "organic")
      return { source: "google_organic", campaign: "" };
    if (!referrer) return null;
    const from = new URL(referrer);
    if (from.hostname.replace(/^www\./, "") === url.hostname.replace(/^www\./, "")) return null;
    if (/^(www\.)?google\.(com|de|at|ch|co\.uk)$/.test(from.hostname))
      return { source: "google_organic", campaign: "" };
    return { source: "other_referral", campaign: "" };
  } catch { return null; }
}
export function validAttribution(value: unknown, now = Date.now()): value is Attribution {
  if (!value || typeof value !== "object") return false;
  const a = value as Attribution;
  return a.version === 1 && Number.isFinite(a.expires) && a.expires > now && a.expires <= now + TTL &&
    [a.first, a.last].every(t => t && known(t.source) && typeof t.campaign === "string" &&
      (t.campaign === "" || /^\d{6,20}$/.test(t.campaign)) && Number.isFinite(t.at) && t.at <= now && t.at >= now - TTL);
}
let seen = "";
export function syncAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  // This measurement is optional. Never write persistent attribution before consent.
  try {
    if (readAnalyticsConsent() !== "granted") {
      window.localStorage.removeItem(ATTRIBUTION_KEY);
      seen = "";
      return null;
    }
    const now = Date.now();
    const raw = window.localStorage.getItem(ATTRIBUTION_KEY);
    let a: Attribution | null = null;
    try { const saved: unknown = JSON.parse(raw || "null"); if (validAttribution(saved, now)) a = saved; } catch {}
    if (!a && raw) window.localStorage.removeItem(ATTRIBUTION_KEY);
    // Do not classify private appointment-management pages.
    if (window.location.pathname.startsWith("/terminverwaltung") ||
        window.location.pathname.startsWith("/termin/verwaltung")) return a;
    const signature = window.location.href;
    const current = classifySource(signature, seen ? "" : document.referrer);
    if (current && signature !== seen) {
      const touch = { ...current, at: now };
      a = { version: 1, first: a?.first || touch, last: touch, expires: a?.expires || now + TTL };
      window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(a));
    }
    seen = signature;
    return a;
  } catch { return null; } // Blocked storage must never break contact forms.
}
export function getAttribution() { return syncAttribution(); }
