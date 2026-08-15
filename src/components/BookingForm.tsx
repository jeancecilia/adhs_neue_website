"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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
  const [phone, setPhone] = useState("");
  const [timeslot, setTimeslot] = useState("egal");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }
    setSubmitted(true);
  };

  const getServiceName = (key: string) => {
    switch (key) {
      case "adhs-diagnostik":
        return "ADHS-Diagnostik (Verdacht auf ADHS)";
      case "adhs-therapie":
        return "ADHS-Therapie / psychotherapeutische Begleitung";
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
          <label htmlFor="form-phone" className="block text-[13px] font-bold uppercase tracking-wider text-[#173838] mb-1.5">
            Telefonnummer (optional)
          </label>
          <input
            type="tel"
            id="form-phone"
            name="phone"
            autoComplete="tel"
            className="w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white focus:outline-none"
            placeholder="Für eventuelle Rückfragen"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            <option value="adhs-therapie">ADHS-Therapie / psychotherapeutische Begleitung</option>
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

        <button
          type="submit"
          className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2"
        >
          Termin anfragen →
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
