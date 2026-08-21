import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, trustPoints, processSteps, homeContent } from "@/config/site";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "ADHS Praxis München | Beratung, Diagnostik & Therapie",
  description:
    "ADHS-Beratung, Diagnostik und Psychotherapie für Erwachsene in München-Schwabing. Konkrete Unterstützung für Alltag, Beruf, Studium und Beziehungen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ADHS Praxis München | Beratung, Diagnostik & Therapie",
    description: "ADHS-Beratung, Diagnostik und Psychotherapie für Erwachsene in München-Schwabing – strukturiert, alltagsnah und fachlich fundiert.",
    url: "/",
  },
  twitter: {
    title: "ADHS Praxis München | Beratung, Diagnostik & Therapie",
    description: "ADHS-Beratung, Diagnostik und Psychotherapie für Erwachsene in München-Schwabing.",
  },
};

const HOMEPAGE_FAQS = [
  {
    question: "Wer diagnostiziert und behandelt ADHS bei Erwachsenen in Ihrer Praxis?",
    answer:
      "Die Diagnostik und psychotherapeutische Begleitung wird von Jean-Maurice Cecilia-Menzel, Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie, mit fachlichem Schwerpunkt ADHS im Erwachsenenalter durchgeführt.",
  },
  {
    question: "Brauche ich bereits eine offizielle ADHS-Diagnose für eine Psychotherapie?",
    answer:
      "Nein. Wenn Sie den begründeten Verdacht haben, unter ADHS zu leiden, können wir zunächst eine strukturierte ADHS-Diagnostik in unserer Praxis durchführen oder direkt mit orientierenden therapeutischen Alltagsstrategien starten.",
  },
  {
    question: "Was kostet die Diagnostik oder Therapie und übernehmen Krankenkassen die Kosten?",
    answer:
      "Wir führen eine Privat- und Selbstzahlerpraxis. Gesetzliche Krankenkassen erstatten die Kosten in der Regel nicht. Private Krankenversicherungen oder Zusatzversicherungen übernehmen die Kosten für Heilpraktikerleistungen (GebüH) je nach individuellem Tarif häufig anteilig oder vollständig.",
  },
  {
    question: "Kann ADHS erst im Erwachsenenalter entstehen oder festgestellt werden?",
    answer:
      "ADHS entsteht nicht neu im Erwachsenenalter – die neurobiologische Veranlagung besteht seit der Kindheit. Viele Menschen, insbesondere Frauen und Personen mit hoher Intelligenz, kompensieren Symptome jedoch über Jahrzehnte (Masking), bis im Berufs- oder Familienleben die Belastungsgrenze erreicht wird und die Diagnose erstmals im Erwachsenenalter gestellt wird.",
  },
  {
    question: "Verordnen Sie in Ihrer Praxis Medikamente gegen ADHS?",
    answer:
      "Nein, in unserer Praxis werden keine Medikamente verordnet. Wir arbeiten mit psychotherapeutischen Verfahren, Psychoedukation, Alltagsstrukturierung und apparativem Neurofeedback. Wenn Sie eine medikamentöse Behandlung anstreben, unterstützen wir Sie mit unserem ausführlichen schriftlichen Befundbericht bei der Vorstellung bei einem Facharzt für Psychiatrie.",
  },
  {
    question: "Kann Neurofeedback ein Teil der ADHS-Behandlung sein?",
    answer:
      "Ja. In unserer Schwabinger Praxis können Sie psychotherapeutische Sitzungen mit apparativem Neurofeedback kombinieren, um die neuronale Selbstregulation und Aufmerksamkeitssteuerung direkt am Gehirn zu trainieren.",
  },
];

const THERAPIE_THEMEN_HOMEPAGE = [
  "Prokrastination und Startblockaden überwinden",
  "Struktur, Priorisierung und Alltagsorganisation",
  "Aufmerksamkeitssteuerung und Reizfilterung",
  "Umgang mit Stress, Burnout und Überforderung",
  "Emotionale Regulation und Rejection Sensitivity (RSD)",
  "Selbstwertstärkung und Abbau von Versagensscham",
  "Herausforderungen im Beruf, Studium und Karriere",
  "Partnerschaft, Ehe und soziale Beziehungen",
  "Umgang mit einer späten ADHS-Diagnose",
];

const WEITERE_SCHWERPUNKTE = [
  {
    title: "Soziale Angst",
    text: "Bewertungsangst, Vermeidung, Sicherheitsverhalten und belastendes Grübeln nach sozialen Situationen gezielt bearbeiten.",
    href: "/soziale-angst-muenchen",
  },
  {
    title: "Panikattacken",
    text: "Die Angst vor der Angst verstehen, körperliche Signale neu einordnen und vermiedene Situationen zurückgewinnen.",
    href: "/panikattacken-muenchen",
  },
  {
    title: "Spezifische Phobien",
    text: "Klar umschriebene Ängste mit individuell geplanter kognitiver Verhaltenstherapie und Exposition behandeln.",
    href: "/spezifische-phobien-muenchen",
  },
  {
    title: "Depressive Verstimmung",
    text: "Bei Antriebsmangel, Rückzug, Grübeln und Selbstabwertung wieder Struktur und Handlungsspielraum entwickeln.",
    href: "/depressive-verstimmung-muenchen",
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="overflow-hidden pb-12 pt-4 sm:pb-16 sm:pt-8">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-x-14 lg:gap-y-0">
          <div className="max-w-2xl lg:col-start-1 lg:row-start-1 lg:self-end">
            <p className="eyebrow mb-3">{homeContent.hero.eyebrow}</p>
            <h1 className="max-w-xl text-[32px] leading-[1.1] tracking-[-0.02em] text-[#173838] sm:text-[46px] md:text-[50px] sm:leading-[1.05]">
              {homeContent.hero.h1}
            </h1>
            <p className="mt-2 max-w-xl text-[18px] font-semibold leading-[1.35] text-[#7a5600] sm:text-[21px] [hyphens:none]">
              {homeContent.hero.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.65] text-slate-700 sm:text-[18px]">
              {homeContent.hero.description}
            </p>
          </div>

          <div className="relative lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="overflow-hidden rounded-2xl bg-white p-2 card-shadow">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/portrait-jean-maurice-menzel-400.webp 400w, /images/portrait-jean-maurice-menzel-640.webp 640w, /images/portrait-jean-maurice-menzel.webp 800w"
                  sizes="(max-width: 639px) calc(100vw - 56px), (max-width: 1023px) calc(100vw - 80px), 49vw"
                />
                <img
                  src="/images/portrait-jean-maurice-menzel.webp"
                  alt={homeContent.hero.imageAlt}
                  width={800}
                  height={999}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                />
              </picture>
            </div>
            <div className="mt-4 rounded-2xl bg-white px-5 py-4 card-shadow sm:absolute sm:-bottom-5 sm:left-6 sm:mt-0">
              <div className="flex items-center gap-3">
                <Image src="/figma_assets/icon_1.svg" alt="" aria-hidden="true" width={22} height={28} />
                <div>
                  <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">{homeContent.hero.locationLabel}</p>
                  <p className="mt-0.5 text-[15px] font-bold text-[#173838]">{homeContent.hero.locationName}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl lg:col-start-1 lg:row-start-2 lg:self-start">

            {/* Vorteile */}
            <ul className="mt-6 space-y-3 text-[15px] leading-6 text-[#173838]">
              {homeContent.hero.bulletPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 font-semibold">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f0cc65] text-[12px] font-bold text-[#173838]">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/adhs-test-muenchen"
                prefetch={false}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                {homeContent.hero.ctaPrimary}
              </Link>
              <Link
                href="/termin"
                prefetch={false}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3.5 text-[15px] font-semibold text-[#173838] transition-colors hover:bg-slate-50"
              >
                {homeContent.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-3 text-[13px] text-slate-500">
              Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie · Praxis in München-Schwabing
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (UPGRADED, HIGH LEGIBILITY) */}
      <section className="border-y border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-8">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustPoints.map((point, index) => (
              <div
                key={point}
                className="flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white p-4 card-shadow transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#faf9f8] text-[#173838]">
                  <Image src={`/figma_assets/icon_${index + 1}.svg`} alt="" aria-hidden="true" width={22} height={22} />
                </div>
                <p className="text-[14px] font-bold leading-snug text-[#173838]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VIER EINSTIEGSWEGE (TRIAGE) */}
      <section id="leistungen" className="section-space scroll-mt-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="eyebrow mb-3">{homeContent.triage.eyebrow}</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">{homeContent.triage.h2}</h2>
            <p className="mt-3 text-[16px] text-slate-600">
              {homeContent.triage.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {homeContent.triage.cards.map((card) => (
              <div
                key={card.title}
                className={`flex flex-col justify-between rounded-2xl p-7 card-shadow transition-transform hover:-translate-y-1 ${
                  card.featured
                    ? "border-2 border-[#173838] bg-[#fdfbf7]"
                    : "border border-slate-200 bg-white"
                }`}
              >
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-4 ${
                      card.featured
                        ? "bg-[#f0cc65] text-[#173838]"
                        : "bg-[#f4f3f0] text-[#7a5600]"
                    }`}
                  >
                    {card.tag}
                  </span>
                  <h3 className="text-[22px] font-bold text-[#173838] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-600 mb-6">
                    {card.text}
                  </p>
                </div>
                <Link
                  href={card.href}
                  className="inline-flex min-h-[44px] items-center text-[13px] font-bold uppercase tracking-wider text-[#173838] hover:underline"
                >
                  {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROBLEMIDENTIFIKATION: ADHS IM ERWACHSENENALTER */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="eyebrow mb-3">{homeContent.problems.eyebrow}</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">{homeContent.problems.h2}</h2>
            <p className="mt-3 text-[16px] text-slate-600">
              {homeContent.problems.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.problems.items.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 card-shadow">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf9f8] text-lg">
                  {["⏳", "🎯", "📋", "⚡", "🔥", "🤝"][index] || "•"}
                </div>
                <h3 className="text-[18px] font-bold text-[#173838] mb-2">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[15px] font-medium text-slate-700 max-w-xl mx-auto mb-6">
              ADHS zeigt sich bei Erwachsenen sehr unterschiedlich. Deshalb steht am Anfang keine Standardlösung, sondern die individuelle Betrachtung Ihrer Situation.
            </p>
            <Link
              href="/termin"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[14px] font-semibold text-white shadow-md hover:opacity-95"
            >
              Erstgespräch anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DIAGNOSTIK AUF DER STARTSEITE (TEASER ~180 WÖRTER) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Diagnostische Abklärung</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            ADHS-Diagnostik für Erwachsene in München
          </h2>
          <div className="space-y-4 text-[16px] leading-[1.7] text-slate-700">
            <p>
              Wenn Sie vermuten, ADHS zu haben, bringt eine strukturierte diagnostische Abklärung Klarheit und Entlastung. In unserer Schwabinger Praxis prüfen wir Ihre Symptome anhand anerkannter internationaler Leitlinien (DIVA-5, ASRS v1.1, WURS-k) und differenzieren sie sorgfältig von Erschöpfungszuständen, Depressionen oder Traumafolgen.
            </p>
            <p>
              Bei Erfüllung der Kriterien wird eine fundierte ADHS-Diagnose dokumentiert und ein schriftlicher diagnostischer Befundbericht erstellt. Sollte zusätzlich eine ärztliche oder somatische Abklärung erforderlich sein, sprechen wir konkrete Empfehlungen aus.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/adhs-test-muenchen"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3 text-[14px] font-semibold text-white shadow hover:opacity-95"
            >
              Zur ADHS-Diagnostik in München →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PSYCHOTHERAPIE BEI ADHS AUF DER STARTSEITE (TEASER ~220 WÖRTER) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow mb-2">Therapeutische Begleitung</p>
              <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
                Psychotherapie bei ADHS im Erwachsenenalter
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
                ADHS betrifft weit mehr als Konzentration: Viele Erwachsene kämpfen mit chronischer Prokrastination, emotionaler Reizbarkeit und dem schmerzhaften Gefühl, trotz größter Anstrengung hinter den eigenen Möglichkeiten zu bleiben.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-slate-700">
                In der Psychotherapie erarbeiten wir praxiserprobte Systeme: Micro-Steps gegen Aufschieben, emotionsregulierende Übungen und den Abbau von Scham. So schaffen Sie Stabilität im Beruf und in Beziehungen.
              </p>
              <div className="mt-6">
                <Link
                  href="/adhs-therapie-muenchen"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3 text-[14px] font-semibold text-white shadow hover:opacity-95"
                >
                  Mehr über ADHS-Therapie in München →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 card-shadow">
              <p className="text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-4">Themenschwerpunkte in der Praxis</p>
              <ul className="space-y-2.5 text-[14px] text-slate-700">
                {THERAPIE_THEMEN_HOMEPAGE.map((thema) => (
                  <li key={thema} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7a5600]" />
                    <span>{thema}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WEITERE PSYCHOTHERAPEUTISCHE SCHWERPUNKTE */}
      <section className="section-space">
        <div className="container-shell max-w-5xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="eyebrow mb-3">Über ADHS hinaus</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[38px]">
              Weitere psychotherapeutische Schwerpunkte
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              ADHS im Erwachsenenalter bleibt der klare Schwerpunkt der Praxis. Zusätzlich bieten wir strukturierte psychotherapeutische Begleitung bei ausgewählten Angststörungen und depressiven Beschwerden.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {WEITERE_SCHWERPUNKTE.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-6 card-shadow card-shadow-hover">
                <h3 className="text-[20px] font-bold text-[#173838]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{item.text}</p>
                <span className="mt-4 inline-flex min-h-[44px] items-center text-[14px] font-bold text-[#7a5600] group-hover:underline">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEUROFEEDBACK BEI ADHS (TEASER ~160 WÖRTER) */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Ergänzendes Verfahren</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Neurofeedback bei ADHS: Training der Selbstregulation
          </h2>
          <div className="space-y-4 text-[16px] leading-[1.7] text-slate-700">
            <p>
              Neurofeedback ist ein computergestütztes Biofeedback-Verfahren, bei dem ausgewählte Gehirnaktivitäten (EEG) in Echtzeit optisch oder akustisch zurückgemeldet werden.
            </p>
            <p>
              In unserer Praxis setzen wir Neurofeedback – abgestimmt auf Ihre persönliche Situation – ergänzend zur Psychotherapie ein, um fokussierte, ruhige Gehirnzustände gezielt und nachhaltig zu trainieren.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/neurofeedback-muenchen"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3 text-[14px] font-semibold text-[#173838] hover:bg-slate-50"
            >
              Neurofeedback in München kennenlernen →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. SCHWERPUNKT ADHS BEI ERWACHSENEN */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl text-center">
          <span className="inline-block rounded-full bg-[#f0cc65]/30 px-4 py-1 text-[12px] font-bold uppercase tracking-wider text-[#7a5600] mb-3">
            Klarer Praxis-Fokus
          </span>
          <h2 className="text-[28px] text-[#173838] sm:text-[40px] leading-[1.15]">
            Schwerpunkt ADHS im Erwachsenenalter
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-slate-700 max-w-3xl mx-auto">
            Unsere Praxis konzentriert sich fachlich besonders auf Erwachsene mit bestehender ADHS-Diagnose oder dem Verdacht auf ADHS. Ergänzend behandeln wir soziale Angst, Panikattacken, spezifische Phobien und depressive Beschwerden mit verhaltenstherapeutisch orientierten Verfahren.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 border border-slate-200 card-shadow text-[15px] font-bold text-[#173838]">
            <span>🎯</span>
            <span>Diagnostik, Psychotherapie und Neurofeedback greifen nahtlos ineinander.</span>
          </div>
        </div>
      </section>

      {/* 9. ABLAUF IN DER PRAXIS */}
      <section className="section-space">
        <div className="container-shell max-w-5xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Transparenter Ablauf</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">
              Ihr Weg in unserer Praxis
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
                <span className="text-[28px] font-black text-[#9a6900]">{step.step}</span>
                <h3 className="mt-2 text-[17px] font-bold text-[#173838]">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{step.blurb}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/termin"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[14px] font-semibold text-white shadow hover:opacity-95"
            >
              Termin anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* 10. ÜBER-MICH-TEASER (WITH PRAXIS ROOM PICTURE) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl bg-white p-2 card-shadow">
              <Image
                src="/images/portrait-jean-maurice-hd.jpg"
                alt="Jean-Maurice Cecilia-Menzel – Praxisleitung"
                width={720}
                height={900}
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 px-4 py-2.5 backdrop-blur-sm card-shadow text-[13px] font-bold text-[#173838]">
                📍 Hildeboldstraße 1 · München-Schwabing
              </div>
            </div>
            <div>
              <p className="eyebrow mb-2">Praxisleitung & Qualifikation</p>
              <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
                {siteConfig.practitioner}, M.Sc.
              </h2>
              <p className="text-[14px] font-semibold text-[#7a5600] mb-4">
                Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie
              </p>
              <p className="text-[16px] leading-[1.7] text-slate-700 [hyphens:none]">
                Schwerpunkt meiner Arbeit ist die psychotherapeutische Begleitung von Erwachsenen mit ADHS sowie die strukturierte Diagnostik bei ADHS-Verdacht.
              </p>
              <p className="mt-3 text-[16px] leading-[1.7] text-slate-700 [hyphens:none]">
                Dabei verbinde ich fundierte Psychoedukation mit konkreten Alltagsstrategien. Neurofeedback kann abhängig von der individuellen Ausgangslage ergänzend eingesetzt werden.
              </p>
              <div className="mt-6">
                <Link
                  href="/ueber-mich"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-[14px] font-semibold text-[#173838] hover:bg-slate-50"
                >
                  Mehr über mich & die Praxis →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="section-space">
        <div className="container-shell max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">
              Fragen vor dem Erstgespräch
            </h2>
          </div>
          <FaqAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 12. ABSCHLUSS-CTA */}
      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65] mb-2">Erstgespräch anfragen</p>
          <h2 className="text-[30px] sm:text-[40px] text-white">
            Der erste Schritt zu mehr Klarheit und Struktur
          </h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8 max-w-xl mx-auto">
            Sie haben bereits eine ADHS-Diagnose oder vermuten ADHS? Vereinbaren Sie jetzt Ihren Termin in München-Schwabing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/adhs-test-muenchen"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[14px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              ADHS-Diagnostik anfragen
            </Link>
            <Link
              href="/termin"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-[14px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Erstgespräch anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
