import Link from "next/link";
import ArticleTrust from "@/components/ArticleTrust";
import MarkdownArticle from "@/components/MarkdownArticle";

type Source = { label: string; href: string };
type ArticleLink = { href: string; label: string };

export default function KnowledgeArticlePage({
  title,
  breadcrumb,
  eyebrow,
  readTime,
  intro,
  path,
  source,
  sources,
  ctaTitle,
  ctaDescription,
  previous,
  next,
}: {
  title: string;
  breadcrumb: string;
  eyebrow: string;
  readTime: string;
  intro: string;
  path: string;
  source: string;
  sources: Source[];
  ctaTitle: string;
  ctaDescription: string;
  previous: ArticleLink;
  next: ArticleLink;
}) {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">ADHS-Wissen</Link>
            <span>/</span>
            <span className="font-medium text-[#173838]">{breadcrumb}</span>
          </nav>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="eyebrow">{eyebrow}</p>
            <span className="text-[12px] text-slate-500">• {readTime}</span>
          </div>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">{title}</h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">{intro}</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl text-[16px] leading-[1.7] text-slate-700">
          <ArticleTrust
            title={title}
            path={path}
            sources={sources}
            datePublished="2026-08-22"
            dateModified="2026-08-22"
          />

          <div className="mt-10">
            <MarkdownArticle source={source} />
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-6 card-shadow sm:p-8">
            <h2 className="text-[22px] font-bold text-[#173838]">{ctaTitle}</h2>
            <p className="mb-6 mt-2 text-[15px] text-slate-600">{ctaDescription}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/termin?anliegen=therapie" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-7 py-3 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow hover:opacity-95">
                Erstgespräch anfragen
              </Link>
              <Link href="/adhs-therapie-muenchen" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-7 py-3 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50">
                Mehr zur ADHS-Therapie
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
            <Link href={previous.href} className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-slate-600 hover:text-[#173838]">
              ← {previous.label}
            </Link>
            <Link href={next.href} className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#7a5600] hover:underline">
              {next.label} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
