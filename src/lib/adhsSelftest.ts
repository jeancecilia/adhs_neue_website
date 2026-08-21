export const SELFTEST_INSTRUMENT_VERSION = "ADHS-ST-0.2";
export const SELFTEST_CONSENT_VERSION = "CONSENT-0.1";
export const SELFTEST_SESSION_KEY = "adhs-praxis.selftest.0.2";
export const SELFTEST_LINK_KEY = "adhs-praxis.selftest.linked-response.v1";

export type SelfTestDomain =
  | "attention"
  | "activation"
  | "impulsivity"
  | "impairment"
  | "compensation";

export type SelfTestItem = {
  id: string;
  domain: SelfTestDomain;
  title: string;
  question: string;
  scale: "frequency" | "impact";
};

export const FREQUENCY_OPTIONS = [
  "Nie",
  "Selten",
  "Gelegentlich",
  "Häufig",
  "Fast immer",
] as const;

export const IMPACT_OPTIONS = [
  "Gar nicht",
  "Leicht",
  "Mäßig",
  "Stark",
  "Sehr stark",
] as const;

export const SELFTEST_ITEMS: SelfTestItem[] = [
  {
    id: "A01",
    domain: "attention",
    title: "Aufgabenabschluss",
    question:
      "Wie oft fällt es Ihnen schwer, die letzten notwendigen Schritte einer Aufgabe zu erledigen, obwohl der Hauptteil bereits geschafft ist?",
    scale: "frequency",
  },
  {
    id: "A02",
    domain: "attention",
    title: "Aufgabenwechsel vor Abschluss",
    question:
      "Wie oft beginnen Sie etwas Neues, obwohl eine vorherige Aufgabe noch nicht abgeschlossen ist?",
    scale: "frequency",
  },
  {
    id: "A03",
    domain: "attention",
    title: "Organisation / Priorisierung",
    question:
      "Wie oft fällt es Ihnen schwer, mehrere anstehende Aufgaben in eine sinnvolle Reihenfolge zu bringen?",
    scale: "frequency",
  },
  {
    id: "A05",
    domain: "attention",
    title: "Verpflichtungen erinnern",
    question:
      "Wie oft erinnern Sie sich an eine Verpflichtung erst, wenn sie bereits dringend oder überfällig ist?",
    scale: "frequency",
  },
  {
    id: "A07",
    domain: "attention",
    title: "Aufschieben anspruchsvoller Aufgaben",
    question:
      "Wie oft schieben Sie Aufgaben hinaus, die längere konzentrierte Denkarbeit verlangen, obwohl dadurch später Zeitdruck entsteht?",
    scale: "frequency",
  },
  {
    id: "A08",
    domain: "attention",
    title: "Deadline-Aktivierung",
    question:
      "Wie oft beginnen Sie anspruchsvolle Aufgaben erst dann, wenn eine Frist oder anderer äußerer Druck unmittelbar wird?",
    scale: "frequency",
  },
  {
    id: "A09",
    domain: "attention",
    title: "Daueraufmerksamkeit",
    question:
      "Wie oft verlieren Sie bei längeren oder gleichförmigen Tätigkeiten den roten Faden, obwohl Sie bei der Sache bleiben möchten?",
    scale: "frequency",
  },
  {
    id: "A10",
    domain: "attention",
    title: "Aufmerksamkeitsverlust bei Arbeitsschritten",
    question:
      "Wie oft müssen Sie einen Arbeitsschritt erneut prüfen oder wiederholen, weil Sie zwischendurch nicht mehr sicher sind, was Sie bereits getan haben?",
    scale: "frequency",
  },
  {
    id: "A11",
    domain: "attention",
    title: "Gesprächsaufmerksamkeit",
    question:
      "Wie oft merken Sie während eines Gesprächs, dass Sie einen Teil des Gesagten nicht aufgenommen haben, obwohl Sie zuhören wollten?",
    scale: "frequency",
  },
  {
    id: "A12",
    domain: "attention",
    title: "Ablenkbarkeit",
    question:
      "Wie oft verlieren Sie bei einer Aufgabe durch nebensächliche Reize oder spontan auftauchende Gedanken den Faden?",
    scale: "frequency",
  },
  {
    id: "A13",
    domain: "attention",
    title: "Gegenstände verlegen",
    question:
      "Wie oft müssen Sie nach alltäglich benötigten Dingen suchen, weil Sie nicht mehr wissen, wo Sie sie abgelegt haben?",
    scale: "frequency",
  },
  {
    id: "A14",
    domain: "attention",
    title: "Flüchtigkeitsfehler",
    question:
      "Wie oft passieren Ihnen vermeidbare Fehler, weil Sie ein Detail übersehen, das Sie eigentlich kennen oder beachten wollten?",
    scale: "frequency",
  },
  {
    id: "B01",
    domain: "activation",
    title: "Körperlicher Bewegungsdrang",
    question:
      "Wie oft entsteht beim längeren Sitzen ein deutliches körperliches Bedürfnis, sich zu bewegen oder die Position zu verändern?",
    scale: "frequency",
  },
  {
    id: "B03",
    domain: "activation",
    title: "Unbehagen bei Untätigkeit",
    question:
      "Wie oft wird längeres Nichtstun vor allem wegen eines inneren Bewegungs- oder Aktivitätsdrangs unangenehm?",
    scale: "frequency",
  },
  {
    id: "B04",
    domain: "activation",
    title: "Innere Getriebenheit",
    question:
      "Wie oft erleben Sie eine anhaltende innere Getriebenheit, auch wenn äußerlich Ruhe möglich wäre?",
    scale: "frequency",
  },
  {
    id: "B06",
    domain: "activation",
    title: "Beschäftigung suchen",
    question:
      "Wie oft beginnen Sie ohne äußere Notwendigkeit eine neue Beschäftigung, weil es schwerfällt, untätig zu bleiben?",
    scale: "frequency",
  },
  {
    id: "C01",
    domain: "impulsivity",
    title: "Verbale Impulsivität",
    question:
      "Wie oft sagen Sie etwas spontan, bevor Sie kurz prüfen konnten, ob Zeitpunkt oder Inhalt passend sind?",
    scale: "frequency",
  },
  {
    id: "C02",
    domain: "impulsivity",
    title: "Vorschnelles Antworten",
    question:
      "Wie oft beginnen Sie zu antworten, bevor Ihr Gegenüber eine Frage oder Erklärung beendet hat?",
    scale: "frequency",
  },
  {
    id: "C03",
    domain: "impulsivity",
    title: "Warten",
    question:
      "Wie oft fällt es Ihnen schwer, ruhig abzuwarten, wenn Sie auf etwas oder jemanden warten müssen?",
    scale: "frequency",
  },
  {
    id: "C04",
    domain: "impulsivity",
    title: "Unterbrechen",
    question:
      "Wie oft unterbrechen Sie andere, weil Sie Ihren eigenen Gedanken sofort einbringen möchten?",
    scale: "frequency",
  },
  {
    id: "C05",
    domain: "impulsivity",
    title: "Spontane Entscheidungen",
    question:
      "Wie oft treffen Sie im Alltag spontan eine Entscheidung und beschäftigen sich erst danach ernsthaft mit möglichen Nachteilen?",
    scale: "frequency",
  },
  {
    id: "D01",
    domain: "impairment",
    title: "Arbeit / Studium",
    question:
      "In welchem Ausmaß beeinträchtigen die beschriebenen Schwierigkeiten Ihre Leistung oder Zuverlässigkeit bei Arbeit, Studium oder Ausbildung?",
    scale: "impact",
  },
  {
    id: "D02",
    domain: "impairment",
    title: "Alltag / Verwaltung",
    question:
      "In welchem Ausmaß beeinträchtigen die beschriebenen Schwierigkeiten die Organisation von Haushalt, Papierkram, Terminen oder anderen alltäglichen Verpflichtungen?",
    scale: "impact",
  },
  {
    id: "D03",
    domain: "impairment",
    title: "Beziehungen",
    question:
      "In welchem Ausmaß beeinträchtigen die beschriebenen Schwierigkeiten Partnerschaft, Familie, Freundschaften oder andere zwischenmenschliche Beziehungen?",
    scale: "impact",
  },
  {
    id: "D04",
    domain: "impairment",
    title: "Langfristige Zielerreichung",
    question:
      "In welchem Ausmaß erschweren die beschriebenen Schwierigkeiten, wichtige persönliche Vorhaben über längere Zeit zuverlässig umzusetzen?",
    scale: "impact",
  },
  {
    id: "D05",
    domain: "compensation",
    title: "Kompensationsaufwand",
    question:
      "Wie viel zusätzliche Zeit, Planung oder Energie benötigen Sie, um trotz dieser Schwierigkeiten im Alltag zuverlässig zu funktionieren?",
    scale: "impact",
  },
];

export type SelfTestAnswers = Record<string, number>;

export type SelfTestScores = {
  meanAttention: number;
  meanActivation: number;
  meanImpulsivity: number;
  impairmentMean: number;
  compensationScore: number;
  frequentAttention: number;
  frequentActivation: number;
  frequentImpulsivity: number;
  attentionPercent: number;
  activationPercent: number;
  impulsivityPercent: number;
  impairmentPercent: number;
  hasHighImpairment: boolean;
};

function meanFor(answers: SelfTestAnswers, domain: SelfTestDomain): number {
  const values = SELFTEST_ITEMS.filter((item) => item.domain === domain).map(
    (item) => answers[item.id],
  );
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function frequentFor(answers: SelfTestAnswers, domain: SelfTestDomain): number {
  return SELFTEST_ITEMS.filter((item) => item.domain === domain).filter(
    (item) => answers[item.id] >= 3,
  ).length;
}

export function hasCompleteSelfTestAnswers(
  answers: SelfTestAnswers,
): boolean {
  return SELFTEST_ITEMS.every((item) => {
    const value = answers[item.id];
    return Number.isInteger(value) && value >= 0 && value <= 4;
  });
}

export function scoreSelfTest(answers: SelfTestAnswers): SelfTestScores {
  if (!hasCompleteSelfTestAnswers(answers)) {
    throw new Error("All 26 self-test answers are required before scoring.");
  }

  const meanAttention = meanFor(answers, "attention");
  const meanActivation = meanFor(answers, "activation");
  const meanImpulsivity = meanFor(answers, "impulsivity");
  const impairmentMean = meanFor(answers, "impairment");
  const compensationScore = answers.D05;

  return {
    meanAttention,
    meanActivation,
    meanImpulsivity,
    impairmentMean,
    compensationScore,
    frequentAttention: frequentFor(answers, "attention"),
    frequentActivation: frequentFor(answers, "activation"),
    frequentImpulsivity: frequentFor(answers, "impulsivity"),
    attentionPercent: Math.round((meanAttention / 4) * 100),
    activationPercent: Math.round((meanActivation / 4) * 100),
    impulsivityPercent: Math.round((meanImpulsivity / 4) * 100),
    impairmentPercent: Math.round((impairmentMean / 4) * 100),
    hasHighImpairment: ["D01", "D02", "D03", "D04"].some(
      (id) => answers[id] >= 3,
    ),
  };
}

export function compensationLabel(value: number): string {
  return IMPACT_OPTIONS[value] ?? "Keine Angabe";
}
