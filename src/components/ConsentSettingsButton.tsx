"use client";

import { OPEN_CONSENT_SETTINGS_EVENT } from "@/lib/analytics";

export default function ConsentSettingsButton() {
  return (
    <button
      className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT))}
      type="button"
    >
      Statistik-Einstellungen
    </button>
  );
}
