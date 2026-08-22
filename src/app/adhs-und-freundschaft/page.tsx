import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createPageMetadata } from "@/lib/metadata";
import KnowledgeArticlePage from "@/components/KnowledgeArticlePage";

const source = readFileSync(join(process.cwd(), "src/content/adhs-und-freundschaft.md"), "utf8");

export const metadata = createPageMetadata({
  title: "ADHS und Freundschaft: Nähe, Kontakt & Konflikte",
  description: "Warum Freundschaften mit ADHS manchmal schwer zu pflegen sind – und wie Erwachsene Kontakt, Verbindlichkeit, Konflikte und Nähe alltagstauglich gestalten können.",
  path: "/adhs-und-freundschaft",
  keywords: ["ADHS und Freundschaft", "ADHS Freundschaft Erwachsene", "ADHS Freundschaften pflegen", "ADHS keine Freunde"],
  openGraphType: "article",
});

export default function AdhsUndFreundschaftPage() {
  return <KnowledgeArticlePage
    title="ADHS und Freundschaft bei Erwachsenen"
    breadcrumb="ADHS und Freundschaft"
    eyebrow="Soziales & Verbundenheit"
    readTime="ca. 12 Min. Lesezeit"
    intro="Vergessene Nachrichten, wechselnde Kontaktintensität oder impulsive Reaktionen können Freundschaften belasten. Sie bedeuten jedoch weder Desinteresse noch fehlende Empathie – und viele dieser Muster lassen sich konkret verändern."
    path="/adhs-und-freundschaft"
    source={source}
    sources={[
      { label: "Social Cognition in Adult ADHD – systematische Übersichtsarbeit (PMC)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9311421/" },
      { label: "Adult ADHD: evidence base, uncertainties and controversies (PMC)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12434367/" },
      { label: "NICE-Leitlinie NG87: ADHS – Diagnostik und Behandlung", href: "https://www.nice.org.uk/guidance/ng87/" },
    ]}
    ctaTitle="Freundschaften müssen nicht an alten ADHS-Mustern scheitern"
    ctaDescription="In der therapeutischen Begleitung können wir konkrete Kommunikations-, Organisations- und Regulationsstrategien für Ihre persönlichen Beziehungsmuster entwickeln."
    previous={{ href: "/adhs-wissen/adhs-und-beziehungen", label: "ADHS und Beziehungen" }}
    next={{ href: "/adhs-langeweile-und-abwechslung", label: "ADHS und Langeweile" }}
  />;
}
