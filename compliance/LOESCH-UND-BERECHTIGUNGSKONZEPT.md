# Lösch- und Berechtigungskonzept

Stand: 20. September 2026

## Rollen und Berechtigungen

| System | Zulässige Rolle | Zugriff | Prüfintervall |
|---|---|---|---|
| Google Workspace Praxispostfach | Praxisinhaber; ausdrücklich beauftragte Vertretung nur bei Bedarf | Kontakt- und E-Mail-Inhalte | quartalsweise |
| Cloudflare | Praxisinhaber; technischer Administrator nur auf dokumentierte Weisung | DNS, Hosting, Worker, D1, Zustellkonfiguration | quartalsweise |
| GitHub/Deployment | Praxisinhaber; technischer Bearbeiter | Quellcode ohne Patienten- und Zugangsdaten | quartalsweise |
| Behandlungsdokumentation | behandelnde beziehungsweise gesetzlich berechtigte Person | erforderliche Behandlungsdaten | quartalsweise |

Konten ausscheidender oder nicht mehr beauftragter Personen werden unverzüglich gesperrt. Rechte werden nach dem Need-to-know-Prinzip vergeben und nicht über private Sammelkonten geteilt.

## Löschregeln

| Datenart | Regelfrist | Auslöser und Umsetzung |
|---|---|---|
| Nicht zum Vertrag führende Kontaktanfrage/E-Mail | 6 Monate | nach abschließender Bearbeitung; monatliche Prüfung des Praxispostfachs |
| Rechtsverteidigungsrelevante Korrespondenz | bis Ende der einschlägigen Verjährungsfrist | Sperrvermerk statt operativer Nutzung; danach Löschung |
| Behandlungsrelevante Inhalte | grundsätzlich 10 Jahre | Übernahme in Behandlungsdokumentation; Frist ab Abschluss der Behandlung, längere Pflichten im Einzelfall prüfen |
| Pseudonymisierte Selbsttestdaten | höchstens 5 Jahre | wöchentlicher automatisierter D1-Löschlauf; vorzeitige Löschung anhand Antwort-ID möglich |
| GA4 Ereignis-/Nutzerdaten | höchstens 14 Monate | Property-Einstellung kontrollieren |
| Einwilligungsentscheidung im Browser | höchstens 12 Monate | automatische Gültigkeitsgrenze; sofortige Änderung über Cookie-Einstellungen |
| Interne Herkunftszuordnung im Browser | höchstens 30 Tage | nur nach Einwilligung; bei Widerruf entfernen |
| Sicherheitsprotokolle | erforderliche Providerfrist | kein eigenes dauerhaftes Besucherarchiv; Provider-Einstellung jährlich prüfen |

## Löschprotokoll

Bei manuellen Löschungen werden Datum, Datenkategorie, Zeitraum, ausführende Person, Rechtsgrund und Ergebnis ohne Wiedergabe des gelöschten Inhalts in der geschützten Praxisablage protokolliert. Gesetzliche Aufbewahrungspflichten oder laufende Rechtsansprüche werden vor Löschung geprüft.

