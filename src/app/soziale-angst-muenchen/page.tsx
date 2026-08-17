import type { Metadata } from "next";
import PsychotherapyServicePage, { type PsychotherapyServiceData } from "@/components/PsychotherapyServicePage";

export const metadata: Metadata = {
  title: "Soziale Angst & soziale Phobie – Psychotherapie München",
  description: "Psychotherapie bei sozialer Angst und sozialer Phobie in München-Schwabing: Bewertungsangst, Vermeidung und Grübeln mit KVT und Exposition behandeln.",
  alternates: { canonical: "/soziale-angst-muenchen" },
  openGraph: {
    title: "Soziale Angst & soziale Phobie – Psychotherapie in München",
    description: "Verhaltenstherapeutische Unterstützung bei Bewertungsangst, Vermeidung und belastendem Grübeln nach sozialen Situationen.",
    url: "/soziale-angst-muenchen",
  },
};

const data: PsychotherapyServiceData = {
  slug: "soziale-angst-muenchen",
  breadcrumb: "Soziale Angst",
  eyebrow: "Psychotherapie bei sozialer Angst in München-Schwabing",
  h1: "Soziale Angst & soziale Phobie – Psychotherapie in München",
  subtitle: "Bewertungsangst verstehen, Sicherheitsverhalten abbauen und soziale Situationen schrittweise wieder freier gestalten.",
  intro: [
    "Soziale Angst ist mehr als gelegentliche Nervosität. Betroffene rechnen in Gesprächen, Meetings, Präsentationen oder privaten Begegnungen damit, negativ aufzufallen, sich zu blamieren oder abgelehnt zu werden. Häufig richtet sich die Aufmerksamkeit dann stark nach innen: Wie wirke ich? Sieht man mein Erröten? Merkt jemand, dass meine Stimme zittert?",
    "Die Angst kann dazu führen, dass wichtige Situationen vermieden oder nur unter großer Anspannung bewältigt werden. In der Psychotherapie erarbeiten wir ein nachvollziehbares Modell Ihrer persönlichen Angstspirale und üben neue Erfahrungen in einem sorgfältig abgestimmten Tempo.",
  ],
  proofPoints: ["Kognitive Verhaltenstherapie", "Geplante Verhaltensexperimente", "Diskrete Einzelpraxis"],
  situationsHeading: "Wann kann Psychotherapie bei sozialer Angst sinnvoll sein?",
  situationsIntro: "Nicht jede Schüchternheit ist behandlungsbedürftig. Unterstützung kann sinnvoll werden, wenn Angst, Vermeidung oder ständiges Nachbereiten sozialer Situationen Ihre Beziehungen, beruflichen Möglichkeiten oder Lebensqualität spürbar einschränken.",
  situations: [
    { title: "Berufliche Situationen werden zur Belastung", text: "Sie vermeiden Wortmeldungen, Präsentationen, Telefonate, Bewerbungsgespräche oder gemeinsame Pausen. Schon Tage vorher kreisen die Gedanken darum, wie Sie bewertet werden könnten." },
    { title: "Kontakte und Dating werden aufgeschoben", text: "Sie wünschen sich Nähe, sagen Treffen aber ab oder bleiben sehr kontrolliert. Spontane Gespräche fühlen sich riskant an, weil Stille, Erröten oder Unsicherheit als mögliche Katastrophe erscheinen." },
    { title: "Sichtbare Angstsymptome machen zusätzlich Angst", text: "Herzklopfen, Schwitzen, Zittern, Übelkeit, Erröten oder ein Blackout werden nicht nur als unangenehm, sondern als Beweis eines vermeintlichen Versagens erlebt." },
    { title: "Nach Gesprächen beginnt langes Grübeln", text: "Sie prüfen jedes Wort, erinnern sich vor allem an kleine Unsicherheiten und gehen davon aus, andere hätten Sie negativ wahrgenommen – selbst wenn es dafür keine klaren Hinweise gibt." },
  ],
  symptomsHeading: "Typische Muster bei sozialer Angst und sozialer Phobie",
  symptomsIntro: [
    "Soziale Angst kann auf einzelne Leistungssituationen begrenzt sein oder viele Begegnungen betreffen. Entscheidend ist nicht, ob Sie grundsätzlich introvertiert sind, sondern wie stark Angst und Vermeidung Ihren Handlungsspielraum einengen.",
    "Häufig stabilisiert sich die Angst durch kurzfristig hilfreiche Schutzstrategien. Sie senken die Anspannung für einen Moment, verhindern aber, dass korrigierende Erfahrungen entstehen.",
  ],
  symptoms: [
    { title: "Angst vor Bewertung", text: "Die Erwartung, inkompetent, langweilig, seltsam oder unsicher zu wirken, steht im Vordergrund. Neutrale Reaktionen anderer werden leicht als Ablehnung interpretiert." },
    { title: "Selbstfokussierte Aufmerksamkeit", text: "Während eines Gesprächs beobachten Sie Stimme, Mimik, Körperhaltung und Gedanken so intensiv, dass kaum Aufmerksamkeit für das tatsächliche Gegenüber übrig bleibt." },
    { title: "Sicherheitsverhalten", text: "Sehr leise sprechen, Sätze vorformulieren, Blickkontakt vermeiden, das Handy festhalten, Alkohol zur Beruhigung nutzen oder nur mit vertrauten Personen erscheinen." },
    { title: "Vermeidung und Rückzug", text: "Einladungen, Seminare, Meetings, Restaurants oder neue Kontakte werden abgesagt. Das bringt kurzfristige Erleichterung, macht die nächste Situation jedoch oft noch bedrohlicher." },
    { title: "Vorwegnehmen und Nachgrübeln", text: "Vor einem Termin entstehen detaillierte Negativszenarien. Danach werden vermeintliche Fehler wiederholt geprüft, während gelungene Momente kaum gewichtet werden." },
    { title: "Hohe innere Ansprüche", text: "Viele Betroffene glauben, jederzeit souverän, interessant und fehlerfrei wirken zu müssen. Normale Unsicherheit wird dadurch als persönliches Defizit bewertet." },
  ],
  approachHeading: "Wie ich bei sozialer Angst arbeite",
  approachIntro: [
    "Die Behandlung orientiert sich an Prinzipien der kognitiven Verhaltenstherapie. Wir untersuchen nicht nur ängstliche Gedanken, sondern vor allem die Prozesse, die die Angst im Alltag aufrechterhalten: Selbstbeobachtung, Sicherheitsverhalten, Vermeidung sowie das gedankliche Vor- und Nachbereiten.",
    "Ziel ist nicht, jede Nervosität auszuschalten. Sie lernen vielmehr, soziale Situationen trotz normaler Anspannung selbstbestimmt zu gestalten und Erfahrungen anhand dessen auszuwerten, was tatsächlich passiert ist.",
  ],
  approach: [
    { title: "Persönliche Angstspirale verstehen", text: "Wir erfassen konkrete Auslöser, Befürchtungen, körperliche Reaktionen, Aufmerksamkeitsmuster und Schutzstrategien. Aus diesen Bausteinen entsteht ein individuelles Erklärungsmodell statt einer pauschalen Etikettierung." },
    { title: "Aufmerksamkeit wieder nach außen lenken", text: "Mit kurzen Übungen trainieren Sie, die Umgebung und das Gegenüber wahrzunehmen, anstatt fortlaufend die eigene Wirkung zu kontrollieren. Das schafft Raum für echte Beteiligung am Gespräch." },
    { title: "Befürchtungen durch Verhaltensexperimente prüfen", text: "Wir formulieren überprüfbare Vorhersagen und planen kleine Experimente: eine Frage stellen, eine Pause zulassen oder eine Meinung äußern. Danach vergleichen wir Erwartung und beobachtbares Ergebnis." },
    { title: "Sicherheitsverhalten gezielt reduzieren", text: "Schutzstrategien werden nicht abrupt entfernt. Wir wählen einzelne Verhaltensweisen aus, reduzieren sie schrittweise und beobachten, ob die erwartete negative Reaktion tatsächlich eintritt." },
    { title: "Grübeln und Selbstkritik verändern", text: "Sie lernen, nach sozialen Situationen zwischen Fakten, Vermutungen und alten Bewertungsmustern zu unterscheiden. Ein fairer Rückblick ersetzt die stundenlange innere Fehlerkontrolle." },
  ],
  processIntro: "Zu Beginn klären wir, welche Situationen am stärksten belasten und welche Veränderung im Alltag für Sie wirklich bedeutsam wäre. Daraus entwickeln wir einen konkreten, überprüfbaren Behandlungsplan.",
  process: [
    { title: "Erstgespräch und Einordnung", text: "Wir besprechen aktuelle Beschwerden, Verlauf, wichtige Lebensbereiche und mögliche Begleiterkrankungen. Falls nötig, empfehlen wir ergänzende ärztliche oder fachpsychiatrische Abklärung." },
    { title: "Individuelles Erklärungsmodell", text: "Gemeinsam visualisieren wir die Wechselwirkung aus Gedanken, Körperreaktionen, Aufmerksamkeit, Vermeidung und Sicherheitsverhalten. Das Modell zeigt konkrete Ansatzpunkte." },
    { title: "Übungen im realen Alltag", text: "Schritte werden gemeinsam vorbereitet und so gewählt, dass sie relevant und bewältigbar sind. Erfahrungen werden in der folgenden Sitzung präzise ausgewertet." },
    { title: "Stabilisierung und Rückfallprophylaxe", text: "Wir halten wirksame Strategien fest, bereiten schwierigere Phasen vor und entwickeln einen Plan dafür, wie Sie bei erneutem Rückzug frühzeitig gegensteuern können." },
  ],
  differentiationHeading: "Schüchternheit, soziale Angst oder soziale Phobie?",
  differentiation: [
    "Schüchternheit ist eine normale Persönlichkeitseigenschaft und keine Diagnose. Auch vor einer Präsentation oder einem ersten Date nervös zu sein, ist zunächst menschlich. Von einer sozialen Angststörung beziehungsweise sozialen Phobie spricht man erst, wenn die Angst ausgeprägt und anhaltend ist, Situationen regelmäßig vermieden oder nur unter starker Belastung ausgehalten werden und wichtige Lebensbereiche beeinträchtigt sind.",
    "Ähnliche Beschwerden können auch bei Depressionen, anderen Angststörungen, Autismus, traumatischen Erfahrungen, körperlichen Erkrankungen oder Substanzkonsum auftreten. Eine sorgfältige Einordnung berücksichtigt deshalb Verlauf, Auslöser, Funktionsbeeinträchtigung und mögliche Begleitprobleme. Eine Website kann diese persönliche Diagnostik nicht ersetzen.",
  ],
  boundaryTitle: "Keine unvorbereitete Konfrontation",
  boundaryText: "Exposition und Verhaltensexperimente bedeuten nicht, dass Sie ohne Vorbereitung in die schwierigste Situation geschickt werden. Ziele, Schwierigkeit und Vorgehen werden gemeinsam vereinbart. Sie behalten die Kontrolle über das Tempo, während wir gleichzeitig darauf achten, hilfreiche Lernschritte nicht dauerhaft durch Vermeidung zu blockieren.",
  durationText: "Umfang und Rhythmus richten sich nach Schweregrad, Zielen, Begleiterkrankungen und Alltag. Zu Beginn sind Termine häufig alle ein bis zwei Wochen sinnvoll; der Verlauf wird regelmäßig gemeinsam überprüft.",
  therapistText: "Ich verbinde kognitive Verhaltenstherapie mit einer klaren, wertschätzenden und alltagsnahen Arbeitsweise. Bei sozialer Angst legen wir besonderen Wert auf nachvollziehbare Verhaltensexperimente, den Abbau von Scham und die Übertragung neuer Erfahrungen in genau die Situationen, die Ihnen wichtig sind.",
  faqHeading: "Fragen zur Therapie bei sozialer Angst",
  faqs: [
    { question: "Muss ich eine diagnostizierte soziale Phobie haben?", answer: "Nein. Im Erstgespräch klären wir, wie stark Angst und Vermeidung Ihren Alltag beeinträchtigen und ob das Angebot der Praxis passend ist. Eine vorschnelle Selbstdiagnose ist nicht nötig." },
    { question: "Ist soziale Angst dasselbe wie Introversion?", answer: "Nein. Introvertierte Menschen benötigen häufig mehr Rückzug, können soziale Situationen aber grundsätzlich selbstbestimmt wählen. Bei sozialer Angst bestimmen Befürchtungen und Vermeidung zunehmend, was möglich erscheint." },
    { question: "Gehören Expositionsübungen immer zur Behandlung?", answer: "Bei sozialer Phobie sind verhaltenstherapeutische Übungen und Exposition wichtige Bestandteile. Sie werden transparent geplant, schrittweise durchgeführt und an Ihre Situation angepasst." },
    { question: "Kann ich auch wegen Rede- oder Prüfungsangst kommen?", answer: "Ja. Wir klären, ob die Angst vor allem auf Leistungssituationen begrenzt ist oder Teil eines breiteren sozialen Angstmusters ist. Daraus leiten wir passende Übungen ab." },
    { question: "Was kostet eine Sitzung?", answer: "Eine psychotherapeutische Einzelsitzung dauert 60 Minuten und kostet 69 €. Die Praxis ist eine Privat- und Selbstzahlerpraxis; eine Erstattung hängt von Ihrem individuellen Versicherungstarif ab." },
    { question: "Kann soziale Angst gemeinsam mit ADHS auftreten?", answer: "Ja. Soziale Angst und ADHS können gemeinsam vorkommen. Im Behandlungsplan berücksichtigen wir, welche Muster zusammenhängen und welche Intervention aktuell den größten Nutzen verspricht." },
  ],
  sources: [
    { label: "S3-Leitlinie Behandlung von Angststörungen (AWMF)", href: "https://register.awmf.org/assets/guidelines/051-028k_S3_Behandlung-von-Angststoerungen_2021-06.pdf" },
    { label: "NICE: Social anxiety disorder – recommendations", href: "https://www.nice.org.uk/guidance/cg159/chapter/recommendations" },
  ],
  related: [
    { label: "ADHS-Therapie", href: "/adhs-therapie-muenchen" },
    { label: "Panikattacken & Panikstörung", href: "/panikattacken-muenchen" },
    { label: "Spezifische Phobien", href: "/spezifische-phobien-muenchen" },
    { label: "Depressive Verstimmung", href: "/depressive-verstimmung-muenchen" },
  ],
};

export default function SocialAnxietyPage() {
  return <PsychotherapyServicePage data={data} />;
}
