import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createPageMetadata } from "@/lib/metadata";
import KnowledgeArticlePage from "@/components/KnowledgeArticlePage";

const source = readFileSync(join(process.cwd(), "src/content/adhs-spaete-diagnose.md"), "utf8");

export const metadata = createPageMetadata({
  title: "ADHS-Spätdiagnose: Gründe, Ablauf und Bedeutung",
  description: "Warum ADHS manchmal erst im Erwachsenenalter erkannt wird, wie eine fundierte Diagnostik abläuft und wie sich eine späte Diagnose emotional auswirken kann.",
  path: "/adhs-spaete-diagnose",
  keywords: ["ADHS Spätdiagnose", "späte Diagnose ADHS", "Spätdiagnose ADHS Erwachsene", "ADHS erst im Erwachsenenalter erkannt"],
  openGraphType: "article",
});

export default function AdhsSpaeteDiagnosePage() {
  return <KnowledgeArticlePage
    title="ADHS-Spätdiagnose bei Erwachsenen"
    breadcrumb="ADHS-Spätdiagnose"
    eyebrow="Diagnostik & Einordnung"
    readTime="ca. 19 Min. Lesezeit"
    intro="Eine Diagnose im Erwachsenenalter kann frühere Schwierigkeiten verständlicher machen – und zugleich Trauer, Zweifel oder Wut auslösen. Eine gute Diagnostik prüft deshalb nicht nur Symptome, sondern die gesamte Entwicklung und mögliche Alternativerklärungen."
    path="/adhs-spaete-diagnose"
    source={source}
    sources={[
      { label: "NICE-Leitlinie NG87: Empfehlungen zur ADHS-Diagnostik", href: "https://www.nice.org.uk/guidance/ng87/chapter/recommendations" },
      { label: "Lived Experiences of Receiving an ADHD Diagnosis in Adulthood (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/42216788/" },
      { label: "Miss. Diagnosis: ADHD in Adult Women – systematische Übersicht (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/36995125/" },
      { label: "Adult-Onset ADHD: Critical Analysis and Alternative Explanations (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/33738692/" },
      { label: "Europäischer Konsens zu Diagnostik und Behandlung von Erwachsenen-ADHS (PubMed)", href: "https://pubmed.ncbi.nlm.nih.gov/30453134/" },
    ]}
    ctaTitle="ADHS-Verdacht im Erwachsenenalter fundiert abklären"
    ctaDescription="Eine strukturierte Diagnostik verbindet biografische Entwicklung, aktuelle Beeinträchtigungen, standardisierte Verfahren und eine sorgfältige differentialdiagnostische Einordnung."
    previous={{ href: "/adhs-frustrationstoleranz", label: "ADHS und Frustrationstoleranz" }}
    next={{ href: "/adhs-test-muenchen", label: "ADHS-Diagnostik in München" }}
  />;
}
