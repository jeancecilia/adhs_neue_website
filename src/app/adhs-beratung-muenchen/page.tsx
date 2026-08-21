import type { Metadata } from "next";
import PsychotherapyServicePage, { type PsychotherapyServiceData } from "@/components/PsychotherapyServicePage";

export const metadata: Metadata = {
  title: "ADHS-Beratung München für Erwachsene | ADHS Praxis",
  description: "Strukturierte ADHS-Beratung und Psychoedukation für Erwachsene in München-Schwabing: konkrete Strategien für Alltag, Beruf, Studium und Beziehungen.",
  alternates: { canonical: "/adhs-beratung-muenchen" },
  openGraph: {
    title: "ADHS-Beratung für Erwachsene in München",
    description: "ADHS besser verstehen und individuelle Strategien für Organisation, Zeitmanagement, Selbstregulation, Beruf und Beziehungen entwickeln.",
    url: "/adhs-beratung-muenchen",
  },
};

const data: PsychotherapyServiceData = {
  slug: "adhs-beratung-muenchen",
  kind: "counseling",
  lastReviewed: "2026-08-21",
  breadcrumb: "ADHS-Beratung",
  eyebrow: "ADHS-Beratung & Psychoedukation in München-Schwabing",
  h1: "ADHS-Beratung für Erwachsene in München",
  subtitle: "ADHS verstehen, den eigenen Alltag klarer einordnen und Strategien entwickeln, die zur persönlichen Lebenssituation passen.",
  intro: [
    "Eine ADHS-Diagnose kann vieles erklären – sie beantwortet aber noch nicht automatisch die Frage, wie der Alltag künftig leichter gelingen kann. In der ADHS-Beratung übersetzen wir fachliches Wissen in konkrete Schritte für Ihre aktuelle Situation: verständlich, strukturiert und ohne pauschale Patentrezepte.",
    "Das Angebot richtet sich an Erwachsene, die vor allem Orientierung, Psychoedukation und praktische Unterstützung suchen. Gemeinsam betrachten wir wiederkehrende Hürden, vorhandene Stärken und die Bedingungen, unter denen Aufmerksamkeit, Organisation und Selbstregulation besser funktionieren.",
  ],
  heroFacts: ["60 Minuten", "69 €", "Selbstzahler", "München-Schwabing"],
  credentials: [
    { label: "M.Sc. · akademischer Grad", detail: "Abgeschlossenes Masterstudium mit dem akademischen Grad Master of Science (M.Sc.). Die Fachrichtung wird auf dieser Website nicht als psychologischer oder klinischer Abschluss ausgewiesen." },
    { label: "Heilpraktiker, beschränkt auf Psychotherapie", detail: "Amtliche Erlaubnis zur Ausübung der Heilkunde, beschränkt auf das Gebiet der Psychotherapie, nach dem Heilpraktikergesetz." },
    { label: "Neurofeedback & Biofeedback", detail: "Fundierte Ausbildung im apparativen Neurofeedback und Biofeedback." },
    { label: "KVT & Hypnosetherapie", detail: "Ausbildung in Methoden der kognitiven Verhaltenstherapie und lösungsorientierten Hypnosetherapie." },
  ],
  proofPoints: [],
  situationsHeading: "Wann kann eine ADHS-Beratung sinnvoll sein?",
  situationsIntro: "Beratung kann passen, wenn nicht die Behandlung einer psychischen Erkrankung im Vordergrund steht, sondern das Verstehen der eigenen ADHS-Muster und die praktische Umsetzung im Alltag.",
  situations: [
    { title: "Nach einer neuen oder späten Diagnose", text: "Sie möchten einordnen, was die Diagnose für Ihre Biografie, Ihre Stärken und Ihre aktuellen Schwierigkeiten bedeutet – ohne sich auf ein Defizitbild reduzieren zu lassen." },
    { title: "Wenn Wissen allein noch nichts verändert", text: "Sie kennen bereits viele Tipps, schaffen es aber nicht, sie dauerhaft umzusetzen. Wir prüfen, woran die Anwendung scheitert und wie eine Strategie kleiner und passender werden kann." },
    { title: "Bei konkreten Hürden in Beruf oder Studium", text: "Prioritäten, Fristen, Aufgabenbeginn, E-Mails oder längere Projekte führen regelmäßig zu Stress. Die Beratung fokussiert einen überschaubaren nächsten Veränderungsschritt." },
    { title: "Bei wiederkehrenden Missverständnissen", text: "Vergesslichkeit, Impulsivität, Rückzug oder unterschiedliche Erwartungen belasten Partnerschaft, Familie oder Zusammenarbeit. Wir machen Muster besprechbar und entwickeln klare Absprachen." },
  ],
  symptomsHeading: "Typische Themen in der ADHS-Beratung",
  symptomsIntro: [
    "ADHS wirkt sich bei Erwachsenen sehr unterschiedlich aus. Deshalb beginnt die Beratung nicht mit einer fertigen Methode, sondern mit der Frage, wo im persönlichen Alltag tatsächlich Reibung und Beeinträchtigung entstehen.",
    "Mögliche Beratungsthemen werden gemeinsam priorisiert. Nicht alles muss gleichzeitig verändert werden.",
  ],
  symptoms: [
    { title: "Aufgaben beginnen", text: "Große, unklare oder wenig stimulierende Aufgaben werden in sichtbare Einstiegsschritte zerlegt. Ziel ist ein realistisch ausführbarer Start – nicht ein perfektes System." },
    { title: "Zeit und Prioritäten", text: "Wir prüfen Zeitblindheit, zu optimistische Planung und konkurrierende Dringlichkeiten und entwickeln externe Orientierungshilfen für Termine, Übergänge und Pufferzeiten." },
    { title: "Struktur und Umgebung", text: "Arbeitsplatz, Kalender, Erinnerungen und Abläufe werden so angepasst, dass wichtige Hinweise sichtbar bleiben und unnötige Entscheidungslast sinkt." },
    { title: "Reizüberflutung und Erholung", text: "Wir identifizieren typische Überlastungssituationen und planen frühere Pausen, klare Grenzen und passende Reizreduktion, bevor die Belastung vollständig kippt." },
    { title: "Emotionale Selbstregulation", text: "Intensive Reaktionen auf Frust, Kritik oder Zurückweisung werden beobachtbar gemacht. Kurze Unterbrechungen und vorbereitete Handlungsoptionen schaffen mehr Wahlfreiheit." },
    { title: "Kommunikation und Beziehungen", text: "Wir entwickeln konkrete Absprachen für Verbindlichkeit, Aufgabenverteilung und Konflikte, ohne ADHS als Ausrede oder als persönlichen Makel zu behandeln." },
  ],
  approachHeading: "Wie ich in der ADHS-Beratung arbeite",
  approachIntro: [
    "Die Beratung verbindet ADHS-spezifische Psychoedukation mit einer verhaltensorientierten, ressourcenbewussten Arbeitsweise. Sie erhalten keine allgemeine Tippsammlung, sondern entwickeln Strategien anhand realer Situationen aus Ihrem Leben.",
    "Jede Idee wird als überprüfbarer Versuch verstanden: Was soll konkret leichter werden? Woran merken wir eine Verbesserung? Welche Hürde müssen wir beim nächsten Schritt berücksichtigen?",
  ],
  approach: [
    { title: "ADHS-Muster verständlich einordnen", text: "Wir unterscheiden Symptome, erlernte Bewältigungsmuster, äußere Anforderungen und mögliche Begleitbelastungen. Das schafft eine sachliche Grundlage für passende Veränderungen." },
    { title: "Ein konkretes Ziel auswählen", text: "Statt den gesamten Alltag gleichzeitig zu optimieren, wählen wir einen Bereich mit erkennbarem Nutzen – etwa Morgenroutine, Aufgabenstart oder Kommunikation im Team." },
    { title: "Strategien an das Gehirn und Umfeld anpassen", text: "Aufgaben werden sichtbar, zeitlich greifbar und leichter startbar gemacht. Wo möglich, verändern wir auch die Umgebung, statt ausschließlich mehr Selbstdisziplin zu verlangen." },
    { title: "Umsetzungshürden vorwegnehmen", text: "Wir planen nicht nur die Idealversion, sondern auch müde Tage, Ablenkungen und Unterbrechungen. Eine Minimalversion hilft, nach Rückschlägen schneller wieder einzusteigen." },
    { title: "Erfahrungen auswerten und nachjustieren", text: "In der Folgesitzung prüfen wir ohne Schuldzuweisung, was funktioniert hat. Wir behalten hilfreiche Elemente, vereinfachen andere oder verwerfen eine Strategie bewusst." },
  ],
  editorialSections: [
    {
      eyebrow: "Eine Sitzung konkret",
      heading: "Was passiert in 60 Minuten ADHS-Beratung?",
      paragraphs: [
        "Am Anfang einer Sitzung grenzen wir ein, worum es heute tatsächlich gehen soll. Ein Anliegen wie „Ich bekomme meinen Alltag nicht organisiert“ ist verständlich, aber für eine konkrete Veränderung noch zu groß. Deshalb wählen wir eine beobachtbare Situation aus – zum Beispiel den Einstieg in eine wiederkehrende Arbeitsaufgabe, das Verlassen des Hauses am Morgen oder Absprachen im gemeinsamen Haushalt.",
        "Anschließend untersuchen wir nicht nur, was nicht funktioniert, sondern auch die Bedingungen dahinter: Ist die Aufgabe zu unklar, fehlt ein sichtbarer Startpunkt, wird die benötigte Zeit unterschätzt oder konkurrieren zu viele Reize? Daraus entwickeln wir eine kleine Strategie, die in Ihrer realen Umgebung umsetzbar ist. Am Ende steht kein allgemeiner Vorsatz, sondern ein konkreter Versuch für die Zeit bis zum nächsten Termin.",
      ],
      bullets: [
        "ein klar begrenztes Anliegen statt einer vollständigen Lebensoptimierung",
        "ein nachvollziehbares Modell der aktuellen Hürde",
        "ein kleiner Alltagstest mit Zeitpunkt, Hilfsmittel und Minimalversion",
      ],
    },
    {
      eyebrow: "Späte Diagnose",
      heading: "ADHS-Beratung nach einer Diagnose im Erwachsenenalter",
      paragraphs: [
        "Eine späte ADHS-Diagnose kann gleichzeitig entlastend und verunsichernd sein. Frühere Schwierigkeiten erscheinen plötzlich in einem neuen Licht; manche Menschen reagieren mit Erleichterung, andere mit Trauer, Ärger oder der Frage, welche Entscheidungen unter anderen Bedingungen möglich gewesen wären. Psychoedukation hilft dabei, diese Reaktionen einzuordnen, ohne die gesamte Biografie nachträglich ausschließlich durch ADHS zu erklären.",
        "In der Beratung unterscheiden wir zwischen ADHS-typischen Funktionsproblemen, individuellen Lernerfahrungen, aktuellen Belastungen und vorhandenen Stärken. Daraus entsteht ein differenziertes Selbstverständnis: Die Diagnose kann Orientierung geben, ist aber keine vollständige Beschreibung Ihrer Persönlichkeit. Praktisch bedeutet das auch, bisherige Kompensationsstrategien zu prüfen – welche tragen weiterhin, welche kosten unverhältnismäßig viel Kraft und welche dürfen durch passendere Strukturen ersetzt werden?",
      ],
    },
    {
      eyebrow: "Beruf, Studium & Beziehungen",
      heading: "Strategien für die Lebensbereiche, in denen ADHS konkret spürbar wird",
      paragraphs: [
        "Im Beruf oder Studium geht es häufig um Aufgabenbeginn, Priorisierung, Zeitabschätzung, längere Projekte und den Wechsel zwischen Tätigkeiten. Statt mehr Disziplin zu fordern, prüfen wir äußere Entlastungen: sichtbare Zwischenschritte, begrenzte Arbeitsintervalle, klare Übergaben, realistische Puffer und eine Umgebung, in der wichtige Hinweise nicht sofort aus dem Blick geraten. Welche Anpassung sinnvoll ist, hängt von Tätigkeit, Arbeitsplatz und persönlichem Belastungsmuster ab.",
        "In Partnerschaft und Familie stehen oft andere Fragen im Vordergrund. Vergessene Absprachen, impulsive Reaktionen oder ungleich wahrgenommene Verantwortung können schnell als mangelndes Interesse verstanden werden. Beratung kann helfen, beobachtbares Verhalten von gegenseitigen Bewertungen zu trennen und konkrete Kommunikationswege zu vereinbaren. Eine nahestehende Person kann nach Absprache einbezogen werden; die Beratung ersetzt jedoch keine Paartherapie, wenn ein umfassender Beziehungskonflikt behandelt werden muss.",
      ],
    },
    {
      eyebrow: "Psychoedukation & Grenzen",
      heading: "Wie unterscheidet sich ADHS-Beratung von Coaching und Psychotherapie?",
      paragraphs: [
        "Psychoedukation bedeutet, wissenschaftlich und klinisch relevantes Wissen so auf die persönliche Situation zu übertragen, dass eigene Muster verständlicher und Handlungsmöglichkeiten konkreter werden. Der Begriff Coaching wird uneinheitlich verwendet und ist nicht geschützt. Dieses Angebot wird deshalb bewusst als fachlich eingebettete ADHS-Beratung beschrieben: transparent in Ziel, Umfang und Grenzen, ohne Erfolgsversprechen und ohne ein standardisiertes Optimierungsprogramm.",
        "Eine einzelne Beratung kann für Orientierung oder ein klar begrenztes Thema ausreichen. Mehrere Termine können sinnvoll sein, wenn Strategien erprobt und schrittweise angepasst werden sollen. Stehen dagegen erhebliche psychische Beschwerden, starke depressive Symptome, ausgeprägte Ängste, Traumafolgen, Suchtprobleme oder eine akute Krise im Vordergrund, reicht Beratung nicht aus. Dann klären wir, welche psychotherapeutische, ärztliche oder fachpsychiatrische Versorgung angemessen ist.",
      ],
      bullets: [
        "Beratung: Information, Orientierung und begrenzte Alltagsziele",
        "Psychotherapie: Behandlung psychischer Beschwerden in einem therapeutischen Rahmen",
        "Diagnostik: fachliche Klärung, ob die Kriterien einer ADHS erfüllt sind",
      ],
    },
  ],
  processIntro: "Die Beratung ist transparent und fokussiert. Bereits im Erstgespräch klären wir, ob Beratung zu Ihrem Anliegen passt oder ob Diagnostik, Psychotherapie oder ärztliche Unterstützung der sinnvollere nächste Schritt ist.",
  process: [
    { title: "Anliegen und Ausgangslage", text: "Wir besprechen Ihre aktuelle Situation, eine vorhandene Diagnose, bisherige Erfahrungen und den Bereich, in dem Sie sich zuerst eine spürbare Veränderung wünschen." },
    { title: "Priorität und Arbeitsmodell", text: "Wir beschreiben das konkrete Muster aus Auslösern, Anforderungen, Gedanken, Verhalten und Umgebung. Daraus entsteht ein gemeinsamer, nachvollziehbarer Ansatzpunkt." },
    { title: "Praktischer Transfer", text: "Sie nehmen einen kleinen, klar definierten Versuch in den Alltag mit. Hilfsmittel, Zeitpunkt, Mindestversion und mögliche Hindernisse werden vorher konkretisiert." },
    { title: "Auswertung und nächste Entscheidung", text: "Wir werten die Umsetzung aus und entscheiden gemeinsam: Strategie beibehalten, anpassen, anderes Thema priorisieren oder die Beratung zunächst abschließen." },
  ],
  differentiationHeading: "ADHS-Beratung, Diagnostik oder Psychotherapie?",
  differentiation: [
    "ADHS-Beratung setzt keine neue Diagnose. Wenn noch unklar ist, ob die Beschwerden tatsächlich durch ADHS erklärt werden, ist eine strukturierte ADHS-Diagnostik der passende Weg. Fragebögen oder Erfahrungen aus sozialen Medien reichen für eine fachliche Diagnose nicht aus.",
    "Beratung konzentriert sich auf Information, Orientierung und begrenzte Alltagsziele. Wenn erheblicher Leidensdruck, eine psychische Erkrankung, ausgeprägte Ängste, Depressionen, Traumafolgen oder komplexe Beziehungsmuster im Vordergrund stehen, kann Psychotherapie beziehungsweise eine ärztliche oder fachpsychiatrische Behandlung erforderlich sein.",
  ],
  boundaryTitle: "Beratung ersetzt keine medizinische Behandlung",
  boundaryText: "In der Praxis werden keine Medikamente verordnet oder verändert. Fragen zu Wirkung, Dosierung und Nebenwirkungen gehören in ärztliche Hände. Auch Bescheinigungen für Schule, Hochschule, Arbeitgeber oder Behörden sind nicht Bestandteil einer einzelnen Beratungssitzung.",
  urgentNote: "Bei akuter Selbst- oder Fremdgefährdung, konkreten Suizidgedanken oder einer schweren psychischen Krise ist die ADHS-Beratung nicht geeignet. Wenden Sie sich an den Notruf 112, den ärztlichen Bereitschaftsdienst 116117 oder die nächste psychiatrische Notaufnahme.",
  durationText: "Die Beratung ist zielorientiert und kann als einzelne Orientierungssitzung oder über mehrere Termine stattfinden. Häufig ist ein Abstand von ein bis zwei Wochen hilfreich, um Strategien im Alltag zu erproben.",
  therapistText: "Mein Praxisschwerpunkt ist ADHS im Erwachsenenalter. Ich verbinde fundierte Psychoedukation mit konkreter Verhaltensanalyse und alltagsnahen Strategien – wertschätzend, transparent und passend zu Ihren tatsächlichen Anforderungen.",
  faqHeading: "Häufige Fragen zur ADHS-Beratung",
  faqs: [
    { question: "Brauche ich für die ADHS-Beratung eine Diagnose?", answer: "Eine bereits gesicherte Diagnose ist besonders hilfreich, wenn Sie ADHS-spezifische Strategien entwickeln möchten. Bei einem begründeten Verdacht kann ein erstes Gespräch der Orientierung dienen; eine Beratung ersetzt jedoch keine strukturierte Diagnostik." },
    { question: "Was ist der Unterschied zwischen ADHS-Beratung und ADHS-Therapie?", answer: "Beratung fokussiert Information, Orientierung und klar begrenzte Alltagsthemen. Psychotherapie behandelt psychische Beschwerden und tiefer verankerte problematische Muster in einem therapeutischen Behandlungsrahmen. Im Erstgespräch klären wir transparent, welches Format zu Ihrem Anliegen passt." },
    { question: "Ist ADHS-Beratung dasselbe wie Coaching?", answer: "Die Begriffe überschneiden sich im Alltag. Dieses Angebot wird als fachlich eingebettete Beratung und Psychoedukation beschrieben. Es geht um das Verständnis individueller ADHS-Muster und die konkrete Übertragung in den Alltag – ohne Erfolgsversprechen oder ein starres Coaching-Programm." },
    { question: "Kann ich einzelne, konkrete Themen mitbringen?", answer: "Ja. Geeignet sind zum Beispiel Aufgabenstart, Zeitplanung, Arbeitsorganisation, Reizüberlastung, Kommunikation oder der Umgang mit einer späten Diagnose. Ein klar begrenztes Thema ist häufig ein guter Einstieg." },
    { question: "Beraten Sie auch zu ADHS-Medikamenten?", answer: "Wir können allgemeine Erfahrungen und Fragen für ein ärztliches Gespräch strukturieren. Eine individuelle medizinische Beratung, Verordnung oder Änderung von Medikamenten erfolgt in dieser Praxis nicht und muss ärztlich beziehungsweise fachpsychiatrisch stattfinden." },
    { question: "Kann eine Partnerin oder ein Partner teilnehmen?", answer: "Wenn es für das Beratungsziel sinnvoll ist und Sie dies wünschen, kann nach vorheriger Absprache eine nahestehende Person einbezogen werden. Vertraulichkeit und gemeinsamer Auftrag werden vorher geklärt." },
    { question: "Wie viele Beratungstermine sind typischerweise sinnvoll?", answer: "Das hängt vom Anliegen ab. Für Orientierung oder eine konkrete Fragestellung kann ein einzelner Termin ausreichen. Wenn Strategien im Alltag erprobt und angepasst werden sollen, sind mehrere Termine im Abstand von häufig ein bis zwei Wochen möglich. Eine feste Mindestzahl oder ein Erfolgsversprechen gibt es nicht." },
    { question: "Was kostet eine Sitzung?", answer: "Eine Beratungssitzung dauert 60 Minuten und kostet 69 €. Es handelt sich um eine Selbstzahlerleistung. Eine mögliche private Erstattung muss vorab mit der eigenen Versicherung geklärt werden." },
  ],
  sources: [
    { label: "AWMF: S3-Leitlinie ADHS im Kindes-, Jugend- und Erwachsenenalter", href: "https://register.awmf.org/de/leitlinien/detail/028-045" },
    { label: "NICE: ADHD – Information, Unterstützung und Behandlung bei Erwachsenen", href: "https://www.nice.org.uk/guidance/ng87/chapter/recommendations" },
  ],
  related: [
    { label: "ADHS-Diagnostik für Erwachsene", href: "/adhs-test-muenchen" },
    { label: "ADHS-Therapie für Erwachsene", href: "/adhs-therapie-muenchen" },
    { label: "ADHS im Erwachsenenalter", href: "/adhs-erwachsene-muenchen" },
    { label: "Neurofeedback bei ADHS", href: "/neurofeedback-muenchen" },
  ],
};

export default function AdhdCounselingPage() {
  return <PsychotherapyServicePage data={data} />;
}
