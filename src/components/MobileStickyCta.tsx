import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function MobileStickyCta() {
  return (
    <>
      <a
        href={siteConfig.whatsappHref}
        className="group fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-[#25d366] text-white shadow-[0_12px_35px_rgba(7,94,84,0.35)] transition duration-200 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_16px_42px_rgba(7,94,84,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f0cc65] md:inline-flex"
        aria-label="WhatsApp als externen Dienst öffnen; bitte keine Gesundheitsdaten senden"
        title="Per WhatsApp Kontakt aufnehmen (externer Dienst)"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-current"
        >
          <path d="M16.04 3.2A12.74 12.74 0 0 0 5.12 22.5L3.2 28.8l6.46-1.85a12.78 12.78 0 1 0 6.38-23.75Zm0 23.22c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-3.83 1.1 1.14-3.73-.27-.43A10.45 10.45 0 1 1 16.04 26.42Zm5.73-7.82c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.15-.21.32-.81 1.03-1 1.24-.18.21-.36.24-.68.08-.31-.16-1.32-.49-2.52-1.55a9.4 9.4 0 0 1-1.74-2.17c-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.02-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.67.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(47,79,79,0.12)] bg-[rgba(253,251,247,0.98)] p-2.5 shadow-[0_-10px_30px_rgba(23,56,56,0.08)] md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={siteConfig.whatsappHref}
            className="flex-1 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#075e54] px-3 py-2 text-center text-[13px] font-bold text-white shadow-sm transition-opacity hover:opacity-90"
            aria-label="WhatsApp als externen Dienst öffnen; bitte keine Gesundheitsdaten senden"
            title="Externer Dienst – bitte keine Gesundheitsdaten über WhatsApp senden"
          >
            WhatsApp (extern)
          </a>
          <Link
            href="/termin"
            prefetch={false}
            className="flex-1 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#173838] px-3 py-2 text-center text-[13px] font-bold text-white shadow-sm transition-opacity hover:opacity-90"
            aria-label="Erstgespräch in der Praxis anfragen"
          >
            Kontaktformular
          </Link>
        </div>
      </div>
    </>
  );
}
