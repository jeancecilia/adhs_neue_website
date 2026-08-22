import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createPageMetadata } from "@/lib/metadata";
import KnowledgeArticlePage from "@/components/KnowledgeArticlePage";

const source = readFileSync(join(process.cwd(), "src/content/adhs-langeweile-und-abwechslung.md"), "utf8");

export const metadata = createPageMetadata({
  title: "ADHS und Langeweile: Ursachen & Strategien",
  description: "ADHS und ständige Langeweile verstehen: Welche Rolle Aufmerksamkeit, Arbeitsgedächtnis und Stimulation spielen und was im Alltag wirklich helfen kann.",
  path: "/adhs-langeweile-und-abwechslung",
  keywords: ["ADHS Langeweile", "ADHS und Langeweile", "Langeweile bei ADHS", "ADHS schnell gelangweilt"],
  openGraphType: "article",
});

export default function AdhsLangeweileUndAbwechslungPage() {
  return <KnowledgeArticlePage
    title="ADHS und Langeweile: Warum Abwechslung so wichtig erscheint"
    breadcrumb="ADHS und Langeweile"
    eyebrow="Motivation & Stimulation"
    readTime="ca. 17 Min. Lesezeit"
    intro="Langeweile kann bei ADHS schnell körperlich unangenehm werden und zu ständigem Wechsel, Aufschieben oder impulsiver Ablenkung führen. Dahinter steckt nicht einfach mangelnde Disziplin."
    path="/adhs-langeweile-und-abwechslung"
    source={source}
    sources={[
      { label: "Why Are Individuals With ADHD More Prone to Boredom? (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/40730822/" },
      { label: "The Boredom-ADHD Nexus – Meta-Analyse mit 22.365 Personen (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/41811543/" },
      { label: "Exploring the relationship between boredom and sustained attention (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/22729457/" },
      { label: "Reinforcement and Compensatory Mechanisms in ADHD – systematische Übersicht (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/33833929/" },
      { label: "NICE-Leitlinie NG87: ADHS – Diagnostik und Behandlung", href: "https://www.nice.org.uk/guidance/ng87/" },
    ]}
    ctaTitle="Motivation so gestalten, dass sie im echten Alltag funktioniert"
    ctaDescription="Gemeinsam können wir herausarbeiten, welche Aufgabenmerkmale Sie blockieren und welche Struktur, Stimulation und Verbindlichkeit tatsächlich zu Ihnen passen."
    previous={{ href: "/adhs-und-freundschaft", label: "ADHS und Freundschaft" }}
    next={{ href: "/adhs-frustrationstoleranz", label: "ADHS und Frustrationstoleranz" }}
  />;
}
