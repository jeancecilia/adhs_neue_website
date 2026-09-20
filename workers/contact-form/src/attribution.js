// Internal-only metadata. Never forward this object to GA4 or Google Ads.
export const sourceLabels = Object.freeze({
  unknown: "Unbekannt / nicht zuordenbar",
  google_ads: "Google Ads (bezahlter Klick)",
  google_organic: "Google-Suche (organisch)",
  google_profile: "Google-Unternehmensprofil (Maps oder Suche)",
  other_referral: "Andere Website",
  recommendation: "Persönliche Empfehlung",
  other: "Anderer Weg",
});
const source = value => typeof value === "string" && Object.hasOwn(sourceLabels, value) ? value : "unknown";
export function normalizeAttribution(body = {}) {
  const a = body.attribution;
  const touch = t => ({
    source: source(t?.source),
    campaign: t?.source === "google_ads" && typeof t?.campaign === "string" && /^\d{6,20}$/.test(t.campaign) ? t.campaign : "",
  });
  const valid = a?.version === 1 && Number.isFinite(a.expires) && a.expires > Date.now() &&
    a.expires <= Date.now() + 30 * 86400000 &&
    [a.first, a.last].every(t => Number.isFinite(t?.at) && t.at <= Date.now() && t.at >= Date.now() - 30 * 86400000);
  return {
    first: touch(valid ? a.first : null),
    last: touch(valid ? a.last : null),
    reported: source(body.reportedSource),
  };
}
export function attributionText(a, reference) {
  const names = { "24146795187": "ADHS / Therapie", "24153940298": "ADHS-Diagnostik", "24170826692": "Hypnose", "24188353832": "Psychotherapie" };
  const describe = t => sourceLabels[source(t?.source)] + (t?.campaign ? " / Kampagnen-ID " + t.campaign + (names[t.campaign] ? " (" + names[t.campaign] + ")" : "") : "");
  return [
    "INTERNE HERKUNFTSZUORDNUNG (kein Zahlungsnachweis)",
    "Vorgangsnummer: " + reference,
    "Erste bekannte Quelle: " + describe(a.first),
    "Letzte bekannte nicht-direkte Quelle: " + describe(a.last),
    "Freiwillige Selbstauskunft (getrennt): " + sourceLabels[source(a.reported)],
    "Browserhinweise sind keine sichere Personenidentifikation. Ohne Nachweis: unbekannt.",
    "Buchung / Teilnahme / Zahlung bitte intern unter dieser Vorgangsnummer abgleichen; nicht an Google hochladen.",
  ].join("\n");
}
