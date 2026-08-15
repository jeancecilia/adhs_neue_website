import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS bei Erwachsenen in München | Symptome, Ursachen & Hilfe",
  description:
    "Umfassende Informationen zu ADHS im Erwachsenenalter: Typische Anzeichen, innere Unruhe, Diagnosewege & spezialisierte Therapie in München-Schwabing.",
  alternates: {
    canonical: "/adhs-erwachsene-muenchen",
  },
};

export default function AdhsErwachsenePage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS bei Erwachsenen</span>
          </nav>
          <p className="eyebrow mb-3">Wissens- & Informationsseite</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS bei Erwachsenen in München
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Viele Erwachsene erfahren erst mit 25, 35 oder 50 Jahren, dass ihre lebenslangen Schwierigkeiten mit Organisation, Konzentration und emotionaler Reizüberflutung einen Namen haben: ADHS.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Warum bleibt ADHS im Erwachsenenalter oft unerkannt?
            </h2>
            <p className="mt-3">
              In der Kindheit wurde ADHS lange Zeit fast ausschließlich als &quot;Zappelphilipp-Syndrom&quot; bei Jungen wahrgenommen. Wer nicht im Unterricht störte, sondern eher verträumt war (ADS / vorwiegend unaufmerksamer Subtyp) oder hohe Intelligenz zur Kompensation nutzte, fiel durch das Raster.
            </p>
            <p className="mt-3">
              Erst wenn im Erwachsenenalter die äußeren Leitplanken (Schule, Elternhaus) wegfallen und die Eigenverantwortung in Studium, Beruf, Partnerschaft oder Elternschaft massiv ansteigt, bricht das Kompensationssystem oft zusammen.
            </p>
          </div>

          <div className="space-y-4 my-8">
            <h2 className="text-[24px] font-bold text-[#173838]">Typische Erscheinungsbilder bei Erwachsenen</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 card-shadow border border-slate-200">
                <h3 className="text-[17px] font-bold text-[#173838]">Innere Hyperaktivität</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">Ein ständiges Gedankenkarussell und das Gefühl, innerlich niemals ganz zur Ruhe zu kommen.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 card-shadow border border-slate-200">
                <h3 className="text-[17px] font-bold text-[#173838]">Dopaminmangel</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">Aufgaben ohne unmittelbaren Druck oder Belohnung fühlen sich neuronal unüberwindbar an.</p>
              </div>
              <div className="rounded-2xl bg-white p-6 card-shadow border border-slate-200">
                <h3 className="text-[17px] font-bold text-[#173838]">Zeitblindheit</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">Für das ADHS-Gehirn gibt es oft nur &quot;Jetzt&quot; und &quot;Nicht jetzt&quot; mit chronischem Zeitdruck.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Diagnostische Orientierung und Begleitung in München
            </h2>
            <p className="mt-3">
              In unserer Praxis in München bieten wir Ihnen eine strukturierte, empathische Anlaufstelle. Wir helfen Ihnen, Ihre Biografie ohne Scham neu einzuordnen und praxistaugliche Strategien für Ihren Alltag zu entwickeln.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/adhs-test-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Zum ADHS-Orientierungstest
              </Link>
              <Link
                href="/adhs-therapie-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
              >
                ADHS-Therapie im Detail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
