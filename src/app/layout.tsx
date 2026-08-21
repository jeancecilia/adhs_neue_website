import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyCta from '@/components/MobileStickyCta';
import AnalyticsConsentManager from '@/components/AnalyticsConsentManager';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'ADHS Praxis München | Psychotherapie & Diagnostik',
  description: 'Psychotherapie in München-Schwabing mit Schwerpunkt ADHS im Erwachsenenalter sowie Behandlung von Angst, Panik, Phobien und depressiven Beschwerden.',
  metadataBase: new URL('https://neurofeedback-praxis-muenchen.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ADHS Praxis München | Diagnostik, Psychotherapie & Neurofeedback',
    description: 'Diagnostische Orientierung, strukturierende Psychotherapie und Neurofeedback bei ADHS im Erwachsenenalter.',
    locale: 'de_DE',
    type: 'website',
    siteName: siteConfig.name,
    url: siteConfig.baseUrl,
    images: [siteConfig.socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADHS Praxis München | Diagnostik, Therapie & Neurofeedback',
    description: 'Diagnostische Orientierung, Psychotherapie und Neurofeedback bei ADHS im Erwachsenenalter.',
    images: [siteConfig.socialImage.url],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: '/favicon.svg',
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
                  "@id": "https://neurofeedback-praxis-muenchen.de/#praxis",
                  "name": "ADHS Praxis München - Jean-Maurice Cecilia-Menzel",
                  "alternateName": "Praxis für Psychotherapie mit Schwerpunkt ADHS im Erwachsenenalter",
                  "url": "https://neurofeedback-praxis-muenchen.de/",
                  "email": "kontakt@neurofeedback-praxis-muenchen.de",
                  "image": "https://neurofeedback-praxis-muenchen.de/images/portrait-jean-maurice-hd.jpg",
                  "logo": {
                    "@type": "ImageObject",
                    "url": `${siteConfig.baseUrl}${siteConfig.logo.url}`,
                    "contentUrl": `${siteConfig.baseUrl}${siteConfig.logo.url}`,
                    "width": siteConfig.logo.width,
                    "height": siteConfig.logo.height
                  },
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
                    "latitude": "48.1662598",
                    "longitude": "11.5642558"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "19:00"
                    }
                  ],
                  "medicalSpecialty": "Psychotherapy",
                  "availableService": [
                    {
                      "@type": "MedicalTherapy",
                      "name": "ADHS-Therapie für Erwachsene"
                    },
                    {
                      "@type": "Service",
                      "@id": "https://neurofeedback-praxis-muenchen.de/adhs-beratung-muenchen#leistung",
                      "name": "ADHS-Beratung und Psychoedukation für Erwachsene",
                      "url": "https://neurofeedback-praxis-muenchen.de/adhs-beratung-muenchen"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Diagnostische Orientierung & ADHS-Screening"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Neurofeedback bei ADHS"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Psychotherapie bei sozialer Angst und sozialer Phobie"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Psychotherapie bei Panikattacken und Panikstörung"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Psychotherapie bei spezifischen Phobien"
                    },
                    {
                      "@type": "MedicalTherapy",
                      "name": "Psychotherapie bei depressiver Verstimmung"
                    }
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://neurofeedback-praxis-muenchen.de/#therapeut",
                  "name": "Jean-Maurice Cecilia-Menzel",
                  "jobTitle": "Heilpraktiker beschränkt auf das Gebiet der Psychotherapie",
                  "url": "https://neurofeedback-praxis-muenchen.de/ueber-mich",
                  "image": "https://neurofeedback-praxis-muenchen.de/images/portrait-jean-maurice-hd.jpg",
                  "sameAs": siteConfig.sameAs,
                  "knowsAbout": [
                    "ADHS im Erwachsenenalter",
                    "ADHS-Psychoedukation",
                    "Kognitive Verhaltenstherapie",
                    "Neurofeedback",
                    "Biofeedback",
                    "Hypnosetherapie"
                  ],
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Master of Science (M.Sc.)",
                      "credentialCategory": "Akademischer Grad"
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie",
                      "credentialCategory": "Amtliche Erlaubnis nach dem Heilpraktikergesetz"
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Ausbildung in Neurofeedback und Biofeedback",
                      "credentialCategory": "Fachausbildung"
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Ausbildung in kognitiver Verhaltenstherapie und Hypnosetherapie",
                      "credentialCategory": "Fachausbildung"
                    }
                  ],
                  "worksFor": {
                    "@id": "https://neurofeedback-praxis-muenchen.de/#praxis"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://neurofeedback-praxis-muenchen.de/#website",
                  "url": "https://neurofeedback-praxis-muenchen.de/",
                  "name": "ADHS Praxis München",
                  "inLanguage": "de-DE",
                  "publisher": { "@id": "https://neurofeedback-praxis-muenchen.de/#praxis" }
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
        <AnalyticsConsentManager />
      </body>
    </html>
  );
}
