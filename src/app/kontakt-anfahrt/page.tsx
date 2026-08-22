import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata = createPageMetadata({
  title: "Kontakt & Anfahrt | ADHS Praxis München",
  description:
    "Praxisadresse, Anfahrt mit ÖPNV & Kontaktmöglichkeiten der ADHS Praxis München von Jean-Maurice Cecilia-Menzel in Schwabing.",
  path: "/kontakt-anfahrt",
});

export default function KontaktAnfahrtPage() {
  return (
    <div className="w-full">
      <BreadcrumbJsonLd items={[
        { name: "Startseite", path: "" },
        { name: "Kontakt & Anfahrt", path: "/kontakt-anfahrt" },
      ]} />
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Kontakt & Anfahrt</span>
          </nav>
          <p className="eyebrow mb-3">Standort München-Schwabing</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            Praxisräume & Anfahrt in München
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Unsere Praxis liegt zentral und verkehrsgünstig in München-Schwabing (Hildeboldstraße 1). Hier erwartet Sie ein ruhiger, ungestörter Raum für vertrauensvolle Gespräche.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-7 card-shadow border border-slate-200">
              <h2 className="text-[20px] font-bold text-[#173838] mb-2">📍 Praxisadresse & Kontakt</h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                <strong>ADHS Praxis München</strong><br />
                {siteConfig.practitioner}<br />
                {siteConfig.addressLine1}<br />
                {siteConfig.postalCity} (Schwabing)<br /><br />
                <Link href="/termin" className="font-bold underline underline-offset-4">Kontaktformular öffnen</Link><br />
                <a href={siteConfig.whatsappHref} className="font-bold underline underline-offset-4">WhatsApp {siteConfig.whatsappDisplay} (externer Dienst)</a><br />
                <span className="text-[12px] text-slate-600">Beim Klick verlassen Sie diese Website. Bitte keine Gesundheitsdaten über WhatsApp senden.</span><br />
                🕒 <strong>Öffnungszeiten:</strong> {siteConfig.openingHours}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 card-shadow border border-slate-200">
              <h2 className="text-[20px] font-bold text-[#173838] mb-2">🚆 Anreise mit dem ÖPNV</h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                Bequem und schnell erreichbar über die U-Bahn-Linien U2 / U3 / U8 (Haltestellen Hohenzollernplatz, Bonner Platz oder Scheidplatz) sowie Tramlinie 12 und 27 (Haltestelle Kurfürstenplatz / Nordbad) und Metrobus 53/59.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 card-shadow border border-slate-200">
              <h2 className="text-[20px] font-bold text-[#173838] mb-2">🚗 Anreise mit dem PKW</h2>
              <p className="text-[15px] leading-relaxed text-slate-700">
                Parkmöglichkeiten im öffentlichen Straßenraum im Parklizenzbereich Schwabing-West entlang der Hildeboldstraße und umliegenden Querstraßen.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl bg-white p-2 card-shadow border border-slate-200">
              <Image
                src="/images/praxisraeume-muenchen.jpg"
                alt="Einblick in die Praxisräume in München-Schwabing"
                width={800}
                height={600}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <p className="p-3 text-center text-[13px] text-slate-500">
                Ruhige, reizreduzierte Praxisräume in der Hildeboldstraße 1, München
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf9f8] p-8 card-shadow border border-slate-200 text-center flex flex-col justify-center items-center">
              <h2 className="text-[22px] font-bold text-[#173838] mb-3">Termine nach Vereinbarung</h2>
              <p className="text-[15px] leading-relaxed text-slate-600 mb-8 max-w-sm">
                Um maximale Diskretion ohne Wartezimmerkontakt zu gewährleisten, vergeben wir Termine ausschließlich nach vorheriger Vereinbarung.
              </p>
              <Link
                href="/termin"
                className="inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Erstgespräch anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
