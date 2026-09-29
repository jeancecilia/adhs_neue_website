# Automatische Antwort für ADHS-Diagnostik

Die Website schickt weiterhin jede gültige Anfrage an das Praxispostfach.
Die Benachrichtigung enthält zusätzlich einen strukturierten Datensatz und die freiwillige Anrede.
`Code.js` wird als `Code.gs` im Google-Apps-Script-Projekt des Kontos
`info@neurofeedback-praxis-muenchen.de` gespeichert. Es benötigt keinen eingeschalteten PC.

## Aktivierung

1. Das Skript im Praxis-Konto öffnen und einmal `aktivieren` ausführen.
2. Die Google-Berechtigungen zum Postfachzugriff, Versand und Ausführen im Hintergrund prüfen und freigeben.
3. Falls die Ausführung durch die Freigabe unterbrochen wurde, `aktivieren` erneut ausführen.
4. Eine neue Testanfrage mit der eigenen Praxisadresse absenden. Nach mindestens fünf Minuten Eingang und Gesendet prüfen.

`aktivieren` setzt den Startzeitpunkt beim ersten Aufruf und erstellt genau einen Minutentrigger.
Alte Anfragen, andere Anliegen, Antworten auf bestehende Nachrichten, Spam und Papierkorb werden nicht beantwortet.
Erneute Aktivierung setzt weder Startzeitpunkt noch Versandnachweise zurück.
Mit `pausieren` lässt sich die Automation ausschalten.

## Verhalten

- Nur exakt `adhs-diagnostik`, authentifizierter Formularabsender und passende Reply-To-Adresse.
- Der vollständige Nutzertext bleibt unverändert; Anrede nach expliziter Auswahl, sonst `Guten Tag <vollständiger Name>,`.
- Mindestens 300 Sekunden nach Absenden **und** Eingang im Postfach; bei normalem Minutentrigger etwa fünf bis sechs Minuten, bei Google-Verzögerungen später.
- Keine Patientennachrichten, Namen oder Adressen in Script Properties; nur Aktivierungszeit und Vorgangsnummer/Versandstatus.
- Die letzten sieben Tage werden geprüft; erfolgreiche Versandnachweise bleiben acht Tage gespeichert.
- Sperre und Vorgangsnummer verhindern Mehrfachversand beim erneuten Prüfen oder bei duplizierten Benachrichtigungen.
- Bei ausgeschöpftem Mailkontingent bleibt der Vorgang offen. Bei einem unklaren Versandfehler erfolgt kein blinder Wiederholungsversuch; die fehlgeschlagene Ausführung meldet die Vorgangsnummer. In Google Apps Script die Fehlerbenachrichtigungen des Triggers verwenden und Gesendet prüfen.

## Prüfung

`npm test` enthält Tests für den Übergang Worker → Mailparser, Text, Anrede,
Zeitgrenzen, Anliegenfilter, historische Nachrichten, Kontoprüfung, wiederholte
Ausführung, Kontingent und unklare Versandfehler. Ein echter End-to-End-Test
benötigt die einmalige Google-Freigabe und eine anschließend neu abgesendete Testanfrage.
