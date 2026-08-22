import Link from "next/link";
import { siteConfig } from "@/config/site";

type Source = { label: string; href: string };

export default function ArticleTrust({
  title,
  path,
  sources,
  datePublished = "2026-08-15",
  dateModified = "2026-08-16",
}: {
  title: string;
  path: string;
  sources: Source[];
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${siteConfig.baseUrl}${path}`;
  const article = {
    "@type": "Article",
    headline: title,
    mainEntityOfPage: url,
    datePublished,
    dateModified,
    inLanguage: "de-DE",
    author: {
      "@type": "Person",
      "@id": `${siteConfig.baseUrl}/#therapeut`,
      name: siteConfig.practitioner,
      url: `${siteConfig.baseUrl}/ueber-mich`,
    },
    publisher: { "@id": `${siteConfig.baseUrl}/#praxis` },
    citation: sources.map((source) => source.href),
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      article,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.baseUrl },
          { "@type": "ListItem", position: 2, name: "ADHS-Wissen", item: `${siteConfig.baseUrl}/adhs-wissen` },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 text-[14px] leading-relaxed text-slate-600" aria-label="Autor und Quellen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <p>
        <strong className="text-[#173838]">Redaktionell verantwortlich:</strong>{" "}
        <Link href="/ueber-mich" className="underline underline-offset-4">{siteConfig.practitioner}</Link>, {siteConfig.credentials[0]}
      </p>
      <p className="mt-1">
        Veröffentlicht am {new Intl.DateTimeFormat("de-DE", { dateStyle: "long", timeZone: "UTC" }).format(new Date(datePublished))}
        {" · "}Inhaltlich aktualisiert am {new Intl.DateTimeFormat("de-DE", { dateStyle: "long", timeZone: "UTC" }).format(new Date(dateModified))}
      </p>
      <div className="mt-4">
        <p className="font-bold text-[#173838]">Fachliche Quellen</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          {sources.map((source) => (
            <li key={source.href}><a href={source.href} className="underline underline-offset-4" rel="noreferrer">{source.label}</a></li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
