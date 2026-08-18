"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  type AnalyticsConsent,
  hasAnalyticsConsent,
  hasMarketingConsent,
  getContactLinkAnalyticsEvent,
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
  // View mode: 'banner' (compact floating bottom bar) or 'modal' (detailed category settings)
  const [viewMode, setViewMode] = useState<"banner" | "modal">("banner");
  const [analyticsSelected, setAnalyticsSelected] = useState(false);
  const [marketingSelected, setMarketingSelected] = useState(false);
  const [showAnalyticsDetails, setShowAnalyticsDetails] = useState(false);
  const [showMarketingDetails, setShowMarketingDetails] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    setDefaultConsent();

    const savedConsent = readAnalyticsConsent();
    if (savedConsent) {
      updateAnalyticsConsent(savedConsent);
      setConsent(savedConsent);
      setAnalyticsSelected(hasAnalyticsConsent(savedConsent));
      setMarketingSelected(hasMarketingConsent(savedConsent));
      if (savedConsent !== "denied") loadGoogleAnalytics();
    } else {
      // First visit: show floating bottom banner
      setConsent("denied");
      setAnalyticsSelected(false);
      setMarketingSelected(false);
      setViewMode("banner");
      setIsOpen(true);
    }

    // Triggered by footer button "Statistik-Einstellungen" -> opens detailed modal directly
    const openSettings = () => {
      const currentSaved = readAnalyticsConsent();
      setAnalyticsSelected(
        currentSaved ? hasAnalyticsConsent(currentSaved) : false,
      );
      setMarketingSelected(
        currentSaved ? hasMarketingConsent(currentSaved) : false,
      );
      setViewMode("modal");
      setIsOpen(true);
    };

    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
    return () =>
      window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, openSettings);
  }, []);

  useEffect(() => {
    if (consent === null || consent === "denied") return;

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
    const trackContactExit = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const contactEvent = getContactLinkAnalyticsEvent(
        link.getAttribute("href") ?? "",
      );
      if (!contactEvent) return;

      trackAnalyticsEvent(contactEvent.eventName, {
        method: contactEvent.method,
      });
    };

    document.addEventListener("click", trackContactExit);
    return () => document.removeEventListener("click", trackContactExit);
  }, []);

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    writeAnalyticsConsent(nextConsent);
    updateAnalyticsConsent(nextConsent);
    if (nextConsent !== "denied") loadGoogleAnalytics();
    setConsent(nextConsent);
    setAnalyticsSelected(hasAnalyticsConsent(nextConsent));
    setMarketingSelected(hasMarketingConsent(nextConsent));
    setIsOpen(false);
  };

  const handleConfirmSelection = () => {
    let nextConsent: AnalyticsConsent = "denied";
    if (analyticsSelected && marketingSelected) nextConsent = "granted";
    else if (analyticsSelected) nextConsent = "analytics";
    else if (marketingSelected) nextConsent = "marketing";
    chooseConsent(nextConsent);
  };

  if (!isOpen) return null;

  // ==========================================
  // LEVEL 1: Floating Bottom Banner
  // ==========================================
  if (viewMode === "banner") {
    return (
      <aside
        aria-label="Cookie-Hinweis"
        className="fixed inset-x-3 bottom-3 sm:bottom-6 z-[100] mx-auto max-w-4xl rounded-2xl border border-[rgba(47,79,79,0.18)] bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-[0_16px_50px_rgba(23,56,56,0.18)] animate-in fade-in slide-in-from-bottom-5 duration-300"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#c99a1d]" />
              <h2 className="text-[15px] font-bold text-[#173838]">
                Cookies & Website-Erfahrung
              </h2>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-700 hyphens-none">
              Wir verwenden notwendige Technologien für den Betrieb unserer Website. Mit Ihrer Zustimmung verwenden wir außerdem Cookies und ähnliche Technologien, um die Nutzung unserer Website zu verstehen, den Erfolg unserer Angebote zu messen und Ihre Website-Erfahrung kontinuierlich zu verbessern.{" "}
              <Link
                href="/datenschutz"
                className="font-medium text-[#173838] underline decoration-slate-300 underline-offset-2 hover:text-[#1b4343]"
              >
                Datenschutzerklärung
              </Link>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
            <button
              type="button"
              onClick={() => chooseConsent("denied")}
              className="inline-flex min-h-[40px] flex-1 sm:flex-initial items-center justify-center rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => setViewMode("modal")}
              className="inline-flex min-h-[40px] flex-1 sm:flex-initial items-center justify-center rounded-xl border border-[#173838] bg-white px-3.5 py-2 text-[13px] font-bold text-[#173838] transition hover:bg-[#173838]/5 active:scale-[0.98]"
            >
              Einstellungen
            </button>
            <button
              type="button"
              onClick={() => chooseConsent("granted")}
              className="inline-flex min-h-[40px] w-full sm:w-auto items-center justify-center rounded-xl bg-[#173838] px-4 py-2 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1b4343] active:scale-[0.98]"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </aside>
    );
  }

  // ==========================================
  // LEVEL 2: Detailed Settings Modal
  // ==========================================
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-4 bg-black/45 backdrop-blur-[3px] animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
    >
      <section
        aria-label="Cookie- und Datenschutzeinstellungen"
        className="relative max-h-[calc(100vh-1.5rem)] w-full max-w-[620px] overflow-y-auto rounded-2xl border border-[rgba(47,79,79,0.18)] bg-white shadow-[0_24px_80px_rgba(23,56,56,0.24)] animate-in zoom-in-95 duration-200"
      >
        <div className="p-5 sm:p-6 sm:pb-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#173838]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173838]">
                Privatsphäre & Cookies
              </span>
              <h2
                id="cookie-modal-title"
                className="mt-2 text-[20px] font-bold text-[#173838] sm:text-[22px]"
              >
                Cookie- & Datenschutzeinstellungen
              </h2>
            </div>
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Schließen"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>

          <p className="mt-2.5 text-[14px] leading-relaxed text-slate-700 hyphens-none">
            Hier können Sie festlegen, welche Cookies und Dienste Sie aktivieren möchten.
            Ihre Auswahl können Sie jederzeit im Seitenfuß anpassen.
          </p>

          {/* Cookie Categories */}
          <div className="mt-4 space-y-3">
            {/* Category: Essential */}
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3.5 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] font-bold text-[#173838]">
                    Technisch notwendige Cookies
                  </span>
                </div>
                <span className="rounded-md bg-slate-200/90 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                  Immer aktiv
                </span>
              </div>
              <p className="mt-1.5 pl-7 text-[12px] leading-relaxed text-slate-600 hyphens-none">
                Erforderlich für den Betrieb der Website und die Speicherung Ihrer Cookie-Einstellungen.
              </p>
            </div>

            {/* Category: Statistics and reach (Optional) */}
            <div
              className={`rounded-xl border p-3.5 sm:p-4 transition-all duration-200 cursor-pointer ${
                analyticsSelected
                  ? "border-[#173838] bg-[#173838]/5 ring-1 ring-[#173838]"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
              onClick={() => setAnalyticsSelected(!analyticsSelected)}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="cookie-cat-statistics-modal"
                    checked={analyticsSelected}
                    onChange={(e) => {
                      e.stopPropagation();
                      setAnalyticsSelected(e.target.checked);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="h-4 w-4 rounded border-slate-300 text-[#173838] focus:ring-[#173838]/30 cursor-pointer"
                  />
                  <label
                    htmlFor="cookie-cat-statistics-modal"
                    className="text-[14px] font-bold text-[#173838] cursor-pointer select-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAnalyticsSelected(!analyticsSelected);
                    }}
                  >
                    Statistik & Reichweite
                  </label>
                </div>
                <span
                  className={`rounded-md px-2 py-0.5 text-[11px] font-semibold transition-colors ${
                    analyticsSelected
                      ? "bg-[#173838]/10 text-[#173838]"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Optional
                </span>
              </div>
              <p className="mt-1.5 pl-6.5 text-[12px] leading-relaxed text-slate-600 hyphens-none">
                Hilft uns zu verstehen, wie unsere Website genutzt wird und welche Inhalte besonders relevant sind.
              </p>

              {/* Details toggle */}
              <div className="mt-2 pl-6.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAnalyticsDetails(!showAnalyticsDetails);
                  }}
                  className="text-left text-[12px] font-medium text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-[#173838]"
                >
                  {showAnalyticsDetails
                    ? "Details verbergen"
                    : "Details anzeigen"}
                </button>

                {showAnalyticsDetails && (
                  <div className="mt-2 rounded-lg border border-slate-200/80 bg-slate-50 p-2.5 text-[11px] leading-relaxed text-slate-600 animate-in fade-in">
                    Google Analytics 4 – Google Ireland Limited, Gordon House,
                    Barrow Street, Dublin 4, Irland. Der Dienst misst Nutzung,
                    Reichweite und relevante Inhalte. Formularinhalte,
                    Kontaktdaten und Gesundheitsangaben werden nicht an Google
                    übermittelt.
                  </div>
                )}
              </div>
            </div>

            {/* Category: Marketing and personalization (Optional) */}
            <div
              className={`rounded-xl border p-3.5 sm:p-4 transition-all duration-200 cursor-pointer ${
                marketingSelected
                  ? "border-[#173838] bg-[#173838]/5 ring-1 ring-[#173838]"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
              onClick={() => setMarketingSelected(!marketingSelected)}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    id="cookie-cat-marketing-modal"
                    checked={marketingSelected}
                    onChange={(e) => {
                      e.stopPropagation();
                      setMarketingSelected(e.target.checked);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300 text-[#173838] focus:ring-[#173838]/30"
                  />
                  <label
                    htmlFor="cookie-cat-marketing-modal"
                    className="cursor-pointer select-none text-[14px] font-bold text-[#173838]"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMarketingSelected(!marketingSelected);
                    }}
                  >
                    Marketing & Personalisierung
                  </label>
                </div>
                <span
                  className={`rounded-md px-2 py-0.5 text-[11px] font-semibold transition-colors ${
                    marketingSelected
                      ? "bg-[#173838]/10 text-[#173838]"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  Optional
                </span>
              </div>
              <p className="mt-1.5 pl-6.5 text-[12px] leading-relaxed text-slate-600 hyphens-none">
                Hilft uns zu erkennen, welche Anzeigen zu Anfragen führen, und
                Werbung relevanter auszuspielen.
              </p>

              <div className="mt-2 pl-6.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMarketingDetails(!showMarketingDetails);
                  }}
                  className="text-left text-[12px] font-medium text-slate-500 underline decoration-slate-300 underline-offset-2 hover:text-[#173838]"
                >
                  {showMarketingDetails
                    ? "Details verbergen"
                    : "Details anzeigen"}
                </button>

                {showMarketingDetails && (
                  <div className="mt-2 rounded-lg border border-slate-200/80 bg-slate-50 p-2.5 text-[11px] leading-relaxed text-slate-600 animate-in fade-in">
                    Google Ads, Conversion-Messung und Google Signals – Google
                    Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                    Irland. Dazu gehören Erfolgsmessung, Google Signals und
                    personalisierte Werbung. Formularinhalte, Kontaktdaten und
                    Gesundheitsangaben werden nicht an Google übermittelt.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Area: Privacy Link & Action Buttons */}
          <div className="mt-5 flex flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              className="text-[13px] font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-[#173838]"
              href="/datenschutz"
            >
              Datenschutzerklärung
            </Link>

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
              <button
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]"
                onClick={() => chooseConsent("denied")}
                type="button"
              >
                Nur notwendige
              </button>
              <button
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-[#173838] bg-white px-3.5 py-2 text-[13px] font-bold text-[#173838] transition hover:bg-[#173838]/5 active:scale-[0.98]"
                onClick={handleConfirmSelection}
                type="button"
              >
                Auswahl bestätigen
              </button>
              <button
                className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#173838] px-4 py-2 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#1b4343] active:scale-[0.98]"
                onClick={() => chooseConsent("granted")}
                type="button"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
