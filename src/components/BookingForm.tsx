"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { trackAnalyticsEvent } from "@/lib/analytics";

function BookingFormInner() {
  const searchParams = useSearchParams();
  
  const getInitialService = () => {
    const anliegen = searchParams.get("anliegen");
    if (anliegen === "screening" || anliegen === "diagnostik") return "adhs-diagnostik";
    if (anliegen === "therapie") return "adhs-therapie";
    if (anliegen === "neurofeedback") return "neurofeedback";
    return "adhs-diagnostik";
  };

  const [service, setService] = useState(getInitialService);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timeslot, setTimeslot] = useState("egal");
  const [message, setMessage] = useState("");
  const [healthDataConsent, setHealthDataConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) {
      setError("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }

    if (!healthDataConsent) {
      setError("Bitte bestätigen Sie die Datenschutzeinwilligung, bevor Sie die Anfrage absenden.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, timeslot, message, healthDataConsent, website }),
      });

      if (!response.ok) {
        throw new Error("Die Anfrage konnte nicht übermittelt werden.");
      }

      trackAnalyticsEvent("generate_lead", { method: "contact_form" });
      setSubmitted(true);
    } catch {
      setError("Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut oder nutzen Sie WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const getServiceName = (key: string) => {
    switch (key) {
      case "adhs-diagnostik":
        return "ADHS-Diagnostik (Verdacht auf ADHS)";
      case "adhs-therapie":
        return "Psychotherapie / Einzeltherapie";
      case "neurofeedback":
        return "Neurofeedback";
      case "allgemein":
        return "Allgemeine Anfrage";
      default:
        return "Ihr Anliegen";
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white p-8 sm:p-12 text-center card-shadow">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0cc65] text-2xl font-bold text-[#173838]">
          ✓
        </div>
        <h3 className="text-[26px] font-bold text-[#173838]">
          Vielen Dank für Ihre Anfrage, {name}!
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-[16px] leading-[1.65] text-slate-700">
          Wir haben Ihre Anfrage für <strong>{getServiceName(service)}</strong> erhalten. Wir melden uns in der Regel innerhalb von 24–48 Stunden an Werktagen persönlich bei Ihnen.
        </p>
        <div className="mx-auto mt-6 max-w-md rounded-xl bg-[#faf9f8] p-5 text-left border border-slate-200">
          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#7a5600]">
            Vertraulichkeit
          </p>
          <p className="mt-1 text-[14px] leading-relaxed text-slate-600">
            Ihre Angaben werden vertraulich behandelt. Alle weiteren gesundheitlichen Details besprechen wir in Ruhe im geschützten Rahmen der Praxis.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3 text-[14px] font-bold text-white shadow-lg focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white p-6 sm:p-8 card-shadow">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="form-name" className="block text-[13px] font-bold uppercase tracking-wider text-[#173838] mb-1.5">
            Ihr Name *
          </label>
          <input
            type="text"
            id="form-name"
            name="name"
            autoComplete="name"
            className="w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white focus:outline-none"
            placeholder="Vor- und Nachname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="form-email" className="block text-[13px] font-bold uppercase tracking-wider text-[#173838] mb-1.5">
            E-Mail-Adresse *
          </label>
          <input
            type="email"
            id="form-email"
            name="email"
            autoComplete="email"
            className="w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white focus:outline-none"
            placeholder="name@beispiel.de"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="form-service" className="block text-[13px] font-bold uppercase tracking-wider text-[#173838] mb-1.5">
            Worum geht es bei Ihnen? *
          </label>
          <select
            id="form-service"
            name="service"
            className="w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white focus:outline-none"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="adhs-diagnostik">ADHS-Diagnostik (Verdacht auf ADHS)</option>
            <option value="adhs-therapie">Psychotherapie / Einzeltherapie</option>
            <option value="neurofeedback">Neurofeedback</option>
            <option value="allgemein">Allgemeine Anfrage</option>
          </select>
        </div>

        <div>
          <label htmlFor="form-timeslot" className="block text-[13px] font-bold uppercase tracking-wider text-[#173838] mb-1.5">
            Bevorzugter Terminzeitraum (optional)
          </label>
          <select
            id="form-timeslot"
            name="timeslot"
            className="w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white focus:outline-none"
            value={timeslot}
            onChange={(e) => setTimeslot(e.target.value)}
          >
            <option value="egal">Flexibel</option>
            <option value="vormittags">Vormittags (08:00 – 12:00 Uhr)</option>
            <option value="nachmittags">Nachmittags (13:00 – 17:00 Uhr)</option>
            <option value="spaet">Später Nachmittag / Abends (ab 17:00 Uhr)</option>
          </select>
        </div>

        <div>
          <label htmlFor="form-message" className="block text-[13px] font-bold uppercase tracking-wider text-[#173838] mb-1.5">
            Kurze Nachricht (optional)
          </label>
          <textarea
            id="form-message"
            name="message"
            aria-describedby="form-message-hint"
            rows={4}
            maxLength={2000}
            className="w-full resize-y rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white focus:outline-none"
            placeholder="Was sollten wir für die Terminabstimmung wissen?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p id="form-message-hint" className="mt-2 text-[13px] leading-relaxed text-slate-600">
            Bitte tragen Sie hier keine Diagnosen, Befunde, Medikamentenangaben oder ausführlichen Gesundheitsinformationen ein. Für die erste Kontaktaufnahme reichen organisatorische Angaben.
          </p>
        </div>

        <div className="rounded-xl border border-[#dec77f] bg-[#fffaf0] p-4">
          <label htmlFor="form-health-data-consent" className="flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-slate-700">
            <input
              id="form-health-data-consent"
              name="healthDataConsent"
              type="checkbox"
              required
              checked={healthDataConsent}
              onChange={(e) => setHealthDataConsent(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-[#173838] focus:ring-[#173838]"
            />
            <span>
              Ich willige ausdrücklich ein, dass die von mir im Formular freiwillig übermittelten Gesundheitsdaten zum Zweck der Bearbeitung meiner Anfrage verarbeitet werden. Ich kann diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Weitere Informationen finde ich in der{" "}
              <Link href="/datenschutz" className="font-semibold text-[#173838] underline decoration-[#c99a1d] underline-offset-2 hover:text-[#7a5600]">
                Datenschutzerklärung
              </Link>.
            </span>
          </label>
        </div>

        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="form-website">Website</label>
          <input
            id="form-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        {error && (
          <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] leading-relaxed text-red-800">
            {error}
          </p>
        )}

        <p className="text-[12px] leading-relaxed text-slate-600">
          Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Bitte beachten Sie den obigen Hinweis und übermitteln Sie im Formular nur die dafür notwendigen Informationen.
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? "Wird sicher gesendet …" : "Termin anfragen →"}
        </button>
      </form>
    </div>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="rounded-2xl bg-white p-8 text-center"><p>Wird geladen...</p></div>}>
      <BookingFormInner />
    </Suspense>
  );
}
