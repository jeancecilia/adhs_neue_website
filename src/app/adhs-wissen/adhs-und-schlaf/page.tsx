import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS und Schlafstörungen: Das Gedankenkarussell am Abend stoppen",
  description:
    "Warum ADHS oft mit verzögerter Melatonin-Ausschüttung und Einschlafproblemen verbunden ist. 5 konkrete Schritte für erholsamen Schlaf.",
  alternates: {
    canonical: "/adhs-wissen/adhs-und-schlaf",
  },
};

export default function AdhsSchlafPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS & Schlaf</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <p className="eyebrow">Körper & Erholung</p>
            <span className="text-[12px] text-slate-500">• 4 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS und Schlafstörungen: Das Gedankenkarussell am Abend stoppen
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Bis zu 80 % der Erwachsenen mit ADHS leiden unter Einschlaf- oder Durchschlafproblemen. Warum das Gehirn nachts oft auf Hochtouren läuft und was biologisch hilft.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          {/* Summary Box */}
          <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">Inhalt auf einen Blick</p>
            <ul className="space-y-1.5 text-[14px] text-slate-700">
              <li>• Warum die Melatonin-Ausschüttung bei ADHS bis zu 90 Minuten verzögert ist</li>
              <li>• Das Phänomen der „Revenge Bedtime Procrastination“</li>
              <li>• Neurobiologische Schlafroutinen für mehr Erholung</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Die zirkadiane Rhythmus-Verschiebung
            </h2>
            <p className="mt-3">
              Studien zeigen, dass bei Menschen mit ADHS die körpereigene Melatoninproduktion am Abend oft deutlich später einsetzt. Zudem führt das Nachlassen von Reizen am Abend dazu, dass das Gehirn innere Reize (Gedanken, Sorgen, Ideen) umso lauter abspielt.
            </p>
          </div>

          {/* Conversion Box */}
          <div className="rounded-2xl bg-[#fdfbf7] p-8 border-2 border-[#173838] card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838] mb-2">Ganzheitliche Erholung & neuronale Beruhigung</h2>
            <p className="text-[15px] text-slate-600 mb-6">
              In unserer Praxis in München kombinieren wir strukturierende Verhaltenstherapie mit apparativem <strong>Neurofeedback</strong>, um dem Gehirn zu helfen, eigenständig in den Ruhezustand zu schalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/termin"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95"
              >
                Erstgespräch anfragen
              </Link>
              <Link
                href="/neurofeedback-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
              >
                Neurofeedback kennenlernen
              </Link>
            </div>
          </div>

          {/* Next Article */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <Link href="/adhs-wissen/adhs-und-beziehungen" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: ADHS & Beziehungen
            </Link>
            <Link href="/adhs-wissen/adhs-bei-frauen" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Nächster Artikel: ADHS bei Frauen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
