import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS im Beruf: Stärken entfalten & Überlastung vermeiden",
  description:
    "Wie Erwachsene mit ADHS im Job erfolgreich sind: Hyperfokus nutzen, administrative Hürden abbauen und Burnout durch ständiges Masking verhindern.",
  alternates: {
    canonical: "/adhs-wissen/adhs-im-beruf",
  },
};

export default function AdhsImBerufPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS im Beruf</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <p className="eyebrow">Arbeitswelt & Karriere</p>
            <span className="text-[12px] text-slate-500">• 4 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS im Beruf: Stärken entfalten & Überlastung vermeiden
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Großes Problemlösungsgeschick und Hyperfokus auf der einen Seite, Schwierigkeiten mit E-Mails, Deadlines und Routineaufgaben auf der anderen: Wie gelingt ein stabiler Arbeitsalltag?
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          {/* Summary Box */}
          <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">Inhalt auf einen Blick</p>
            <ul className="space-y-1.5 text-[14px] text-slate-700">
              <li>• Typische Hürden: Open-Space-Offices, Detailarbeit und Zeiteinteilung</li>
              <li>• Die neurodivergenten Stärken: Krisenmanagement, Vernetztes Denken, Innovationskraft</li>
              <li>• Entlastungssysteme, die im Berufsleben wirklich funktionieren</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Kompensation und das Risiko von Burnout
            </h2>
            <p className="mt-3">
              Viele ADHS-Betroffene kompensieren organisatorische Reibungsverluste durch Nachtschichten oder extreme Anspannung. Diese dauerhafte Überanstrengung (Masking) führt häufig in die totale Erschöpfung.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 card-shadow border border-slate-200 space-y-4">
            <h2 className="text-[22px] font-bold text-[#173838]">Konkrete Anpassungen für den Arbeitsalltag</h2>
            <ul className="space-y-2 text-[15px] text-slate-700">
              <li>• <strong>Visuelle Task-Boards:</strong> Aufgaben müssen sichtbar sein, um dem &quot;Aus den Augen, aus dem Sinn&quot;-Effekt zu entgehen.</li>
              <li>• <strong>Fokus-Blöcke:</strong> Feste Zeiten ohne Benachrichtigungen und Meetings für kreative Tiefenarbeit.</li>
              <li>• <strong>Pufferzeiten:</strong> Termine grundsätzlich mit mindestens 15–30 Minuten Vor- und Nachlaufzeit planen.</li>
            </ul>
          </div>

          {/* Conversion Box */}
          <div className="rounded-2xl bg-[#fdfbf7] p-8 border-2 border-[#173838] card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838] mb-2">Berufliche Leistungsfähigkeit ohne Erschöpfung</h2>
            <p className="text-[15px] text-slate-600 mb-6">
              In unserer Praxis in München begleiten wir Fach- und Führungskräfte dabei, ADHS im Beruf als Ressource zu nutzen und Überlastung zu verhindern.
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
            <Link href="/adhs-wissen/adhs-emotionale-dysregulation" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: Emotionale Dysregulation
            </Link>
            <Link href="/adhs-wissen/adhs-und-beziehungen" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Nächster Artikel: ADHS & Beziehungen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
