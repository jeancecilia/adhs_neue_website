import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS & Emotionale Dysregulation: Rejection Sensitivity (RSD)",
  description:
    "Warum ADHS mit intensiven Gefühlen, schneller Reizbarkeit und starker Kränkbarkeit (RSD) einhergeht – und wie Sie emotionale Regulation erlernen.",
  alternates: {
    canonical: "/adhs-wissen/adhs-emotionale-dysregulation",
  },
};

export default function AdhsEmotionaleDysregulationPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Emotionale Dysregulation</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <p className="eyebrow">Gefühle & Reizfilter</p>
            <span className="text-[12px] text-slate-500">• 5 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS und emotionale Dysregulation: Wenn Gefühle überfluten
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            ADHS betrifft nicht nur die Aufmerksamkeit für Aufgaben, sondern auch die Steuerung von Emotionen. Intensive Kränkbarkeit (RSD) und plötzliche Wut sind typische Begleiter.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          {/* Summary Box */}
          <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">Inhalt auf einen Blick</p>
            <ul className="space-y-1.5 text-[14px] text-slate-700">
              <li>• Warum Rejection Sensitive Dysphoria (RSD) so quälend ist</li>
              <li>• Die neurobiologische Verbindung zwischen Amygdala und präfrontalem Kortex</li>
              <li>• Wie Sie im Moment der Überflutung die Reiz-Reaktions-Lücke vergrößern</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Was ist Rejection Sensitive Dysphoria (RSD)?
            </h2>
            <p className="mt-3">
              RSD beschreibt ein intensives emotionales Schmerzempfinden bei tatsächlicher oder auch nur wahrgenommener Kritik, Ablehnung oder dem Gefühl, versagt zu haben. Betroffene reagieren häufig mit starkem Rückzug oder impulsivem Selbstschutz.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 card-shadow border border-slate-200 space-y-4">
            <h2 className="text-[22px] font-bold text-[#173838]">Strategien zur emotionalen Stabilisierung</h2>
            <p className="leading-relaxed text-slate-700">
              In der Psychotherapie erarbeiten wir die sogenannte <strong>Reiz-Reaktions-Lücke</strong>: das Erkennen körperlicher Frühwarnzeichen (Herzrasen, Engegefühl) vor der verbalen oder emotionalen Reaktion, kombiniert mit beruhigenden somatischen Techniken.
            </p>
          </div>

          {/* Conversion Box */}
          <div className="rounded-2xl bg-[#fdfbf7] p-8 border-2 border-[#173838] card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838] mb-2">Emotionale Ausgeglichenheit erlernen</h2>
            <p className="text-[15px] text-slate-600 mb-6">
              Lernen Sie in unserer Münchner Praxis, emotionale Stürme zu steuern und Ihr Selbstwertgefühl nachhaltig zu stärken.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/termin?anliegen=therapie"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95"
              >
                Erstgespräch anfragen
              </Link>
              <Link
                href="/adhs-therapie-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
              >
                Mehr zur ADHS-Therapie
              </Link>
            </div>
          </div>

          {/* Next Article */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <Link href="/adhs-wissen/adhs-prokrastination" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: Prokrastination
            </Link>
            <Link href="/adhs-wissen/adhs-im-beruf" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Nächster Artikel: ADHS im Beruf →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
