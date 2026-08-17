import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Über mich | Jean-Maurice Cecilia-Menzel | ADHS Praxis München",
  description:
    "Erfahren Sie mehr über Jean-Maurice Cecilia-Menzel, M.Sc., Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie mit Schwerpunkt ADHS im Erwachsenenalter in München-Schwabing.",
  alternates: {
    canonical: "/ueber-mich",
  },
};

const SCHWERPUNKTE = [
  "Strukturierte ADHS-Diagnostik bei Erwachsenen",
  "Verhaltenstherapeutische ADHS-Psychotherapie",
  "Störungsspezifische Psychoedukation & Alltagsstrategien",
  "Apparatives Neurofeedback-Training (EEG)",
  "Emotionsregulation bei Rejection Sensitivity (RSD)",
  "Ergänzende hypnosetherapeutische Verfahren",
];

const QUALIFIKATIONEN = [
  {
    title: "Master of Science",
    detail: "Abgeschlossenes Masterstudium mit dem akademischen Grad Master of Science (M.Sc.).",
  },
  {
    title: "Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie",
    detail: "Amtliche Erlaubnis zur Ausübung der Heilkunde ohne Bestallung, beschränkt auf das Gebiet der Psychotherapie, nach dem Heilpraktikergesetz.",
  },
  {
    title: "Spezifische Weiterbildung & Praxisfokus: ADHS im Erwachsenenalter",
    detail: "Vertiefte fachliche Weiterbildung zu ADHS im Erwachsenenalter mit Schwerpunkt auf strukturierter Diagnostik, standardisierten Verfahren wie DIVA-5 und psychotherapeutischen Behandlungsansätzen.",
  },
  {
    title: "Ausbildung in Neurofeedback & Biofeedback",
    detail: "Fundierte Ausbildung im apparativen Neurofeedback und Biofeedback, unter anderem in Frequenzband- und SMR-Protokollen zur computergestützten Selbstregulation physiologischer und neuronaler Aktivitätsmuster.",
  },
  {
    title: "Ausbildung in Hypnosetherapie & KVT",
    detail: "Fachausbildung in lösungsorientierter Hypnosetherapie sowie in Methoden der kognitiven Verhaltenstherapie und psychotherapeutischen Selbstregulation.",
  },
  {
    title: "Mehrjährige Praxiserfahrung in München",
    detail: "Fünf Jahre Praxiserfahrung mit besonderem Schwerpunkt auf Erwachsenen mit ADHS und anderen neurodivergenten Ausprägungen, strukturierter Diagnostik sowie multimodaler psychotherapeutischer Begleitung.",
  },
];

export default function UeberMichPage() {
  return (
    <div className="w-full">
      <BreadcrumbJsonLd items={[
        { name: "Startseite", path: "" },
        { name: "Über mich", path: "/ueber-mich" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              "@id": `${siteConfig.baseUrl}/#therapeut`,
              name: siteConfig.practitioner,
              url: `${siteConfig.baseUrl}/ueber-mich`,
              image: `${siteConfig.baseUrl}/images/portrait-jean-maurice-hd.jpg`,
              jobTitle: siteConfig.credentials[0],
              sameAs: siteConfig.sameAs,
              worksFor: { "@id": `${siteConfig.baseUrl}/#praxis` },
              knowsAbout: ["ADHS im Erwachsenenalter", "Psychotherapie", "ADHS-Diagnostik", "Neurofeedback"],
            },
          }),
        }}
      />
      {/* 1. HERO HEADER */}
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
              <span>/</span>
              <span className="text-[#173838] font-medium">Über mich</span>
            </nav>
            <p className="eyebrow mb-2">Praxisprofil</p>
            <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
              Jean-Maurice Cecilia-Menzel, M.Sc.
            </h1>
            <p className="mt-2 text-[16px] font-bold text-[#7a5600] sm:text-[18px]">
              Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie
            </p>
            <p className="text-[14px] font-semibold text-[#173838] mb-4">
              Schwerpunkt ADHS im Erwachsenenalter · München-Schwabing
            </p>
            <div className="space-y-3 text-[16px] leading-[1.7] text-slate-700">
              <p>
                In meiner Praxis verbinde ich strukturierte ADHS-Diagnostik, psychotherapeutische Begleitung und – wenn individuell sinnvoll – ergänzendes Neurofeedback zu einem stimmigen Gesamtkonzept.
              </p>
              <p>
                In meiner Arbeit stehen nicht nur isolierte Symptome, sondern deren konkrete Auswirkungen auf Alltag, Beruf, Partnerschaft und persönliche Lebensqualität im Mittelpunkt.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/termin"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Erstgespräch anfragen
              </Link>
              <Link
                href="/kontakt-anfahrt"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3.5 text-[14px] font-bold text-[#173838] shadow-sm hover:bg-slate-50"
              >
                Praxis & Anfahrt
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white p-2 card-shadow">
              <Image
                src="/images/portrait-jean-maurice-hd.jpg"
                alt="Jean-Maurice Cecilia-Menzel in München"
                width={1200}
                height={1500}
                priority
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUALIFIKATION & ERFAHRUNG */}
      <section className="section-space border-b border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Transparenz & Fachkunde</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Qualifikation und Praxiserfahrung
            </h2>
            <p className="mt-3 text-[16px] text-slate-700">
              Fundierte therapeutische Ausbildung, kontinuierliche fachliche Weiterbildung und mehrjährige Praxiserfahrung in München:
            </p>
          </div>

          <div className="space-y-4">
            {QUALIFIKATIONEN.map((q) => (
              <div key={q.title} className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex items-start gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[12px] font-bold text-white mt-0.5">✓</span>
                <div>
                  <h3 className="text-[17px] font-bold text-[#173838]">{q.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-slate-600">{q.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEIN SCHWERPUNKT: ADHS IM ERWACHSENENALTER */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Positionierung & Fokus</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Mein Schwerpunkt: ADHS im Erwachsenenalter
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow space-y-4 text-[16px] leading-[1.75] text-slate-700">
            <p>
              ADHS bei Erwachsenen betrifft häufig weit mehr als Konzentration oder motorische Unruhe. Schwierigkeiten mit Organisation, chronischer Prokrastination, emotionaler Überflutung, Selbstwertzweifeln oder Konflikten in Beziehungen können über viele Jahre bestehen, bevor ADHS überhaupt als mögliche Erklärung in Betracht gezogen wird.
            </p>
            <p>
              Mein Praxisschwerpunkt liegt deshalb ganz bewusst auf der <strong>fundierten diagnostischen Einordnung</strong> und der <strong>zielgerichteten psychotherapeutischen Begleitung</strong> von Erwachsenen mit ADHS oder ADHS-Verdacht.
            </p>
            <p>
              Dabei ist mir eine strukturierte und nachvollziehbare Vorgehensweise besonders wichtig: Symptome und individuelle Lebensgeschichte verstehen, neurobiologische Zusammenhänge transparent erklären und gemeinsam Strategien entwickeln, die im echten Alltag tatsächlich umsetzbar sind.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WIE ICH ARBEITE (DREI PRINZIPIEN) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Therapeutische Grundhaltung</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie ich arbeite: Drei klare Prinzipien
            </h2>
            <p className="mt-3 text-[16px] text-slate-700">
              Therapie bei ADHS funktioniert nur, wenn sie zur besonderen Funktionsweise des neurodivergenten Gehirns passt:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 border border-slate-200 card-shadow flex flex-col justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf9f8] text-lg font-bold text-[#173838] mb-4">
                  01
                </span>
                <h3 className="text-[19px] font-bold text-[#173838] mb-2">Verständlich</h3>
                <p className="text-[14px] leading-relaxed text-slate-600">
                  Diagnostische und therapeutische Zusammenhänge sollen nachvollziehbar sein. Sie sollen verstehen, <em>warum</em> wir etwas tun – und nicht einfach starre Ratschläge befolgen.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 border border-slate-200 card-shadow flex flex-col justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf9f8] text-lg font-bold text-[#173838] mb-4">
                  02
                </span>
                <h3 className="text-[19px] font-bold text-[#173838] mb-2">Strukturiert</h3>
                <p className="text-[14px] leading-relaxed text-slate-600">
                  Ziele, therapeutisches Vorgehen und Fortschritte werden gemeinsam transparent festgelegt und im Verlauf regelmäßig auf ihre Wirksamkeit überprüft.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 border border-slate-200 card-shadow flex flex-col justify-between">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#faf9f8] text-lg font-bold text-[#173838] mb-4">
                  03
                </span>
                <h3 className="text-[19px] font-bold text-[#173838] mb-2">Alltagstauglich</h3>
                <p className="text-[14px] leading-relaxed text-slate-600">
                  Entscheidend ist nicht, ob eine Methode im Therapieraum gut klingt, sondern ob sie sich in Beruf, Partnerschaft und Haushalt auch nach Wochen noch anwenden lässt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TÄTIGKEITSSCHWERPUNKTE */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Leistungsspektrum</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Tätigkeitsschwerpunkte in der Münchner Praxis
            </h2>
            <p className="mt-3 text-[16px] text-slate-700">
              Ein ineinandergreifendes Leistungsspektrum speziell für neurodivergente Erwachsene:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {SCHWERPUNKTE.map((schwerpunkt) => (
              <div key={schwerpunkt} className="flex items-center gap-3 rounded-xl bg-white p-4 border border-slate-200 card-shadow">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0cc65] text-[12px] font-bold text-[#173838]">✓</span>
                <span className="text-[15px] font-semibold text-[#173838]">{schwerpunkt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PERSÖNLICHE MOTIVATION & VERSTÄNDNIS VON ADHS */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Persönliche Haltung</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Mein Verständnis von ADHS: Neurodivergenz statt Defizit
          </h2>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow space-y-4 text-[16px] leading-[1.75] text-slate-700">
            <p>
              ADHS ist keine Willensschwäche, kein Charakterfehler und keine Erfindung unserer Leistungsgesellschaft. Es handelt sich um eine neurobiologische Besonderheit in der Signalübertragung des Gehirns, insbesondere im Dopamin- und Noradrenalinstoffwechsel.
            </p>
            <p>
              Menschen mit ADHS bringen oft außergewöhnliche Stärken mit: hohe Begeisterungsfähigkeit, vernetztes und kreatives Denken, Empathie und die Fähigkeit zum intensiven Hyperfokus. Gleichzeitig führt das Aufeinandertreffen dieser Veranlagung mit den starren Anforderungen von Schul-, Berufs- und Verwaltungssystemen häufig zu schmerzhaften Reibungsverlusten.
            </p>
            <p>
              Mein Ziel ist es, Ihnen dabei zu helfen, mit Ihrem Gehirn zu arbeiten – anstatt ständig gegen es anzukämpfen.
            </p>
          </div>
        </div>
      </section>

      {/* 7. PRAXISORGANISATION & TERMINMANAGEMENT (JOEL MENZEL) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow">
            <div className="grid gap-8 sm:grid-cols-[180px_1fr] items-center">
              <div className="overflow-hidden rounded-xl bg-[#faf9f8] p-1">
                <Image
                  src="/images/portrait-joel-menzel.jpg"
                  alt="Joel Menzel - Praxisorganisation"
                  width={400}
                  height={500}
                  className="aspect-[4/5] w-full rounded-lg object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="eyebrow mb-1">Praxisorganisation & Terminmanagement</p>
                <h3 className="text-[22px] font-bold text-[#173838]">
                  Joel Menzel
                </h3>
                <p className="text-[14px] font-semibold text-[#7a5600]">
                  Praxisorganisation & Terminmanagement
                </p>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  Als Ansprechpartner für Terminvergabe, Ablaufkoordination und organisatorische Fragen sorgt Joel Menzel für kurze Kommunikationswege, zeitnahe Terminoptionen und einen reibungslosen Praxisablauf in München-Schwabing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRAXISRÄUME IN MÜNCHEN-SCHWABING */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Standort München</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Unsere Praxisräume in München-Schwabing
            </h2>
            <p className="mt-3 text-[16px] text-slate-700">
              Ruhige, diskrete und barrierearme Atmosphäre in zentraler Lage in Schwabing-West:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 card-shadow">
              <Image
                src="/images/praxisraeume-muenchen.jpg"
                alt="Therapieraum ADHS Praxis München Schwabing"
                width={800}
                height={600}
                loading="eager"
                className="h-[260px] w-full rounded-xl object-cover"
              />
              <p className="mt-3 px-2 text-[14px] font-bold text-[#173838]">Ruhiger Therapieraum für vertrauliche Gespräche & Diagnostik</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 card-shadow">
              <Image
                src="/images/praxis-alternative-raum.webp"
                alt="Neurofeedback Raum München Schwabing"
                width={800}
                height={600}
                loading="eager"
                className="h-[260px] w-full rounded-xl object-cover"
              />
              <p className="mt-3 px-2 text-[14px] font-bold text-[#173838]">Arbeitsplatz für apparatives Neurofeedback-Training</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[15px] font-bold text-[#173838]">Praxis in München-Schwabing</p>
              <p className="text-[13px] text-slate-600">Hildeboldstraße 1 · 80797 München (nahe Hohenzollernplatz & Kurfürstenplatz)</p>
            </div>
            <Link
              href="/kontakt-anfahrt"
              className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline shrink-0"
            >
              Anfahrt & Kontakt ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. ABSCHLUSS-CTA */}
      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65] mb-2">Persönliches Kennenlernen</p>
          <h2 className="text-[30px] sm:text-[40px] text-white">
            Lernen wir uns in einem Erstgespräch kennen
          </h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8 max-w-xl mx-auto">
            Vereinbaren Sie Ihren Termin in unserer Praxis in München-Schwabing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/termin"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[15px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Erstgespräch anfragen
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
