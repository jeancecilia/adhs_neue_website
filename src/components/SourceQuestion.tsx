"use client";
export default function SourceQuestion() {
  return <label className="block text-sm font-medium text-[#173838]">
    Wie haben Sie uns gefunden? (freiwillig)
    <select name="reportedSource" defaultValue="unknown" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-base">
      <option value="unknown">Keine Angabe / weiß ich nicht</option>
      <option value="google_organic">Google-Suche</option>
      <option value="google_ads">Google-Anzeige</option>
      <option value="google_profile">Google Maps / Unternehmensprofil</option>
      <option value="recommendation">Persönliche Empfehlung</option>
      <option value="other">Anderer Weg</option>
    </select>
  </label>;
}

