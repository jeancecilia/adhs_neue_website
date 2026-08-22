import { readFileSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import ArticleTrust from "@/components/ArticleTrust";
import MarkdownArticle from "@/components/MarkdownArticle";

const articleSource = readFileSync(
  join(process.cwd(), "src/content/adhs-emotionale-dysregulation.md"),
  "utf8",
);

export const metadata = createPageMetadata({
  title: "ADHS und emotionale Dysregulation: Wenn Gefühle überfluten",
  description:
    "Wie emotionale Dysregulation bei ADHS erlebt wird, wie RSD fachlich einzuordnen ist und welche Strategien helfen können, intensive Reaktionen besser zu regulieren.",
  path: "/adhs-wissen/adhs-emotionale-dysregulation",
  openGraphType: "article",
});

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
            <span className="font-medium text-[#173838]">Emotionale Dysregulation</span>
          </nav>
          <div className="mb-3 flex items-center gap-3">
            <p className="eyebrow">Gefühle &amp; Reizfilter</p>
            <span className="text-[12px] text-slate-500">• ca. 11 Min. Lesezeit</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS und emotionale Dysregulation: Wenn Gefühle überfluten
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Intensive Gefühle, schnelle Reizbarkeit und starke Reaktionen auf Kritik können den Alltag erheblich belasten. RSD ist dabei ein verbreiteter Begriff, aber keine eigenständige Diagnose.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl text-[16px] leading-[1.7] text-slate-700">
          <ArticleTrust
            title="ADHS und emotionale Dysregulation: Wenn Gefühle überfluten"
            path="/adhs-wissen/adhs-emotionale-dysregulation"
            sources={[
              {
                label: "Emotional dysregulation in adults with ADHD (PMC)",
                href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9821724/",
              },
              {
                label: "NICE Guideline NG87: ADHD",
                href: "https://www.nice.org.uk/guidance/ng87/",
              },
            ]}
          />

          <div className="mt-10">
            <MarkdownArticle source={articleSource} />
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-8 card-shadow">
            <h2 className="text-[22px] font-bold text-[#173838]">Emotionsregulation gezielt stärken</h2>
            <p className="mb-6 mt-2 text-[15px] text-slate-600">
              Therapeutische Unterstützung kann helfen, Frühwarnzeichen früher wahrzunehmen, intensive Gefühle besser auszuhalten und wieder bewusster handeln zu können.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/termin?anliegen=therapie" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95">
                Erstgespräch anfragen
              </Link>
              <Link href="/adhs-therapie-muenchen" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50">
                Mehr zur ADHS-Therapie
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
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

