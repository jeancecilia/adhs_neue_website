"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  type AnalyticsConsent,
  loadGoogleAnalytics,
  OPEN_CONSENT_SETTINGS_EVENT,
  readAnalyticsConsent,
  setDefaultConsent,
  trackAnalyticsEvent,
  updateAnalyticsConsent,
  writeAnalyticsConsent,
} from "@/lib/analytics";

export default function AnalyticsConsentManager() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    setDefaultConsent();

    const savedConsent = readAnalyticsConsent();
    if (savedConsent) {
      updateAnalyticsConsent(savedConsent);
      setConsent(savedConsent);
    } else {
      setConsent("granted");
      setIsOpen(true);
    }
    loadGoogleAnalytics();

    const openSettings = () => setIsOpen(true);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
    return () =>
      window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;

    loadGoogleAnalytics();
    const pagePath = `${pathname}${window.location.search}`;
    if (lastTrackedPath.current === pagePath) return;

    lastTrackedPath.current = pagePath;
    trackAnalyticsEvent("page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [consent, pathname]);

  useEffect(() => {
    const trackWhatsAppExit = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="https://wa.me/"]');
      if (!link) return;

      trackAnalyticsEvent("whatsapp_click", { method: "whatsapp" });
    };

    document.addEventListener("click", trackWhatsAppExit);
    return () => document.removeEventListener("click", trackWhatsAppExit);
  }, []);

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    writeAnalyticsConsent(nextConsent);
    updateAnalyticsConsent(nextConsent);
    if (nextConsent === "granted") loadGoogleAnalytics();
    setConsent(nextConsent);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <section
      aria-label="Datenschutzeinstellungen"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-[rgba(47,79,79,0.18)] bg-white p-5 shadow-[0_24px_80px_rgba(23,56,56,0.24)] sm:bottom-5 sm:p-6"
      role="dialog"
    >
      <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <h2 className="text-[20px] font-bold text-[#173838]">
            Analyse und Werbung
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
            Google Analytics ist für die Reichweitenmessung standardmäßig
            aktiviert. Google-Ads-Messung und Personalisierung aktivieren wir
            mit „Alle akzeptieren“. Formularinhalte und ausgewählte
            Gesundheitsthemen werden nicht an Google gesendet. Mit „Nur
            notwendige“ deaktivieren Sie Analyse- und Werbetracking.
          </p>
          <Link
            className="mt-2 inline-flex min-h-[40px] items-center text-[13px] font-semibold text-[#173838] underline decoration-[#c99a1d] underline-offset-2"
            href="/datenschutz"
          >
            Details in der Datenschutzerklärung
          </Link>
        </div>
        <div className="flex flex-col gap-2 sm:min-w-[190px]">
          <button
            className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#173838] px-5 py-3 text-[14px] font-bold text-white"
            onClick={() => chooseConsent("granted")}
            type="button"
          >
            Alle akzeptieren
          </button>
          <button
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-[14px] font-bold text-[#173838]"
            onClick={() => chooseConsent("denied")}
            type="button"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </section>
  );
}
