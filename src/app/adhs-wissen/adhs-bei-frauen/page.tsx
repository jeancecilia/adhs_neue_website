import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS bei Frauen: Spätdiagnose, Masking & hormonelle Einflüsse",
  description:
    "Warum ADHS bei Frauen oft erst spät erkannt wird: Internalisierte Symptome, Erschöpfung durch ständiges Masking und der Einfluss von Östrogen.",
  alternates: {
    canonical: "/adhs-wissen/adhs-bei-frauen",
  },
};

export default function AdhsBeiFrauenPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS bei Frauen</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <p className="eyebrow">Spätdiagnose & Masking</p>
            <span className="text-[12px] text-slate-500">• 5 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS bei Frauen: Der hohe Preis ständiger Anpassung (Masking)
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Frauen mit ADHS werden im Schnitt 5 bis 10 Jahre später diagnostiziert als Männer – oft erst nach Fehldiagnosen wie Depression oder Angststörung.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          {/* Summary Box */}
          <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">Inhalt auf einen Blick</p>
            <ul className="space-y-1.5 text-[14px] text-slate-700">
              <li>• Warum unaufmerksame Symptome (ADS) bei Mädchen oft übersehen werden</li>
              <li>• Das Phänomen des „Masking“ und der drohende Erschöpfungszustand</li>
              <li>• Wechselwirkung mit Hormonen: Östrogenabfall und ADHS-Symptome</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Internalisierte Symptome statt äußerer Unruhe
            </h2>
            <p className="mt-3">
              Während Jungen in der Kindheit häufiger durch körperliche Hyperaktivität auffallen, äußert sich ADHS bei Mädchen oft nach innen gerichtet: Tagträumerei, soziale Ängste, Perfektionismus und extremes Verantwortungsgefühl.
            </p>
          </div>

          {/* Conversion Box */}
          <div className="rounded-2xl bg-[#fdfbf7] p-8 border-2 border-[#173838] card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838] mb-2">Diagnostische Orientierung & Erleichterung</h2>
            <p className="text-[15px] text-slate-600 mb-6">
              Eine späte Diagnose bringt oft tiefgreifende Erleichterung. Nutzen Sie unser kostenloses Screening oder sprechen Sie persönlich mit uns in München.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/adhs-test-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95"
              >
                Zum ADHS-Orientierungstest
              </Link>
              <Link
                href="/termin?anliegen=screening"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
              >
                Orientierungsgespräch anfragen
              </Link>
            </div>
          </div>

          {/* Next Article */}
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <Link href="/adhs-wissen/adhs-und-schlaf" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: ADHS & Schlaf
            </Link>
            <Link href="/adhs-wissen/adhs-prokrastination" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Erster Artikel: ADHS & Prokrastination →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
