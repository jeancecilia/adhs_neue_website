import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Neurofeedback München bei ADHS | ADHS Praxis",
  description:
    "Ergänzendes apparatives Neurofeedback bei ADHS für Erwachsene in München-Schwabing. Gezieltes Training von Aufmerksamkeit & Selbstregulation. Wissenschaftlich fundiert.",
  alternates: {
    canonical: "/neurofeedback-muenchen",
  },
};

const NEUROFEEDBACK_FAQS = [
  {
    question: "Was genau ist Neurofeedback und wie fühlt sich eine Sitzung an?",
    answer:
      "Neurofeedback ist ein schmerzfreies, computergestütztes Biofeedback-Verfahren. Über 2 bis 3 winzige Sensoren auf der Kopfhaut wird die natürliche elektrische Aktivität Ihres Gehirns (EEG) erfasst. Diese Signale werden in ein optisches oder akustisches Feedback (z. B. eine Grafik oder Animation) übersetzt. Wenn das Gehirn in einen gewünschten Aufmerksamkeits- oder Entspannungszustand schaltet, läuft das Feedback flüssig weiter. Es wird kein Strom in das Gehirn geleitet – Sie trainieren Ihr Gehirn rein über kontinuierliche Rückmeldung.",
  },
  {
    question: "Wie viele Neurofeedback-Sitzungen sind bei ADHS sinnvoll?",
    answer:
      "Neurofeedback ist ein Lernprozess des Nervensystems. Für eine spürbare und nachhaltige Verankerung sind in der Regel 15 bis 25 Sitzungen sinnvoll. Zu Beginn (die ersten 8–10 Termine) empfehlen wir 1 bis 2 Sitzungen pro Woche. Bei stabileren Fortschritten im Alltag können die Abstände schrittweise auf 2 bis 3 Wochen vergrößert werden.",
  },
  {
    question: "Wie wird der Trainingserfolg im Verlauf überprüft?",
    answer:
      "Vor Beginn und begleitend im Verlauf erfassen wir standardisierte Verlaufsbögen und reflektieren in regelmäßigen Abständen, in welchen konkreten Alltagssituationen (z. B. Konzentration im Beruf, emotionale Gelassenheit, Schlafqualität) bereits spürbare Veränderungen eingetreten sind.",
  },
  {
    question: "Kann Neurofeedback Medikamente wie Methylphenidat ersetzen?",
    answer:
      "Neurofeedback wird in unserer Praxis nicht als Ersatz für eine notwendige fachärztliche Medikation dargestellt, sondern als ergänzende Methode zur Stärkung der körpereigenen Selbstregulation. Viele Patientinnen und Patienten nutzen es als medikamentenfreie Ergänzung oder im Rahmen eines kombinierten Gesamtbehandlungsplans.",
  },
  {
    question: "Gibt es Nebenwirkungen beim Neurofeedback?",
    answer:
      "Neurofeedback ist ein schonendes, nicht-invasives Verfahren. Gelegentlich kann es nach den ersten Einheiten zu einer vorübergehenden mentalen Ermüdung oder leichten Kopfschmerzen kommen – ähnlich wie nach einer intensiven Denksportaufgabe. Diese Reaktionen klingen in der Regel rasch wieder ab.",
  },
  {
    question: "Was kostet eine Neurofeedback-Sitzung und wer übernimmt die Kosten?",
    answer:
      "Eine Einzelsitzung (ca. 45–50 Minuten) kostet faire 69 €. Die Abrechnung erfolgt transparent als Selbstzahlerleistung bzw. auf Wunsch nach dem Gebührenverzeichnis für Heilpraktiker (GebüH). Private Krankenversicherungen und Heilpraktiker-Zusatzversicherungen erstatten die Kosten je nach Tarif oft anteilig oder voll. Gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht.",
  },
  {
    question: "Kann ich Neurofeedback mit Psychotherapie kombinieren?",
    answer:
      "Ja, genau darin liegt der besondere Vorteil unserer Praxis in München-Schwabing: Wir bieten Ihnen Psychotherapie, Alltagsstrategien und apparatives Neurofeedback aus einer Hand an.",
  },
  {
    question: "Für wen ist Neurofeedback nicht oder nicht allein ausreichend?",
    answer:
      "Bei akuten schweren Depressionen, unbehandelten substanzgebundenen Abhängigkeiten oder akuten Traumafolgen steht zunächst die therapeutische oder fachärztliche Stabilisierung im Vordergrund. Neurofeedback ist in solchen Fällen kein primäres Alleinverfahren.",
  },
];

const TRAININGS_ZIELE = [
  "Aufmerksamkeit und Fokus bei monotonen Aufgaben bewusster regulieren",
  "Ablenkungen durch Umweltreize oder innere Gedanken früher erkennen",
  "Selbstregulationsstrategien im Alltag gezielter abrufen",
  "Den Umgang mit innerer Unruhe und Reizüberflutung verbessern",
  "Körperliche und mentale Entspannung am Abend leichter einleiten",
  "Veränderungen der Aufmerksamkeitsmuster im Verlauf systematisch beobachten",
];

export default function NeurofeedbackPage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-18">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Neurofeedback München</span>
          </nav>
          <p className="eyebrow mb-3">Ergänzendes apparatives Verfahren in München-Schwabing</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px] md:text-[50px]">
            Neurofeedback in München
          </h1>
          <p className="mt-4 text-[18px] font-semibold leading-[1.4] text-[#7a5600] sm:text-[22px]">
            Ergänzendes Training von Aufmerksamkeit und Selbstregulation bei ADHS im Erwachsenenalter.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-700 sm:text-[18px]">
            Neurofeedback ist eine computergestützte Form des Biofeedbacks, bei der die eigene Gehirnaktivität in Echtzeit sichtbar gemacht wird. Durch visuelle und akustische Rückmeldungen können Prozesse der Aufmerksamkeit und neuronalen Selbstregulation gezielt trainiert werden.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/termin?anliegen=neurofeedback"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Neurofeedback-Erstgespräch anfragen
            </Link>
            <Link
              href="/adhs-therapie-muenchen"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white px-7 py-3.5 text-[14px] font-semibold text-[#173838] hover:bg-slate-50"
            >
              Zur ADHS-Therapie →
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Nicht-invasiv & schmerzfrei
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Etablierte Trainingsprotokolle
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Nahtlose Kombination mit Psychotherapie
            </span>
          </div>
        </div>
      </section>

      {/* 2. WAS IST NEUROFEEDBACK & WIE FUNKTIONIERT ES? */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Verständlich erklärt</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Was ist Neurofeedback und wie funktioniert es?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Unser Gehirn erzeugt in jedem Moment winzige elektrische Spannungsschwankungen – die sogenannten Gehirnwellen. Je nachdem, ob wir schlafen, tagträumen, konzentriert arbeiten oder innerlich gestresst sind, dominieren unterschiedliche Frequenzbänder (Delta, Theta, Alpha, Beta).
            </p>
            <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
              Beim Neurofeedback werden diese Frequenzen über schmerzfreie Sensoren auf der Kopfhaut erfasst und von einer Software in Echtzeit ausgewertet. Das Gehirn erhält über einen Bildschirm eine direkte Rückmeldung (z. B. ein flüssig laufendes Video), sobald es den gewünschten Zustand erreicht. Durch diese sogenannte <em>operante Konditionierung</em> lernt das Nervensystem, günstige Aktivitätsmuster schrittweise selbstständiger abzurufen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">1. Messen</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Sensoren erfassen die Gehirnaktivität (EEG) sekundengenau, völlig schmerzfrei und ohne Stromzufuhr.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">2. Rückmelden</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Der Computer spiegelt den Zustand über Bild- und Tonsignale in Echtzeit wider.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">3. Lernen</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Das Gehirn trainiert neue neuronale Aktivierungsmuster und stärkt die eigene Selbstregulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WIE NEUROFEEDBACK BEI ADHS ERGÄNZEND EINGESETZT WERDEN KANN */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Anwendung bei ADHS</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie Neurofeedback bei ADHS ergänzend eingesetzt werden kann
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Bei vielen Erwachsenen mit ADHS zeigt das EEG bei Konzentrationsanforderungen ein Übermaß an langsamen Theta-Wellen (Träumerei, Unterstimulation) bei gleichzeitigem Mangel an schnellen Beta-Wellen (aktiver Fokus). Das Gehirn schaltet bei monotonen Aufgaben unwillkürlich in einen Ruhezustand.
            </p>
            <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
              Mit spezifischen Trainingsprotokollen (u.a. Frequenzband-Training, SMR-Training) kann das Gehirn schrittweise üben, die übermäßige Verlangsamung zu reduzieren und konzentrierte Wachheit gezielter zu aktivieren.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-slate-200 card-shadow space-y-4">
            <h3 className="text-[20px] font-bold text-[#173838]">Mögliche Trainingsziele können sein:</h3>
            <ul className="grid gap-3 sm:grid-cols-2 text-[15px] text-slate-700">
              {TRAININGS_ZIELE.map((ziel) => (
                <li key={ziel} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0cc65] text-[12px] font-bold text-[#173838]">✓</span>
                  <span>{ziel}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SO LÄUFT EINE SITZUNG AB */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Konkreter Ablauf</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              So läuft eine Neurofeedback-Sitzung in unserer Praxis ab
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Eine reguläre Trainingseinheit dauert ca. 45 bis 50 Minuten und gliedert sich in vier Abschnitte:
            </p>
          </div>

          <div className="space-y-4 text-[15px] text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[18px] font-bold text-[#173838]">1. Kurzes Befindlichkeitsgespräch (ca. 5 Min.)</h3>
              <p className="mt-2 text-slate-600">
                Wie war die Woche? Gab es spürbare Veränderungen bei Konzentration, Schlaf oder innerer Ruhe?
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[18px] font-bold text-[#173838]">2. Schmerzfreies Anbringen der Sensoren (ca. 5 Min.)</h3>
              <p className="mt-2 text-slate-600">
                Kleine Sensoren werden mit einer leitfähigen Paste auf der Kopfhaut und den Ohrläppchen platziert.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[18px] font-bold text-[#173838]">3. Aktive Trainingsphase (ca. 30 Min.)</h3>
              <p className="mt-2 text-slate-600">
                Sie schauen entspannt auf einen Monitor. Über mehrere Trainingsrunden (Intervalle à 3–5 Minuten) trainiert Ihr Gehirn die optimale Selbststeuerung.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[18px] font-bold text-[#173838]">4. Auswertung & Transfer (ca. 5 Min.)</h3>
              <p className="mt-2 text-slate-600">
                Gemeinsame Besprechung der Messwerte und Besprechung von alltagsbezogenen Übungen bis zum nächsten Termin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WIE VIELE SITZUNGEN & VERLAUFSKONTROLLE */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Trainingsumfang & Verlauf</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie viele Neurofeedback-Sitzungen sind sinnvoll?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Neurofeedback ist ein neuroplastischer Lernprozess, der Wiederholung erfordert. Aus der Praxis hat sich folgende Struktur bewährt:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 border border-slate-200 card-shadow">
              <h3 className="text-[19px] font-bold text-[#173838] mb-2">Typischer Trainingsumfang</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                In der Regel sind <strong>15 bis 25 Sitzungen</strong> sinnvoll. Zu Beginn finden meist 1 bis 2 Termine pro Woche statt. Sobald sich das Trainingsmuster stabilisiert, werden die Abstände auf 2 bis 3 Wochen vergrößert.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 border border-slate-200 card-shadow">
              <h3 className="text-[19px] font-bold text-[#173838] mb-2">Regelmäßige Verlaufskontrolle</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Nach jeweils 8 bis 10 Sitzungen erfolgt ein Zwischenabgleich: Wir prüfen anhand standardisierter Verlaufsbögen und Ihrer persönlichen Alltagsbeobachtungen, welche Fortschritte erreicht wurden und passen das Protokoll individuell an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROMINENTER DIFFERENZIERUNGSBLOCK: PSYCHOTHERAPIE & NEUROFEEDBACK UNTER EINEM DACH */}
      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-8 sm:p-10 card-shadow space-y-6">
            <div className="inline-block rounded-full bg-[#173838] px-4 py-1 text-[12px] font-bold uppercase tracking-wider text-white">
              Unser Praxisschwerpunkt in München
            </div>
            <h2 className="text-[28px] font-bold text-[#173838] sm:text-[36px] leading-[1.2]">
              Psychotherapie & Neurofeedback unter einem Dach
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.7] text-slate-700">
              <p>
                Viele Praxen bieten entweder <em>nur</em> apparatives Neurofeedback oder <em>nur</em> klassische Gesprächstherapie an. Beide Ansätze haben ihre Grenzen:
              </p>
              <ul className="space-y-2 text-[15px]">
                <li className="flex items-start gap-2">
                  <span className="text-[#7a5600] font-bold">•</span>
                  <span><strong>Neurofeedback allein</strong> trainiert neuronale Muster – lehrt Sie aber nicht, wie Sie Ihren Kalender strukturieren, Partnerschaftskonflikte lösen oder mit Kritik umgehen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7a5600] font-bold">•</span>
                  <span><strong>Reine Psychotherapie</strong> liefert gute Strategien – scheitert aber im Alltag oft daran, dass das neurodivergente Gehirn schlicht überreizt und erschöpft ist.</span>
                </li>
              </ul>
              <p className="font-semibold text-[#173838] pt-2">
                In unserer Praxis verbinden wir beides: Die neuronale Stabilisierung durch Neurofeedback schafft die physiologische Ruhe, damit psychotherapeutische Verhaltensstrategien im Alltag greifen können.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WISSENSCHAFTLICHE EINORDNUNG (SUBSTANTIELL & HWG-KONFORM) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Evidenz & Berufsethik</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Wissenschaftliche Einordnung
          </h2>
          <div className="rounded-2xl bg-white p-8 border border-slate-200 card-shadow space-y-4 text-[15px] leading-[1.7] text-slate-700">
            <p>
              Neurofeedback wird seit vielen Jahren als ergänzendes Verfahren bei ADHS wissenschaftlich untersucht. Die Studienlage ist hinsichtlich verschiedener Altersgruppen, Protokolle und Trainingsformen differenziert zu betrachten.
            </p>
            <p>
              In der aktuellen S3-Leitlinie zur Behandlung von ADHS wird Neurofeedback als <strong>mögliche ergänzende Behandlungsoption</strong> innerhalb eines multimodalen Gesamtkonzepts aufgeführt. In unserer Praxis wird Neurofeedback daher nicht als isoliertes „Wundermittel“ oder Ersatz für eine fachgerechte Diagnostik und Psychotherapie dargestellt, sondern als fundierter, apparativer Trainingsbaustein.
            </p>
            <p className="text-[14px] text-slate-600 italic">
              Hinweis: Bei akuten schweren Depressionen, unbehandelten Suchterkrankungen oder akuten Traumafolgen steht zunächst die primäre therapeutische oder fachärztliche Stabilisierung im Vordergrund.
            </p>
          </div>
        </div>
      </section>

      {/* 8. DAUER & KOSTEN DER BEHANDLUNG (PROMINENTER 3ER-BLOCK) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-2">Transparente Honorare</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Kosten und Dauer von Neurofeedback in München
            </h2>
            <p className="mt-3 text-[16px] text-slate-600">
              Klare Rahmenbedingungen für Ihre Trainingsplanung:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <div className="text-[24px] font-bold text-[#7a5600] mb-1">45–50 Min.</div>
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Dauer pro Sitzung</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Inklusive kurzem Befindlichkeitsgespräch, schmerzfreier Sensorplatzierung, aktivem Training und Verlaufsabgleich.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-6 card-shadow">
              <div className="text-[24px] font-bold text-[#173838] mb-1">69 €</div>
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Honorar pro Trainingseinheit</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Abrechnung transparent auf Selbstzahlerbasis bzw. auf Wunsch nach dem Gebührenverzeichnis für Heilpraktiker (GebüH).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <div className="text-[24px] font-bold text-[#7a5600] mb-1">Erstattung</div>
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Privat / Zusatzversicherung</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Private Versicherungen & Heilpraktiker-Zusatzversicherungen erstatten je nach Tarif oft anteilig oder voll.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WER FÜHRT DAS NEUROFEEDBACK DURCH? (BEHANDLER TRUST BLOCK) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow grid gap-8 sm:grid-cols-[180px_1fr] items-center">
            <Image
              src="/images/portrait-jean-maurice-menzel.webp"
              alt="Jean-Maurice Cecilia-Menzel"
              width={360}
              height={450}
              loading="eager"
              className="aspect-[4/5] rounded-xl object-cover"
            />
            <div className="space-y-3">
              <p className="eyebrow mb-1">Neurofeedback mit therapeutischer Einordnung</p>
              <h2 className="text-[24px] font-bold text-[#173838]">
                Jean-Maurice Cecilia-Menzel
              </h2>
              <p className="text-[14px] font-semibold text-[#7a5600]">
                Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie · Schwerpunkt ADHS bei Erwachsenen & Neurofeedback
              </p>
              <p className="text-[15px] leading-relaxed text-slate-600">
                In unserer Praxis wird Neurofeedback nicht als rein technische Dienstleistung verstanden, sondern stets therapeutisch begleitet. Durch fundierte Weiterbildung und langjährige Praxiserfahrung mit neurodivergenten Erwachsenen bette ich das EEG-Training in ein ganzheitliches, empathisches Gesamtkonzept ein.
              </p>
              <Link
                href="/ueber-mich"
                className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-[#173838] hover:underline"
              >
                Mehr über Qualifikationen & Arbeitsweise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="section-space">
        <div className="container-shell max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">
              Fragen zu Neurofeedback in München
            </h2>
          </div>
          <FaqAccordion items={NEUROFEEDBACK_FAQS} />
        </div>
      </section>

      {/* 11. ABSCHLUSS-CTA */}
      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65] mb-2">Erstgespräch vereinbaren</p>
          <h2 className="text-[30px] sm:text-[40px] text-white">
            Interessieren Sie sich für Neurofeedback bei ADHS?
          </h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8 max-w-xl mx-auto">
            Vereinbaren Sie ein persönliches Erstgespräch in unserer Praxis in München-Schwabing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/termin?anliegen=neurofeedback"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[15px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Neurofeedback-Erstgespräch anfragen
            </Link>
            <Link
              href="/kontakt-anfahrt"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Praxis & Anfahrt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
