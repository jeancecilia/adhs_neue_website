import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS und Beziehungen: Missverständnisse & emotionale Nähe meistern",
  description:
    "Wie ADHS Partnerschaft und Freundschaften beeinflusst: Vergesslichkeit, emotionale Ausbrüche, Hyperfokus auf den Partner und Wege zu stabiler Bindung.",
  alternates: {
    canonical: "/adhs-wissen/adhs-und-beziehungen",
  },
};

export default function AdhsBeziehungenPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS & Beziehungen</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <p className="eyebrow">Partnerschaft & Soziales</p>
            <span className="text-[12px] text-slate-500">• 5 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS und Beziehungen: Missverständnisse & emotionale Nähe meistern
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            In Partnerschaften und Freundschaften führt ADHS häufig zu wiederkehrenden Missverständnissen. Was als Mangel an Wertschätzung wahrgenommen wird, ist in Wahrheit oft ein neurologisches Steuerungsthema.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          {/* Summary Box */}
          <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">Inhalt auf einen Blick</p>
            <ul className="space-y-1.5 text-[14px] text-slate-700">
              <li>• Die „Eltern-Kind-Falle“ in neurodivergenten Partnerschaften</li>
              <li>• Warum Hyperfokus in der Verliebtheitsphase abflacht und was danach hilft</li>
              <li>• Praxiserprobte Kommunikationswerkzeuge für Paare</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Typische Dynamiken & Lösungswege
            </h2>
            <div className="rounded-2xl bg-white p-8 card-shadow border border-slate-200 my-6 space-y-4 text-[15px]">
              <div>
                <strong className="text-[#173838]">Die Eltern-Kind-Falle</strong>
                <p className="text-slate-600">Ein Partner übernimmt die Rolle des ständigen Organisators und Mahners, während sich der ADHS-Partner bevormundet oder kritisiert fühlt.</p>
              </div>
              <div>
                <strong className="text-[#173838]">Vom Hyperfokus zur Normalität</strong>
                <p className="text-slate-600">Nach der anfänglichen intensiven Verliebtheit wendet sich das ADHS-Gehirn anderen Reizen zu. Klare Rituale helfen, Bindung und Aufmerksamkeit zu sichern.</p>
              </div>
            </div>
          </div>

          {/* Conversion Box */}
          <div className="rounded-2xl bg-[#fdfbf7] p-8 border-2 border-[#173838] card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838] mb-2">Beziehungsmuster verstehen und verändern</h2>
            <p className="text-[15px] text-slate-600 mb-6">
              In unserer Praxis in München begleiten wir Einzelne und Paare dabei, gegenseitiges Verständnis aufzubauen und Beziehungsstress nachhaltig zu senken.
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
            <Link href="/adhs-wissen/adhs-im-beruf" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: ADHS im Beruf
            </Link>
            <Link href="/adhs-wissen/adhs-und-schlaf" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Nächster Artikel: ADHS & Schlaf →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
