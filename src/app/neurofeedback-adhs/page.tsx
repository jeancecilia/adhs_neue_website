import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurofeedback bei ADHS München | Gehirnwellentraining & Fokus",
  description:
    "Wie Neurofeedback bei ADHS im Erwachsenenalter unterstützen kann: Theta/Beta-Verhältnis, SMR-Training & Selbstregulation in der Praxis München.",
  alternates: {
    canonical: "/neurofeedback-adhs",
  },
};

export default function NeurofeedbackAdhsPage() {
  return (
    <div className="w-full">
      <section className="border-b border-[rgba(47,79,79,0.1)] bg-[#faf9f8] py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Startseite</Link>
            <span>/</span>
            <Link href="/neurofeedback-muenchen" className="inline-flex min-h-[44px] items-center hover:text-[#173838]">Neurofeedback München</Link>
            <span>/</span>
            <span className="text-[#173838] font-medium">Neurofeedback bei ADHS</span>
          </nav>
          <p className="eyebrow mb-3">Spezifische Verbindung</p>
          <h1 className="text-[32px] leading-[1.15] text-[#173838] sm:text-[46px]">
            Neurofeedback bei ADHS im Erwachsenenalter
          </h1>
          <p className="mt-4 text-[17px] leading-[1.65] text-slate-700">
            Warum das gezielte Training von Gehirnwellenmustern eine wertvolle Ergänzung zur psychotherapeutischen ADHS-Begleitung sein kann.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-8 text-[16px] leading-[1.7] text-slate-700">
          <div>
            <h2 className="text-[28px] text-[#173838] sm:text-[36px]">
              Die neurobiologische Ausgangslage bei ADHS
            </h2>
            <p className="mt-3">
              Im Elektroenzephalogramm (EEG) von Menschen mit ADHS zeigt sich bei konzentrierten Aufgaben häufig ein Übermaß an langsamen Theta-Wellen (4–8 Hz, zuständig für Tagträumen und Dösen) bei gleichzeitig verminderten schnellen Beta-Wellen (13–20 Hz, zuständig für aktive kognitive Verarbeitung).
            </p>
            <p className="mt-3">
              Das Gehirn schaltet unter kognitiver Anstrengung paradoxerweise in einen Ruhezustand ab, statt zu aktivieren.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-7 card-shadow border border-slate-200">
            <h2 className="text-[20px] font-bold text-[#173838] mb-3">Wie das Training ansetzt</h2>
            <p className="leading-relaxed text-slate-700">
              Beim Neurofeedback belohnt ein Computerprogramm das Gehirn immer dann, wenn es vermehrt fokussierte Wellen (Beta/SMR) produziert und hemmt die langsamen Wellen (Theta). Mit der Zeit verankert das Nervensystem diesen fokussierten Zustand im Alltag.
            </p>
          </div>

          <div className="rounded-xl bg-[#faf9f8] p-5 border border-slate-200 text-[14px] text-slate-600">
            <strong>Hinweis nach § 3 HWG:</strong> Neurofeedback ist ein individuelles Trainingsverfahren und garantiert keinen spezifischen Heilungserfolg. Es wird in unserer Praxis in München als ergänzende Intervention eingesetzt.
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4">
            <Link
              href="/termin?anliegen=neurofeedback"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Neurofeedback anfragen
            </Link>
            <Link
              href="/neurofeedback-muenchen"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50"
            >
              ← Zur Übersicht Neurofeedback München
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
