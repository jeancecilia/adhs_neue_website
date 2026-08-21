import type { Metadata } from "next";
import Link from "next/link";
import AdhsSelfTest from "@/components/AdhsSelfTest";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ADHS-Selbsttest & ADHS-Test online für Erwachsene",
  description:
    "ADHS-Selbsttest und ADHS-Test online für Erwachsene: 26 Fragen kostenlos beantworten, direktes Ergebnisprofil erhalten – ohne Anmeldung oder E-Mail.",
  keywords: [
    "ADHS Selbsttest",
    "ADHS Test online",
    "ADHS Selbsttest Erwachsene",
    "ADHS Test Erwachsene",
    "ADHS Online Test Erwachsene",
    "Habe ich ADHS Test",
    "ADHS Symptome Erwachsene Test",
    "ADHS Selbsttest kostenlos",
  ],
  alternates: { canonical: "/adhs-selbsttest-erwachsene" },
  openGraph: {
    title: "ADHS-Selbsttest & ADHS-Test online für Erwachsene",
    description:
      "Kostenloser ADHS-Test online: 26 Fragen für Erwachsene, direktes persönliches Ergebnisprofil und keine Anmeldung erforderlich.",
    url: "/adhs-selbsttest-erwachsene",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "ADHS-Selbsttest & ADHS-Test online für Erwachsene",
    description:
      "Kostenloser ADHS-Test online mit 26 Fragen, direktem Ergebnisprofil und ohne Registrierung.",
    images: [],
  },
};

const FAQS = [
  {
    question: "Ist dieser ADHS-Test online eine Diagnose?",
    answer:
      "Nein. Der ADHS-Selbsttest zeigt, in welchen Bereichen Sie häufig ADHS-typische Schwierigkeiten angegeben haben. Eine ADHS-Diagnose erfordert eine umfassendere diagnostische Abklärung.",
  },
  {
    question: "Wie lange dauert der Test?",
    answer: "Etwa 5 Minuten. Der Selbsttest umfasst 26 Fragen.",
  },
  {
    question: "Muss ich meine E-Mail-Adresse angeben?",
    answer:
      "Nein. Für den Selbsttest sind weder Name noch E-Mail-Adresse oder Telefonnummer erforderlich.",
  },
  {
    question: "Werden meine Antworten gespeichert?",
    answer:
      "Nach Ihrer ausdrücklichen Einwilligung werden die Testantworten unter einer zufällig erzeugten Kennung verarbeitet und pseudonymisiert zur statistischen Prüfung und Weiterentwicklung des Fragebogens genutzt. Details stehen in den Datenschutzhinweisen.",
  },
  {
    question: "Warum werden Alter und bestehende Diagnose abgefragt?",
    answer:
      "Diese freiwilligen Angaben helfen dabei zu untersuchen, wie zuverlässig einzelne Fragen bei unterschiedlichen Gruppen funktionieren. Sie sind nicht notwendig, um Sie persönlich zu identifizieren.",
  },
  {
    question: "Kann ich mit einem auffälligen Ergebnis sicher sein, ADHS zu haben?",
    answer:
      "Nein. Verschiedene andere Ursachen können ähnliche Beschwerden hervorrufen. Ein auffälliges Ergebnis kann ein sinnvoller Anlass sein, eine diagnostische Abklärung in Betracht zu ziehen.",
  },
  {
    question:
      "Warum unterscheidet der Test zwischen innerer Unruhe und sichtbarer Hyperaktivität?",
    answer:
      "Hyperaktivität zeigt sich bei Erwachsenen nicht immer als offensichtlich starke motorische Aktivität. Innere Getriebenheit oder Schwierigkeiten mit längerer Ruhe können ebenfalls relevant sein.",
  },
];

const TRUST_BADGES = [
  {
    number: "01",
    title: "Wissenschaftlich fundiert",
    text: "Orientierung an diagnostischen Standards und aktueller ADHS-Forschung.",
  },
  {
    number: "02",
    title: "Datenbasiert entwickelt",
    text: "Mehrere öffentlich verfügbare Forschungsdatensätze wurden ausgewertet.",
  },
  {
    number: "03",
    title: "Für Erwachsene konzipiert",
    text: "Berücksichtigt auch innere Unruhe, Kompensation und exekutive Schwierigkeiten.",
  },
  {
    number: "04",
    title: "Direktes Ergebnis",
    text: "Keine Registrierung und keine E-Mail-Adresse notwendig.",
  },
];

const METHOD_STEPS = [
  ["1", "Diagnostische Kriterien", "Aktuelle Kriterien für ADHS im Erwachsenenalter."],
  ["2", "Psychometrische Forschung", "Publizierte Forschung zu etablierten Erwachsenen-ADHS-Instrumenten."],
  ["3", "Forschungsdaten", "Mehrere öffentlich verfügbare Datensätze mit über 4.700 Beobachtungen."],
  ["4", "Datenanalyse", "Symptomstruktur, Diskrimination, Altersunterschiede, Überschneidungen und Funktionsbeeinträchtigung."],
  ["5", "Eigenständige Items", "Erwachsenenspezifische, neu formulierte Fragen."],
  ["6", "Fortlaufende Überprüfung", "Pseudonymisierte Testdaten werden statistisch weiter geprüft."],
] as const;

const PROFILE_AREAS = [
  {
    title: "Aufmerksamkeit & Organisation",
    text: "Aufgabenabschluss, Priorisierung, Ablenkbarkeit, Daueraufmerksamkeit und Erinnern an Verpflichtungen.",
  },
  {
    title: "Innere Unruhe & Aktivierung",
    text: "Nicht nur sichtbares Zappeln, sondern auch innere Getriebenheit und Schwierigkeiten mit längerer Untätigkeit.",
  },
  {
    title: "Impulsivität",
    text: "Vorschnelles Antworten, Unterbrechen, Warten und spontane Entscheidungen.",
  },
  {
    title: "Beeinträchtigung & Kompensation",
    text: "Nicht nur die Anzahl von Symptomen, sondern auch tatsächliche Auswirkungen und zusätzlicher Alltagsaufwand.",
  },
];

const DATASETS = [
  {
    title: "Datensatz 1 – Symptomstruktur bei Erwachsenen",
    sample: "n = 1.149",
    text: "Item-Level-Daten zur Faktorenstruktur, zu Itemzusammenhängen, Redundanz sowie zur Trennung von Unaufmerksamkeit, Hyperaktivität und Impulsivität.",
    links: [
      ["OSF-Datensatz", "https://osf.io/sd6f5/"],
      ["Publikation", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10804265/"],
    ],
  },
  {
    title: "Datensatz 2 – Altersunterschiede",
    sample: "n = 600 · Alter 20–80 Jahre",
    text: "Analyse altersbezogenen Differential Item Functionings. Deshalb berücksichtigt der Test neben sichtbarer Unruhe auch innere Getriebenheit und Aktivierungsprobleme.",
    links: [
      ["OSF-Datensatz", "https://osf.io/rwqtn/"],
      ["Studie", "https://www.medrxiv.org/content/10.64898/2026.04.06.26350233v1"],
    ],
  },
  {
    title: "Datensatz 3 – CogReal 2.0",
    sample: "n = 563",
    text: "Maße zu ADHS, Depression, Angst, autistischen Merkmalen, funktioneller Beeinträchtigung und Lebensqualität – genutzt zur Betrachtung differentialdiagnostischer Überschneidungen.",
    links: [["Mendeley Data", "https://data.mendeley.com/datasets/4vstg35mnd"]],
  },
  {
    title: "Datensatz 4 – ADHS und Funktionsfähigkeit",
    sample: "n = 2.173",
    text: "ADHS-Merkmale sowie berufliche und soziale Funktionsaspekte – relevant für den Zusammenhang von Symptomen, Funktionsfähigkeit und Kompensation.",
    links: [["Mendeley Data", "https://data.mendeley.com/datasets/s9sdxddnnx"]],
  },
  {
    title: "Datensatz 5 – Klinische Interviewdaten",
    sample: "n = 200",
    text: "ADHS-Symptomdaten, DIVA 2.0, MINI, DASS-21 und klinische Zusatzinformationen. Die spezielle Population wird ausdrücklich nicht als deutsche Normstichprobe verwendet.",
    links: [["Mendeley Data", "https://data.mendeley.com/datasets/mz5w4f79b7"]],
  },
  {
    title: "Datensatz 6 – ATTLAPSE",
    sample: "n = 56",
    text: "28 Erwachsene mit diagnostizierter ADHS und 28 Kontrollpersonen sowie objektive Aufmerksamkeits- und EEG-Daten – genutzt zur zusätzlichen Prüfung informativer Symptombereiche.",
    links: [["Zenodo", "https://zenodo.org/records/21472774"]],
  },
] as const;

export default function AdhsSelbsttestPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.baseUrl}/adhs-selbsttest-erwachsene#webpage`,
        url: `${siteConfig.baseUrl}/adhs-selbsttest-erwachsene`,
        name: "ADHS-Selbsttest & ADHS-Test online für Erwachsene",
        description: metadata.description,
        inLanguage: "de-DE",
        isPartOf: { "@id": `${siteConfig.baseUrl}/#website` },
        about: { "@id": `${siteConfig.baseUrl}/#praxis` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.baseUrl}/adhs-selbsttest-erwachsene#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="w-full bg-[#faf9f8]">
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "" },
          { name: "ADHS-Selbsttest für Erwachsene", path: "/adhs-selbsttest-erwachsene" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden border-b border-[rgba(47,79,79,0.1)] bg-[#fdfbf7] py-12 sm:py-20">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f0cc65]/20 blur-3xl" aria-hidden="true" />
        <div className="container-shell relative max-w-5xl">
          <nav className="mb-7 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="font-medium text-[#173838]">ADHS-Selbsttest</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <p className="eyebrow mb-3">Kostenloser ADHS-Selbsttest für Erwachsene</p>
              <h1 className="max-w-3xl text-[38px] leading-[1.05] text-[#173838] sm:text-[58px]">
                ADHS-Selbsttest & ADHS-Test online für Erwachsene
              </h1>
              <p className="mt-5 max-w-3xl text-[20px] font-semibold leading-[1.4] text-[#7a5600] sm:text-[25px]">
                Wie deutlich zeigen sich bei Ihnen typische ADHS-Muster?
              </p>
              <p className="mt-5 max-w-3xl text-[16px] leading-[1.75] text-slate-700 sm:text-[18px]">
                Dieser kostenlose ADHS-Test online umfasst 26 strukturierte Fragen zu Aufmerksamkeit, Organisation, innerer Unruhe, Impulsivität und Beeinträchtigung im Alltag. Sie erhalten direkt ein persönliches Ergebnisprofil – ohne Anmeldung oder E-Mail-Adresse. Die Konzeption orientiert sich an aktuellen diagnostischen Standards, psychometrischer Forschung und öffentlich verfügbaren ADHS-Forschungsdaten.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#selbsttest" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5">
                  Kostenlosen ADHS-Test online starten
                </a>
                <a href="#wissenschaft" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.22)] bg-white px-8 py-3.5 text-[14px] font-bold text-[#173838] hover:bg-slate-50">
                  Wissenschaftliche Grundlagen
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[rgba(47,79,79,0.14)] bg-white p-6 card-shadow">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a5600]">Ihr Test auf einen Blick</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-6">
                <div><dt className="text-[28px] font-black text-[#173838]">26</dt><dd className="text-[12px] font-semibold text-slate-600">strukturierte Fragen</dd></div>
                <div><dt className="text-[28px] font-black text-[#173838]">≈ 5</dt><dd className="text-[12px] font-semibold text-slate-600">Minuten Dauer</dd></div>
                <div><dt className="text-[28px] font-black text-[#173838]">0 €</dt><dd className="text-[12px] font-semibold text-slate-600">kostenlos</dd></div>
                <div><dt className="text-[28px] font-black text-[#173838]">Direkt</dt><dd className="text-[12px] font-semibold text-slate-600">persönliches Profil</dd></div>
              </dl>
              <p className="mt-6 border-t border-slate-100 pt-5 text-[12px] leading-relaxed text-slate-500">Keine E-Mail · kein Name · keine Registrierung</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(47,79,79,0.1)] bg-white py-8">
        <div className="container-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {TRUST_BADGES.map((badge) => (
            <article key={badge.number} className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-5">
              <span className="text-[11px] font-black tracking-[0.14em] text-[#9a6900]">{badge.number}</span>
              <h2 className="mt-2 text-[18px] font-bold text-[#173838]">{badge.title}</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{badge.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="selbsttest" className="scroll-mt-24 py-14 sm:py-20">
        <div className="container-shell max-w-4xl">
          <div className="mb-8 text-center">
            <p className="eyebrow mb-3">ADHS-Test online · kostenlos · vertraulich</p>
            <h2 className="text-[30px] text-[#173838] sm:text-[42px]">Kostenlosen ADHS-Selbsttest online starten</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">Der ADHS-Test online ist direkt in diese Seite eingebettet. Ihre Antworten erscheinen weder in der URL noch werden sie an Werbeplattformen übertragen. Das persönliche Ergebnis wird unmittelbar nach Abschluss angezeigt.</p>
            <p className="mx-auto mt-3 max-w-2xl text-[13px] font-semibold leading-relaxed text-[#7a5600]">Wichtig: Der Selbsttest ist keine Diagnose und zeigt keine ADHS-Wahrscheinlichkeit an.</p>
          </div>
          <AdhsSelfTest />
        </div>
      </section>

      <section id="wissenschaft" className="scroll-mt-24 border-y border-[rgba(47,79,79,0.1)] bg-white py-16 sm:py-24">
        <div className="container-shell max-w-5xl">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Entwicklung & Transparenz</p>
            <h2 className="text-[30px] leading-[1.15] text-[#173838] sm:text-[42px]">Wie wurde dieser Online-ADHS-Selbsttest entwickelt?</h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-slate-700">Dieser ADHS-Test online ist nicht als einfacher Symptomcheck konzipiert.</p>
            <p className="mt-3 text-[16px] leading-[1.75] text-slate-700">Die Struktur und Auswahl der Fragen wurde auf Grundlage diagnostischer Kriterien, aktueller ADHS-Forschung und der statistischen Auswertung öffentlich zugänglicher Forschungsdaten entwickelt. Für die Entwicklung wurden mehrere Datensätze mit zusammen <strong>mehr als 4.700 Teilnehmerbeobachtungen</strong> ausgewertet.</p>
            <p className="mt-3 text-[16px] leading-[1.75] text-slate-700">Die Fragen wurden anschließend <strong>eigenständig formuliert</strong>. Geschützte Frageformulierungen kommerzieller Testverfahren werden nicht reproduziert.</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {METHOD_STEPS.map(([number, title, text]) => (
              <article key={number} className="relative rounded-2xl border border-slate-200 bg-[#faf9f8] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#173838] text-[13px] font-black text-white">{number}</span>
                <h3 className="mt-4 text-[19px] font-bold text-[#173838]">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[28px] border border-[#dec77f] bg-[#fffaf0] p-7 sm:p-9">
            <h3 className="text-[24px] font-bold text-[#173838]">Was bedeutet „wissenschaftlich fundiert“ bei diesem Test?</h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-700">Der Fragebogen wurde datenbasiert auf Grundlage diagnostischer Kriterien, publizierter psychometrischer Forschung und öffentlich zugänglicher Forschungsdatensätze entwickelt. Die hier verwendeten eigenständigen Fragen werden fortlaufend psychometrisch überprüft.</p>
            <p className="mt-3 text-[15px] font-semibold leading-[1.75] text-[#5f480e]">Solange die eigene klinische Validierung nicht abgeschlossen ist, ersetzt das Ergebnis keine diagnostische Untersuchung und wird nicht als klinische Diagnose interpretiert.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-3">Mehrdimensionales Profil</p>
            <h2 className="text-[30px] text-[#173838] sm:text-[42px]">ADHS bei Erwachsenen ist mehr als eine Punktzahl</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-700">Der Selbsttest zeigt keine vermeintliche ADHS-Wahrscheinlichkeit. Er ordnet Ihre Antworten in vier inhaltlich getrennte Bereiche ein.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PROFILE_AREAS.map((area, index) => (
              <article key={area.title} className="rounded-2xl border border-slate-200 bg-white p-7 card-shadow">
                <span className="text-[12px] font-black text-[#9a6900]">0{index + 1}</span>
                <h3 className="mt-2 text-[22px] font-bold text-[#173838]">{area.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{area.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#173838] p-7 text-white sm:p-9">
            <h3 className="text-[25px] font-bold text-white">Warum Kompensation separat erfasst wird</h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-200">Viele Erwachsene entwickeln Kalender, Erinnerungen, starre Routinen oder Kontrollmechanismen, mit denen sie Schwierigkeiten teilweise ausgleichen. Dadurch kann der Alltag nach außen zuverlässig wirken, obwohl dafür erheblich mehr Zeit und Energie erforderlich sind. Deshalb erfasst der Test sichtbare Beeinträchtigung und subjektiven Kompensationsaufwand getrennt.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[rgba(47,79,79,0.1)] bg-white py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <p className="eyebrow mb-3">Offen dokumentiert</p>
          <h2 className="text-[30px] text-[#173838] sm:text-[42px]">Wissenschaftliche Datengrundlage</h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-700">Die folgenden Datensätze wurden als Entwicklungsgrundlage ausgewertet. Sie dienen nicht als deutsche Normstichprobe und validieren die eigenen 26 Items nicht automatisch.</p>
          <div className="mt-9 space-y-4">
            {DATASETS.map((dataset, index) => (
              <details key={dataset.title} open={index === 0} className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#faf9f8]">
                <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 [&::-webkit-details-marker]:hidden">
                  <span><span className="block text-[16px] font-bold text-[#173838] sm:text-[18px]">{dataset.title}</span><span className="mt-1 block text-[12px] font-semibold text-[#7a5600]">{dataset.sample}</span></span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[#173838] transition-transform group-open:rotate-180" aria-hidden="true">↓</span>
                </summary>
                <div className="border-t border-slate-200 bg-white px-6 py-5">
                  <p className="text-[14px] leading-[1.7] text-slate-700">{dataset.text}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {dataset.links.map(([label, href]) => (
                      <a key={href} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center font-bold text-[#173838] underline decoration-[#c99a1d] underline-offset-4">{label} ↗</a>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-shell max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 card-shadow sm:p-9">
              <p className="eyebrow mb-3">Diagnostische Standards</p>
              <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[35px]">Orientierung an aktuellen diagnostischen Standards</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-700">Die Entwicklung berücksichtigt zentrale diagnostische Bereiche von ADHS im Erwachsenenalter und die in der aktuellen deutschen S3-Leitlinie beschriebenen diagnostischen Grundprinzipien.</p>
              <a href="https://register.awmf.org/de/leitlinien/detail/028-045" target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-[44px] items-center font-bold text-[#173838] underline decoration-[#c99a1d] underline-offset-4">S3-Leitlinie bei der AWMF ↗</a>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-500">Die S3-Leitlinie empfiehlt oder validiert nicht diesen konkreten Fragebogen.</p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-[#fffaf0] p-7 sm:p-9">
              <p className="eyebrow mb-3">Klare Grenze</p>
              <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[35px]">Was der Selbsttest nicht leisten kann</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-slate-700">Ein Selbsttest kann auffällige Muster sichtbar machen, aber nicht zuverlässig klären, wodurch diese Beschwerden verursacht werden. Ähnliche Schwierigkeiten können unter anderem bei Schlafproblemen, anhaltendem Stress, Depressionen, Angststörungen, anderen psychischen oder körperlichen Erkrankungen sowie Medikamenten- oder Substanzeinflüssen auftreten.</p>
              <p className="mt-3 text-[15px] leading-[1.75] text-slate-700">Eine ADHS-Diagnose berücksichtigt zusätzlich die Entwicklung seit Kindheit und Jugend, verschiedene Lebensbereiche, funktionelle Beeinträchtigung und mögliche Differentialdiagnosen.</p>
              <Link href="/adhs-test-muenchen" className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-[14px] font-bold text-white">ADHS diagnostisch abklären lassen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[rgba(47,79,79,0.1)] bg-white py-16 sm:py-24">
        <div className="container-shell max-w-3xl">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[30px] text-[#173838] sm:text-[42px]">Fragen zum ADHS-Selbsttest und ADHS-Test online</h2>
          </div>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-[#173838] py-16 text-center text-white">
        <div className="container-shell max-w-3xl">
          <p className="eyebrow-dark mb-3">Strukturierte Diagnostik in München</p>
          <h2 className="text-[31px] leading-[1.15] text-white sm:text-[42px]">Sie möchten Klarheit statt nur einen Selbsttest?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.7] text-slate-200">Wenn Sie sich in mehreren Bereichen wiedererkennen und wissen möchten, ob tatsächlich ADHS vorliegt, können Sie eine strukturierte diagnostische Abklärung anfragen.</p>
          <p className="mt-5 text-[18px] font-bold text-[#f0cc65]">ADHS-Diagnostik für Erwachsene – 199 €</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/termin?anliegen=screening" className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[14px] font-bold text-[#173838] shadow-lg">ADHS-Diagnostik anfragen</Link>
            <Link href="/adhs-test-muenchen" className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-[14px] font-bold text-white hover:bg-white/10">Ablauf der Diagnostik</Link>
          </div>
          <p className="mt-4 text-[12px] text-slate-300">Selbstzahlerleistung · transparente Kosten · Terminvereinbarung online</p>
        </div>
      </section>
    </div>
  );
}
