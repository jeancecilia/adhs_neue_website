import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS und Prokrastination: Warum Aufschieben kein Willensmangel ist",
  description:
    "Erfahren Sie, warum Prokrastination bei ADHS neurologische Ursachen hat (Dopaminmangel) und welche 4 praxiserprobten Strategien wirklich beim Starten helfen.",
  alternates: {
    canonical: "/adhs-wissen/adhs-prokrastination",
  },
};

export default function AdhsProkrastinationPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS & Prokrastination</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <p className="eyebrow">Alltag & Handeln</p>
            <span className="text-[12px] text-slate-500">• 4 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS und Prokrastination: Warum Aufschieben kein Willensmangel ist
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Kennen Sie das Gefühl, eine wichtige Aufgabe vor sich herzuschieben, obwohl Sie genau wissen, wie dringend sie ist? Für das neurodivergente Gehirn ist das kein Charakterfehler.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          {/* Quick Overview Box */}
          <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">Inhalt auf einen Blick</p>
            <ul className="space-y-1.5 text-[14px] text-slate-700">
              <li>• Warum Dopaminmangel die neuronale Startbarriere erzeugt („ADHD Paralysis“)</li>
              <li>• Warum klassische Produktivitätstipps bei ADHS oft scheitern</li>
              <li>• 4 funktionierende Hebel: Barrieren senken, Body Doubling & Micro-Steps</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Die neurobiologische Ursache: Die Dopamin-Lücke
            </h2>
            <p className="mt-3">
              Im ADHS-Gehirn steht im synaptischen Spalt des präfrontalen Kortex weniger Dopamin zur Verfügung. Dopamin ist jedoch der entscheidende Botenstoff, um Motivation für Aufgaben aufzubauen, deren Belohnung erst in der Zukunft liegt.
            </p>
            <p className="mt-3">
              Erst wenn der Abgabetermin unmittelbar bevorsteht, schüttet der Körper Noradrenalin und Adrenalin (Notfall-Druck) aus – erst dann springt das Gehirn an.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 card-shadow border border-slate-200 space-y-4">
            <h2 className="text-[22px] font-bold text-[#173838]">4 Hebel, die bei ADHS-Prokrastination helfen</h2>
            <div className="space-y-3 text-[15px]">
              <div>
                <strong className="text-[#173838]">1. Die 2-Minuten-Mikro-Hürde:</strong> Nicht &quot;den Bericht schreiben&quot;, sondern nur das Dokument öffnen und die Überschrift tippen.
              </div>
              <div>
                <strong className="text-[#173838]">2. Body Doubling:</strong> Arbeiten in Gegenwart einer anderen Person (Co-Working, Video-Calls), um den Fokus zu stabilisieren.
              </div>
              <div>
                <strong className="text-[#173838]">3. Externe Reize reduzieren:</strong> Visuelle Ablenkungen und offene Tabs minimieren, bevor der Einstieg gewagt wird.
              </div>
              <div>
                <strong className="text-[#173838]">4. Selbstvorwürfe stoppen:</strong> Scham lähmt zusätzlich. Akzeptieren Sie die neuronale Hürde als physiologischen Zustand.
              </div>
            </div>
          </div>

          {/* Conversion Box */}
          <div className="rounded-2xl bg-[#fdfbf7] p-8 border-2 border-[#173838] card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838] mb-2">Chronische Prokrastination therapeutisch überwinden</h2>
            <p className="text-[15px] text-slate-600 mb-6">
              In unserer Praxis in München-Schwabing entwickeln wir maßgeschneiderte Systeme für Ihren Alltag und unterstützen Sie beim Abbau von Leistungsdruck.
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
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Zurück zur Wissensübersicht
            </Link>
            <Link href="/adhs-wissen/adhs-emotionale-dysregulation" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Nächster Artikel: Emotionale Dysregulation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
