import Link from "next/link";
import { siteConfig } from "@/config/site";
import ConsentSettingsButton from "@/components/ConsentSettingsButton";

export default function Footer() {
  return (
    <footer className="bg-[#1b4343] px-5 pb-28 pt-12 text-white sm:px-8 sm:pb-12 sm:pt-16" aria-label="Seitenfuß">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1.1fr_1fr] md:gap-12">
          {/* Praxis Info */}
          <div>
            <Link href="/" className="inline-flex min-h-[44px] items-center gap-3" aria-label="Zur Startseite der ADHS Praxis München">
              <img
                src={siteConfig.logo.url}
                width={44}
                height={44}
                alt=""
                aria-hidden="true"
                className="h-11 w-11 rounded-xl ring-1 ring-white/20"
              />
              <span className="leading-none text-white">
                <span className="block text-[13px] font-extrabold uppercase tracking-[0.1em]">ADHS Praxis</span>
                <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f0cc65]">München</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-[14px] font-normal leading-[1.65] text-slate-200">
              Praxis für Psychotherapie mit Schwerpunkt ADHS im Erwachsenenalter in München-Schwabing.
            </p>
            <p className="mt-2 text-[13px] text-slate-300">
              {siteConfig.practitioner}<br />
              Heilpraktiker, beschränkt auf das Gebiet der Psychotherapie
            </p>
          </div>

          {/* Psychotherapie */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-white">
              Leistungen
            </p>
            <nav className="mt-3 flex flex-col text-[14px] font-normal text-slate-200" aria-label="Footer Navigation">
              <Link href="/adhs-therapie-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                ADHS-Therapie
              </Link>
              <Link href="/adhs-beratung-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                ADHS-Beratung
              </Link>
              <Link href="/soziale-angst-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Soziale Angst
              </Link>
              <Link href="/panikattacken-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Panikattacken
              </Link>
              <Link href="/spezifische-phobien-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Spezifische Phobien
              </Link>
              <Link href="/depressive-verstimmung-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Depressive Verstimmung
              </Link>
            </nav>
          </div>

          {/* Weitere Bereiche */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-white">
              Weitere Bereiche
            </p>
            <nav className="mt-3 flex flex-col text-[14px] font-normal text-slate-200" aria-label="Weitere Bereiche">
              <Link href="/adhs-test-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                ADHS-Diagnostik
              </Link>
              <Link href="/neurofeedback-muenchen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Neurofeedback
              </Link>
              <Link href="/adhs-wissen" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                ADHS-Wissen
              </Link>
              <Link href="/ueber-mich" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Über mich
              </Link>
              <Link href="/ablauf-kosten" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Ablauf & Kosten
              </Link>
              <Link href="/kontakt-anfahrt" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Kontakt & Anfahrt
              </Link>
              <Link href="/termin" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
                Termin anfragen
              </Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-white">
              Kontakt & Praxis
            </p>
            <div className="mt-3 flex flex-col text-[14px] font-normal text-slate-200">
              <Link
                href="/termin"
                className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4"
              >
                Kontaktformular
              </Link>
              <a
                href={siteConfig.whatsappHref}
                className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4"
              >
                WhatsApp {siteConfig.whatsappDisplay} (extern)
              </a>
              <p className="mb-2 text-[11px] leading-relaxed text-slate-300">
                Beim Klick verlassen Sie diese Website. Bitte keine Gesundheitsdaten über WhatsApp senden.
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-300">
                {siteConfig.addressLine1}<br />
                {siteConfig.postalCity} (Schwabing)
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.22)] pt-6 text-[14px] font-normal text-slate-300 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name} – Praxis für Psychotherapie nach dem HeilprG</span>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 sm:justify-end">
            <ConsentSettingsButton />
            <Link href="/impressum" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
              Impressum (§ 5 DDG)
            </Link>
            <Link href="/datenschutz" className="inline-flex min-h-[44px] items-center transition-colors hover:text-white hover:underline hover:underline-offset-4">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
