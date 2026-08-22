import { createPageMetadata } from "@/lib/metadata";
import PsychotherapyServicePage, { type PsychotherapyServiceData } from "@/components/PsychotherapyServicePage";

export const metadata = createPageMetadata({
  title: "Spezifische Phobien behandeln – Psychotherapie München",
  description: "Psychotherapie bei spezifischen Phobien in München-Schwabing: Flugangst, Tier-, Höhen-, Spritzen- oder Raumangst mit KVT und Exposition behandeln.",
  path: "/spezifische-phobien-muenchen",
  openGraphTitle: "Spezifische Phobien behandeln – Psychotherapie in München",
  openGraphDescription: "Strukturierte kognitive Verhaltenstherapie und individuell geplante Exposition bei klar umschriebenen Ängsten.",
});

const data: PsychotherapyServiceData = {
  slug: "spezifische-phobien-muenchen",
  breadcrumb: "Spezifische Phobien",
  eyebrow: "Psychotherapie bei Phobien in München-Schwabing",
  h1: "Spezifische Phobien behandeln – Psychotherapie in München",
  subtitle: "Vermeidung verstehen, eine tragfähige Angsthierarchie entwickeln und sichere neue Erfahrungen mit gezielter Exposition ermöglichen.",
  intro: [
    "Eine spezifische Phobie richtet sich auf einen klar umschriebenen Auslöser – zum Beispiel Spinnen, Hunde, Höhe, Fliegen, Spritzen, Blut, enge Räume oder bestimmte Naturereignisse. Betroffene wissen oft, dass die tatsächliche Gefahr geringer ist als das eigene Alarmsystem signalisiert. Trotzdem reagiert der Körper schnell und intensiv.",
    "Wenn die gefürchtete Situation selten vorkommt, kann eine Phobie lange unauffällig bleiben. Belastend wird sie häufig dann, wenn Reisen, medizinische Behandlungen, Wohnort, Beruf oder Familienleben eingeschränkt werden. Expositionsbasierte Verhaltenstherapie setzt genau dort an: nicht durch Überrumpelung, sondern durch gut vorbereitete, relevante Lernerfahrungen.",
  ],
  proofPoints: ["Expositionsbasierte KVT", "Individuelle Angsthierarchie", "Tempo gemeinsam festlegen"],
  situationsHeading: "Wann kann die Behandlung einer spezifischen Phobie sinnvoll sein?",
  situationsIntro: "Nicht jede Abneigung oder Vorsicht ist eine Phobie. Psychotherapeutische Unterstützung kann sinnvoll werden, wenn die Angst unverhältnismäßig stark ist, über längere Zeit besteht und zu deutlicher Vermeidung oder Einschränkung führt.",
  situations: [
    { title: "Reisen oder Mobilität sind eingeschränkt", text: "Flüge, Brücken, Tunnel, Aufzüge, Autobahnen oder hohe Gebäude werden vermieden. Urlaube, berufliche Termine oder Besuche lassen sich dadurch nur schwer organisieren." },
    { title: "Medizinische Versorgung wird aufgeschoben", text: "Spritzen-, Blut- oder Verletzungsangst führt dazu, Impfungen, Blutabnahmen oder notwendige Untersuchungen zu vermeiden – teilweise trotz gesundheitlicher Nachteile." },
    { title: "Tiere oder Naturreize bestimmen Wege und Entscheidungen", text: "Parks, Keller, Balkone oder Wohnungen werden auf Spinnen, Hunde, Insekten oder andere Auslöser kontrolliert. Begegnungen lösen sofort Fluchtimpulse aus." },
    { title: "Andere müssen Sicherheit herstellen", text: "Angehörige kontrollieren Räume, entfernen Tiere, übernehmen Fahrten oder geben ständige Rückversicherung. Das entlastet kurzfristig, macht Selbstständigkeit aber schwieriger." },
  ],
  symptomsHeading: "Typische Formen und aufrechterhaltende Muster",
  symptomsIntro: [
    "Spezifische Phobien können sehr unterschiedlich aussehen. Gemeinsam ist ihnen eine schnelle Alarmreaktion auf einen bestimmten Reiz oder eine klar definierte Situation. Bereits Bilder, Gedanken oder die Erwartung einer Begegnung können Angst auslösen.",
    "Das stärkste aufrechterhaltende Element ist meist die Vermeidung. Weil die Situation verlassen oder gar nicht erst betreten wird, kann das Gehirn nicht ausreichend lernen, dass die befürchtete Katastrophe ausbleibt und Angst von selbst wieder sinken kann.",
  ],
  symptoms: [
    { title: "Tierphobien", text: "Auslöser können etwa Spinnen, Hunde, Schlangen, Mäuse, Vögel oder Insekten sein. Oft wird die Umgebung vorausschauend kontrolliert oder nur mit Begleitung betreten." },
    { title: "Höhen- und Flugangst", text: "Balkone, Bergwege, Aussichtspunkte oder Flugreisen lösen Schwindel, Kontrollverlustängste und starken Fluchtimpuls aus. Berufliche und private Reisen können entfallen." },
    { title: "Blut-, Spritzen- und Verletzungsphobie", text: "Neben Angst kann ein deutlicher Blutdruckabfall mit Ohnmachtstendenz auftreten. Deshalb erfordert diese Form teilweise besondere körperliche Strategien und sorgfältige Planung." },
    { title: "Enge oder geschlossene Räume", text: "Aufzüge, MRT-Untersuchungen, Tunnel, Flugzeuge oder fensterlose Räume werden wegen Enge, fehlender Fluchtmöglichkeit oder befürchteter Atemnot gemieden." },
    { title: "Natur- und Umweltreize", text: "Gewitter, Wasser, Dunkelheit oder bestimmte Wetterlagen können starken Alarm auslösen. Aktivitäten werden dann von Vorhersagen und Sicherheitsbedingungen abhängig gemacht." },
    { title: "Antizipation und Rückversicherung", text: "Schon Tage vorher werden Risiken geprüft, Alternativrouten geplant oder andere um Sicherheit gebeten. Dadurch bleibt der Auslöser gedanklich dauerhaft präsent." },
  ],
  approachHeading: "Wie ich spezifische Phobien behandle",
  approachIntro: [
    "Die S3-Leitlinie empfiehlt bei spezifischen Phobien Expositionstherapie. In der Behandlung bedeutet das, den gefürchteten Reiz unter kontrollierten Bedingungen aufzusuchen und neue Erfahrungen zu ermöglichen. Wir arbeiten nicht nach dem Prinzip, Angst möglichst schnell herunterzudrücken, sondern prüfen konkrete Erwartungen und verändern den Umgang mit der Angst.",
    "Die Übungen werden auf Ihr Ziel zugeschnitten. Wer wieder fliegen möchte, braucht andere Lernschritte als jemand mit Spritzenangst oder einer Tierphobie. Reine Entspannungsstrategien reichen häufig nicht aus, weil sie leicht zu einer neuen Sicherheitsbedingung werden können.",
  ],
  approach: [
    { title: "Auslöser und Befürchtungen präzisieren", text: "Wir klären, was genau Angst macht: der Auslöser selbst, körperliche Empfindungen, Kontrollverlust, Ekel, Ohnmacht oder die Vorstellung, nicht fliehen zu können. Diese Differenzierung bestimmt die Übung." },
    { title: "Eine persönliche Angsthierarchie entwickeln", text: "Mögliche Schritte werden nach Relevanz und Schwierigkeit geordnet. Die Hierarchie ist ein Planungswerkzeug, kein starres Programm; Fortschritte und neue Erkenntnisse werden laufend einbezogen." },
    { title: "Exposition in vivo durchführen", text: "Wann immer sinnvoll und verfügbar arbeiten wir mit dem realen Auslöser oder einer realitätsnahen Situation. Entscheidend ist ausreichend Zeit, um Beobachtungen nicht vorschnell durch Flucht abzubrechen." },
    { title: "Befürchtungen als Vorhersagen prüfen", text: "Vor jeder Übung halten wir fest, was Sie erwarten und woran ein Ergebnis erkennbar wäre. Danach unterscheiden wir tatsächliche Beobachtungen von gefühlter Gefahr." },
    { title: "Vermeidung dauerhaft abbauen", text: "Neue Erfahrungen werden wiederholt und in verschiedene Alltagssituationen übertragen. So hängt Sicherheit nicht nur von einem bestimmten Raum, einer Begleitperson oder einem einzelnen erfolgreichen Versuch ab." },
  ],
  processIntro: "Eine gute Exposition beginnt mit klarer Diagnostik und gemeinsamer Planung. Wir prüfen außerdem, ob medizinische Besonderheiten, Traumafolgen oder andere psychische Beschwerden das Vorgehen beeinflussen.",
  process: [
    { title: "Erstgespräch und Zielklärung", text: "Wir erfassen Auslöser, Vermeidungsstrategien, bisherige Erfahrungen und den konkreten Lebensbereich, den Sie zurückgewinnen möchten." },
    { title: "Vorbereitung und Hierarchie", text: "Sie erhalten ein verständliches Erklärungsmodell. Gemeinsam formulieren wir überprüfbare Befürchtungen und planen geeignete Übungsschritte." },
    { title: "Begleitete Exposition", text: "Je nach Phobie finden Übungen in der Praxis oder in passenden Alltagssituationen statt. Schwierigkeit, Dauer und Sicherheitsaspekte werden vorab besprochen." },
    { title: "Selbstständige Wiederholung", text: "Damit neue Erfahrungen stabil werden, werden passende Übungen zwischen den Sitzungen wiederholt. Ergebnisse und Hindernisse werten wir gemeinsam aus." },
  ],
  differentiationHeading: "Realistische Vorsicht, starke Angst oder spezifische Phobie?",
  differentiation: [
    "Vorsicht vor einem tatsächlich gefährlichen Tier, einem ungesicherten Abgrund oder einer medizinischen Komplikation ist sinnvoll. Bei einer spezifischen Phobie steht die Angst jedoch in deutlichem Missverhältnis zur realen Gefahr und führt zu anhaltender Vermeidung oder erheblichem Aushalten unter Angst. Die Einordnung berücksichtigt Kontext, kulturelle Faktoren und tatsächliche Risiken.",
    "Manche scheinbar spezifischen Ängste gehören zu einem anderen Störungsbild. Angst vor Aufzügen kann Teil einer Panikstörung oder Agoraphobie sein; Angst vor Verunreinigung kann bei einer Zwangsstörung auftreten; starke Reaktionen auf bestimmte Situationen können mit traumatischen Erfahrungen zusammenhängen. Deshalb wird nicht allein anhand des Auslösers behandelt.",
  ],
  boundaryTitle: "Exposition ist Kooperation, kein Überrumpeln",
  boundaryText: "Sie werden nicht getäuscht, festgehalten oder überraschend mit dem Auslöser konfrontiert. Wir vereinbaren Ziel, Rahmen und Durchführung gemeinsam. Gleichzeitig benennen wir offen, dass wirksame Behandlung meist reale Annäherung benötigt und ein dauerhaftes Vermeiden der Angst nicht hilft.",
  durationText: "Bei klar umschriebenen Phobien kann eine fokussierte Behandlung vergleichsweise kompakt sein. Dauer und Sitzungsformat hängen jedoch von Phobieform, Schweregrad, Begleiterkrankungen, Übungsmöglichkeiten und persönlichen Zielen ab.",
  therapistText: "Ich lege Wert auf eine ruhige Vorbereitung, klare Begründungen und realistische Übungsschritte. Bei Exposition geht es nicht um Mutproben, sondern um präzises Lernen: Was wird befürchtet, was tritt tatsächlich ein und wie verändert sich Handlungsfähigkeit durch wiederholte Erfahrung?",
  faqHeading: "Fragen zur Behandlung spezifischer Phobien",
  faqs: [
    { question: "Welche Phobien können behandelt werden?", answer: "Zum Beispiel Tier-, Höhen-, Flug-, Spritzen-, Blut-, Verletzungs- oder Raumängste. Im Erstgespräch prüfen wir, ob es sich um eine spezifische Phobie handelt und ob passende Expositionsmöglichkeiten sicher umsetzbar sind." },
    { question: "Muss ich mich sofort dem schlimmsten Auslöser stellen?", answer: "Nein. Wir entwickeln eine individuelle Hierarchie und wählen sinnvolle, bewältigbare Schritte. Wir vermeiden jedoch eine endlose Vorbereitung, die selbst zu einer Form der Vermeidung werden kann." },
    { question: "Kann Flugangst ohne echten Flug behandelt werden?", answer: "Vorbereitende Übungen, Videos, Geräusche und realitätsnahe Situationen können hilfreich sein. Für eine stabile Veränderung ist je nach persönlichem Ziel häufig auch die Übertragung auf einen tatsächlichen Flug relevant." },
    { question: "Was ist bei Spritzen- oder Blutangst besonders?", answer: "Bei dieser Phobie kann neben Angst eine Ohnmachtstendenz auftreten. Das wird in der Planung berücksichtigt; gegebenenfalls werden spezielle körperliche Techniken und medizinische Kooperation einbezogen." },
    { question: "Wie viele Termine brauche ich?", answer: "Das lässt sich erst nach der Einordnung seriös einschätzen. Manche klar umschriebenen Phobien lassen sich fokussiert behandeln, bei mehreren Ängsten oder Begleiterkrankungen kann ein längerer Verlauf sinnvoll sein." },
    { question: "Was kostet eine Sitzung?", answer: "Eine psychotherapeutische Einzelsitzung dauert 60 Minuten und kostet 69 €. Eine mögliche Erstattung durch private Versicherungen richtet sich nach dem persönlichen Tarif." },
  ],
  sources: [
    { label: "S3-Leitlinie Behandlung von Angststörungen (AWMF)", href: "https://register.awmf.org/assets/guidelines/051-028k_S3_Behandlung-von-Angststoerungen_2021-06.pdf" },
  ],
  related: [
    { label: "ADHS-Therapie", href: "/adhs-therapie-muenchen" },
    { label: "Soziale Angst & soziale Phobie", href: "/soziale-angst-muenchen" },
    { label: "Panikattacken & Panikstörung", href: "/panikattacken-muenchen" },
    { label: "Depressive Verstimmung", href: "/depressive-verstimmung-muenchen" },
  ],
};

export default function SpecificPhobiasPage() {
  return <PsychotherapyServicePage data={data} />;
}
