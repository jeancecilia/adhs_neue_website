import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHS-Wissen | Ratgeber für Erwachsene | ADHS Praxis München",
  description:
    "Fundiertes Fachwissen zu ADHS im Erwachsenenalter: Prokrastination, emotionale Dysregulation, Beruf, Beziehungen, Frauen und Schlaf.",
  alternates: {
    canonical: "/adhs-wissen",
  },
};

const ARTICLES = [
  {
    href: "/adhs-wissen/adhs-prokrastination",
    category: "Alltag & Handeln",
    title: "ADHS und Prokrastination",
    description: "Warum Aufschieben kein Mangel an Disziplin ist, sondern eine Dopamin-Blockade des Gehirns – und wie Sie die Lähmung überwinden.",
    readTime: "4 Min. Lesezeit",
  },
  {
    href: "/adhs-wissen/adhs-emotionale-dysregulation",
    category: "Gefühle & Reizfilter",
    title: "ADHS & emotionale Dysregulation",
    description: "Rejection Sensitivity (RSD), schnelle Wutausbrüche und plötzliche Überwältigung: Wie Sie emotionale Stabilität aufbauen.",
    readTime: "5 Min. Lesezeit",
  },
  {
    href: "/adhs-wissen/adhs-im-beruf",
    category: "Arbeitswelt & Karriere",
    title: "ADHS im Beruf & Karriere",
    description: "Stärken wie Hyperfokus und Kreativität nutzen, während administrative Hürden, Deadlines und Meeting-Überlastung reduziert werden.",
    readTime: "4 Min. Lesezeit",
  },
  {
    href: "/adhs-wissen/adhs-und-beziehungen",
    category: "Partnerschaft & Soziales",
    title: "ADHS und Beziehungen",
    description: "Missverständnisse, Vergesslichkeit und emotionale Distanz in der Partnerschaft: Wie Paare neurodivergente Dynamiken meistern.",
    readTime: "5 Min. Lesezeit",
  },
  {
    href: "/adhs-wissen/adhs-und-schlaf",
    category: "Körper & Erholung",
    title: "ADHS und Schlafstörungen",
    description: "Das abendliche Gedankenkarussell und die verzögerte Melatonin-Ausschüttung: Strategien für erholsamen Schlaf bei ADHS.",
    readTime: "4 Min. Lesezeit",
  },
  {
    href: "/adhs-wissen/adhs-bei-frauen",
    category: "Spätdiagnose & Masking",
    title: "ADHS bei Frauen",
    description: "Warum Mädchen und Frauen jahrzehntelang übersehen werden, die Rolle von Hormonschwankungen und der Preis von ständiger Anpassung.",
    readTime: "5 Min. Lesezeit",
  },
];

export default function AdhsWissenPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16 text-center">
        <div className="container-shell max-w-3xl">
          <nav className="mb-6 inline-flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS-Wissen</span>
          </nav>
          <p className="eyebrow mb-3">Fachwissen & Ratgeber</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            ADHS im Erwachsenenalter verstehen
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Wissenschaftlich fundierte Einblicke, alltagstaugliche Strategien und psychologische Hintergründe für Ihr persönliches Verständnis.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <h2 className="sr-only">Fachartikel und Ratgeber</h2>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <article
                key={article.href}
                className="group flex flex-col justify-between rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white p-7 card-shadow transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#7a5600]">{article.category}</p>
                    <span className="text-[11px] text-slate-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-[22px] font-bold leading-[1.3] text-[#173838] group-hover:underline decoration-[#173838] underline-offset-4">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-slate-700">{article.description}</p>
                </div>
                <Link
                  href={article.href}
                  className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#7a5600] min-h-[44px]"
                >
                  <span>Artikel lesen</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <h2 className="text-[30px] sm:text-[38px] text-white">Wünschen Sie individuelle Begleitung in München?</h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8">
            Wissen ist der erste Schritt. In der ADHS-Therapie setzen wir dieses Wissen in konkrete Routinen für Ihr Leben um.
          </p>
          <Link
            href="/termin"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Erstgespräch anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}
