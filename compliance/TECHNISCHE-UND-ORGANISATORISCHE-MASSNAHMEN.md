# Technische und organisatorische Maßnahmen

Stand: 20. September 2026

## Vertraulichkeit

- Zugriff auf Cloudflare, Google Workspace, GitHub und die geschützte Praxisablage nur für berechtigte Personen.
- Individuelle Benutzerkonten; keine gemeinsam genutzten Zugangsdaten.
- Mehrfaktor-Authentisierung für administrative Konten, soweit vom Dienst angeboten.
- Passwortmanager und eindeutige, lange Passwörter.
- Keine Patienten-, Vertrags- oder Zugangsdaten im Git-Repository.
- Formulare weisen direkt auf Datenminimierung hin; ausführliche Gesundheitsinformationen sollen nicht online übermittelt werden.

## Integrität

- Durchgehendes HTTPS, HSTS, Content-Security-Policy und weitere Sicherheitsheader.
- Serverseitige Herkunftsprüfung, Eingabevalidierung, Größenbegrenzung, Honeypot und HTML-Escaping im Kontaktformular.
- Formularzustellung nur an das dedizierte Workspace-Postfach info@neurofeedback-praxis-muenchen.de.
- Keine dauerhafte Kontaktformular-Datenbank.
- Selbsttest-Datenbankzugriff nur über den validierenden Worker; Antwort-IDs werden zufällig erzeugt.
- Änderungen werden versioniert, automatisiert getestet und erst nach erfolgreichem Build veröffentlicht.

## Verfügbarkeit und Belastbarkeit

- CDN-/DDoS-Schutz und globale TLS-Auslieferung über Cloudflare.
- Hosting- und Worker-Konfiguration werden nach Änderungen sowie mindestens jährlich geprüft.
- Wiederherstellung erfolgt aus dem versionierten Quellstand; Geheimnisse und Vertragsunterlagen werden separat gesichert.
- Funktionsprüfung des Formulars mit neutralen Testdaten nach Änderungen an E-Mail oder Worker.

## Trennungs- und Minimierungsgebot

- Analyse- und Marketingzwecke sind getrennt auswählbar und standardmäßig deaktiviert.
- Google-Tags werden erst nach der passenden Einwilligung geladen.
- Formularinhalte und Gesundheitsangaben werden nicht an Google Analytics oder Google Ads gesendet.
- Der Selbsttest trennt Einwilligung zur unmittelbaren Auswertung von der optionalen dauerhaften Speicherung.
- Der Selbsttest erhebt weder Namen noch E-Mail-Adresse oder Telefonnummer.

## Kontrolle

- Quartalsweise: Benutzerkonten, MFA, Weiterleitungen, Zielpostfach und Zugriffsrechte prüfen.
- Halbjährlich: Test des Kontaktformulars, Löschläufe, Datenexport und Betroffenenprozess prüfen.
- Jährlich: AVVs, Unterauftragsverarbeiter, Datenschutzerklärung, VVT, TOMs und DSFA-Schwellenprüfung aktualisieren.
- Nach Sicherheitsvorfällen oder Dienständerungen: anlassbezogene Prüfung und dokumentierte Korrektur.

