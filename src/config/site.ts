export const siteConfig = {
  socialImage: {
    url: "/images/portrait-jean-maurice-menzel.webp",
    width: 1200,
    height: 630,
    alt: "ADHS Praxis München – Jean-Maurice Cecilia-Menzel",
  },
  name: "ADHS Praxis München",
  shortName: "ADHS PRAXIS MÜNCHEN",
  domain: "neurofeedback-praxis-muenchen.de",
  baseUrl: "https://neurofeedback-praxis-muenchen.de",
  logo: {
    url: "/brand/logo-mark.svg",
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://www.amazon.de/Jean-Maurice-Cecilia-Menzel/e/B0B2M4LK3S",
    "https://www.udemy.com/user/jean-maurice-cecilia-menzel-3/",
    "https://www.youtube.com/@adhs-hilfe",
  ],
  whatsappDisplay: "+49 174 3243387",
  whatsappHref: "https://wa.me/491743243387",
  email: "kontakt@neurofeedback-praxis-muenchen.de",
  emailHref: "mailto:kontakt@neurofeedback-praxis-muenchen.de",
  addressLine1: "Hildeboldstraße 1",
  postalCity: "80797 München",
  practitioner: "Jean-Maurice Cecilia-Menzel",
  credentials: [
    "Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie",
  ],
  regulatoryAuthority: "Referat für Gesundheit und Umwelt der Landeshauptstadt München",
  professionalRegulations: [
    {
      name: "Heilpraktikergesetz (HeilprG)",
      link: "https://www.gesetze-im-internet.de/heilprg/index.html",
    },
    {
      name: "Erste Durchführungsverordnung zum Heilpraktikergesetz (HeilprGDV 1)",
      link: "https://www.gesetze-im-internet.de/heilprgdv_1/index.html",
    },
  ],
  insurance: {
    name: "Berufshaftpflichtversicherung für Heilpraktiker für Psychotherapie",
    address: "Deutschland",
    scope: "Deutschland / EU",
  },
  description:
    "Psychotherapie, ADHS-Diagnostik und Neurofeedback für Erwachsene in München. Schwerpunkt ADHS sowie ausgewählte Angststörungen und depressive Beschwerden.",
  neighborhoods: ["Schwabing", "Schwabing-West", "Maxvorstadt", "Milbertshofen", "Neuhausen", "Altstadt-Lehel"],
  openingHours: "Mo-Fr 08:00-19:00 Uhr (Sa/So nach Vereinbarung)",
  geo: {
    latitude: 48.1662598,
    longitude: 11.5642558,
  },
};

export const trustPoints = [
  "Schwerpunkt ADHS im Erwachsenenalter",
  "Strukturierte ADHS-Diagnostik",
  "Wissenschaftlich fundierte Psychotherapie",
  "Ergänzendes Neurofeedback-Training",
  "Ruhige Praxis in München-Schwabing",
];

export const processSteps = [
  {
    step: "01",
    title: "Kontakt",
    blurb: "Sie teilen kurz mit, weshalb Sie einen Termin wünschen und ob bereits eine ADHS-Diagnose besteht.",
  },
  {
    step: "02",
    title: "Erstgespräch oder Diagnostik",
    blurb: "Gemeinsam wird geklärt, welche Beschwerden bestehen und welcher nächste Schritt sinnvoll ist.",
  },
  {
    step: "03",
    title: "Individueller Behandlungsplan",
    blurb: "Je nach Ausgangssituation kann eine psychotherapeutische Begleitung begonnen oder zunächst eine weitere diagnostische beziehungsweise ärztliche Abklärung empfohlen werden.",
  },
  {
    step: "04",
    title: "Begleitung",
    blurb: "Ziele, Strategien und Entwicklung werden im Verlauf regelmäßig gemeinsam überprüft.",
  },
];

export const homeContent = {
  hero: {
    eyebrow: "ADHS PRAXIS MÜNCHEN · DIAGNOSTIK · PSYCHOTHERAPIE · NEUROFEEDBACK",
    h1: "ADHS Praxis München für Erwachsene",
    subtitle: "ADHS-Diagnostik, Psychotherapie und Neurofeedback für Erwachsene.",
    description:
      "Psychotherapeutische Begleitung mit Schwerpunkt ADHS – von der diagnostischen Abklärung bis zur individuellen Behandlung.",
    bulletPoints: [
      "Strukturierte ADHS-Diagnostik bei Verdacht",
      "Psychotherapie & Alltagsstrategien für Erwachsene",
      "Ergänzendes Neurofeedback-Training",
    ],
    ctaPrimary: "ADHS-Diagnostik anfragen",
    ctaSecondary: "Erstgespräch anfragen",
    imageAlt: "Jean-Maurice Cecilia-Menzel – Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie in München-Schwabing",
    locationLabel: "Praxisstandort München",
    locationName: "Hildeboldstraße · Schwabing",
  },
  triage: {
    eyebrow: "Orientierung für Ihren Einstieg",
    h2: "Welcher nächste Schritt passt zu Ihnen?",
    description: "Wählen Sie den Bereich, der am besten zu Ihrer aktuellen Situation passt:",
    cards: [
      {
        tag: "ADHS vermutet",
        title: "ADHS-Diagnostik",
        text: "Sie möchten wissen, ob ADHS hinter Konzentrationsproblemen, Prokrastination oder innerer Unruhe steht? Die strukturierte Diagnostik bringt fundierte Klarheit.",
        linkText: "ADHS-Diagnostik kennenlernen →",
        href: "/adhs-test-muenchen",
        featured: false,
      },
      {
        tag: "ADHS diagnostiziert",
        title: "ADHS-Therapie",
        text: "Sie haben bereits eine Diagnose und suchen konkrete Alltagsstrategien, emotionale Entlastung und psychotherapeutische Begleitung für Beruf und Beziehungen.",
        linkText: "ADHS-Therapie kennenlernen →",
        href: "/adhs-therapie-muenchen",
        featured: false,
      },
      {
        tag: "Neurofeedback gesucht",
        title: "Neurofeedback",
        text: "Sie suchen ein apparatives, computergestütztes Training, um Ihre Aufmerksamkeitssteuerung und neuronale Selbstregulation gezielt zu stärken.",
        linkText: "Neurofeedback kennenlernen →",
        href: "/neurofeedback-muenchen",
        featured: false,
      },
    ],
  },
  problems: {
    eyebrow: "Problemidentifikation",
    h2: "Kommt Ihnen das bekannt vor?",
    description: "ADHS zeigt sich bei Erwachsenen facettenreich. Typische Muster aus dem Alltag:",
    items: [
      {
        title: "Prokrastination",
        text: "Sie wissen genau, was zu tun ist – schaffen es aber trotz höchster Dringlichkeit nicht anzufangen.",
      },
      {
        title: "Konzentrationsprobleme",
        text: "Monotone Aufgaben ermüden sofort, während Lieblingsthemen im stundenlangen Hyperfokus fesseln.",
      },
      {
        title: "Organisation & Zeit",
        text: "Prioritäten, Fristen und Termine gleichzeitig im Blick zu behalten, kostet enorme Kraft.",
      },
      {
        title: "Innere Unruhe",
        text: "Körperlich ruhig, aber im Kopf steht das Gedankenkarussell niemals still.",
      },
      {
        title: "Emotionale Intensität",
        text: "Kritik oder Frustration können besonders intensiv wirken. Der verbreitete Begriff RSD ist dabei keine eigenständige medizinische Diagnose.",
      },
      {
        title: "Beruf & Beziehungen",
        text: "Wiederkehrende Missverständnisse, Vergesslichkeit oder das Gefühl, unter den Möglichkeiten zu bleiben.",
      },
    ],
  },
  approach: {
    eyebrow: "Therapeutischer Ansatz",
    h2: "ADHS verstehen – und den eigenen Alltag besser steuern",
    description: "Therapie bedeutet bei uns nicht das Auswendiglernen starrer Ratschläge, sondern eine maßgeschneiderte Unterstützung entlang von vier klaren Schritten:",
    neurofeedbackNote: "Abhängig von Ausgangslage und Zielsetzung können ergänzend Neurofeedback (Training der Selbstregulation) und weitere psychotherapeutische Methoden eingesetzt werden.",
  },
};

export const faqItems = [
  {
    question: "Brauche ich bereits eine ADHS-Diagnose?",
    answer:
      "Nein. Wenn Sie ADHS vermuten, aber bislang keine diagnostische Abklärung erfolgt ist, kann zunächst eine strukturierte ADHS-Diagnostik in unserer Praxis durchgeführt werden.",
  },
  {
    question: "Wie läuft die diagnostische Einordnung ab?",
    answer:
      "Die Diagnostik in dieser Praxis erfolgt im Rahmen der heilkundlichen Erlaubnis auf dem Gebiet der Psychotherapie. Sie umfasst eine ausführliche Anamnese, standardisierte diagnostische Testverfahren und die differenzialdiagnostische Einordnung. Bei Erfüllung der Kriterien wird eine fundierte ADHS-Diagnose dokumentiert und ein schriftlicher diagnostischer Befundbericht erstellt.",
  },
  {
    question: "Werden die Kosten von den gesetzlichen Krankenkassen übernommen?",
    answer:
      "Als Privat- und Selbstzahlerpraxis rechnen wir grundsätzlich nicht direkt mit gesetzlichen Krankenkassen ab. Private Krankenversicherungen oder private Zusatzversicherungen für Heilpraktikerleistungen übernehmen die Kosten abhängig von Ihrem Tarif häufig ganz oder anteilig (nach GebüH).",
  },
  {
    question: "Wie läuft ein erstes Orientierungsgespräch ab?",
    answer:
      "Im Erstgespräch verschaffen wir uns gemeinsam einen genauen Überblick über Ihre aktuelle Situation, Schwierigkeiten und persönlichen Ziele. Darauf aufbauend besprechen wir die sinnvollsten nächsten Schritte.",
  },
];
