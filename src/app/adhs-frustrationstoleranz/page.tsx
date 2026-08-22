import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createPageMetadata } from "@/lib/metadata";
import KnowledgeArticlePage from "@/components/KnowledgeArticlePage";

const source = readFileSync(join(process.cwd(), "src/content/adhs-frustrationstoleranz.md"), "utf8");

export const metadata = createPageMetadata({
  title: "ADHS und Frustrationstoleranz bei Erwachsenen",
  description: "Geringe Frustrationstoleranz bei ADHS-Erwachsenen: typische Auslöser, fachliche Einordnung und konkrete Strategien für akute und wiederkehrende Situationen.",
  path: "/adhs-frustrationstoleranz",
  keywords: ["ADHS Frustrationstoleranz", "Frustrationstoleranz ADHS", "ADHS Frustrationstoleranz Erwachsene", "geringe Frustrationstoleranz ADHS"],
  openGraphType: "article",
});

export default function AdhsFrustrationstoleranzPage() {
  return <KnowledgeArticlePage
    title="ADHS und Frustrationstoleranz"
    breadcrumb="ADHS und Frustrationstoleranz"
    eyebrow="Emotionen & Selbststeuerung"
    readTime="ca. 12 Min. Lesezeit"
    intro="Wenn Technik nicht funktioniert, Pläne sich ändern oder Fortschritt ausbleibt, kann Frust bei ADHS sehr schnell eskalieren. Entscheidend ist nicht, Gefühle zu unterdrücken, sondern früher wieder handlungsfähig zu werden."
    path="/adhs-frustrationstoleranz"
    source={source}
    sources={[
      { label: "Evidence of emotion dysregulation as a core symptom of adult ADHD (PMC)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9821724/" },
      { label: "Identifying patterns of emotion dysregulation in adult ADHD (PMC)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10519076/" },
      { label: "Adult ADHD: clinical presentation and treatment perspectives (PMC)", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12652008/" },
      { label: "NICE-Leitlinie NG87: ADHS – Diagnostik und Behandlung", href: "https://www.nice.org.uk/guidance/ng87/" },
    ]}
    ctaTitle="Frust früher erkennen und gezielter regulieren"
    ctaDescription="Therapeutisch lassen sich persönliche Auslöser, körperliche Frühwarnzeichen und konkrete Reaktionsalternativen systematisch erarbeiten und einüben."
    previous={{ href: "/adhs-langeweile-und-abwechslung", label: "ADHS und Langeweile" }}
    next={{ href: "/adhs-spaete-diagnose", label: "ADHS-Spätdiagnose" }}
  />;
}
