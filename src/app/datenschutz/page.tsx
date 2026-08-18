import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ADHS Praxis München",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

const externalLinkClass =
  "font-semibold text-[#173838] underline decoration-[#c99a1d] underline-offset-2 hover:text-[#7a5600]";

export default function DatenschutzPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="font-medium text-[#173838]">Datenschutzerklärung</span>
          </nav>
          <p className="eyebrow mb-3">Datenschutz & DSGVO</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">Datenschutzerklärung</h1>
          <p className="mt-4 text-[14px] text-slate-600">Stand: 18. August 2026</p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-9 text-[15px] leading-[1.75] text-slate-700">
          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">1. Datenschutz auf einen Blick</h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies für den sicheren Betrieb dieser Website, die Bearbeitung Ihrer Anfrage oder die Durchführung eines Behandlungsverhältnisses erforderlich ist. Gesundheitsdaten werden als besonders geschützte Daten behandelt. Bitte übermitteln Sie über das Kontaktformular oder WhatsApp keine Diagnosen, Befunde, Medikamentenangaben oder ausführlichen Krankengeschichten.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">2. Verantwortlicher</h2>
            <p>
              <strong>{siteConfig.practitioner}</strong><br />
              {siteConfig.name}<br />
              {siteConfig.addressLine1}, {siteConfig.postalCity}<br />
              E-Mail: <a href={siteConfig.emailHref} className={externalLinkClass}>{siteConfig.email}</a>
            </p>
            <p className="mt-3">Datenschutzanfragen richten Sie bitte an die vorstehende E-Mail-Adresse.</p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">3. Allgemeine Rechtsgrundlagen</h2>
            <p>
              Wir verarbeiten personenbezogene Daten je nach Vorgang auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen oder eines Vertrags, Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung rechtlicher Pflichten und Art. 6 Abs. 1 lit. f DSGVO zur Wahrung berechtigter Interessen, insbesondere am sicheren, stabilen und nutzerfreundlichen Betrieb der Website. Soweit Sie ausdrücklich einwilligen, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Freiwillig übermittelte Gesundheitsdaten verarbeiten wir im Kontaktformular auf Grundlage Ihrer ausdrücklichen Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">4. Hosting, Auslieferung und Sicherheitsprotokolle</h2>
            <p>
              Die Website, DNS-Auflösung, Auslieferung, Schutzfunktionen und das Kontaktformular werden über Dienste der <strong>Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA</strong> bereitgestellt. Cloudflare kann dabei technisch erforderliche Verbindungs- und Protokolldaten verarbeiten, insbesondere IP-Adresse, Datum und Uhrzeit, angeforderte URL, Referrer, Browser- und Geräteinformationen, TLS- und Netzwerkdaten sowie sicherheitsbezogene Ereignisse.
            </p>
            <p className="mt-3">
              Zweck ist die sichere, schnelle und störungsfreie Bereitstellung der Website, die Abwehr missbräuchlicher Zugriffe und die Fehleranalyse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der Verfügbarkeit und Sicherheit unseres Internetangebots. Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag; der aktuelle <a href="https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/" target="_blank" rel="noreferrer" className={externalLinkClass}>Cloudflare Data Processing Addendum</a> ist in den Self-Serve-Vertrag einbezogen.
            </p>
            <p className="mt-3">
              Wir führen keine eigenen dauerhaften Besucher- oder Zugriffsprofile. Sicherheits- und Netzwerkprotokolle werden von Cloudflare nur so lange verarbeitet, wie dies für den jeweiligen Sicherheits- oder Betriebszweck sowie nach den vertraglichen Löschregeln erforderlich ist. Soweit Cloudflare uns Ereignisdaten im Dashboard bereitstellt, werden diese nicht in ein eigenes Archiv übernommen.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">5. Cloudflare Web Analytics und Real User Measurement</h2>
            <p>
              Wir verwenden Cloudflare Web Analytics einschließlich Real User Measurement (RUM), um ausschließlich zusammengefasste Informationen über Seitenaufrufe, Ladezeiten, Web-Vitals, Browsertypen, Gerätetypen und technische Fehler zu erhalten. Dafür wird ein Skript von <code>static.cloudflareinsights.com</code> geladen; Messwerte werden an den Endpunkt <code>/cdn-cgi/rum</code> unserer Domain übertragen.
            </p>
            <p className="mt-3">
              Cloudflare Web Analytics verwendet nach Angaben des Anbieters keine Cookies, keinen Local Storage und kein geräteübergreifendes Fingerprinting. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt darin, Ladezeiten, technische Stabilität und Nutzbarkeit der Website datensparsam zu messen und zu verbessern. Nicht aggregierte Messdaten werden bei Cloudflare sieben Tage gespeichert; aggregierte Auswertungen sind im Dashboard bis zu sechs Monate abrufbar. Weitere Informationen: <a href="https://developers.cloudflare.com/web-analytics/about/" target="_blank" rel="noreferrer" className={externalLinkClass}>Cloudflare Web Analytics</a> und <a href="https://developers.cloudflare.com/web-analytics/faq/" target="_blank" rel="noreferrer" className={externalLinkClass}>Speicherdauer und Funktionsweise</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">6. Google Analytics 4 und Einwilligungsverwaltung</h2>
            <p>
              Wir verwenden mit Ihrer Einwilligung <strong>Google Analytics 4</strong> zur Reichweiten- und Nutzungsmessung sowie Google Ads, Conversion-Messung und Google Signals für Marketing und Personalisierung. Anbieter ist für Nutzer im Europäischen Wirtschaftsraum grundsätzlich <strong>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</strong>; Google LLC und weitere verbundene Unternehmen können in die Verarbeitung einbezogen sein. Beim ersten Besuch sind beide optionalen Zwecke deaktiviert und das Google-Skript wird erst nach einer Auswahl geladen.
            </p>
            <p className="mt-3">
              Google Analytics verarbeitet insbesondere pseudonyme Online-Kennungen, gekürzte beziehungsweise von Google nicht dauerhaft protokollierte IP-Informationen, Geräte- und Browsermerkmale, aufgerufene Seiten, Referrer, ungefähre Region, Zeitpunkt und Dauer der Nutzung sowie Interaktionen mit der Website. Wir messen erfolgreiche Kontaktformularübermittlungen als Ereignis <code>generate_lead</code>, Klicks auf den externen WhatsApp-Link als <code>whatsapp_click</code> und Klicks auf E-Mail-Links als <code>email_click</code>. Formularinhalte, Namen, E-Mail-Adressen, Nachrichten, ausgewählte Anliegen und andere Gesundheitsangaben werden nicht an Google Analytics oder Google Ads gesendet.
            </p>
            <p className="mt-3">
              Wir verwenden Consent Mode v2. Im Einstellungsdialog können Sie die Zwecke <strong>„Statistik & Reichweite“</strong> und <strong>„Marketing & Personalisierung“</strong> unabhängig voneinander auswählen. Statistik aktiviert <code>analytics_storage</code> für Google Analytics 4. Marketing aktiviert <code>ad_storage</code>, <code>ad_user_data</code> und <code>ad_personalization</code> für Google Ads, Conversion-Messung, Google Signals und personalisierte Werbung. „Alle akzeptieren“ aktiviert beide Zwecke; „Nur notwendige“ deaktiviert beide. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG.
            </p>
            <p className="mt-3">
              Ihre Entscheidung wird unter dem Schlüssel <code>adhs-praxis.analytics-consent.v1</code> im Local Storage Ihres Browsers gespeichert. Google Analytics kann insbesondere die Cookies <code>_ga</code> und <code>_ga_*</code>, Google Ads insbesondere Cookies mit dem Präfix <code>_gcl</code> setzen. Sie können Ihre Auswahl jederzeit über „Statistik-Einstellungen“ im Seitenfuß ändern. Bei einem Widerruf werden die betreffenden Messungen deaktiviert und die für unsere Domain erreichbaren Google-Cookies der abgewählten Kategorie gelöscht. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Weitere Informationen finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className={externalLinkClass}>Datenschutzerklärung von Google</a> und den <a href="https://support.google.com/analytics/answer/12017362" target="_blank" rel="noreferrer" className={externalLinkClass}>Datenschutzhinweisen zu Google Analytics</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">7. Kontakt- und Terminanfrage</h2>
            <p>
              Bei Nutzung des Formulars verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse, das gewählte Anliegen, den gewünschten Terminzeitraum, Ihre freiwillige Nachricht sowie den Zeitpunkt Ihrer Einwilligung. Die Pflichtangaben sind für die Zuordnung und Beantwortung Ihrer Anfrage erforderlich. Die Nachricht und der Terminwunsch sind freiwillig.
            </p>
            <p className="mt-3">
              Die Verarbeitung zur Beantwortung Ihrer Anfrage und zur Vorbereitung eines möglichen Behandlungsverhältnisses erfolgt nach Art. 6 Abs. 1 lit. b DSGVO. Da bereits das gewählte Anliegen oder freiwillige Angaben einen Gesundheitsbezug erkennen lassen können, verarbeiten wir solche Angaben zusätzlich auf Grundlage Ihrer ausdrücklichen Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO. Das Formular kann nur nach Erteilung dieser Einwilligung abgesendet werden. Sie können die Einwilligung jederzeit mit Wirkung für die Zukunft per E-Mail an {siteConfig.email} widerrufen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
            </p>
            <p className="mt-3">
              Erfolgt kein Vertragsschluss, löschen wir die Anfrage grundsätzlich sechs Monate nach abschließender Bearbeitung. Nur wenn die Daten zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich sind, können sie bis zum Ablauf der regelmäßigen gesetzlichen Verjährungsfrist von drei Jahren aufbewahrt werden. Kommt ein Behandlungsverhältnis zustande, werden behandlungsrelevante Inhalte in die Behandlungsdokumentation übernommen und grundsätzlich zehn Jahre nach Abschluss der Behandlung aufbewahrt, sofern keine längere gesetzliche Pflicht oder ein konkreter Rechtsgrund entgegensteht.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">8. E-Mail-Zustellung und E-Mail-Postfach</h2>
            <p>
              Die technische Formularzustellung erfolgt über Cloudflare Email Sending beziehungsweise Email Routing. Eingehende Nachrichten an die Praxisdomain und Formularanfragen werden an ein dafür bestimmtes Gmail-Postfach weitergeleitet. Anbieter des Postfachdienstes ist für Nutzer im Europäischen Wirtschaftsraum grundsätzlich <strong>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</strong>; verbundene Unternehmen und Systeme der Google LLC in den USA können in die Verarbeitung einbezogen sein.
            </p>
            <p className="mt-3">
              Verarbeitet werden Absender- und Empfängerdaten, Betreff, Nachrichteninhalt, Versandzeitpunkt und technische Zustellinformationen. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO und, soweit freiwillig Gesundheitsdaten enthalten sind, Art. 9 Abs. 2 lit. a DSGVO. Unser ergänzendes berechtigtes Interesse an zuverlässiger Kommunikation beruht auf Art. 6 Abs. 1 lit. f DSGVO. E-Mails werden nach denselben Fristen wie Kontaktanfragen beziehungsweise – bei Übernahme in die Behandlungsdokumentation – nach den dafür geltenden Fristen gelöscht. Informationen zur Verarbeitung durch Google finden Sie in der <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className={externalLinkClass}>Datenschutzerklärung von Google</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">9. WhatsApp-Link</h2>
            <p>
              Auf der Website befinden sich reine Links zu WhatsApp; es ist kein WhatsApp-Widget eingebettet. Erst wenn Sie einen solchen Link anklicken, verlassen Sie unsere Website und stellen eine direkte Verbindung zu WhatsApp her. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist <strong>WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland</strong>, ein Unternehmen der Meta-Gruppe. Dabei können insbesondere Ihre IP-Adresse, Geräteinformationen und die Information, dass Sie von unserer Website zu WhatsApp gewechselt sind, verarbeitet und gegebenenfalls in Drittländer übermittelt werden.
            </p>
            <p className="mt-3">
              Wenn Sie uns über WhatsApp kontaktieren, erfolgt die Bearbeitung Ihrer Nachricht auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Teilen Sie dabei freiwillig Gesundheitsdaten mit, ist zusätzlich Ihre ausdrückliche Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO erforderlich. Bitte verwenden Sie WhatsApp nicht für Diagnosen, Befunde, Medikamentenangaben, ausführliche Krankengeschichten oder Notfälle. Nutzen Sie für die erste Kontaktaufnahme bevorzugt unser datensparsames <Link href="/termin" className={externalLinkClass}>Kontaktformular</Link>. Weitere Informationen finden Sie in der <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer" className={externalLinkClass}>Datenschutzrichtlinie von WhatsApp</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">10. Cookies und lokale Speicherung</h2>
            <p>
              Optionale Analyse- und Marketing-Cookies sind beim ersten Besuch deaktiviert. Sie können „Statistik & Reichweite“ und „Marketing & Personalisierung“ getrennt aktivieren. Cloudflare kann in besonderen Sicherheitsfällen technisch notwendige Cookies verwenden, etwa nach einer Sicherheitsprüfung oder Challenge. Die im Local Storage gespeicherte Auswahl ist erforderlich, um Ihre Entscheidung bei weiteren Seitenaufrufen zu beachten.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">11. Empfänger und Kategorien von Empfängern</h2>
            <p>Personenbezogene Daten erhalten nur Stellen, die sie für die genannten Zwecke benötigen:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Cloudflare, Inc. für Hosting, DNS, CDN, Sicherheit, Formularzustellung, E-Mail-Routing und Webanalyse,</li>
              <li>Google Ireland Limited und gegebenenfalls Google LLC für das empfangende E-Mail-Postfach sowie nach Ihrer jeweiligen Auswahl für Google Analytics 4, Google Ads, Conversion-Messung, Google Signals und personalisierte Werbung,</li>
              <li>WhatsApp Ireland Limited und Unternehmen der Meta-Gruppe nur, wenn Sie den WhatsApp-Link nutzen,</li>
              <li>Behörden, Gerichte, Steuerberatung oder sonstige Berufsgeheimnisträger, soweit eine gesetzliche Pflicht besteht oder dies zur Rechtsverteidigung erforderlich ist.</li>
            </ul>
            <p className="mt-3">Die Verarbeitung für Statistik oder Marketing findet nur nach Aktivierung des jeweiligen Zwecks statt. Formularinhalte und freiwillig eingegebene Gesundheitsangaben werden nicht an Google Analytics oder Google Ads übermittelt.</p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">12. Übermittlung in Drittländer</h2>
            <p>
              Bei Cloudflare, Google und Meta kann eine Verarbeitung in den USA oder anderen Staaten außerhalb des Europäischen Wirtschaftsraums nicht vollständig ausgeschlossen werden. Soweit für ein Empfängerunternehmen eine gültige Zertifizierung nach dem EU-US Data Privacy Framework besteht, stützen die Anbieter die Übermittlung auf den Angemessenheitsbeschluss der Europäischen Kommission nach Art. 45 DSGVO. Ergänzend oder ersatzweise werden von den Anbietern Standardvertragsklauseln der Europäischen Kommission nach Art. 46 Abs. 2 lit. c DSGVO und zusätzliche Schutzmaßnahmen eingesetzt. Informationen zu Cloudflares Garantien enthält das <a href="https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/" target="_blank" rel="noreferrer" className={externalLinkClass}>Cloudflare DPA</a>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">13. Speicherdauer</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Kontakt- und Terminanfragen:</strong> grundsätzlich sechs Monate nach abschließender Bearbeitung; bei erforderlicher Rechtsverteidigung höchstens bis zum Ablauf der einschlägigen Verjährungsfrist.</li>
              <li><strong>E-Mails:</strong> entsprechend dem Zweck der Anfrage; behandlungsrelevante Inhalte werden gegebenenfalls in die Behandlungsdokumentation übernommen.</li>
              <li><strong>Behandlungsdokumentation:</strong> grundsätzlich zehn Jahre nach Abschluss der Behandlung, soweit keine längere gesetzliche Frist greift.</li>
              <li><strong>Cloudflare Web Analytics:</strong> nicht aggregierte Messdaten sieben Tage; aggregierte Auswertungen bis zu sechs Monate.</li>
              <li><strong>Google Analytics 4:</strong> Ereignis- und pseudonyme Nutzerdaten bis zu 14 Monate nach den Einstellungen der Analytics-Property; die Einwilligungsentscheidung bleibt lokal gespeichert, bis Sie sie ändern oder den Browserspeicher löschen.</li>
              <li><strong>Sicherheits- und Netzwerkprotokolle:</strong> zweckgebunden nach den vertraglichen Cloudflare-Löschregeln; keine Übernahme in ein eigenes dauerhaftes Besucherarchiv.</li>
              <li><strong>Steuer- und handelsrechtlich relevante Unterlagen:</strong> entsprechend der jeweils geltenden gesetzlichen Aufbewahrungsfrist.</li>
            </ul>
            <p className="mt-3">Nach Fristablauf werden die Daten gelöscht oder anonymisiert, sofern keine gesetzliche Pflicht oder ein überwiegender Rechtsgrund eine weitere Speicherung verlangt.</p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">14. Ihre Datenschutzrechte</h2>
            <p>Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf:</p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>Auskunft nach Art. 15 DSGVO,</li>
              <li>Berichtigung nach Art. 16 DSGVO,</li>
              <li>Löschung nach Art. 17 DSGVO,</li>
              <li>Einschränkung der Verarbeitung nach Art. 18 DSGVO,</li>
              <li>Datenübertragbarkeit nach Art. 20 DSGVO,</li>
              <li>Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO nach Art. 21 DSGVO.</li>
            </ul>
            <p className="mt-3">
              Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die Verarbeitung bis zum Widerruf bleibt rechtmäßig. Zur Ausübung Ihrer Rechte genügt eine Nachricht an {siteConfig.email}. Gesetzliche Aufbewahrungs- und Dokumentationspflichten können einer sofortigen Löschung entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">15. Beschwerderecht</h2>
            <p>Sie haben nach Art. 77 DSGVO das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für nichtöffentliche Stellen in Bayern ist grundsätzlich zuständig:</p>
            <p className="mt-3">
              <strong>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</strong><br />
              Promenade 18, 91522 Ansbach<br />
              Telefon: +49 981 180093-0<br />
              E-Mail: poststelle@lda.bayern.de<br />
              <a href="https://www.lda.bayern.de/de/kontakt.html" target="_blank" rel="noreferrer" className={externalLinkClass}>Kontakt und Online-Beschwerde beim BayLDA</a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">16. Pflicht oder Freiwilligkeit der Bereitstellung</h2>
            <p>
              Die Nutzung der Website ist ohne Angabe von Kontaktdaten möglich. Name, E-Mail-Adresse, Anliegen und die ausdrückliche Einwilligung sind erforderlich, wenn Sie das Kontaktformular verwenden möchten; ohne diese Angaben können wir die Anfrage nicht entgegennehmen und beantworten. Terminwunsch und Nachricht sind freiwillig. Gesetzlich oder vertraglich müssen Sie das Online-Formular nicht verwenden. Alternativ können Sie uns über die im Impressum genannten Kontaktwege erreichen.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">17. Automatisierte Entscheidungen und Profiling</h2>
            <p>Wir treffen keine ausschließlich automatisierten Entscheidungen mit rechtlicher oder vergleichbar erheblicher Wirkung und führen kein Profiling im Sinne von Art. 22 DSGVO durch. Das ausgewählte Anliegen dient ausschließlich der manuellen Zuordnung Ihrer Anfrage.</p>
          </div>

          <div>
            <h2 className="mb-3 text-[22px] font-bold text-[#173838]">18. Datensicherheit und Aktualisierung</h2>
            <p>
              Die Website wird verschlüsselt über HTTPS übertragen. Wir setzen technische und organisatorische Schutzmaßnahmen ein, darunter Transportverschlüsselung, Sicherheitsheader, Zugriffsbeschränkungen, Eingabevalidierung und datensparsame Formulargestaltung. Wir aktualisieren diese Erklärung, wenn sich Dienste, Rechtsgrundlagen oder Verarbeitungsvorgänge ändern. Maßgeblich ist die jeweils auf dieser Seite veröffentlichte Fassung.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
