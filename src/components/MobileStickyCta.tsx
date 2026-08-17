import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[rgba(47,79,79,0.12)] bg-[rgba(253,251,247,0.98)] p-2.5 shadow-[0_-10px_30px_rgba(23,56,56,0.08)] md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={siteConfig.whatsappHref}
          className="flex-1 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#075e54] px-3 py-2 text-center text-[13px] font-bold text-white shadow-sm transition-opacity hover:opacity-90"
          aria-label="ADHS Praxis München per WhatsApp kontaktieren"
        >
          WhatsApp
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
  );
}
