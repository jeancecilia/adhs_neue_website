import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import type { Metadata } from "next";
import ArticleTrust from "@/components/ArticleTrust";
import MarkdownArticle from "@/components/MarkdownArticle";

const articleSource = readFileSync(
  join(process.cwd(), "src/content/adhs-bei-frauen.md"),
  "utf8",
);

export const metadata: Metadata = {
  title: "ADHS bei Frauen: Spätdiagnose und Masking",
  description:
    "Warum ADHS bei Frauen häufig spät erkannt wird, wie Masking und Kompensation die Diagnostik erschweren und welche Hinweise für eine Abklärung sprechen.",
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
            <span className="font-medium text-[#173838]">ADHS bei Frauen</span>
          </nav>
          <div className="mb-3 flex items-center gap-3">
            <p className="eyebrow">Spätdiagnose &amp; Masking</p>
            <span className="text-[12px] text-slate-500">• ca. 6 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            Spätdiagnose &amp; Masking: Warum ADHS bei Frauen so lange unsichtbar bleiben kann
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Unauffällige Symptome, Perfektionismus und aufwendige Kompensationsstrategien können dazu beitragen, dass ADHS bei Frauen lange nicht erkannt wird.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl text-[16px] leading-[1.7] text-slate-700">
          <ArticleTrust
            title="Spätdiagnose und Masking: ADHS bei Frauen"
            path="/adhs-wissen/adhs-bei-frauen"
            sources={[
              {
                label: "Expert:innenkonsens zu ADHS bei Frauen (PubMed)",
                href: "https://pubmed.ncbi.nlm.nih.gov/32787804/",
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
            <h2 className="text-[22px] font-bold text-[#173838]">Diagnostische Orientierung</h2>
            <p className="mb-6 mt-2 text-[15px] text-slate-600">
              Ein Screening kann erste Hinweise geben, ersetzt aber keine fachkundige Diagnostik. Bei anhaltendem Leidensdruck oder deutlichen Einschränkungen kann eine strukturierte ADHS-Abklärung sinnvoll sein.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/adhs-test-muenchen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95"
              >
                ADHS-Diagnostik kennenlernen
              </Link>
              <Link
                href="/termin?anliegen=screening"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
              >
                Orientierungsgespräch anfragen
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
            <Link href="/adhs-wissen/adhs-und-schlaf" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← Vorheriger Artikel: ADHS &amp; Schlaf
            </Link>
            <Link href="/adhs-wissen/adhs-prokrastination" className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              Erster Artikel: ADHS &amp; Prokrastination →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
