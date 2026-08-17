import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Kosten Psychotherapie & ADHS-Diagnostik München",
  description:
    "Transparente Festpreise: ADHS-Diagnostik für Erwachsene 199 €, Psychotherapie / Einzeltherapie 69 € / 60 Min. und Neurofeedback 69 € in München-Schwabing.",
  alternates: {
    canonical: "/ablauf-kosten",
  },
};

const KOSTEN_FAQS = [
  {
    question: "Übernimmt die gesetzliche Krankenkasse (GKV) die Kosten?",
    answer:
      "Gesetzliche Krankenkassen übernehmen die Behandlungskosten in einer reinen Privat- und Selbstzahlerpraxis nach dem Heilpraktikergesetz in der Regel nicht. Die Abrechnung erfolgt als Selbstzahlerleistung direkt zwischen Ihnen und der Praxis zu fairen, transparenten Festpreisen.",
  },
  {
    question: "Kann meine private Krankenversicherung (PKV) oder Beihilfe die Kosten erstatten?",
    answer:
      "Je nach Tarif können private Krankenversicherungen, Beihilfestellen und Heilpraktiker-Zusatzversicherungen Leistungen eines Heilpraktikers, beschränkt auf das Gebiet der Psychotherapie, ganz oder teilweise erstatten. Maßgeblich sind ausschließlich die Bedingungen Ihres individuellen Versicherungsvertrags. Bitte klären Sie eine mögliche Erstattung vor Behandlungsbeginn direkt mit Ihrem Versicherer.",
  },
  {
    question: "Bekomme ich eine Rechnung nach dem Gebührenverzeichnis für Heilpraktiker (GebüH)?",
    answer:
      "Ja. Auf Wunsch stellen wir Ihnen eine detaillierte Honorarrechnung aus, die sich – soweit für die jeweilige Leistung passend – an den Ziffern des Gebührenverzeichnisses für Heilpraktiker (GebüH) orientiert. Diese Rechnung können Sie selbstständig bei Ihrer privaten Krankenversicherung oder Zusatzversicherung zur Erstattung einreichen.",
  },
  {
    question: "Kann ich die Honorare steuerlich geltend machen?",
    answer:
      "Aufwendungen für psychotherapeutische Heilbehandlungen können unter bestimmten steuerrechtlichen Voraussetzungen als 'außergewöhnliche Belastungen' (§ 33 EStG) in der Einkommensteuererklärung geltend gemacht werden, sofern sie die zumutbare Belastungsgrenze übersteigen. Bitte halten Sie hierzu Rücksprache mit Ihrem Steuerberater.",
  },
  {
    question: "Wie lange im Voraus kann ich einen Termin kostenfrei absagen?",
    answer:
      "Da wir als reine Bestellpraxis arbeiten und feste Termine exklusiv für Sie reservieren, bitten wir Sie, Termine im Verhinderungsfall mindestens 48 Stunden (werktags) vorher abzusagen. Bei späteren Absagen oder Nichterscheinen kann ein entsprechendes Ausfallhonorar in Rechnung gestellt werden.",
  },
];

export default function AblaufKostenPage() {
  return (
    <div className="w-full">
      <BreadcrumbJsonLd items={[
        { name: "Startseite", path: "" },
        { name: "Ablauf & Kosten", path: "/ablauf-kosten" },
      ]} />
      {/* 1. HERO SECTION */}
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-10 sm:py-13">
        <div className="container-shell max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Ablauf & Kosten</span>
          </nav>
          <p className="eyebrow mb-2">Transparenz & Faires Honorar</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[44px] md:text-[48px]">
            Ablauf & Kosten in unserer Praxis in München
          </h1>
          <p className="mt-4 text-[16px] leading-[1.65] text-slate-700 sm:text-[18px]">
            Als Privatpraxis mit Schwerpunkt ADHS im Erwachsenenalter bieten wir Ihnen volle Kostentransparenz, klare Festpreise und kurzfristige Termine nach Verfügbarkeit.
          </p>
        </div>
      </section>

      {/* 2. DIE 4 PREISKARTEN */}
      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="container-shell max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="eyebrow mb-1">Klare Übersicht</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Honorarübersicht der Praxis
            </h2>
            <p className="mt-2 text-[15px] text-slate-600">
              Transparente, faire Festpreise ohne versteckte Zusatzkosten:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Karte 1: ADHS-Diagnostik für Erwachsene */}
            <div className="rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-8 card-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block rounded-full bg-[#173838] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Festpreis
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600]">
                    ca. 2,5 Std. Gesamtumfang
                  </span>
                </div>
                <h3 className="text-[22px] font-bold text-[#173838]">
                  ADHS-Diagnostik für Erwachsene
                </h3>
                <p className="font-serif text-[34px] font-bold text-[#173838] my-3">
                  199 €
                </p>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  Strukturierte diagnostische Abklärung bei ADHS-Verdacht.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Ausführliche biographische Anamnese</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Strukturierte ADHS-Erhebung (DIVA-5)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Standardisierte Fragebogenverfahren (ASRS, WURS-k)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Differenzialdiagnostische Einordnung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Auswertung & persönliche Befundbesprechung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Schriftliche Befundzusammenfassung inklusive</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/termin?anliegen=screening"
                className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#173838] py-3 text-[13px] font-bold text-white shadow hover:bg-[#204a4a]"
              >
                Diagnostik anfragen
              </Link>
            </div>

            {/* Karte 2: Psychotherapie / Einzeltherapie */}
            <div className="rounded-2xl border-2 border-slate-300 bg-white p-8 card-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block rounded-full bg-[#faf9f8] border border-slate-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173838]">
                    Einzeltherapie
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600]">
                    Volle 60 Min.
                  </span>
                </div>
                <h3 className="text-[22px] font-bold text-[#173838]">
                  Psychotherapie / Einzeltherapie
                </h3>
                <p className="font-serif text-[34px] font-bold text-[#173838] my-3">
                  69 € <span className="text-[15px] font-sans font-normal text-slate-500">/ 60 Min.</span>
                </p>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  Verhaltenstherapeutisch orientierte Einzelsitzung bei ADHS, Angststörungen oder depressiven Beschwerden.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>ADHS im Erwachsenenalter & alltagstaugliche Strategien</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Soziale Angst, Panikattacken & spezifische Phobien</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Depressive Verstimmung, Grübeln & Aktivitätsaufbau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Individuell geplante Ziele und Übungen für den Alltag</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/termin?anliegen=therapie"
                className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#173838] py-3 text-[13px] font-bold text-white shadow hover:bg-[#204a4a]"
              >
                Therapieplatz anfragen
              </Link>
            </div>

            {/* Karte 3: Neurofeedback */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow flex flex-col justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">
                  Apparatives Training
                </p>
                <h3 className="text-[22px] font-bold text-[#173838]">
                  Neurofeedback-Training
                </h3>
                <p className="font-serif text-[34px] font-bold text-[#173838] my-3">
                  69 € <span className="text-[15px] font-sans font-normal text-slate-500">/ 45–50 Min.</span>
                </p>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  Computergestütztes EEG-Biofeedback zur Schulung von Aufmerksamkeit und mentaler Selbstregulation.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Schmerzfreie Sensorplatzierung & Echtzeit-Feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Standardisierte Verlaufs- & Erfolgskontrollen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Direkt mit Psychotherapie kombinierbar</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/termin?anliegen=neurofeedback"
                className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white py-3 text-[13px] font-bold text-[#173838] hover:bg-slate-50"
              >
                Neurofeedback anfragen
              </Link>
            </div>

            {/* Karte 4: Diagnostischer Ersttermin / Erstgespräch */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow flex flex-col justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-2">
                  Erstkontakt
                </p>
                <h3 className="text-[22px] font-bold text-[#173838]">
                  Diagnostischer Ersttermin / Erstgespräch
                </h3>
                <p className="font-serif text-[34px] font-bold text-[#173838] my-3">
                  69 € <span className="text-[15px] font-sans font-normal text-slate-500">/ 60 Min.</span>
                </p>
                <p className="text-[14px] leading-relaxed text-slate-600 mb-4">
                  Persönliches Kennenlernen, Erfassung Ihrer aktuellen Lebenssituation und Festlegung der optimalen nächsten Schritte.
                </p>
                <ul className="space-y-2 text-[13px] text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Erstsichtung bisheriger Befunde & Berichte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Klärung: Diagnostik vs. direkte Therapie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7a5600] font-bold">✓</span>
                    <span>Transparenter Behandlungsplan</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/termin?anliegen=screening"
                className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white py-3 text-[13px] font-bold text-[#173838] hover:bg-slate-50"
              >
                Ersttermin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SO LÄUFT DIE ABRECHNUNG AB (4 SCHRITTE) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Transparenter Ablauf</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              So läuft die Abrechnung ab
            </h2>
            <p className="mt-3 text-[16px] text-slate-700">
              Ein unkomplizierter, transparenter Prozess in vier einfachen Schritten:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">1. Termin vereinbaren</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Sie wählen Ihr Anliegen (Diagnostik, Therapie oder Neurofeedback) und erhalten zeitnah einen festen Termin.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">2. Behandlung & Diagnostik</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Durchführung der Termine in unserer ruhigen Schwabinger Praxis (oder im Erstgespräch auf Wunsch per Video).
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">3. Transparente Rechnung</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Sie erhalten eine detaillierte Honorarrechnung (auf Wunsch mit Orientierung an den Ziffern des GebüH).
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-slate-200 card-shadow">
              <span className="text-[20px] font-bold text-[#7a5600]">4. Begleichung & Erstattung</span>
              <p className="mt-2 text-[14px] text-slate-600">
                Sie begleichen das Honorar bequem per Überweisung und reichen die Rechnung bei Bedarf selbstständig bei Ihrer Versicherung ein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECHTLICHE HINWEISE ZUR ERSTATTUNG (PKV, GEBÜH, SELBSTZAHLER) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Versicherung & Selbstzahler</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Hinweise zur Kostenübernahme
          </h2>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow space-y-4 text-[15px] leading-[1.7] text-slate-700">
            <h3 className="text-[18px] font-bold text-[#173838]">
              Private Krankenversicherung & Zusatzversicherung
            </h3>
            <p>
              Je nach Tarif können private Krankenversicherungen und Zusatzversicherungen Leistungen eines Heilpraktikers, beschränkt auf das Gebiet der Psychotherapie, ganz oder teilweise erstatten. Maßgeblich sind ausschließlich die Bedingungen Ihres individuellen Versicherungsvertrags.
            </p>
            <p>
              Bitte klären Sie eine mögliche Erstattung vor Behandlungsbeginn direkt mit Ihrem Versicherer. Die Rechnungsstellung kann sich – soweit für die jeweilige Leistung passend – am Gebührenverzeichnis für Heilpraktiker (GebüH) orientieren.
            </p>

            <div className="pt-3 border-t border-slate-200">
              <h3 className="text-[18px] font-bold text-[#173838] mb-1">
                Selbstzahler
              </h3>
              <p>
                Als Selbstzahler rechnen Sie die Leistungen direkt mit der Praxis ab. Es erfolgt keine Abrechnung mit Ihrer gesetzlichen oder privaten Krankenversicherung durch die Praxis. Wenn Sie eine Rechnung selbst bei einer Versicherung einreichen, entscheiden Sie selbst über diese Weitergabe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION ZU KOSTEN & ABRECHNUNG */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">
              Fragen zu Kosten & Erstattung
            </h2>
          </div>
          <FaqAccordion items={KOSTEN_FAQS} />
        </div>
      </section>

      {/* 6. ABSCHLUSS-CTA */}
      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65] mb-2">Klarheit & Transparenz</p>
          <h2 className="text-[30px] sm:text-[40px] text-white">
            Haben Sie Fragen zu Ablauf oder Kosten?
          </h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8 max-w-xl mx-auto">
            Wir beraten Sie gerne transparent und persönlich im Vorfeld Ihres Termins.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/termin"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[15px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Termin anfragen
            </Link>
            <Link
              href="/kontakt-anfahrt"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Praxis & Kontakt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
