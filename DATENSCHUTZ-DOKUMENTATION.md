# Datenschutz-Dokumentation der Website

Stand der Prüfung: 17. August 2026

## Cloudflare-Auftragsverarbeitung

Verantwortlicher: Jean-Maurice Cecilia-Menzel, ADHS Praxis München, Hildeboldstraße 1, 80797 München.

Auftragsverarbeiter: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA.

Eingesetzte Dienste:

- DNS, Proxy/CDN, TLS und Sicherheitsfunktionen
- Cloudflare Pages für die statische Website
- Cloudflare Workers und Email Sending für das Kontaktformular
- Cloudflare Email Routing für eingehende Praxis-E-Mails
- Cloudflare Web Analytics und Real User Measurement
- Google Analytics 4 standardmäßig aktiv, mit jederzeitiger Opt-out-Möglichkeit

Vertragsnachweis:

- Der Cloudflare Self-Serve Subscription Agreement gilt bei Nutzung beziehungsweise Zugriff auf die Cloudflare-Dienste.
- Abschnitt 6.1 des Self-Serve Subscription Agreement bezieht das Cloudflare Data Processing Addendum ausdrücklich in den Hauptvertrag ein.
- Geprüfte DPA-Fassung: Version 6.4, wirksam seit 3. April 2026.
- Das DPA beschreibt Cloudflare als Auftragsverarbeiter, die Verarbeitung einschließlich besonderer Datenkategorien, technische und organisatorische Maßnahmen, Unterauftragsverarbeiter, Auditregelungen und internationale Datentransfers.

Vertragsquellen:

- Self-Serve Subscription Agreement: https://www.cloudflare.com/terms/
- Data Processing Addendum: https://www.cloudflare.com/en-gb/cloudflare-customer-dpa/
- Information Security Exhibit: https://www.cloudflare.com/cloudflare-customer-dpa/information-security-exhibit/
- Unterauftragsverarbeiter: https://www.cloudflare.com/gdpr/subprocessors/

Dokumentierte Schutzmaßnahmen:

- HTTPS und HSTS für die gesamte Website
- Content-Security-Policy und weitere Sicherheitsheader
- Herkunftsprüfung und serverseitige Eingabevalidierung im Kontaktformular
- Größenbegrenzung, Honeypot und HTML-Escaping
- keine dauerhafte Formulardatenbank
- ausdrückliche Einwilligung für freiwillig übermittelte Gesundheitsdaten
- Hinweis zur Datenminimierung unmittelbar am Formular
- Cloudflare Web Analytics ohne Analyse-Cookies oder Local Storage
- Google Consent Mode v2 mit standardmäßig gewährtem `analytics_storage`; Werbesignale bleiben bis „Alle akzeptieren“ verweigert
- Google-Ads-Speicher und Messsignale nur nach „Alle akzeptieren“; Google Signals, besucherbasierte Zielgruppen und Anzeigenpersonalisierung bleiben deaktiviert
- Analytics-Ereignisse ohne Formularinhalte, Kontaktdaten oder ausgewählte Gesundheitsanliegen

## Regelmäßige Kontrolle

Mindestens jährlich sowie bei Änderungen der eingesetzten Dienste sind folgende Punkte zu prüfen und das Prüfdatum zu aktualisieren:

- aktuelle Fassung des Cloudflare DPA und der Unterauftragsverarbeiter
- Cloudflare-Einstellungen für Pages, Workers, Email Routing und Web Analytics
- Google-Analytics-Property, Consent-Mode-Diagnose, Datenaufbewahrung und verknüpfte Produkte
- Funktionsprüfung des Einwilligungsdialogs einschließlich Widerruf und Löschung erreichbarer GA-Cookies
- Abgleich, dass `generate_lead` nur nach erfolgreicher Formularübermittlung und ohne Formularparameter gesendet wird
- tatsächliche Speicherdauern und vorhandene Protokolle
- Sicherheitsheader der veröffentlichten Website
- Empfänger und Löschfristen von Kontaktanfragen
- Übereinstimmung der Datenschutzerklärung mit der realen Verarbeitung

## Noch organisatorisch zu dokumentieren

Die folgenden Unterlagen liegen nicht öffentlich auf der Website und müssen vom Praxisinhaber intern aktuell gehalten werden:

- Verzeichnis der Verarbeitungstätigkeiten
- Lösch- und Berechtigungskonzept für E-Mail und Behandlungsdokumentation
- Nachweis der eingesetzten E-Mail-Vertragsform und gegebenenfalls Auftragsverarbeitungsvereinbarung
- Verfahren für Auskunft, Löschung, Berichtigung, Widerspruch und Datenschutzvorfälle
