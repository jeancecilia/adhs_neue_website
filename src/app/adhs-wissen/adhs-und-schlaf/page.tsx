import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleTrust from "@/components/ArticleTrust";
import MarkdownArticle from "@/components/MarkdownArticle";

const articleSource = readFileSync(
  join(process.cwd(), "src/content/adhs-und-schlaf.md"),
  "utf8",
);

export const metadata: Metadata = {
  title: "ADHS und Schlafstörungen: Gedankenkarussell stoppen",
  description:
    "Warum Schlafprobleme bei Erwachsenen mit ADHS häufig sind und welche Routinen, CBT-I-Ansätze und medizinischen Abklärungen helfen können.",
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
            <span className="font-medium text-[#173838]">ADHS &amp; Schlaf</span>
          </nav>
          <div className="mb-3 flex items-center gap-3">
            <p className="eyebrow">Körper &amp; Erholung</p>
            <span className="text-[12px] text-slate-500">• ca. 12 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS und Schlafstörungen: Das Gedankenkarussell am Abend stoppen
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Schlafprobleme treten bei Erwachsenen mit ADHS häufiger auf. Der ausführliche Ratgeber erklärt mögliche Zusammenhänge und konkrete Schritte für einen stabileren Schlaf-Wach-Rhythmus.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl text-[16px] leading-[1.7] text-slate-700">
          <ArticleTrust
            title="ADHS und Schlafstörungen: Das Gedankenkarussell am Abend stoppen"
            path="/adhs-wissen/adhs-und-schlaf"
            sources={[
              {
                label: "Expert:innenkonsens zu Schlaf und ADHS (PMC)",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8222620/",
              },
              {
                label: "S3-Leitlinie ADHS (AWMF)",
                href: "https://register.awmf.org/assets/guidelines/028-045l_S3_KF_Aufmerksamkeitsdefizit-Hyperaktivitaetsstoerung-ADHS-Kinder-Jugendliche-Erwachsene_205-05.pdf",
              },
            ]}
          />

          <div className="mt-10">
            <MarkdownArticle source={articleSource} />
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-8 card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838]">Schlafprobleme im Gesamtkontext betrachten</h2>
            <p className="mb-6 mt-2 text-[15px] text-slate-600">
              Strukturierende psychotherapeutische Ansätze können unterstützen. Bei anhaltenden Beschwerden, Atemaussetzern, ausgeprägter Tagesmüdigkeit oder anderen Warnzeichen ist zusätzlich eine ärztliche beziehungsweise schlafmedizinische Abklärung sinnvoll.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/termin"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95"
              >
                Erstgespräch anfragen
              </Link>
              <Link
                href="/adhs-therapie-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
              >
                ADHS-Therapie kennenlernen
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
            <Link href="/adhs-wissen/adhs-und-beziehungen" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: ADHS &amp; Beziehungen
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
