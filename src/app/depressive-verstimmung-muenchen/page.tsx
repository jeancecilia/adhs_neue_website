import { createPageMetadata } from "@/lib/metadata";
import PsychotherapyServicePage, { type PsychotherapyServiceData } from "@/components/PsychotherapyServicePage";

export const metadata = createPageMetadata({
  title: "Depressive Verstimmung – Psychotherapie München",
  description: "Psychotherapie bei depressiver Verstimmung in München-Schwabing: Aktivitätsaufbau, Tagesstruktur, kognitive Arbeit und Rückfallprophylaxe.",
  path: "/depressive-verstimmung-muenchen",
  openGraphTitle: "Depressive Verstimmung – Psychotherapie in München",
  openGraphDescription: "Unterstützung bei Antriebsmangel, Rückzug, Grübeln und Selbstabwertung – mit klarer Schweregrad- und Krisenabgrenzung.",
});

const data: PsychotherapyServiceData = {
  slug: "depressive-verstimmung-muenchen",
  breadcrumb: "Depressive Verstimmung",
  eyebrow: "Psychotherapie bei depressiven Beschwerden in München-Schwabing",
  h1: "Depressive Verstimmung – Psychotherapie in München",
  subtitle: "Antrieb und Tagesstruktur schrittweise aufbauen, Grübelschleifen verändern und wieder mehr Verbindung zu wichtigen Lebensbereichen entwickeln.",
  intro: [
    "Phasen mit Traurigkeit, Erschöpfung oder weniger Motivation gehören zum Leben. Wenn Niedergeschlagenheit, Interessenverlust, Rückzug oder Selbstabwertung jedoch anhalten und den Alltag zunehmend bestimmen, kann eine psychotherapeutische Einordnung sinnvoll sein. Der Begriff depressive Verstimmung beschreibt zunächst Beschwerden – nicht automatisch eine depressive Störung.",
    "In der Behandlung klären wir, wie sich Stimmung, Aktivität, Schlaf, Gedanken und Belastungen gegenseitig beeinflussen. Daraus entstehen konkrete Schritte, die weder überfordern noch auf bloßes positives Denken setzen. Bei ausgeprägten, schweren oder akuten Verläufen wird die notwendige ärztliche beziehungsweise psychiatrische Mitbehandlung von Anfang an transparent berücksichtigt.",
  ],
  proofPoints: ["Verhaltensaktivierung", "Kognitive Verhaltenstherapie", "Klare Krisenabgrenzung"],
  situationsHeading: "Wann kann Psychotherapie bei depressiven Beschwerden sinnvoll sein?",
  situationsIntro: "Unterstützung kann sinnvoll sein, wenn Beschwerden über einen längeren Zeitraum bestehen, sich verstärken oder wichtige Bereiche wie Arbeit, Beziehungen, Selbstfürsorge und Schlaf beeinträchtigen. Auch wiederkehrende leichte Phasen verdienen eine sorgfältige Einordnung.",
  situations: [
    { title: "Der Antrieb reicht kaum für den Alltag", text: "Aufstehen, Einkaufen, Haushalt, Arbeit oder Nachrichten beantworten kosten unverhältnismäßig viel Kraft. Unerledigte Aufgaben erhöhen Schuldgefühle und Überforderung." },
    { title: "Interessen und positive Erfahrungen gehen verloren", text: "Aktivitäten, die früher wichtig oder angenehm waren, werden bedeutungslos. Rückzug erscheint zunächst entlastend, lässt den Alltag aber leerer und passiver werden." },
    { title: "Grübeln und Selbstabwertung nehmen viel Raum ein", text: "Gedanken kreisen um Fehler, Versagen, Zukunftssorgen oder vermeintliche Belastungen für andere. Lösungen entstehen selten; stattdessen sinken Energie und Zuversicht." },
    { title: "Schlaf, Konzentration und Leistungsfähigkeit verändern sich", text: "Ein- oder Durchschlafprobleme, frühes Erwachen, übermäßiges Schlafen, verlangsamtes Denken oder starke Unruhe können die Belastung zusätzlich verstärken." },
  ],
  symptomsHeading: "Typische Wechselwirkungen bei depressiver Verstimmung",
  symptomsIntro: [
    "Depressive Beschwerden zeigen sich nicht nur als Traurigkeit. Manche Menschen fühlen vor allem Leere, Gereiztheit, Erschöpfung oder innere Distanz. Andere funktionieren nach außen weiter, benötigen dafür aber immer mehr Kraft.",
    "Ein häufiger Kreislauf besteht aus weniger Aktivität, weniger positiven oder bedeutsamen Erfahrungen, stärkerem Grübeln und sinkender Motivation. Dieser Kreislauf ist verständlich – und bietet zugleich konkrete Ansatzpunkte für Veränderung.",
  ],
  symptoms: [
    { title: "Niedergeschlagenheit oder Leere", text: "Die Stimmung wirkt anhaltend gedrückt, hoffnungslos oder emotional abgeflacht. Positive Ereignisse erreichen Sie weniger oder nur sehr kurz." },
    { title: "Antriebs- und Interessenverlust", text: "Selbst kleine Aufgaben fühlen sich schwer an. Hobbys, Bewegung, Kontakte oder Zukunftspläne verlieren ihren Reiz, wodurch weitere positive Erfahrungen ausbleiben." },
    { title: "Rückzug und Vermeidung", text: "Absagen und Alleinsein reduzieren kurzfristig Anforderungen. Langfristig fehlen jedoch soziale Unterstützung, Struktur, Bewegung und korrigierende Erfahrungen." },
    { title: "Grübeln", text: "Gedanken wiederholen sich ohne Ergebnis. Sie richten sich häufig auf Vergangenheit, Schuld, Unzulänglichkeit oder eine negativ erwartete Zukunft." },
    { title: "Selbstkritik und Schuld", text: "Die eigene Leistung wird strenger bewertet als die anderer. Erschöpfung gilt als persönliches Versagen, während Belastungen und Erkrankungsfaktoren kaum berücksichtigt werden." },
    { title: "Körperliche und kognitive Veränderungen", text: "Schlaf, Appetit, Sexualität, Konzentration, Gedächtnis, Unruhe oder Verlangsamung können sich verändern. Körperliche Ursachen sollten je nach Beschwerdebild mitgeprüft werden." },
  ],
  approachHeading: "Wie ich bei depressiver Verstimmung arbeite",
  approachIntro: [
    "Die Behandlung orientiert sich an kognitiv-verhaltenstherapeutischen Prinzipien und wird dem Schweregrad angepasst. Verhaltensaktivierung bedeutet nicht, sich einfach zusammenzureißen. Wir analysieren vielmehr, welche Aktivitäten Energie, Struktur, Verbundenheit oder ein Gefühl von Wirksamkeit ermöglichen und wie sie realistisch wieder aufgebaut werden können.",
    "Parallel betrachten wir Grübeln, automatische Bewertungen und hohe innere Ansprüche. Ziel ist weder künstlicher Optimismus noch das Wegdiskutieren belastender Lebensumstände, sondern eine realistischere, handlungsfähigere Perspektive.",
  ],
  approach: [
    { title: "Belastung und Schweregrad einordnen", text: "Wir erfassen Verlauf, Funktionsniveau, Schlaf, körperliche Faktoren, Medikamente, frühere Episoden und mögliche Suizidgedanken. Daraus ergibt sich, ob ambulante Psychotherapie in der Praxis passend und ausreichend ist." },
    { title: "Aktivität und Tagesstruktur aufbauen", text: "Wir planen kleine, konkrete Schritte mit realistischer Belastung: Grundversorgung, Bewegung, Kontakt, Aufgaben und persönlich bedeutsame Aktivitäten. Wirkung und Hindernisse werden ausgewertet." },
    { title: "Grübeln unterbrechen", text: "Sie lernen, problemlösendes Denken von wiederholendem Grübeln zu unterscheiden. Aufmerksamkeit, Grübelzeiten und handlungsorientierte Fragen helfen, mentale Schleifen zu begrenzen." },
    { title: "Selbstabwertende Gedanken prüfen", text: "Wir untersuchen automatische Schlussfolgerungen und Grundannahmen, ohne Schwierigkeiten kleinzureden. Alternative Bewertungen sollen glaubwürdig und durch Erfahrungen gestützt sein." },
    { title: "Rückfällen vorbeugen", text: "Frühwarnzeichen, persönliche Risikosituationen und wirksame Gegenmaßnahmen werden schriftlich festgehalten. Für erneute Verschlechterungen entsteht ein klarer Unterstützungs- und Krisenplan." },
  ],
  processIntro: "Bei depressiven Beschwerden ist die passende Versorgung vom Schweregrad abhängig. Deshalb stehen am Anfang nicht nur Ziele, sondern auch Sicherheit, körperliche Abklärung und die Frage, welche Behandlungsbausteine benötigt werden.",
  process: [
    { title: "Erstgespräch und Sicherheitscheck", text: "Wir besprechen Symptome, Dauer, Alltagseinbußen und Risiken. Bei akuter Selbstgefährdung, psychotischen Symptomen oder schwerer Versorgungslücke wird unmittelbar an geeignete Krisen- oder Fachangebote verwiesen." },
    { title: "Gemeinsamer Behandlungsplan", text: "Wir legen wenige, überprüfbare Ziele fest und entscheiden, ob zusätzliche hausärztliche, psychiatrische oder andere fachliche Unterstützung erforderlich ist." },
    { title: "Konkrete Veränderungsschritte", text: "Aktivitäten, Schlaf-Wach-Struktur, Problemlösen und kognitive Übungen werden an Ihre aktuelle Energie angepasst und zwischen den Terminen praktisch erprobt." },
    { title: "Verlauf messen und stabilisieren", text: "Wir prüfen regelmäßig, ob Beschwerden und Funktionsniveau sich verändern. Bei unzureichender Besserung wird der Plan angepasst oder eine weiterführende Behandlung empfohlen." },
  ],
  differentiationHeading: "Depressive Verstimmung oder depressive Störung?",
  differentiation: [
    "Eine depressive Verstimmung kann auf Belastung, Verlust, Konflikte, Schlafmangel oder Erschöpfung reagieren und wieder abklingen. Eine depressive Störung wird anhand mehrerer Symptome, ihrer Dauer, Ausprägung und der Beeinträchtigung diagnostisch eingeordnet. Auch körperliche Erkrankungen, Medikamente, Substanzen, bipolare Störungen, Traumafolgen oder andere psychische Erkrankungen können ähnliche Beschwerden verursachen.",
    "Die Nationale VersorgungsLeitlinie unterscheidet die Behandlung nach Schweregrad. Bei mittelgradigen depressiven Episoden kommen Psychotherapie oder medikamentöse Behandlung infrage. Bei schweren Episoden soll eine Kombination aus Psychotherapie und medikamentöser Behandlung empfohlen werden. In dieser Praxis werden keine Medikamente verordnet; erforderliche ärztliche oder psychiatrische Behandlung muss extern erfolgen und kann psychotherapeutisch begleitet werden.",
  ],
  boundaryTitle: "Ambulante Privatpraxis ist nicht für jede Akutsituation ausreichend",
  boundaryText: "Bei schweren depressiven Episoden, akuter Suizidgefahr, psychotischen Symptomen, manischen Zuständen, fehlender Selbstversorgung oder notwendiger engmaschiger Krisenbetreuung ist eine psychiatrische, ärztliche oder stationäre Versorgung erforderlich. Wir unterstützen eine klare Weiterleitung, ersetzen diese Strukturen jedoch nicht.",
  urgentNote: "Wenn Sie akut befürchten, sich etwas anzutun, wählen Sie 112 oder wenden Sie sich an die nächste psychiatrische Notaufnahme. Der Krisendienst Psychiatrie Oberbayern ist rund um die Uhr unter 0800 655 3000 erreichbar. Die TelefonSeelsorge erreichen Sie unter 0800 1110111, 0800 1110222 oder 116 123.",
  durationText: "Dauer und Frequenz hängen von Schweregrad, Verlauf, Rückfallrisiko, Begleiterkrankungen und Versorgungskonzept ab. Gerade bei Verschlechterung wird nicht an einem festen Sitzungsplan festgehalten, sondern die Behandlung angepasst oder ergänzt.",
  therapistText: "Ich arbeite strukturiert, aktivierend und ohne moralischen Druck. Depressive Erschöpfung wird nicht als Willensschwäche behandelt. Gleichzeitig richten wir den Blick auf kleine beobachtbare Schritte, die wieder Einfluss, Verbindung und Tagesstruktur ermöglichen – mit klarer fachlicher Grenze bei schweren oder akuten Verläufen.",
  faqHeading: "Fragen zu depressiver Verstimmung",
  faqs: [
    { question: "Ist eine depressive Verstimmung bereits eine Depression?", answer: "Nein. Der Begriff beschreibt zunächst Beschwerden. Eine depressive Störung wird anhand von Symptomzahl, Dauer, Schweregrad und Beeinträchtigung diagnostisch eingeordnet. Andere psychische und körperliche Ursachen müssen berücksichtigt werden." },
    { question: "Kann ich auch ohne Diagnose ein Erstgespräch vereinbaren?", answer: "Ja. Im Erstgespräch klären wir Ihre aktuelle Situation und ob das ambulante Angebot der Praxis passend ist. Bei Bedarf empfehlen wir ergänzende ärztliche oder psychiatrische Diagnostik." },
    { question: "Behandeln Sie auch schwere Depressionen allein?", answer: "Nein. Bei schweren Episoden empfiehlt die NVL eine kombinierte Behandlung. Da in der Praxis keine Medikamente verordnet werden und keine Notfallstruktur besteht, ist eine ärztliche beziehungsweise psychiatrische Mitbehandlung erforderlich." },
    { question: "Was bedeutet Verhaltensaktivierung?", answer: "Gemeint ist der systematische Wiederaufbau von Aktivitäten, die Struktur, positive Erfahrung, Verbundenheit oder persönliche Bedeutung ermöglichen. Die Schritte werden konkret geplant und an die aktuelle Belastbarkeit angepasst." },
    { question: "Was mache ich bei akuten Suizidgedanken?", answer: "Bei akuter Gefahr wählen Sie 112 oder gehen in die nächste psychiatrische Notaufnahme. In Oberbayern ist der Krisendienst unter 0800 655 3000 rund um die Uhr erreichbar; auch die TelefonSeelsorge ist jederzeit verfügbar." },
    { question: "Was kostet eine Sitzung?", answer: "Eine psychotherapeutische Einzelsitzung dauert 60 Minuten und kostet 69 €. Ob private Versicherungen oder Zusatzversicherungen erstatten, hängt vom individuellen Tarif ab." },
  ],
  sources: [
    { label: "Nationale VersorgungsLeitlinie Unipolare Depression", href: "https://www.leitlinien.de/themen/depression" },
    { label: "NVL: Behandlung bei akuter depressiver Episode", href: "https://www.leitlinien.de/themen/depression/version-3/kapitel-5" },
    { label: "Krisendienst Psychiatrie Oberbayern", href: "https://krisendienste.bayern/oberbayern/" },
    { label: "TelefonSeelsorge Deutschland", href: "https://www.telefonseelsorge.de/telefon/" },
  ],
  related: [
    { label: "ADHS-Therapie", href: "/adhs-therapie-muenchen" },
    { label: "Soziale Angst & soziale Phobie", href: "/soziale-angst-muenchen" },
    { label: "Panikattacken & Panikstörung", href: "/panikattacken-muenchen" },
    { label: "Spezifische Phobien", href: "/spezifische-phobien-muenchen" },
  ],
};

export default function DepressiveMoodPage() {
  return <PsychotherapyServicePage data={data} />;
}
