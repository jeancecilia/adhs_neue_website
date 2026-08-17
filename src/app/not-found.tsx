import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | ADHS Praxis München",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section-space flex min-h-[60vh] items-center justify-center bg-[#faf9f8]">
      <div className="container-shell text-center">
        <h1 className="text-[58px] font-bold text-[#173838] sm:text-[80px]">404</h1>
        <h2 className="mt-4 text-[24px] text-slate-800 sm:text-[32px]">
          Seite nicht gefunden
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-slate-600">
          Die gesuchte Seite existiert leider nicht (mehr) oder wurde verschoben.
        </p>
        
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-lg"
          >
            Zur Startseite
          </Link>
          <Link
            href="/termin"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838]"
          >
            Erstgespräch anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
