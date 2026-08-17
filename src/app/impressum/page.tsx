import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Impressum | ADHS Praxis München | Jean-Maurice Cecilia-Menzel",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Impressum</span>
          </nav>
          <p className="eyebrow mb-3">Rechtliche Pflichtangaben</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            Impressum
          </h1>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[15px] leading-[1.7] text-slate-700">
          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
            <p>
              <strong>ADHS Praxis München</strong><br />
              {siteConfig.practitioner}<br />
              {siteConfig.addressLine1}<br />
              {siteConfig.postalCity}<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-[#173838] mb-2">Kontakt</h2>
            <p>
              E-Mail: {siteConfig.email}<br />
              Website: {siteConfig.domain}
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-[#173838] mb-2">Gesetzliche Berufsbezeichnung & Aufsichtsbehörde</h2>
            <p>
              <strong>Gesetzliche Berufsbezeichnung:</strong><br />
              Heilpraktiker beschränkt auf das Gebiet der Psychotherapie (verliehen in der Bundesrepublik Deutschland).
            </p>
            <p className="mt-2">
              <strong>Zuständige Aufsichtsbehörde:</strong><br />
              {siteConfig.regulatoryAuthority}
            </p>
            <p className="mt-2">
              <strong>Berufsrechtliche Regelungen:</strong><br />
              Gesetz über die berufsmäßige Ausübung der Heilkunde ohne Bestallung (Heilpraktikergesetz, BGBl. III 2122-2) und Durchführungsverordnung (BGBl. III 2122-2-1).
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-[#173838] mb-2">Berufshaftpflichtversicherung</h2>
            <p>
              Geltungsbereich: Bundesrepublik Deutschland & Europäische Union.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-[#173838] mb-2">Redaktionell verantwortlich gemäß § 18 Abs. 2 MStV</h2>
            <p>
              {siteConfig.practitioner}<br />
              {siteConfig.addressLine1}, {siteConfig.postalCity}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
