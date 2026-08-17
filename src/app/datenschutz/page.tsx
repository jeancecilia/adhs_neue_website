import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ADHS Praxis München",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Datenschutzerklärung</span>
          </nav>
          <p className="eyebrow mb-3">Datenschutz & DSGVO</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[15px] leading-[1.7] text-slate-700">
          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">1. Datenschutz auf einen Blick</h2>
            <p>
              Als heilkundliche Praxis nehmen wir den Schutz Ihrer persönlichen Daten und insbesondere Ihrer Gesundheitsdaten außerordentlich ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie der therapeutischen Schweigepflicht.
            </p>
          </div>

          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">2. Verantwortliche Stelle</h2>
            <p>
              <strong>{siteConfig.practitioner}</strong><br />
              {siteConfig.name}<br />
              {siteConfig.addressLine1}, {siteConfig.postalCity}<br />
              E-Mail: {siteConfig.email}
            </p>
          </div>

          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">3. Besonderer Schutz von Gesundheitsdaten (Art. 9 DSGVO)</h2>
            <p>
              Wir erheben über unser Online-Terminformular bewusst keine Diagnosen oder detaillierte Krankengeschichten. Die Erhebung behandlungsrelevanter Gesundheitsdaten erfolgt ausschließlich im Rahmen des persönlichen Erstgesprächs bzw. über gesonderte Behandlungsverträge.
            </p>
          </div>

          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">4. Terminanfrage über das Kontaktformular</h2>
            <p>
              Wenn Sie das Formular nutzen, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse, das ausgewählte Anliegen, Ihren Terminwunsch und freiwillige Angaben in der Nachricht, um Ihre Anfrage zu beantworten und vorvertragliche Maßnahmen durchzuführen (Art. 6 Abs. 1 lit. b DSGVO). Bitte tragen Sie keine ausführlichen Gesundheitsdaten ein. Die Übermittlung und Zustellung erfolgt über Cloudflare, Inc. als technischen Dienstleister. Die Angaben werden nur so lange gespeichert, wie dies für die Bearbeitung und gesetzliche Aufbewahrungspflichten erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">5. Hosting, Sicherheit und E-Mail-Routing</h2>
            <p>
              Diese Website wird über Cloudflare bereitgestellt. Dabei können technisch notwendige Verbindungsdaten wie IP-Adresse, Zeitpunkt, aufgerufene URL, Referrer sowie Browser- und Geräteinformationen verarbeitet werden, um die Website sicher und zuverlässig auszuliefern. Für eingehende Nachrichten an die Praxisdomain wird Cloudflare Email Routing eingesetzt und die Nachricht an das hierfür vorgesehene Gmail-Postfach weitergeleitet.
            </p>
          </div>

          <div>
            <h2 className="text-[22px] font-bold text-[#173838] mb-3">6. Ihre Rechte als betroffene Person</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
