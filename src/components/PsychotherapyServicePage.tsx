import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import FaqAccordion from "@/components/FaqAccordion";
import { siteConfig } from "@/config/site";

export type ServiceCard = {
  title: string;
  text: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCredential = {
  label: string;
  detail: string;
};

export type ServiceEditorialSection = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PsychotherapyServiceData = {
  slug: string;
  kind?: "psychotherapy" | "counseling";
  lastReviewed?: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  intro: string[];
  heroFacts?: string[];
  credentials?: ServiceCredential[];
  proofPoints: string[];
  situationsHeading: string;
  situationsIntro: string;
  situations: ServiceCard[];
  symptomsHeading: string;
  symptomsIntro: string[];
  symptoms: ServiceCard[];
  approachHeading: string;
  approachIntro: string[];
  approach: ServiceCard[];
  editorialSections?: ServiceEditorialSection[];
  processIntro: string;
  process: ServiceCard[];
  differentiationHeading: string;
  differentiation: string[];
  boundaryTitle: string;
  boundaryText: string;
  urgentNote?: string;
  durationText: string;
  therapistText: string;
  faqHeading: string;
  faqs: ServiceFaq[];
  sources: { label: string; href: string }[];
  related: { label: string; href: string }[];
};

export default function PsychotherapyServicePage({ data }: { data: PsychotherapyServiceData }) {
  const pageUrl = `${siteConfig.baseUrl}/${data.slug}`;
  const isCounseling = data.kind === "counseling";
  const parentBreadcrumb = isCounseling
    ? { name: "Leistungen", path: "/#leistungen" }
    : { name: "Psychotherapie", path: "/adhs-therapie-muenchen" };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: data.h1,
        description: data.subtitle,
        inLanguage: "de-DE",
        lastReviewed: data.lastReviewed ?? "2026-08-17",
        reviewedBy: { "@id": `${siteConfig.baseUrl}/#therapeut` },
        about: { "@id": `${pageUrl}#leistung` },
        mainEntity: { "@id": `${pageUrl}#leistung` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        hasPart: { "@id": `${pageUrl}#faq` },
        isPartOf: { "@id": `${siteConfig.baseUrl}/#website` },
      },
      {
        "@type": isCounseling ? "Service" : "MedicalTherapy",
        "@id": `${pageUrl}#leistung`,
        name: data.h1,
        description: data.subtitle,
        url: pageUrl,
        provider: isCounseling
          ? [
              { "@id": `${siteConfig.baseUrl}/#praxis` },
              { "@id": `${siteConfig.baseUrl}/#therapeut` },
            ]
          : { "@id": `${siteConfig.baseUrl}/#praxis` },
        ...(isCounseling
          ? {
              serviceType: "ADHS-Beratung und Psychoedukation für Erwachsene",
              areaServed: { "@type": "City", name: "München" },
              audience: {
                "@type": "PeopleAudience",
                audienceType: "Erwachsene mit ADHS oder begründetem ADHS-Verdacht",
                requiredMinAge: 18,
              },
              availableChannel: {
                "@type": "ServiceChannel",
                serviceLocation: { "@id": `${siteConfig.baseUrl}/#praxis` },
              },
              offers: { "@id": `${pageUrl}#angebot` },
            }
          : { relevantSpecialty: "Psychotherapy" }),
      },
      ...(isCounseling
        ? [
            {
              "@type": "Offer",
              "@id": `${pageUrl}#angebot`,
              url: pageUrl,
              price: "69.00",
              priceCurrency: "EUR",
              category: "Selbstzahlerleistung",
              description: "60 Minuten ADHS-Beratung und Psychoedukation für Erwachsene in München-Schwabing",
              seller: { "@id": `${siteConfig.baseUrl}/#praxis` },
              itemOffered: { "@id": `${pageUrl}#leistung` },
            },
          ]
        : []),
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  const practitionerSection = (
    <section className="section-space">
      <div className="container-shell max-w-4xl">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 card-shadow sm:grid-cols-[180px_1fr]">
          <Image src="/images/portrait-jean-maurice-hd.jpg" alt={isCounseling ? "Jean-Maurice Cecilia-Menzel" : "Jean-Maurice Cecilia-Menzel, M.Sc."} width={360} height={450} className="aspect-[4/5] rounded-xl object-cover" />
          <div className="space-y-3">
            <p className="eyebrow mb-1">{isCounseling ? "Ihr Ansprechpartner in München" : "Ihr Therapeut in München"}</p>
            <h2 className="text-[24px] font-bold text-[#173838] sm:text-[30px]">Jean-Maurice Cecilia-Menzel{isCounseling ? "" : ", M.Sc."}</h2>
            <p className="text-[14px] font-semibold text-[#7a5600]">{isCounseling ? "Heilpraktiker Psychotherapie · Kognitive Verhaltenstherapie · Neurofeedback & Biofeedback" : "Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie · Ausbildung in KVT und Hypnosetherapie"}</p>
            <p className="text-[15px] leading-relaxed text-slate-600">{data.therapistText}</p>
            <Link href="/ueber-mich" className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-[#173838] hover:underline">Qualifikationen & Arbeitsweise →</Link>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="w-full">
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", path: "" },
          parentBreadcrumb,
          { name: data.breadcrumb, path: `/${data.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-18">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href={parentBreadcrumb.path} className="inline-flex min-h-[44px] items-center hover:text-[#173838]">{parentBreadcrumb.name}</Link>
            <span>/</span>
            <span className="font-medium text-[#173838]">{data.breadcrumb}</span>
          </nav>
          <p className="eyebrow mb-3">{data.eyebrow}</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px] md:text-[50px]">{data.h1}</h1>
          <p className="mt-4 text-[18px] font-semibold leading-[1.4] text-[#7a5600] sm:text-[22px]">{data.subtitle}</p>
          {(!data.heroFacts || data.heroFacts.length === 0) && (
            <div className="mt-5 space-y-3 text-[16px] leading-[1.75] text-slate-700 sm:text-[18px]">
              {data.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          )}
          {data.heroFacts && data.heroFacts.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-[rgba(47,79,79,0.14)] py-4 text-[15px] font-bold text-[#173838]" aria-label="Rahmendaten der Leistung">
              {data.heroFacts.map((fact, index) => (
                <span key={fact} className="inline-flex items-center gap-3">
                  {index > 0 && <span className="hidden text-[#b68a18] sm:inline" aria-hidden="true">·</span>}
                  {fact}
                </span>
              ))}
            </div>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/termin?anliegen=therapie" className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5">
              Erstgespräch anfragen
            </Link>
            <Link href="/ablauf-kosten" className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white px-7 py-3.5 text-[14px] font-semibold text-[#173838] hover:bg-slate-50">
              Ablauf & Kosten →
            </Link>
          </div>
          {data.credentials && data.credentials.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Qualifikationen von Jean-Maurice Cecilia-Menzel">
              {data.credentials.map((credential) => (
                <Link
                  key={credential.label}
                  href="/ueber-mich"
                  title={credential.detail}
                  aria-label={`${credential.label}: ${credential.detail}`}
                  className="inline-flex min-h-[36px] items-center rounded-full border border-[rgba(47,79,79,0.16)] bg-white px-4 py-2 text-[12px] font-semibold text-[#173838] hover:border-[#173838]"
                >
                  <span className="mr-1.5 text-[#b68a18]" aria-hidden="true">✓</span>{credential.label}
                </Link>
              ))}
            </div>
          )}
          {data.heroFacts && data.heroFacts.length > 0 && (
            <div className="mt-6 max-w-3xl space-y-3 text-[16px] leading-[1.75] text-slate-700 sm:text-[18px]">
              {data.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          )}
          {data.proofPoints.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-[#173838]">
              {data.proofPoints.map((point) => <span key={point}><span className="mr-1.5 text-[#7a5600]">✓</span>{point}</span>)}
            </div>
          )}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Ausgangssituationen</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[36px]">{data.situationsHeading}</h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-slate-700">{data.situationsIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.situations.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
                <p className="mb-2 text-[12px] font-bold uppercase tracking-wider text-[#7a5600]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-[18px] font-bold text-[#173838]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.editorialSections && data.editorialSections.length > 0 && (
        <section className="section-space border-y border-[rgba(47,79,79,0.1)] bg-white">
          <div className="container-shell max-w-4xl divide-y divide-slate-200">
            {data.editorialSections.map((section) => (
              <article key={section.heading} className="grid gap-5 py-10 first:pt-0 last:pb-0 lg:grid-cols-[0.85fr_1.35fr] lg:gap-12">
                <div>
                  <p className="eyebrow mb-2">{section.eyebrow}</p>
                  <h2 className="text-[27px] leading-[1.2] text-[#173838] sm:text-[34px]">{section.heading}</h2>
                </div>
                <div className="space-y-4 text-[16px] leading-[1.75] text-slate-700">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2 pt-1">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b68a18]" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section-space border-y border-[rgba(47,79,79,0.1)] bg-[#faf9f8]">
        <div className="container-shell max-w-5xl space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-2">{isCounseling ? "Beratungsthemen" : "Beschwerden erkennen"}</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[38px]">{data.symptomsHeading}</h2>
            <div className="mt-4 space-y-3 text-left text-[16px] leading-[1.75] text-slate-700 sm:text-center">
              {data.symptomsIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.symptoms.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
                <h3 className="text-[18px] font-bold text-[#173838]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">{isCounseling ? "Beratungsansatz" : "Therapeutische Arbeitsweise"}</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[36px]">{data.approachHeading}</h2>
            <div className="mt-4 space-y-3 text-[16px] leading-[1.75] text-slate-700">
              {data.approachIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="space-y-4">
            {data.approach.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[13px] font-bold text-white">{index + 1}</span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#173838]">{item.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-6">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-[rgba(47,79,79,0.15)] bg-[#173838] p-7 text-white card-shadow sm:p-9">
            <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65]">Praxis München-Schwabing · Hildeboldstraße 1</p>
            <h2 className="mt-2 text-[24px] font-bold leading-snug text-white">{isCounseling ? "ADHS-Beratung in einem klaren, wertschätzenden Rahmen" : "Psychotherapie in einem verlässlichen, geschützten Rahmen"}</h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-200">{isCounseling ? "Die Beratung orientiert sich an Ihrer konkreten Lebenssituation. Wir übersetzen Wissen über ADHS in kleine, überprüfbare Schritte und werten gemeinsam aus, welche Strategien in Ihrem Alltag tatsächlich funktionieren." : "Die Behandlung wird nachvollziehbar geplant, regelmäßig gemeinsam ausgewertet und an Ihre Belastbarkeit angepasst. Übungen zwischen den Sitzungen werden konkret vorbereitet; niemand wird unvorbereitet oder gegen den eigenen Willen mit schwierigen Situationen konfrontiert."}</p>
          </div>
        </div>
      </section>

      {isCounseling && practitionerSection}

      <section className="section-space border-y border-[rgba(47,79,79,0.1)] bg-[#faf9f8]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Transparenter Ablauf</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[36px]">{isCounseling ? "Vom Anliegen zum alltagstauglichen nächsten Schritt" : "Vom Erstgespräch bis zur Stabilisierung"}</h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-slate-700">{data.processIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.process.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
                <span className="text-[20px] font-bold text-[#7a5600]">{String(index + 1).padStart(2, "0")}. {item.title}</span>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <div>
            <p className="eyebrow mb-2">Sorgfältige Einordnung</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[36px]">{data.differentiationHeading}</h2>
          </div>
          <div className="space-y-4 text-[16px] leading-[1.75] text-slate-700">
            {data.differentiation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="rounded-2xl border border-[#dec77f] bg-[#fffaf0] p-6">
            <h3 className="text-[18px] font-bold text-[#173838]">{data.boundaryTitle}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{data.boundaryText}</p>
          </div>
          {data.urgentNote && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6" role="note">
              <h3 className="text-[18px] font-bold text-red-900">Akute Hilfe</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-red-900">{data.urgentNote}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-space border-y border-[rgba(47,79,79,0.1)] bg-[#faf9f8]">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Klare Rahmenbedingungen</p>
          <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[36px]">Dauer, Häufigkeit und Kosten</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838]">Individuelle Dauer</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{data.durationText}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838]">Honorar</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{isCounseling ? "Eine Beratungssitzung dauert 60 Minuten und kostet 69 €. Die Abrechnung erfolgt transparent als Selbstzahlerleistung." : "Eine psychotherapeutische Einzelsitzung dauert 60 Minuten und kostet 69 €. Die Abrechnung erfolgt transparent als Selbstzahlerleistung."}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838]">Kostenerstattung</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{isCounseling ? "ADHS-Beratung ist eine Selbstzahlerleistung. Ob eine private Versicherung Kosten übernimmt, muss vorab direkt mit dem eigenen Tarif geklärt werden." : "Private Versicherungen und Zusatzversicherungen erstatten je nach Tarif möglicherweise einen Teil der Kosten. Gesetzliche Krankenkassen übernehmen die Behandlung in der Regel nicht."}</p>
            </div>
          </div>
          <Link href="/ablauf-kosten" className="inline-flex min-h-[44px] items-center text-[14px] font-bold text-[#173838] hover:underline">Alle Preise und Hinweise zur Erstattung →</Link>
        </div>
      </section>

      {!isCounseling && practitionerSection}

      <section className="section-space border-t border-[rgba(47,79,79,0.1)] bg-[#faf9f8]">
        <div className="container-shell max-w-3xl">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">{data.faqHeading}</h2>
          </div>
          <FaqAccordion items={data.faqs} />
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-[24px] font-bold text-[#173838]">{isCounseling ? "Passende weitere Angebote" : "Weitere psychotherapeutische Schwerpunkte"}</h2>
              <nav className="mt-4 flex flex-col" aria-label="Verwandte Leistungen">
                {data.related.map((item) => <Link key={item.href} href={item.href} className="inline-flex min-h-[44px] items-center border-b border-slate-200 text-[14px] font-semibold text-[#173838] hover:underline">{item.label} →</Link>)}
              </nav>
            </div>
            <div>
              <h2 className="text-[24px] font-bold text-[#173838]">Fachliche Grundlage</h2>
              <p className="mt-3 text-[13px] leading-relaxed text-slate-600">Die Inhalte dienen der allgemeinen Information und ersetzen keine persönliche Diagnostik. Maßgeblich für {isCounseling ? "Beratung und weitere Versorgung" : "die Behandlung"} ist die individuelle fachliche Einschätzung.</p>
              <ul className="mt-3 space-y-2 text-[13px] text-slate-700">
                {data.sources.map((source) => <li key={source.href}><a href={source.href} rel="noopener noreferrer" className="font-semibold text-[#173838] underline underline-offset-2">{source.label}</a></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#173838] py-16 text-center text-white">
        <div className="container-shell max-w-3xl">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-wider text-[#f0cc65]">Erstgespräch anfragen</p>
          <h2 className="text-[30px] text-white sm:text-[40px]">Gemeinsam klären, was Sie konkret entlastet</h2>
          <p className="mx-auto mb-8 mt-3 max-w-xl text-[16px] text-slate-200">Im Erstgespräch ordnen wir Ihre aktuelle Situation ein, besprechen Ihre Ziele und prüfen transparent, ob das Angebot der Praxis zu Ihrem Anliegen passt.</p>
          {data.credentials && data.credentials.length > 0 && (
            <div className="mx-auto mb-7 flex max-w-2xl flex-wrap justify-center gap-x-4 gap-y-2 text-[12px] font-semibold text-slate-100" aria-label="Qualifikationen">
              {data.credentials.map((credential) => (
                <span key={credential.label} title={credential.detail} className="inline-flex items-center gap-1.5">
                  <span className="text-[#f0cc65]" aria-hidden="true">✓</span>{credential.label}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/termin?anliegen=therapie" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[14px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5">Erstgespräch anfragen</Link>
            <Link href="/kontakt-anfahrt" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-[14px] font-bold text-white hover:bg-white/10">Praxis & Anfahrt</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
