"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/adhs-therapie-muenchen", label: "ADHS-Therapie" },
  { href: "/adhs-test-muenchen", label: "ADHS-Diagnostik" },
  { href: "/neurofeedback-muenchen", label: "Neurofeedback" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/adhs-wissen", label: "ADHS-Wissen" },
  { href: "/ablauf-kosten", label: "Ablauf & Kosten" },
];

function isActiveLink(href: string, pathname: string) {
  if (href === pathname) return true;
  if (href === "/adhs-wissen" && pathname.startsWith("/adhs-wissen/")) return true;
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[rgba(47,79,79,0.1)] bg-[rgba(253,251,247,0.96)] backdrop-blur ${
        scrolled ? "shadow-[0_10px_30px_rgba(23,56,56,0.08)]" : ""
      }`}
    >
      <div className="container-shell flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center pr-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#173838] sm:text-[17px] sm:tracking-[0.14em]"
          aria-label="Zur Startseite der ADHS Praxis München"
        >
          {siteConfig.shortName}
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => {
            const isActive = isActiveLink(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-[44px] items-center text-[13.5px] transition-colors px-1.5 ${
                  isActive
                    ? "border-b-2 border-[#173838] font-semibold text-[#173838]"
                    : "text-slate-700 hover:text-[#173838]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/termin"
            className="hidden rounded-full bg-[#173838] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_16px_24px_rgba(23,56,56,0.14)] transition-transform hover:-translate-y-0.5 md:inline-flex min-h-[44px] items-center"
          >
            Termin anfragen
          </Link>
          <button
            type="button"
            aria-label={open ? "Hauptmenü schließen" : "Hauptmenü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-[44px] min-w-[44px] h-11 w-11 items-center justify-center rounded-full border border-[rgba(47,79,79,0.16)] text-[#173838] lg:hidden focus-visible:ring-2 focus-visible:ring-[#173838]"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-[rgba(47,79,79,0.08)] bg-[#fdfbf7] lg:hidden shadow-xl">
          <div className="container-shell flex flex-col py-3">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center py-2.5 text-[16px] font-medium text-slate-800 hover:text-[#173838] border-b border-slate-100"
              onClick={() => setOpen(false)}
            >
              Startseite
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-[44px] items-center py-2.5 text-[16px] font-medium text-slate-800 hover:text-[#173838] border-b border-slate-100 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/termin"
              className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow"
              onClick={() => setOpen(false)}
            >
              Erstgespräch anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
