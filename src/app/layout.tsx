import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCta from '@/components/MobileStickyCta';

export const metadata: Metadata = {
  title: 'ADHS bei Erwachsenen in München | ADHS Praxis München',
  description: 'Diagnostische Orientierung, Psychotherapie und Neurofeedback bei ADHS im Erwachsenenalter in München-Schwabing. Praxis nach HeilprG.',
  metadataBase: new URL('https://www.neurofeedback-praxis-muenchen.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ADHS Praxis München | Diagnostik, Psychotherapie & Neurofeedback',
    description: 'Diagnostische Orientierung, strukturierende Psychotherapie und Neurofeedback bei ADHS im Erwachsenenalter.',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalBusiness",
                  "@id": "https://www.neurofeedback-praxis-muenchen.de/#praxis",
                  "name": "ADHS Praxis München - Jean-Maurice Cecilia-Menzel",
                  "alternateName": "Praxis für Psychotherapie bei ADHS im Erwachsenenalter",
                  "url": "https://www.neurofeedback-praxis-muenchen.de/",
                  "telephone": "+49-89-44135911",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Hildeboldstraße 1",
                    "addressLocality": "München",
                    "postalCode": "80797",
                    "addressCountry": "DE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "48.1585521",
                    "longitude": "11.5673942"
                  },
                  "medicalSpecialty": "Psychotherapy",
                  "availableService": [
                    {
                      "@type": "MedicalTherapy",
                      "name": "ADHS-Therapie für Erwachsene"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Diagnostische Orientierung & ADHS-Screening"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Neurofeedback bei ADHS"
                    }
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://www.adhs-praxis-muenchen.de/#therapeut",
                  "name": "Jean-Maurice Cecilia-Menzel",
                  "jobTitle": "Heilpraktiker beschränkt auf das Gebiet der Psychotherapie",
                  "worksFor": {
                    "@id": "https://www.adhs-praxis-muenchen.de/#praxis"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Accessible Skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#173838] focus:px-5 focus:py-3 focus:text-[14px] focus:font-bold focus:text-white focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#f0cc65]"
        >
          Zum Hauptinhalt springen
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <MobileStickyCta />
        <Footer />
      </body>
    </html>
  );
}
