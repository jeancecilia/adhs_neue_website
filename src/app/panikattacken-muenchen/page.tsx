import { createPageMetadata } from "@/lib/metadata";
import PsychotherapyServicePage, { type PsychotherapyServiceData } from "@/components/PsychotherapyServicePage";

export const metadata = createPageMetadata({
  title: "Panikattacken & Panikstörung – Psychotherapie München",
  description: "Psychotherapie bei Panikattacken und Panikstörung in München-Schwabing: Angst vor der Angst, Körperscanning und Vermeidung mit KVT und Exposition bearbeiten.",
  path: "/panikattacken-muenchen",
  openGraphTitle: "Panikattacken & Panikstörung – Psychotherapie in München",
  openGraphDescription: "Verhaltenstherapeutische Hilfe bei wiederkehrenden Panikattacken, Erwartungsangst und Vermeidung.",
});

const data: PsychotherapyServiceData = {
  slug: "panikattacken-muenchen",
  breadcrumb: "Panikattacken",
  eyebrow: "Psychotherapie bei Panik in München-Schwabing",
  h1: "Panikattacken & Panikstörung – Psychotherapie in München",
  subtitle: "Körperreaktionen neu einordnen, die Angst vor der Angst verringern und vermiedene Situationen schrittweise zurückgewinnen.",
  intro: [
    "Eine Panikattacke kann sich anfühlen wie eine unmittelbare körperliche Katastrophe: Das Herz rast, der Atem wird eng, der Körper zittert oder wirkt unwirklich. Manche Menschen befürchten einen Herzinfarkt, zu ersticken, die Kontrolle zu verlieren oder verrückt zu werden – obwohl die akute Angstreaktion von außen kaum sichtbar sein muss.",
    "Nach einer Attacke entsteht häufig die Sorge vor dem nächsten Anfall. Betroffene beobachten ihren Körper, vermeiden Belastung, öffentliche Verkehrsmittel oder Orte ohne schnellen Ausgang. In der Psychotherapie arbeiten wir daran, diese Angstspirale verständlich zu machen und durch neue körperliche und alltägliche Lernerfahrungen zu unterbrechen.",
  ],
  proofPoints: ["Kognitive Verhaltenstherapie", "Interozeptive Exposition", "Sorgfältige Abklärung"],
  situationsHeading: "Wann kann Psychotherapie bei Panikattacken sinnvoll sein?",
  situationsIntro: "Eine einzelne Panikattacke bedeutet nicht automatisch eine Panikstörung. Unterstützung ist besonders sinnvoll, wenn Attacken wiederkehren, anhaltende Erwartungsangst entsteht oder Sie Ihr Leben zunehmend danach organisieren, eine weitere Attacke zu verhindern.",
  situations: [
    { title: "Plötzliche Attacken scheinen aus dem Nichts zu kommen", text: "Intensive Angst erreicht innerhalb kurzer Zeit einen Höhepunkt. Herzrasen, Atemnot, Schwindel, Zittern oder ein Gefühl von Unwirklichkeit werden als bedrohlich erlebt." },
    { title: "Die Angst vor der nächsten Attacke bestimmt den Alltag", text: "Auch an ruhigen Tagen prüfen Sie den Körper auf erste Warnzeichen. Termine, Wege und Aktivitäten werden danach geplant, ob Hilfe oder ein Ausgang erreichbar wäre." },
    { title: "Orte werden gemieden oder nur mit Begleitung besucht", text: "U-Bahn, Autobahn, Supermarkt, Kino, Aufzug, Menschenmengen oder weite Entfernungen von zu Hause erscheinen unsicher. Kurzfristige Erleichterung verstärkt langfristig die Einschränkung." },
    { title: "Körperliche Belastung löst Angst aus", text: "Sport, Treppensteigen, Wärme, Kaffee oder Aufregung werden vermieden, weil schneller Puls, Schwitzen oder Kurzatmigkeit an frühere Attacken erinnern." },
  ],
  symptomsHeading: "Wie sich eine Panikspirale aufrechterhalten kann",
  symptomsIntro: [
    "Panik entsteht nicht durch Einbildung. Das autonome Nervensystem aktiviert ein reales Alarmprogramm. Entscheidend ist häufig, wie die zunächst ungefährlichen Körperempfindungen bewertet werden und welche Reaktionen darauf folgen.",
    "Wenn Herzklopfen sofort als Zeichen eines Zusammenbruchs interpretiert wird, steigt die Angst. Mehr Adrenalin erzeugt weitere Empfindungen, die wiederum als Beweis für Gefahr erscheinen. Vermeidung verhindert dann die Erfahrung, dass die Welle auch ohne Flucht abklingen kann.",
  ],
  symptoms: [
    { title: "Körperlicher Alarm", text: "Herzrasen, Druckgefühl, Kurzatmigkeit, Enge, Schwindel, Kribbeln, Zittern, Schwitzen, Übelkeit oder Hitze- und Kälteschauer können Teil einer Attacke sein." },
    { title: "Katastrophische Deutung", text: "Empfindungen werden als Herzinfarkt, Ohnmacht, Ersticken oder Kontrollverlust interpretiert. Diese Deutung verstärkt den körperlichen Alarm innerhalb von Sekunden." },
    { title: "Körperscanning", text: "Puls, Atmung, Gleichgewicht und Sehen werden ständig kontrolliert. Normale Schwankungen fallen dadurch stärker auf und wirken ungewöhnlicher oder gefährlicher." },
    { title: "Sicherheitsverhalten", text: "Wasser, Medikamente, Handy, Begleitpersonen, Sitzplätze am Ausgang oder ständig geöffnete Fenster vermitteln kurzfristig Sicherheit, werden aber zunehmend unverzichtbar." },
    { title: "Situative Vermeidung", text: "Bestimmte Wege, körperliche Anstrengung oder Orte werden ausgelassen. Der persönliche Bewegungsradius kann sich dadurch Schritt für Schritt verkleinern." },
    { title: "Erwartungsangst", text: "Schon der Gedanke an eine mögliche Attacke löst Anspannung aus. Die Angst richtet sich nicht mehr nur auf Situationen, sondern auf die eigenen Angstsymptome." },
  ],
  approachHeading: "Wie ich bei Panikattacken und Panikstörung arbeite",
  approachIntro: [
    "Die kognitive Verhaltenstherapie setzt an der Verbindung zwischen Körperempfindung, Bewertung, Angst und Vermeidung an. Wir entwickeln zunächst ein individuelles Erklärungsmodell und prüfen, welche medizinischen Untersuchungen bereits erfolgt sind oder noch sinnvoll sein könnten.",
    "Ein zentraler Bestandteil kann Exposition sein. Bei interozeptiven Übungen werden ausgewählte, harmlose Körperempfindungen gezielt hervorgerufen; bei Exposition im Alltag werden gemiedene Situationen schrittweise wieder aufgesucht. Beides wird vorbereitet, transparent vereinbart und fachlich begleitet.",
  ],
  approach: [
    { title: "Panik verständlich erklären", text: "Sie lernen die Funktion der körperlichen Alarmreaktion kennen und erkennen, wie Hyperventilation, Aufmerksamkeit und bedrohliche Interpretationen die Symptome beeinflussen können." },
    { title: "Katastrophische Bewertungen überprüfen", text: "Wir unterscheiden Möglichkeit, Wahrscheinlichkeit und beobachtbare Fakten. Frühere Attacken werden nicht beschönigt, sondern sorgfältig daraufhin untersucht, was befürchtet wurde und tatsächlich geschah." },
    { title: "Interozeptive Exposition vorbereiten", text: "Geeignete Übungen können Herzklopfen, Schwindel oder Kurzatmigkeit kurz und kontrolliert auslösen. Dadurch kann der Körper lernen, dass Empfindungen unangenehm, aber nicht automatisch gefährlich sind." },
    { title: "Vermeidete Situationen zurückerobern", text: "Aus einer individuellen Hierarchie wählen wir relevante Alltagsschritte, etwa eine U-Bahn-Station, einen Einkauf oder eine kurze Autofahrt. Ziel ist neue Sicherheit durch Erfahrung, nicht durch Flucht." },
    { title: "Sicherheitsverhalten reduzieren", text: "Wir prüfen gemeinsam, welche Hilfen tatsächlich notwendig sind und welche die Angst ungewollt bestätigen. Der Abbau erfolgt schrittweise, damit neue Lernerfahrungen möglich werden." },
  ],
  processIntro: "Die Behandlung beginnt nicht mit einer pauschalen Atemübung oder sofortiger Konfrontation. Zunächst klären wir Symptomverlauf, körperliche Befunde, Auslöser, Vermeidung und persönliche Ziele.",
  process: [
    { title: "Anamnese und medizinische Einordnung", text: "Wir erfassen Attacken, Belastungen, Medikamente und bisherige Untersuchungen. Neue, unklare oder auffällige körperliche Beschwerden werden vor Expositionsübungen ärztlich abgeklärt." },
    { title: "Individuelles Panikmodell", text: "An konkreten Attacken rekonstruieren wir, welche Empfindung zuerst auftrat, wie sie bewertet wurde und welches Schutz- oder Fluchtverhalten folgte." },
    { title: "Geplante Lernerfahrungen", text: "Interozeptive und situative Übungen werden gemeinsam ausgewählt, vorbereitet und ausgewertet. Wir achten auf relevante Ziele statt auf wahllose Belastung." },
    { title: "Transfer und Rückfallprophylaxe", text: "Sie entwickeln einen persönlichen Umgang mit erneuten Angstwellen und lernen, frühe Vermeidung zu erkennen, ohne normale Körperempfindungen wieder kontrollieren zu müssen." },
  ],
  differentiationHeading: "Panikattacke, Panikstörung oder körperliche Erkrankung?",
  differentiation: [
    "Eine Panikattacke beschreibt eine zeitlich begrenzte Episode intensiver Angst mit körperlichen und gedanklichen Symptomen. Sie kann im Rahmen einer Panikstörung auftreten, aber auch bei anderen Angststörungen, Depressionen, Traumafolgestörungen, Substanzkonsum oder körperlichen Erkrankungen. Für eine Panikstörung sind wiederkehrende Attacken und anhaltende Sorgen oder Verhaltensänderungen nach den Attacken entscheidend.",
    "Körperliche Ursachen dürfen nicht vorschnell ausgeschlossen werden. Schilddrüsenerkrankungen, Herzrhythmusstörungen, Atemwegserkrankungen, Stoffwechselprobleme, Medikamente oder stimulierende Substanzen können ähnliche Beschwerden auslösen oder verstärken. Je nach Symptomen und Vorgeschichte ist deshalb eine hausärztliche oder fachärztliche Abklärung wichtig.",
  ],
  boundaryTitle: "Bei neuen oder ungewöhnlichen Beschwerden zuerst medizinisch abklären",
  boundaryText: "Eine psychotherapeutische Einordnung ersetzt keine Notfall- oder Differentialdiagnostik. Besonders bei erstmals auftretendem starken Brustschmerz, Ohnmacht, Lähmungserscheinungen, anhaltender schwerer Atemnot oder anderen ungewohnten akuten Symptomen sollte unverzüglich medizinische Hilfe genutzt werden.",
  urgentNote: "Bei akuter Lebensgefahr oder schweren körperlichen Beschwerden wählen Sie 112. Für dringende, aber nicht lebensbedrohliche medizinische Probleme erreichen Sie den ärztlichen Bereitschaftsdienst unter 116117.",
  durationText: "Die Dauer richtet sich nach Häufigkeit der Attacken, Vermeidung, Begleiterkrankungen und individuellen Zielen. Sitzungen finden zu Beginn häufig wöchentlich oder alle zwei Wochen statt; Übungen werden zwischen den Terminen fortgeführt.",
  therapistText: "Bei Panik arbeite ich transparent, körpernah und verhaltensorientiert. Sie verstehen jeden Behandlungsschritt und wissen, welches Lernziel eine Übung verfolgt. Körperliche Beschwerden werden ernst genommen; notwendige medizinische Abklärung und psychotherapeutische Arbeit werden klar voneinander unterschieden.",
  faqHeading: "Fragen zu Panikattacken und Panikstörung",
  faqs: [
    { question: "Ist jede Panikattacke eine Panikstörung?", answer: "Nein. Einzelne Panikattacken können in unterschiedlichen Zusammenhängen auftreten. Für die diagnostische Einordnung sind unter anderem Wiederholung, Erwartungsangst, Vermeidung und Beeinträchtigung wichtig." },
    { question: "Muss ich vor der Therapie ärztlich untersucht werden?", answer: "Das hängt von Symptomen, Vorgeschichte und bisherigen Befunden ab. Bei neuen, ungewöhnlichen oder nicht abgeklärten körperlichen Beschwerden empfehlen wir eine medizinische Untersuchung, bevor gezielte körperbezogene Übungen beginnen." },
    { question: "Was ist interozeptive Exposition?", answer: "Dabei werden ausgewählte harmlose Körperempfindungen kurz und kontrolliert hervorgerufen. Ziel ist, ihre automatische Katastrophenbedeutung zu überprüfen und einen weniger ängstlichen Umgang zu lernen." },
    { question: "Werde ich sofort in meine schlimmste Situation geschickt?", answer: "Nein. Übungen werden gemeinsam vorbereitet und nach Relevanz, Belastbarkeit und Sicherheit ausgewählt. Gleichzeitig vermeiden wir, die Angst durch dauerhaftes Ausweichen zu stabilisieren." },
    { question: "Kann Panik gemeinsam mit ADHS auftreten?", answer: "Ja. ADHS, Angststörungen und depressive Beschwerden können gemeinsam vorkommen. Die Behandlung berücksichtigt, welche Prozesse sich gegenseitig verstärken und welche Priorität sinnvoll ist." },
    { question: "Was kostet eine Sitzung?", answer: "Eine psychotherapeutische Einzelsitzung dauert 60 Minuten und kostet 69 €. Ob eine private Versicherung oder Zusatzversicherung erstattet, hängt vom jeweiligen Tarif ab." },
  ],
  sources: [
    { label: "S3-Leitlinie Behandlung von Angststörungen (AWMF)", href: "https://register.awmf.org/assets/guidelines/051-028k_S3_Behandlung-von-Angststoerungen_2021-06.pdf" },
    { label: "Ärztlicher Bereitschaftsdienst 116117", href: "https://www.116117.de/de/index.php" },
  ],
  related: [
    { label: "ADHS-Therapie", href: "/adhs-therapie-muenchen" },
    { label: "Soziale Angst & soziale Phobie", href: "/soziale-angst-muenchen" },
    { label: "Spezifische Phobien", href: "/spezifische-phobien-muenchen" },
    { label: "Depressive Verstimmung", href: "/depressive-verstimmung-muenchen" },
  ],
};

export default function PanicAttacksPage() {
  return <PsychotherapyServicePage data={data} />;
}
