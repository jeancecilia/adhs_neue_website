import Link from "next/link";
import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Termin anfragen | ADHS Praxis München",
  description:
    "Fragen Sie zeitnah Ihren Termin für ADHS-Diagnostik, Psychotherapie oder Neurofeedback in unserer Praxis in München-Schwabing an. Einfach, diskret und datensparsam.",
  alternates: {
    canonical: "/termin",
  },
};

export default function TerminPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-10 sm:py-14">
        <div className="container-shell max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Termin anfragen</span>
          </nav>
          <p className="eyebrow mb-2">Kontaktaufnahme & Terminanfrage</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[44px]">
            Termin in unserer ADHS Praxis München anfragen
          </h1>
          <p className="mt-4 text-[16px] leading-[1.65] text-slate-700 sm:text-[18px]">
            Wir bieten Ihnen eine zeitnahe, strukturierte und vertrauliche Betreuung in unserer Praxis in München-Schwabing.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl bg-[#faf9f8] p-6 border border-slate-200">
              <h2 className="text-[17px] font-bold text-[#173838] mb-2">Hinweis zum Datenschutz</h2>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Bitte übermitteln Sie über dieses Formular keine ausführlichen medizinischen Unterlagen oder Krankengeschichten. Für die Terminanfrage genügen Ihre Kontaktdaten und die Auswahl Ihres Anliegens. Weitere gesundheitliche Informationen besprechen wir im geschützten Rahmen der Praxis.
              </p>
            </div>

            <div className="space-y-3.5 text-[15px] text-slate-700">
              <p>📍 <strong>Praxis:</strong> Hildeboldstraße 1, 80797 München-Schwabing</p>
              <p>☎ <strong>Telefon:</strong> 089 44135911</p>
              <p>◷ <strong>Rückmeldung:</strong> meist innerhalb von 24–48 Std. werktags</p>
              <p>🔒 <strong>Vertraulichkeit:</strong> Ihre Angaben werden vertraulich behandelt.</p>
            </div>
          </div>

          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
