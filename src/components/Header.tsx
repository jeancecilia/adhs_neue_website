"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";

const psychotherapyItems = [
  { href: "/adhs-selbsttest-erwachsene", label: "ADHS-Selbsttest" },
  { href: "/adhs-therapie-muenchen", label: "ADHS-Therapie" },
  { href: "/adhs-beratung-muenchen", label: "ADHS-Beratung" },
  { href: "/soziale-angst-muenchen", label: "Soziale Angst" },
  { href: "/panikattacken-muenchen", label: "Panikattacken" },
  { href: "/spezifische-phobien-muenchen", label: "Spezifische Phobien" },
  { href: "/depressive-verstimmung-muenchen", label: "Depressive Verstimmung" },
];

const navItems = [
  { href: "/adhs-test-muenchen", label: "ADHS-Diagnostik" },
  { href: "/neurofeedback-muenchen", label: "Neurofeedback" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/adhs-wissen", label: "ADHS-Wissen" },
  { href: "/ablauf-kosten", label: "Ablauf & Kosten" },
];

export default function Header() {
  const menuRefs = useRef<Array<HTMLDetailsElement | null>>([]);

  useEffect(() => {
    const closeOpenMenus = (returnFocus = false) => {
      menuRefs.current.forEach((menu) => {
        if (!menu?.open) return;
        menu.open = false;
        if (returnFocus) menu.querySelector("summary")?.focus();
      });
    };

    const handlePointerDown = (event: PointerEvent) => {
      menuRefs.current.forEach((menu) => {
        if (menu?.open && !menu.contains(event.target as Node)) {
          menu.open = false;
        }
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeOpenMenus(true);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(47,79,79,0.1)] bg-[rgba(253,251,247,0.96)] shadow-[0_10px_30px_rgba(23,56,56,0.05)] backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <Link href="/" prefetch={false} className="inline-flex min-h-[44px] items-center gap-2.5 pr-2 text-[#173838]" aria-label="Zur Startseite der ADHS Praxis München">
          <img
            src={siteConfig.logo.url}
            width={40}
            height={40}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-[10px] shadow-[0_6px_16px_rgba(23,56,56,0.12)] sm:h-10 sm:w-10"
          />
          <span className="leading-none">
            <span className="block text-[12px] font-extrabold uppercase tracking-[0.11em] sm:text-[15px] sm:tracking-[0.13em]">ADHS Praxis</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a5600] sm:text-[11px]">München</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex xl:gap-4" aria-label="Hauptnavigation">
          <details ref={(node) => { menuRefs.current[0] = node; }} className="group relative">
            <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center gap-1.5 px-1.5 text-[13.5px] text-slate-700 transition-colors hover:text-[#173838] [&::-webkit-details-marker]:hidden">
              Leistungen
              <span aria-hidden="true" className="text-[10px] transition-transform group-open:rotate-180">▼</span>
            </summary>
            <div className="absolute left-0 top-[calc(100%+0.35rem)] w-64 rounded-2xl border border-[rgba(47,79,79,0.12)] bg-white p-2 shadow-[0_20px_45px_rgba(23,56,56,0.14)]">
              {psychotherapyItems.map((item) => (
                <Link key={item.href} href={item.href} prefetch={false} className="flex min-h-[44px] items-center rounded-xl px-4 py-2 text-[13.5px] text-slate-700 transition-colors hover:bg-[#faf9f8] hover:text-[#173838]">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false} className="inline-flex min-h-[44px] items-center px-1.5 text-[13.5px] text-slate-700 transition-colors hover:text-[#173838]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/termin" prefetch={false} className="hidden min-h-[44px] items-center rounded-full bg-[#173838] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_16px_24px_rgba(23,56,56,0.14)] transition-transform hover:-translate-y-0.5 md:inline-flex">
            Termin anfragen
          </Link>

          <details ref={(node) => { menuRefs.current[1] = node; }} className="group relative lg:hidden">
            <summary aria-label="Hauptmenü öffnen oder schließen" className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] cursor-pointer list-none items-center justify-center rounded-full border border-[rgba(47,79,79,0.16)] text-[#173838] focus-visible:ring-2 focus-visible:ring-[#173838] [&::-webkit-details-marker]:hidden">
              <span className="text-xl leading-none group-open:hidden" aria-hidden="true">☰</span>
              <span className="hidden text-xl leading-none group-open:inline" aria-hidden="true">✕</span>
            </summary>

            <nav className="fixed inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-[rgba(47,79,79,0.08)] bg-[#fdfbf7] shadow-xl sm:top-20 sm:max-h-[calc(100dvh-5rem)]" aria-label="Mobile Navigation">
              <div className="container-shell flex flex-col py-3">
                <Link href="/" prefetch={false} className="inline-flex min-h-[44px] items-center border-b border-slate-100 py-2.5 text-[16px] font-medium text-slate-800 hover:text-[#173838]">
                  Startseite
                </Link>
                <p className="mb-0 mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a5600]">Leistungen</p>
                {psychotherapyItems.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={false} className="inline-flex min-h-[44px] items-center border-b border-slate-100 py-2.5 pl-3 text-[15px] font-medium text-slate-800 hover:text-[#173838]">
                    {item.label}
                  </Link>
                ))}
                <p className="mb-0 mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7a5600]">Weitere Bereiche</p>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} prefetch={false} className="inline-flex min-h-[44px] items-center border-b border-slate-100 py-2.5 text-[16px] font-medium text-slate-800 last:border-0 hover:text-[#173838]">
                    {item.label}
                  </Link>
                ))}
                <Link href="/termin" prefetch={false} className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow">
                  Erstgespräch anfragen
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
