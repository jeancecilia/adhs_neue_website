import Link from "next/link";
import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import FaqAccordion from "@/components/FaqAccordion";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BookingForm from "@/components/BookingForm";

export const metadata = createPageMetadata({
  title: "ADHS-Diagnostik München für Erwachsene | ADHS Praxis",
  description:
    "Strukturierte ADHS-Diagnostik für Erwachsene in München-Schwabing. Detaillierter Ablauf, validierte Testverfahren (DIVA-5, ASRS, WURS-k), schriftlicher Befundbericht & 199 € Festpreis.",
  path: "/adhs-test-muenchen",
});

const DIAGNOSTIK_FAQS = [
  {
    question: "Wie läuft die ADHS-Diagnostik für Erwachsene in Ihrer Münchner Praxis genau ab?",
    answer:
      "Die Diagnostik erfolgt strukturiert in ca. 2,5 Stunden Gesamtumfang. Sie umfasst ein ausführliches biographisches Erstgespräch, standardisierte klinische Testverfahren (u.a. DIVA-5, ASRS v1.1, WURS-k), die Analyse von Kindheitszeugnissen oder Fremdbeurteilungen, eine differenzialdiagnostische Abgrenzung sowie ein abschließendes Auswertungsgespräch mit schriftlicher Befundzusammenfassung.",
  },
  {
    question: "Erhalte ich nach der Diagnostik einen schriftlichen Befundbericht?",
    answer:
      "Ja. Sie erhalten einen detaillierten, schriftlichen diagnostischen Befundbericht. Dieser dokumentiert die Ergebnisse aller eingesetzten Testskalen, die biographische Entwicklung der Symptomatik seit der Kindheit, die differenzialdiagnostische Beurteilung sowie konkrete Handlungsempfehlungen für Therapie, Alltag oder eine fachärztliche Weiterbehandlung.",
  },
  {
    question: "Wie schnell kann ich einen Termin für die Diagnostik bekommen?",
    answer:
      "Als reine Privat- und Selbstzahlerpraxis können wir Ihnen Termine für die diagnostische Abklärung in der Regel innerhalb weniger Wochen anbieten – ohne die bei kassenärztlichen Spezialambulanzen oft üblichen Wartezeiten von 12 bis 24 Monaten.",
  },
  {
    question: "Kann ich mit dem Befundbericht zu einer Fachärztin oder einem Psychiater für Medikamente gehen?",
    answer:
      "Ja. Wenn Sie nach der Diagnostik eine medikamentöse Behandlung (z. B. mit Stimulanzien wie Methylphenidat oder Lisdexamfetamin) anstreben, dient unser ausführlicher Befundbericht als fundierte psychodiagnostische Grundlage für den behandelnden Facharzt für Psychiatrie. Die eigentliche medikamentöse Indikation und Rezeptierung obliegt immer der zuständigen Fachärztin bzw. dem Facharzt.",
  },
  {
    question: "Was kostet die ADHS-Diagnostik und wer übernimmt die Kosten?",
    answer:
      "Die ADHS-Diagnostik für Erwachsene bieten wir zum fairen und transparenten Festpreis von 199 € an (ca. 2,5 Stunden Gesamtumfang inklusive Anamnese, Testung, Differenzialdiagnostik, Auswertung und schriftlicher Befundzusammenfassung). Private Krankenversicherungen und Heilpraktiker-Zusatzversicherungen erstatten Heilpraktikerleistungen je nach vereinbartem Tarif häufig anteilig oder voll. Gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht.",
  },
  {
    question: "Was passiert, wenn sich herausstellt, dass ich kein ADHS habe?",
    answer:
      "Eine sorgfältige Diagnostik schützt vor Fehldiagnosen. Häufig stehen hinter Konzentrationsproblemen und Erschöpfung andere Faktoren wie chronischer Stress, Burnout, depressive Episoden, Traumafolgen, Schlafapnoe oder Hochbegabung. Auch bei einem negativen ADHS-Befund erhalten Sie eine klare Einordnung Ihrer Beschwerden und Empfehlungen für sinnvolle Behandlungsansätze.",
  },
  {
    question: "Müssen alte Schulzeugnisse aus der Grundschule zwingend vorliegen?",
    answer:
      "Schulzeugnisse sind sehr hilfreich, da die ADHS-Kriterien nach ICD-10/DSM-5 fordern, dass Symptome bereits in der Kindheit (vor dem 12. Lebensjahr) bestanden haben müssen. Sollten Zeugnisse nicht mehr auffindbar sein, rekonstruieren wir die Kindheitssymptomatik über validierte retrospektive Fragebögen (wie die Wender-Utah-Rating-Scale, WURS-k) und auf Wunsch über kurze Fragebögen für Eltern oder Partner.",
  },
  {
    question: "Können auch Angehörige oder Partner einbezogen werden?",
    answer:
      "Ja, eine Fremdanamnese (z. B. durch Lebenspartner, Eltern oder enge Bezugspersonen) ist oft sehr aufschlussreich, da Betroffene eigene Verhaltensweisen über Jahre unbewusst kompensiert haben. Der Einbezug erfolgt selbstverständlich nur mit Ihrem ausdrücklichen Einverständnis.",
  },
  {
    question: "Wie unterscheidet sich die Diagnostik bei Frauen?",
    answer:
      "Frauen zeigen im Erwachsenenalter häufiger den vorwiegend unaufmerksamen Subtyp (ADS) ohne ausgeprägte motorische Hyperaktivität. Stattdessen dominieren innere Unruhe, chronische Erschöpfung durch intensives Masking, Reizoffenheit, emotionale Dysregulation und Perfektionismus. Unsere Diagnostik berücksichtigt diese genderspezifischen Ausprägungen sensibel.",
  },
  {
    question: "Bieten Sie im Anschluss auch die passende Therapie an?",
    answer:
      "Ja. Ein großer Vorteil unserer Praxis ist, dass Sie nach der Diagnostik nicht alleine gelassen werden. Wir bieten Ihnen direkt im Anschluss strukturierende Psychotherapie, alltagstaugliche Strategien und apparatives Neurofeedback in denselben Praxisräumen in München-Schwabing an.",
  },
];

export default function AdhsTestPage() {
  return (
    <div className="w-full">
      <BreadcrumbJsonLd items={[
        { name: "Startseite", path: "" },
        { name: "ADHS-Diagnostik", path: "/adhs-test-muenchen" },
      ]} />
      {/* 1. HERO SECTION */}
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-18">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">ADHS-Diagnostik</span>
          </nav>
          <p className="eyebrow mb-3">Diagnostische Abklärung in München-Schwabing</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px] md:text-[50px]">
            ADHS-Diagnostik für Erwachsene in München
          </h1>
          <p className="mt-4 text-[18px] font-semibold leading-[1.4] text-[#7a5600] sm:text-[22px]">
            Strukturierte Diagnostik bei Verdacht auf ADHS im Erwachsenenalter mit Anamnese, standardisierten diagnostischen Verfahren und differenzialdiagnostischer Einordnung.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-700 sm:text-[18px]">
            Viele Erwachsene leiden jahrelang unter chronischer Prokrastination, Konzentrationsproblemen, innerer Unruhe oder Versagensängsten – ohne zu wissen, dass eine neurobiologische Veranlagung dahintersteht. Eine fundierte Diagnostik bringt Klarheit, entlastet von Schuldgefühlen und schafft die Grundlage für passgenaue Unterstützung.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#diagnostik-anfrage"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              ADHS-Diagnostik anfragen
            </Link>
            <Link
              href="/ablauf-kosten"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white px-7 py-3.5 text-[14px] font-semibold text-[#173838] hover:bg-slate-50"
            >
              Ablauf & Kosten ansehen →
            </Link>
            <Link
              href="/adhs-selbsttest-erwachsene"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.25)] bg-white px-7 py-3.5 text-[14px] font-semibold text-[#173838] hover:bg-slate-50"
            >
              Kostenloser ADHS-Selbsttest
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Zeitnahe Termine (ohne 12–24 Monate Wartezeit)
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> 199 € transparenter Festpreis
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#173838]">
              <span className="text-[#7a5600]">✓</span> Ausführlicher schriftlicher Befundbericht
            </span>
          </div>
        </div>
      </section>

      {/* 2. WANN IST EINE ADHS-DIAGNOSTIK SINNVOLL? */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Typische Ausgangslagen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wann ist eine ADHS-Diagnostik für Erwachsene sinnvoll?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Viele Erwachsene, die unsere Münchner Praxis aufsuchen, haben einen langen Leidensweg hinter sich. Oft wurden frühere Diagnosen wie rezidivierende Depressionen, generalisierte Angststörungen, Anpassungsstörungen oder Burnout gestellt, ohne dass therapeutische Maßnahmen zu einer dauerhaften Entlastung führten.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Chronische Handlungslähmung (Prokrastination)</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Sie wissen exakt, was zu tun ist, können sich aber selbst bei hoher Dringlichkeit nicht überwinden anzufangen – bis unerträglicher Termindruck entsteht.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Diskrepanz zwischen Potenzial und Leistung</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Im Beruf oder Studium bleiben Sie trotz hoher Intelligenz und großem Kraftaufwand immer wieder hinter den eigentlichen Möglichkeiten zurück.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Dauerhafte innere Unruhe & Getriebenheit</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Körperliche Hyperaktivität hat sich nach innen verlagert: Das Gedankenkarussell steht niemals still, Entspannung führt paradoxerweise zu innerer Anspannung.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-2">Emotionale Überflutung & Reizbarkeit</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Kritik oder Zurückweisung lösen intensive seelische Schmerzen aus (Rejection Sensitive Dysphoria, RSD). Stimmungsumschwünge treten unvermittelt auf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WIE WIRD ADHS BEI ERWACHSENEN DIAGNOSTIZIERT? */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Wissenschaftliche Methodik</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie wird ADHS bei Erwachsenen diagnostiziert?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Es gibt keinen einzelnen Test, kein EEG und kein Blutbild, das isoliert eine ADHS beweisen könnte. Eine wissenschaftlich fundierte Diagnostik nach den Kriterien des ICD-10 / ICD-11 und DSM-5 sowie den Empfehlungen der deutschen S3-Leitlinie basiert immer auf einer <strong>multimodalen Befunderhebung</strong> entlang von drei Säulen:
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow space-y-4">
            <h3 className="text-[20px] font-bold text-[#173838]">Die drei obligatorischen Säulen der Diagnostik:</h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[12px] font-bold text-white">1</span>
                <div>
                  <strong className="text-[#173838]">Aktuelle Symptome im Erwachsenenalter:</strong> Nachweis von Unaufmerksamkeit, Desorganisation, Impulsivität und/oder Hyperaktivität in mindestens zwei Lebensbereichen (z. B. Beruf, Partnerschaft, Finanzen, Alltag).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[12px] font-bold text-white">2</span>
                <div>
                  <strong className="text-[#173838]">Beginn in der Kindheit (Entwicklungsaspekt):</strong> Nachweis, dass entsprechende Auffälligkeiten bereits vor dem 12. Lebensjahr vorlagen (mittels Zeugnissen, Elternfragebögen oder retrospektiven Skalen).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#173838] text-[12px] font-bold text-white">3</span>
                <div>
                  <strong className="text-[#173838]">Differenzialdiagnostische Abgrenzung:</strong> Sicherstellung, dass die Symptome nicht besser durch eine andere psychische Störung (z. B. Depression, Traumafolgen, Bipolare Störung) oder somatische Erkrankung erklärt werden.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRAXIS-STANDORT & ATMOSPHÄRE CALLOUT */}
      <section className="py-4 sm:py-6">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-[rgba(47,79,79,0.15)] bg-[#173838] p-7 sm:p-9 text-white card-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65]">
                  Praxis München-Schwabing · Hildeboldstraße 1
                </p>
                <h3 className="text-[22px] font-bold text-white leading-snug">
                  Ruhige Atmosphäre ohne überfülltes Wartezimmer
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-200">
                  Als reine Bestellpraxis reservieren wir feste Zeitfenster exklusiv für Sie. Die Diagnostik findet in ungestörter, diskreter Umgebung statt.
                </p>
              </div>
              <div className="shrink-0 flex sm:flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-sm">
                  <span className="text-[#f0cc65]">✓</span> Diskrete Einzeltermine
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur-sm">
                  <span className="text-[#f0cc65]">✓</span> U2 Hohenzollernplatz
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABLAUF IN UNSERER PRAXIS */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Transparenter 4-Stufen-Prozess</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Ablauf der ADHS-Diagnostik in unserer Münchner Praxis
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Wir legen großen Wert auf eine ruhige, empathische und methodisch saubere Durchführung. Der diagnostische Prozess gliedert sich in vier klare Schritte:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#faf9f8] p-7 border border-slate-200 card-shadow">
              <span className="text-[24px] font-black text-[#7a5600]">Schritt 01</span>
              <h3 className="text-[19px] font-bold text-[#173838] mt-1 mb-2">Biografische Anamnese (ca. 60 Min.)</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Im ersten persönlichen Termin erfassen wir Ihre aktuelle Lebenssituation, die Entstehungsgeschichte Ihrer Beschwerden, berufliche Belastungen sowie Vorbehandlungen und somatische Vorerkrankungen.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf9f8] p-7 border border-slate-200 card-shadow">
              <span className="text-[24px] font-black text-[#7a5600]">Schritt 02</span>
              <h3 className="text-[19px] font-bold text-[#173838] mt-1 mb-2">Strukturierte Testung & Fragebögen (ca. 90 Min.)</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Durchführung des strukturierten klinischen Interviews (DIVA-5) sowie standardisierter psychometrischer Skalen (ASRS v1.1, WURS-k, CAARS, Fremdbeurteilungsbögen für Bezugspersonen).
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf9f8] p-7 border border-slate-200 card-shadow">
              <span className="text-[24px] font-black text-[#7a5600]">Schritt 03</span>
              <h3 className="text-[19px] font-bold text-[#173838] mt-1 mb-2">Differenzialdiagnostik & Auswertung</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Auswertung der Testprofile, Abgleich mit Zeugnissen und Berichten sowie differenzialdiagnostische Abgrenzung gegenüber affektiven Störungen, Angststörungen, Hochbegabung oder Traumata.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf9f8] p-7 border border-slate-200 card-shadow">
              <span className="text-[24px] font-black text-[#7a5600]">Schritt 04</span>
              <h3 className="text-[19px] font-bold text-[#173838] mt-1 mb-2">Befundbesprechung & Schriftlicher Bericht (ca. 50 Min.)</h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Gemeinsame Besprechung aller Ergebnisse. Sie erhalten Ihren ausführlichen schriftlichen Befundbericht inklusive fundierter Empfehlungen für Therapie, Alltag und eventuelle fachärztliche Schritte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EINGESETZTE TESTVERFAHREN */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Leitlinienbasierte Testinstrumente</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Welche Testverfahren werden eingesetzt?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Wir verwenden ausschließlich in der Fachwelt anerkannte und wissenschaftlich validierte diagnostische Erhebungsinstrumente:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="inline-block rounded-full bg-[#173838] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                Goldstandard
              </span>
              <h3 className="text-[18px] font-bold text-[#173838] mb-1">DIVA-5</h3>
              <p className="text-[13px] font-semibold text-[#7a5600] mb-2">
                Strukturiertes Diagnostisches Interview für ADHS bei Erwachsenen
              </p>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Das international führende klinische Interview zur systematischen Erfassung aller DSM-5-Kriterien im Kindes- und Erwachsenenalter inklusive konkreter Alltagsbeispiele.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="inline-block rounded-full bg-[#faf9f8] border border-slate-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173838] mb-2">
                Retrospektiv
              </span>
              <h3 className="text-[18px] font-bold text-[#173838] mb-1">WURS-k</h3>
              <p className="text-[13px] font-semibold text-[#7a5600] mb-2">
                Wender Utah Rating Scale (Kurzform)
              </p>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Wissenschaftlich validierter Selbstbeurteilungsbogen zur quantitativen Erfassung retrospektiver ADHS-Symptome im Alter von 8 bis 10 Jahren.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="inline-block rounded-full bg-[#faf9f8] border border-slate-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173838] mb-2">
                Aktuelle Symptome
              </span>
              <h3 className="text-[18px] font-bold text-[#173838] mb-1">ASRS v1.1 & CAARS</h3>
              <p className="text-[13px] font-semibold text-[#7a5600] mb-2">
                ADHD Self-Report Scale & Conners Adult Rating Scales
              </p>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Standardisierte Skalen der WHO zur exakten Quantifizierung der aktuellen Unaufmerksamkeit, Impulsivität und Hyperaktivität im Erwachsenenalltag.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="inline-block rounded-full bg-[#faf9f8] border border-slate-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#173838] mb-2">
                Fremdanamnese
              </span>
              <h3 className="text-[18px] font-bold text-[#173838] mb-1">Fremdbeurteilungsbögen</h3>
              <p className="text-[13px] font-semibold text-[#7a5600] mb-2">
                Befragung von Eltern, Partnern oder Bezugspersonen
              </p>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Ergänzende standardisierte Fragebögen für enge Bezugspersonen zur Aufdeckung unbewusst kompensierter Verhaltensweisen (nur mit Ihrem Einverständnis).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIFFERENZIALDIAGNOSTIK */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Sorgfalt & Fachkompetenz</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Differenzialdiagnostik: Warum eine genaue Abgrenzung entscheidend ist
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Nicht jede Konzentrationsstörung oder innere Unruhe ist eine ADHS. Um Fehldiagnosen auszuschließen und die optimale Behandlungsstrategie zu wählen, prüfen wir sorgfältig mögliche Überschneidungen mit folgenden Störungsbildern:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-1">Depressive Episoden & Dysthymie</h3>
              <p className="text-[13px] text-slate-600">
                Antriebslosigkeit und Konzentrationsstörungen bei Depressionen treten meist episodisch auf, während ADHS-Symptome lebenslang und situationsübergreifend bestehen.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-1">Generalisierte Angst- & Panikstörungen</h3>
              <p className="text-[13px] text-slate-600">
                Ständige Sorgen und Nervosität ähneln der ADHS-Hyperaktivität, entspringen jedoch einer primären Angstsymptomatik und Bedrohungserwartung.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-1">Traumafolgestörungen & PTBS</h3>
              <p className="text-[13px] text-slate-600">
                Hypervigilanz, Schreckhaftigkeit und Dissoziationen können wie schwere ADHS-Unaufmerksamkeit wirken, erfordern jedoch traumspezifische Behandlungsansätze.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-6 card-shadow">
              <h3 className="text-[17px] font-bold text-[#173838] mb-1">Hochbegabung & chronische Unterforderung</h3>
              <p className="text-[13px] text-slate-600">
                Unterstimulation führt bei hochbegabten Erwachsenen oft zu extremer Langeweile, Unruhe und Flüchtigkeitsfehlern, die einer ADHS täuschend ähnlich sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DAUER & KOSTEN DER DIAGNOSTIK (199 € FESTPREIS) */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-2">Transparente Rahmenbedingungen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Dauer und Kosten der ADHS-Diagnostik
            </h2>
            <p className="mt-3 text-[16px] text-slate-600">
              Bei uns gibt es keine versteckten Nebenkosten. Sie erhalten ein vollständiges Diagnostikpaket zum Festpreis:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <div className="text-[24px] font-bold text-[#7a5600] mb-1">ca. 2,5 Std.</div>
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Gesamtumfang</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Ausführliche Anamnese, standardisierte Testung (DIVA-5), Differenzialdiagnostik und persönliches Auswertungsgespräch.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[#173838] bg-[#fdfbf7] p-6 card-shadow">
              <div className="text-[24px] font-bold text-[#173838] mb-1">199 € Festpreis</div>
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">ADHS-Diagnostik Erwachsene</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Strukturierte Abklärung inklusive aller Testungen, Auswertung und schriftlicher Befundzusammenfassung.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <div className="text-[24px] font-bold text-[#7a5600] mb-1">Erstattung</div>
              <h3 className="text-[16px] font-bold text-[#173838] mb-2">Privat / Selbstzahler</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Abrechnung nach GebüH möglich. Private Kassen erstatten je nach Tarif oft anteilig oder voll. Selbstzahler willkommen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WAS ERHALTE ICH NACH DER DIAGNOSTIK? */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Ihr diagnostisches Ergebnis</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Was erhalte ich nach Abschluss der Diagnostik?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Nach Abschluss aller diagnostischen Termine und der detaillierten testpsychologischen Auswertung erhalten Sie:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="text-[24px]">📄</span>
              <h3 className="text-[17px] font-bold text-[#173838] mt-2 mb-1">Schriftlicher Befundbericht</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Detaillierte Dokumentation aller Testergebnisse, biographischer Meilensteine und der differenzialdiagnostischen Beurteilung.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="text-[24px]">🧭</span>
              <h3 className="text-[17px] font-bold text-[#173838] mt-2 mb-1">Konkrete Handlungsempfehlungen</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Individuelle Empfehlungen für Psychotherapie, Alltagsstrategien, Neurofeedback und Anpassungen am Arbeitsplatz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow">
              <span className="text-[24px]">🩺</span>
              <h3 className="text-[17px] font-bold text-[#173838] mt-2 mb-1">Facharzt-Grundlage</h3>
              <p className="text-[13px] leading-relaxed text-slate-600">
                Eine fundierte psychodiagnostische Arbeitsgrundlage, falls Sie eine medikamentöse Behandlung beim Facharzt für Psychiatrie anstreben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WIE GEHT ES DANACH WEITER? */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl space-y-8">
          <div>
            <p className="eyebrow mb-2">Ihre nächsten Schritte</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
              Wie geht es nach der Diagnostik weiter?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Eine ADHS-Diagnose ist kein Endpunkt, sondern der Startpunkt für ein besseres Verständnis Ihrer eigenen Neurobiologie. Bei uns erhalten Sie auf Wunsch direkt die passende Weiterbehandlung:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold text-[#173838] mb-2">1. ADHS-Psychotherapie</h3>
                <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                  Strukturierende Einzeltherapie in unserer Praxis: Wir erarbeiten praxiserprobte Systeme gegen Prokrastination, stärken Ihre Emotionsregulation und bauen chronische Selbstzweifel ab.
                </p>
              </div>
              <Link href="/adhs-therapie-muenchen" className="text-[13px] font-bold text-[#173838] hover:underline">
                Mehr zur Therapie →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold text-[#173838] mb-2">2. Neurofeedback</h3>
                <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                  Apparatives EEG-Training zur direkten Schulung von Aufmerksamkeit, mentaler Ruhe und Selbstregulation – direkt in unseren Schwabinger Räumen.
                </p>
              </div>
              <Link href="/neurofeedback-muenchen" className="text-[13px] font-bold text-[#173838] hover:underline">
                Mehr zu Neurofeedback →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 card-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold text-[#173838] mb-2">3. Facharzt-Kooperation</h3>
                <p className="text-[13px] leading-relaxed text-slate-600 mb-4">
                  Sollten Sie eine medikamentöse Begleitung wünschen, nutzen Sie unseren schriftlichen Befundbericht für die psychiatrische Facharztkonsultation.
                </p>
              </div>
              <Link href="/ablauf-kosten" className="text-[13px] font-bold text-[#173838] hover:underline">
                Kosten & Ablauf ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CHECKLISTE: WAS SOLLTEN SIE MITBRINGEN? */}
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6">
          <p className="eyebrow mb-1">Gute Vorbereitung</p>
          <h2 className="text-[28px] text-[#173838] sm:text-[36px] leading-[1.2]">
            Checkliste: Was sollten Sie zum Diagnostiktermin mitbringen?
          </h2>
          <p className="text-[16px] text-slate-700">
            Eine gute Vorbereitung erleichtert die diagnostische Einordnung erheblich. Bringen Sie bitte – sofern vorhanden – folgende Unterlagen mit:
          </p>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow space-y-4">
            <ul className="space-y-3 text-[14px] text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-[#7a5600] font-bold text-[18px]">✓</span>
                <div>
                  <strong className="text-[#173838]">Alte Grundschulzeugnisse:</strong> Insbesondere die Textbeurteilungen aus den Klassen 1 bis 4 enthalten wertvolle Hinweise auf frühe Unaufmerksamkeit, Ablenkbarkeit oder Impulsivität.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7a5600] font-bold text-[18px]">✓</span>
                <div>
                  <strong className="text-[#173838]">Vorberichte & Befunde:</strong> Berichte früherer Psychotherapien, neurologischer oder psychiatrischer Behandlungen sowie aktuelle Labor- oder Schilddrüsenwerte (sofern vorhanden).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7a5600] font-bold text-[18px]">✓</span>
                <div>
                  <strong className="text-[#173838]">Eigene Notizen:</strong> Eine kurze Liste Ihrer Hauptschwierigkeiten im Alltag, im Beruf und in zwischenmenschlichen Beziehungen.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. BEHANDLER-TRUST-BOX */}
      <section className="section-space bg-[#faf9f8] border-y border-[rgba(47,79,79,0.1)]">
        <div className="container-shell max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 card-shadow grid gap-8 sm:grid-cols-[180px_1fr] items-center">
            <Image
              src="/images/portrait-jean-maurice-hd.jpg"
              alt="Jean-Maurice Cecilia-Menzel"
              width={360}
              height={450}
              loading="eager"
              className="w-full aspect-[4/5] object-cover rounded-xl border border-slate-200"
            />
            <div>
              <p className="eyebrow mb-1">Ihr Diagnostiker & Therapeut in München</p>
              <h3 className="text-[24px] font-bold text-[#173838]">Jean-Maurice Cecilia-Menzel, M.Sc.</h3>
              <p className="text-[14px] font-semibold text-[#7a5600] mb-3">
                Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie · Neurofeedback-Trainer
              </p>
              <p className="text-[14px] leading-relaxed text-slate-700 mb-4">
                Fachlicher Schwerpunkt sind die strukturierte Diagnostik und psychotherapeutische Behandlung von ADHS im Erwachsenenalter. In unserer Schwabinger Praxis verbinden wir fundierte leitlinienbasierte Testinstrumente (DIVA-5) mit einer empathischen und entlastenden Atmosphäre.
              </p>
              <Link
                href="/ueber-mich"
                className="inline-flex min-h-[44px] items-center text-[13px] font-bold text-[#173838] hover:underline"
              >
                Mehr über meine Qualifikationen & Arbeitsweise erfahren →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. DIREKTE TERMINANFRAGE */}
      <section
        id="diagnostik-anfrage"
        className="scroll-mt-24 border-y border-[rgba(47,79,79,0.1)] bg-[#faf9f8] section-space"
      >
        <div className="container-shell grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-2">Unverbindlich anfragen</p>
            <h2 className="text-[28px] leading-[1.2] text-[#173838] sm:text-[36px]">
              ADHS-Diagnostik direkt anfragen
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
              Senden Sie Ihre Terminwünsche direkt von dieser Seite. Für die erste Kontaktaufnahme genügen Name, E-Mail-Adresse und Ihr bevorzugter Zeitraum.
            </p>
            <div className="mt-6 rounded-2xl border border-[rgba(47,79,79,0.14)] bg-white p-6 card-shadow">
              <ul className="space-y-3 text-[14px] leading-relaxed text-slate-700">
                <li className="flex gap-2">
                  <span className="font-bold text-[#7a5600]">✓</span>
                  <span><strong>199 € Festpreis</strong> für den vollständigen Diagnostikprozess</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#7a5600]">✓</span>
                  <span>Ca. 2,5 Stunden Gesamtumfang inklusive Auswertung</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#7a5600]">✓</span>
                  <span>Schriftlicher Befundbericht und persönliche Besprechung</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#7a5600]">✓</span>
                  <span>Rückmeldung in der Regel innerhalb von 24–48 Stunden an Werktagen</span>
                </li>
              </ul>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* 13. FAQ ACCORDION */}
      <section className="section-space">
        <div className="container-shell max-w-3xl">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-[28px] text-[#173838] sm:text-[38px]">
              Fragen zur ADHS-Diagnostik in München
            </h2>
          </div>
          <FaqAccordion items={DIAGNOSTIK_FAQS} />
        </div>
      </section>

      {/* 14. ABSCHLUSS-CTA */}
      <section className="bg-[#173838] py-16 text-white text-center">
        <div className="container-shell max-w-3xl">
          <p className="text-[12px] font-bold uppercase tracking-wider text-[#f0cc65] mb-2">Endlich Klarheit schaffen</p>
          <h2 className="text-[30px] sm:text-[40px] text-white">
            Möchten Sie Ihren ADHS-Verdacht fundiert abklären lassen?
          </h2>
          <p className="mt-3 text-[16px] text-slate-200 mb-8 max-w-xl mx-auto">
            Vereinbaren Sie zeitnah einen Termin für Ihre strukturierte ADHS-Diagnostik in unserer Münchner Praxis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#diagnostik-anfrage"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[15px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Diagnostik-Termin anfragen
            </Link>
            <Link
              href="/ablauf-kosten"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Ablauf & Kosten ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
