import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "ADHS-Therapie München für Erwachsene | ADHS Praxis",
  description:
    "Spezialisierte ADHS-Therapie & Psychotherapie für Erwachsene in München-Schwabing. Konkrete Alltagsstrategien gegen Prokrastination, emotionale Überlastung & Chaos.",
  alternates: {
    canonical: "/adhs-therapie-muenchen",
  },
};

const THERAPIE_FAQS = [
  {
    question: "Brauche ich vor Beginn der Therapie bereits eine offizielle ADHS-Diagnose?",
    answer:
      "Nein. Wenn Sie bereits eine gesicherte Diagnose mitbringen, steigen wir direkt in die zielgerichtete psychotherapeutische Begleitung und Strategieentwicklung ein. Sollte noch keine Diagnose vorliegen, können wir vorab eine strukturierte ADHS-Diagnostik direkt in unserer Praxis durchführen.",
  },
  {
    question: "Kann ich eine Therapie beginnen, wenn ich ADHS bisher nur vermute?",
    answer:
      "Ja. Viele Erwachsene spüren seit langem, dass typische ADHS-Muster ihren Alltag erschweren. Im Erstgespräch klären wir Ihre Situation: Wir entscheiden gemeinsam, ob zunächst eine diagnostische Abklärung sinnvoll ist oder ob wir direkt an konkreten Entlastungsstrategien arbeiten.",
  },
  {
    question: "Muss ich Medikamente (wie Stimulanzien) nehmen, um von der Therapie zu profitieren?",
    answer:
      "Nein. Eine strukturierte Psychotherapie und Verhaltensstrategien sind sowohl ohne Medikamente als auch in Kombination mit einer bestehenden medikamentösen Einstellung hochwirksam. Wir unterstützen Sie auf dem Weg, der am besten zu Ihren persönlichen Bedürfnissen und Werten passt.",
  },
  {
    question: "Wie läuft das Erstgespräch ab?",
    answer:
      "Im 50-minütigen Erstgespräch lernen wir uns persönlich kennen. Wir verschaffen uns einen Überblick über Ihre aktuellen Herausforderungen (im Beruf, Alltag oder in Beziehungen), besprechen Ihre individuellen Ziele und legen gemeinsam die sinnvollsten nächsten Schritte fest.",
  },
  {
    question: "Wie häufig finden die Sitzungen statt und wie viele sind sinnvoll?",
    answer:
      "In der Regel finden die Sitzungen anfangs alle 1 bis 2 Wochen statt. Für viele Patientinnen und Patienten reicht bereits ein Rahmen von 10 bis 20 Sitzungen aus, um spürbare, dauerhafte Routinen im Alltag zu etablieren. Später können die Abstände auf 3 bis 4 Wochen zur Stabilisierung vergrößert werden.",
  },
  {
    question: "Was kostet eine Therapiesitzung und wer übernimmt die Kosten?",
    answer:
      "Das Honorar für eine Einzelsitzung (volle 60 Minuten) beträgt faire 69 €. Die Abrechnung erfolgt transparent als Selbstzahlerleistung bzw. auf Wunsch nach dem Gebührenverzeichnis für Heilpraktiker (GebüH). Private Krankenversicherungen und Heilpraktiker-Zusatzversicherungen erstatten die Kosten je nach Tarif häufig anteilig oder voll. Gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht.",
  },
  {
    question: "Können Begleitprobleme wie Selbstwertzweifel, Stress oder Konflikte behandelt werden?",
    answer:
      "Ja, unbedingt. ADHS tritt selten isoliert auf. Chronische Überforderung führt oft zu Versagensängsten, Rejection Sensitivity (RSD) und depressiven Erschöpfungszuständen. Die Stärkung des Selbstwerts und der emotionale Schamabbau sind feste Kernbestandteile unserer Arbeit.",
  },
  {
    question: "Kann Neurofeedback Teil der Behandlung sein?",
    answer:
      "Ja. In unserer Schwabinger Praxis können Sie psychotherapeutische Gespräche mit apparativem Neurofeedback kombinieren, um die neuronale Selbstregulation und Aufmerksamkeitssteuerung direkt am Gehirn zu trainieren.",
  },
  {
    question: "Können mein Partner oder meine Familie einbezogen werden?",
    answer:
      "Ja, wenn Sie das wünschen. ADHS-Muster führen in Partnerschaften oft zu wiederkehrenden Missverständnissen und der typischen 'Eltern-Kind-Falle'. Gezielte Paargespräche schaffen Entlastung und beidseitiges Verständnis.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "Als reine Privat- und Selbstzahlerpraxis können wir Ihnen Termine für ein persönliches Erstgespräch in der Regel zeitnah innerhalb von 1 bis 3 Wochen anbieten.",
  },
];

const ALLTAGS_THEMEN = [
  {
    title: "Prokrastination & Anfangen",
    subtitle: "Dopaminmangel & Startblockaden überwinden",
    text: "Sie wissen genau, was zu tun ist – können sich aber selbst bei hoher Dringlichkeit nicht überwinden anzufangen. Wir entwickeln praxistaugliche Micro-Steps, Body-Doubling-Systeme und reizarme Startroutinen, die ohne zermürbenden Notfalldruck funktionieren.",
    icon: "⏳",
  },
  {
    title: "Organisation & Zeitmanagement",
    subtitle: "Zeitblindheit & Alltagschaos reduzieren",
    text: "Für das ADHS-Gehirn existieren oft nur 'Jetzt' und 'Nicht jetzt'. Wir etablieren visuelle Planungsstrukturen, realistische Pufferzeiten und reibungsarme Routinen für Aufgaben, Haushalt, Finanzen und berufliche Projekte.",
    icon: "📋",
  },
  {
    title: "Emotionale Überforderung & RSD",
    subtitle: "Rejection Sensitivity & Reizoffenheit regulieren",
    text: "Kritik oder Zurückweisung treffen Sie unvermittelt und intensiv. Wir erarbeiten Methoden zur Vergrößerung der 'Reiz-Reaktions-Lücke' und zur somatischen Beruhigung des Nervensystems bei plötzlicher Reizüberflutung.",
    icon: "🔥",
  },
  {
    title: "Selbstwert & Schamabbau",
    subtitle: "Das Gefühl 'faul oder unzuverlässig' zu sein auflösen",
    text: "Jahrelange Misserfolgserlebnisse hinterlassen tiefe Selbstzweifel. Wir ordnen Ihre Biografie neu ein, bauen unbegründete Schuldgefühle ab und stärken ein stabiles, wohlwollendes Selbstbild.",
    icon: "🛡️",
  },
  {
    title: "Beziehungen & Partnerschaft",
    subtitle: "Kommunikationsfallen & Missverständnisse klären",
    text: "Auflösung der typischen Dynamik in Partnerschaften, in der ein Partner ständig mahnt und der andere sich kontrolliert fühlt. Etablierung klarer, verbindlicher Absprachen auf Augenhöhe.",
    icon: "🤝",
  },
  {
    title: "Beruf, Studium & Leistungsdruck",
    subtitle: "Hyperfokus lenken & Erschöpfung vorbeugen",
    text: "Stärken wie vernetztes Denken und Innovationskraft gezielt entfalten, während administrative Hürden, Ablenkungen im Büro und Meeting-Müdigkeit wirksam reduziert werden.",
    icon: "🎯",
  },
];

export default function AdhsTherapiePage() {
  return (
    <div className="w-full">
      <BreadcrumbJsonLd items={[
        { name: "Startseite", path: "" },
        { name: "ADHS-Therapie", path: "/adhs-therapie-muenchen" },
      ]} />
      {/* 1. HERO SECTION */}
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-18">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS-Therapie München</span>
          </nav>
          <p className="eyebrow mb-3">Psychotherapeutische Begleitung in München-Schwabing</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px] md:text-[50px]">
            ADHS-Therapie für Erwachsene in München
          </h1>
          <p className="mt-4 text-[18px] font-semibold leading-[1.4] text-[#7a5600] sm:text-[22px]">
            Strukturierende Psychotherapie, alltagstaugliche Strategien und nachhaltige emotionale Selbstregulation.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-700 sm:text-[18px]">
            ADHS im Erwachsenenalter zeigt sich häufig in quälendem Aufschieben, innerer Unruhe, chronischer Erschöpfung, Selbstzweifeln oder wiederkehrenden Konflikten im Alltag und Beruf. In unserer spezialisierten Praxis in München-Schwabing unterstützen wir Sie dabei, Ihre eigenen neurobiologischen Muster zu verstehen, Selbstvorwürfe abzubauen und praxistaugliche Routinen zu entwickeln, die wirklich zu Ihrem Gehirn passen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/termin?anliegen=therapie"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Erstgespräch anfragen
            </Link>
            <Link
              href="/adhs-test-muenchen"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white px-7 py-3.5 text-[14px] font-semibold text-[#173838] hover:bg-slate-50"
            >
              Zur ADHS-Diagnostik →
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Zeitnahe Termine (ohne monatelange Wartezeit)
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Ganzheitliche Kombination mit Neurofeedback möglich
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Praxiserprobte Systeme statt starrer Ratschläge
            </span>
          </div>
        </div>
      </section>

      {/* 2. WANN KANN EINE ADHS-THERAPIE SINNVOLL SEIN? */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Ausgangssituationen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wann kann eine ADHS-Therapie für Erwachsene sinnvoll sein?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Klassische Ratgeber und Standard-Produktivitätstipps („Nutzen Sie einfach einen Kalender“, „Räumen Sie abends auf“) führen bei ADHS oft zu Frustration und Selbstvorwürfen. Warum? Weil sie die neurobiologische Natur der Exekutivfunktionsstörung ignorieren. Eine spezialisierte Therapie ist besonders dann sinnvoll, wenn:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">1. Der Alltag von ständiger Erschöpfung geprägt ist</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Sie kompensieren Ihre Unaufmerksamkeit durch enormen inneren Druck und ständige Alarmbereitschaft (Masking), was schleichend in die totale Erschöpfung führt.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">2. Wichtige Lebensbereiche leiden</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Wiederkehrende Reibereien am Arbeitsplatz, Mahnungen durch verpasste Rechnungsfristen oder chronische Konflikte in der Partnerschaft belasten Ihre Lebensqualität.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">3. Emotionen außer Kontrolle geraten</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Geringste Anlässe oder wahrgenommene Kritik lösen intensive seelische Schmerzen, Reizbarkeit oder tagelangen Rückzug aus.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">4. Eine späte Diagnose verarbeitet werden muss</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Die Erleichterung über eine späte ADHS-Diagnose wird von Trauer über verpasste Chancen in Schule, Studium und Beruf begleitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WOBEI KANN PSYCHOTHERAPIE BEI ADHS KONKRET UNTERSTÜTZEN? (PROMINENTER ABSCHNITT) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-5xl space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mb-2">Konkreter Alltagsnutzen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px] leading-[1.2]">
              Wobei kann Psychotherapie bei ADHS konkret unterstützen?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Wir arbeiten nicht mit theoretischen Abhandlungen, sondern an den konkreten Schnittstellen Ihres Alltags. Hier erkennen sich die meisten Erwachsenen wieder:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALLTAGS_THEMEN.map((thema) => (
              <div key={thema.title} className="rounded-2xl border border-slate-200 bg-white p-7 card-shadow flex flex-col justify-between">
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf9f8] text-xl">
                    {thema.icon}
                  </div>
                  <h3 className="text-[19px] font-bold text-[#173838]">{thema.title}</h3>
                  <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mt-1 mb-3">{thema.subtitle}</p>
                  <p className="text-[14px] leading-relaxed text-slate-600">{thema.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WIE ICH BEI ADHS ARBEITE (ERLEBBARER NUTZEN STATT FACHSPRACHE) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Therapeutische Arbeitsweise</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie ich bei ADHS arbeite: Verstehen, Entlasten, Verändern
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Mein therapeutischer Ansatz verbindet evidenzbasierte kognitive Verhaltenstherapie (KVT), Akzeptanz- und Commitment-Elemente (ACT), störungsspezifische Psychoedukation und apparatives Neurofeedback:
            </p>
          </div>

          <div className="space-y-4 text-[15px] text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[13px] font-bold text-white">1</span>
              <div>
                <h3 className="text-[18px] font-bold text-[#173838]">Eigene Muster verstehen</h3>
                <p className="mt-1 text-slate-600">
                  Sie verstehen, warum Ihr Gehirn bei Routineaufgaben blockiert und wie Sie gesunden Antrieb aktivieren, anstatt sich mit Schuldgefühlen und Selbstvorwürfen zu quälen.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[13px] font-bold text-white">2</span>
              <div>
                <h3 className="text-[18px] font-bold text-[#173838]">Alltagsstrukturen aufbauen, die wirklich halten</h3>
                <p className="mt-1 text-slate-600">
                  Gemeinsam entwickeln wir individuelle Hilfsmittel für Ihren Alltag: To-do-Systeme, Pufferzeiten und visuelle Reminder, die Sie auch nach drei Wochen noch gern nutzen.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[13px] font-bold text-white">3</span>
              <div>
                <h3 className="text-[18px] font-bold text-[#173838]">Emotionen & Stress wirksam regulieren</h3>
                <p className="mt-1 text-slate-600">
                  Sie lernen konkrete Methoden, um bei Reizüberflutung, plötzlicher Frustration oder Kritik das vegetative Nervensystem gezielt herunterzufahren.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[13px] font-bold text-white">4</span>
              <div>
                <h3 className="text-[18px] font-bold text-[#173838]">Konkrete Übungen zwischen den Terminen</h3>
                <p className="mt-1 text-slate-600">
                  Kleine, machbare Mini-Experimente im Alltag, die wir im nächsten Termin reflektieren und Schritt für Schritt verfeinern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRAXIS-STANDORT & ATMOSPHÄRE CALLOUT */}
      <section className="py-4 sm:py-6">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-[rgba(47,79,79,0.15)] bg-[#173838] p-7 sm:p-9 text-white card-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65]">
                  Praxis München-Schwabing · Hildeboldstraße 1
                </p>
                <h3 className="text-[22px] font-bold text-white leading-snug">
                  Geschützte Gesprächsatmosphäre auf Augenhöhe
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-200">
                  Verlässliche Einzeltermine in ruhiger Umgebung – ohne Hektik, ohne Zeitdruck und ohne überfülltes Wartezimmer.
                </p>
              </div>
              <div className="shrink-0 flex sm:flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-sm">
                  <span className="text-[#f0cc65]">✓</span> Diskrete Einzelpraxis
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-sm">
                  <span className="text-[#f0cc65]">✓</span> U2 Hohenzollernplatz
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABLAUF DER THERAPIE */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Transparente Planung</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie läuft die ADHS-Therapie ab?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Ein strukturierter Ablauf gibt Ihnen Orientierung und Sicherheit:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">01. Erstgespräch</span>
              <p className="mt-2 text-[14px] text-slate-600">
                60-minütiges Kennenlernen, Erfassung Ihrer aktuellen Lebenssituation, Symptome und Behandlungsziele.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">02. Individuelle Zieldefinition</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Festlegung konkreter Ziele (z. B. Reduktion von Aufschieben, mehr emotionale Ruhe, weniger Beziehungsstress).
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">03. Therapeutische Sitzungen</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Regelmäßige 60-minütige Sitzungen (anfangs meist alle 1 bis 2 Wochen) mit praktischen Übungen und Psychoedukation.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">04. Verlaufsüberprüfung & Transfer</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Regelmäßiger Abgleich der Fortschritte, Festigung der Routinen und schrittweiser Übergang in größere Terminabstände.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADHS & BEGLEITERKRANKUNGEN (KOMORBIDITÄTEN) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <div>
            <p className="eyebrow mb-1">Ganzheitlicher Blick</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Häufige Begleiterscheinungen bei ADHS
            </h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
              Unser Fokus liegt klar auf ADHS. Da chronische Überforderung jedoch oft sekundäre Begleitprobleme erzeugt, denken wir diese im therapeutischen Prozess stets mit:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Depressive Erschöpfung</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Häufig die Folge jahrelanger Überlastung, Misserfolgserlebnisse und des Gefühls, im Kampf gegen das Chaos allein zu sein.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Angst & Perfektionismus</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Versagensängste und exzessiver Kontrollzwang als erlernter Schutz vor Vergesslichkeit und Unaufmerksamkeit.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Schlafstörungen</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Abendliches Gedankenkarussell und innere Getriebenheit, die das notwendige Abschalten und Einfinden in die Nachtruhe blockieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEDIKAMENTE & ZUSAMMENARBEIT MIT FACHÄRZTEN */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Transparenz & Kooperation</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Medikamente und Zusammenarbeit mit Fachärzten
          </h2>
          <div className="rounded-2xl bg-white p-8 border border-slate-200 card-shadow space-y-4 text-[15px] leading-[1.7] text-slate-700">
            <p>
              In unserer Praxis werden <strong>keine Medikamente verordnet</strong>. Die heilkundliche Erlaubnis ist auf das Gebiet der Psychotherapie beschränkt.
            </p>
            <p>
              Gleichzeitig arbeiten wir vollkommen vorurteilsfrei: Die Kombination aus medikamentöser Einstellung (z. B. durch einen Facharzt für Psychiatrie) und verhaltenstherapeutischer Psychotherapie gilt in der S3-Leitlinie als besonders wirksame Behandlungsform bei moderater bis schwerer ADHS.
            </p>
            <p>
              Wenn Sie eine medikamentöse Unterstützung anstreben oder bereits medikamentös eingestellt sind, begleiten wir Sie psychotherapeutisch parallel und unterstützen Sie bei der Erarbeitung stabiler Alltagsroutinen.
            </p>
          </div>
        </div>
      </section>

      {/* 8. NEUROFEEDBACK ALS MÖGLICHE ERGÄNZUNG */}
      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow flex flex-col sm:flex-row gap-8 items-center">
            <div className="space-y-4 flex-1">
              <p className="eyebrow mb-1">Ergänzendes Verfahren</p>
              <h2 className="text-[24px] font-bold text-[#173838] sm:text-[30px]">
                Neurofeedback als Ergänzung zur Psychotherapie
              </h2>
              <p className="text-[15px] leading-relaxed text-slate-600">
                In unserer Schwabinger Praxis haben Sie die Möglichkeit, psychotherapeutische Gespräche mit apparativem <strong>Neurofeedback</strong> zu kombinieren. Durch visuelle und akustische Rückmeldung von Gehirnwellen lernt das Gehirn, Aufmerksamkeits- und Entspannungszustände eigenständig zu stabilisieren.
              </p>
              <Link
                href="/neurofeedback-muenchen"
                className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-[#7a5600] hover:underline"
              >
                Mehr über Neurofeedback bei ADHS erfahren →
              </Link>
            </div>
            <div className="w-full sm:w-[260px] shrink-0">
              <Image
                src="/images/praxis-alternative-raum.webp"
                alt="Neurofeedback in der ADHS Praxis München"
                width={500}
                height={400}
                className="rounded-xl object-cover h-[200px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. DAUER, HÄUFIGKEIT & KOSTEN (MAXIMAL KONKRET) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Klare Rahmenbedingungen</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Dauer, Häufigkeit und Kosten
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Sitzungsdauer & Rhythmus</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Volle 60 Minuten pro Einzelsitzung. Termine finden anfangs meist im 1- bis 2-Wochen-Rhythmus statt. Oft genügen 10 bis 20 Termine für dauerhafte Stabilität.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 border border-slate-200 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Faires Honorar</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                69 € pro 60-Minuten-Einzelsitzung. Abrechnung transparent auf Selbstzahlerbasis bzw. auf Wunsch nach dem Gebührenverzeichnis für Heilpraktiker (GebüH).
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Versicherungserstattung</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Private Versicherungen & Zusatzversicherungen erstatten je nach Tarif oft anteilig oder voll. Gesetzliche Kassen übernehmen die Kosten in der Regel nicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ÜBER MICH (STÄRKER MIT ADHS-SCHWERPUNKT VERKNÜPFT) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow grid gap-8 sm:grid-cols-[180px_1fr] items-center">
            <Image
              src="/images/portrait-jean-maurice-hd.jpg"
              alt="Jean-Maurice Cecilia-Menzel"
              width={360}
              height={450}
              loading="eager"
              className="aspect-[4/5] rounded-xl object-cover"
            />
            <div className="space-y-3">
              <p className="eyebrow mb-1">Ihr Therapeut in München</p>
              <h3 className="text-[24px] font-bold text-[#173838]">
                Jean-Maurice Cecilia-Menzel, M.Sc.
              </h3>
              <p className="text-[14px] font-semibold text-[#7a5600]">
                Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie · Spezialisierung auf ADHS im Erwachsenenalter
              </p>
              <p className="text-[15px] leading-relaxed text-slate-600">
                Mein fachlicher Schwerpunkt liegt auf der Begleitung von Erwachsenen mit ADHS. Warum? Weil Standardtherapien die neurodivergente Natur des Gehirns oft verkennen. Ich begegne Ihnen auf Augenhöhe, ohne Stigmatisierung, und verbinde fundierte Psychoedukation, verhaltensorientierte Alltagsstrategien und Neurofeedback zu einem passgenauen Gesamtkonzept.
              </p>
              <Link
                href="/ueber-mich"
                className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-[#173838] hover:underline"
              >
                Mehr über meine Qualifikationen & Arbeitsweise →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION (10 CONVERSION-SCHWERE FRAGEN) */}
      <section className="section-space bg-[#faf9f8] border-t border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">
              Fragen zur ADHS-Therapie für Erwachsene
            </h2>
          </div>
          <FaqAccordion items={THERAPIE_FAQS} />
        </div>
      </section>

      {/* 12. ABSCHLUSS-CTA */}
      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65] mb-2">Erstgespräch anfragen</p>
          <h2 className="text-[30px] sm:text-[40px] text-white">
            Finden Sie Ihren Weg zu mehr Gelassenheit und Struktur
          </h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8 max-w-xl mx-auto">
            Vereinbaren Sie Ihr persönliches Erstgespräch in unserer Praxis in München-Schwabing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/termin?anliegen=therapie"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[14px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Erstgespräch anfragen
            </Link>
            <Link
              href="/kontakt-anfahrt"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Praxis & Anfahrt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
