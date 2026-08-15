"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface QuestionOption {
  text: string;
  weight: number;
}

interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  threshold: number;
}

const SCREENING_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Wie oft haben Sie Schwierigkeiten, die letzten Details eines Projekts abzuschließen, nachdem die herausfordernden Teile erledigt sind?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 2,
    question: "Wie oft fällt es Ihnen schwer, Dinge in eine geordnete Reihenfolge zu bringen, wenn Sie eine Aufgabe bewältigen müssen, die Organisation erfordert?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 3,
    question: "Wie oft haben Sie Probleme, sich an Verabredungen, Fristen oder Termine zu erinnern?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 4,
    question: "Wenn Sie eine Aufgabe haben, die viel Nachdenken und Konzentration erfordert: Wie oft zögern Sie den Beginn hinaus oder vermeiden die Aufgabe ganz?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 5,
    question: "Wie oft zappeln oder nesteln Sie mit Händen oder Füßen, wenn Sie über längere Zeit stillsitzen müssen?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  },
  {
    id: 6,
    question: "Wie oft fühlen Sie sich innerlich unruhig, getrieben oder wie 'von einem Motor angetrieben'?",
    options: [
      { text: "Nie", weight: 0 },
      { text: "Selten", weight: 0 },
      { text: "Manchmal", weight: 1 },
      { text: "Oft", weight: 2 },
      { text: "Sehr oft", weight: 3 }
    ],
    threshold: 2
  }
];

export default function AdhsScreeningWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [currentStep]);

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentStep] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (userAnswers[currentStep] !== undefined) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setUserAnswers([]);
  };

  const isCompleted = currentStep >= SCREENING_QUESTIONS.length;
  const currentQuestion = SCREENING_QUESTIONS[currentStep];
  const progressPercent = Math.round((currentStep / SCREENING_QUESTIONS.length) * 100);

  if (isCompleted) {
    let significantCount = 0;
    userAnswers.forEach((ansIdx, qIdx) => {
      const q = SCREENING_QUESTIONS[qIdx];
      const opt = q.options[ansIdx];
      if (opt && opt.weight >= q.threshold) {
        significantCount++;
      }
    });

    const isHighIndication = significantCount >= 4;

    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white p-6 sm:p-10 card-shadow text-center">
        <div className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
          <div className="h-full bg-[#173838]" style={{ width: "100%" }}></div>
        </div>

        <div className="inline-block rounded-full bg-[#f0cc65] px-4 py-1.5 text-[12px] font-bold text-[#173838] mb-4">
          {isHighIndication ? "Hinweise auf ADHS-typische Symptome vorhanden" : "Geringe Hinweise im Kurz-Screening"}
        </div>

        <h2 tabIndex={-1} ref={headingRef} className="text-[28px] font-bold text-[#173838] sm:text-[34px] focus:outline-none">
          Ihr Orientierungsergebnis
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-[16px] leading-[1.65] text-slate-700">
          {isHighIndication
            ? `In ${significantCount} von 6 Kernbereichen berichten Sie über häufige Symptome, die typisch für ADHS im Erwachsenenalter sein können. Ein strukturiertes Orientierungsgespräch kann Klarheit schaffen.`
            : `Ihre Angaben zeigen aktuell wenige ausgeprägte Kernsymptome im Kurz-Screening. Dennoch können individuelle Konzentrationsprobleme andere Ursachen haben, die wir gerne gemeinsam einordnen.`}
        </p>

        <div className="mx-auto mt-8 max-w-lg rounded-xl bg-[#faf9f8] p-5 text-left border border-slate-200">
          <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#7a5600] mb-2">
            Wichtiger Hinweis: Screening ≠ Diagnose
          </p>
          <p className="text-[14px] leading-relaxed text-slate-700 mb-3">
            Dieses Orientierungs-Ergebnis kann erste Anhaltspunkte für eine ADHS-Symptomatik liefern. Es <strong>ersetzt jedoch keine fachgerechte diagnostische Untersuchung</strong>. In unserer Praxis in München bieten wir Ihnen:
          </p>
          <ul className="space-y-1.5 text-[13px] text-slate-700">
            <li className="flex items-center gap-2">
              <span className="text-[#7a5600] font-bold">✓</span>
              <span>Strukturierte Anamnese & biographische Erhebung</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7a5600] font-bold">✓</span>
              <span>Validierte klinische Verfahren (DIVA-5, ASRS v1.1, WURS-k)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7a5600] font-bold">✓</span>
              <span>Sorgfältige differenzialdiagnostische Abgrenzung</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#7a5600] font-bold">✓</span>
              <span>Ausführlicher schriftlicher diagnostischer Befundbericht</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/termin?anliegen=screening"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[13px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2"
          >
            ADHS-Diagnostik anfragen
          </Link>
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(47,79,79,0.2)] bg-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#173838] hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2"
          >
            Test wiederholen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-[rgba(47,79,79,0.1)] bg-white p-6 sm:p-10 card-shadow">
      {/* Accessible Progress bar */}
      <div
        className="mb-6 h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Fortschritt: Frage ${currentStep + 1} von ${SCREENING_QUESTIONS.length}`}
      >
        <div
          className="h-full bg-[#173838] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="mb-6">
        <p className="eyebrow mb-1">Frage {currentStep + 1} von {SCREENING_QUESTIONS.length}</p>
        <h2
          id={`question-title-${currentQuestion.id}`}
          ref={headingRef}
          tabIndex={-1}
          className="text-[20px] font-bold text-[#173838] sm:text-[24px] focus:outline-none"
        >
          {currentQuestion.question}
        </h2>
      </div>

      {/* Accessible Radiogroup */}
      <fieldset
        role="radiogroup"
        aria-labelledby={`question-title-${currentQuestion.id}`}
        className="space-y-3 border-none p-0 m-0"
      >
        <legend className="sr-only">Wählen Sie eine der folgenden Antworten:</legend>
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = userAnswers[currentStep] === idx;
          const optionId = `q${currentQuestion.id}_opt${idx}`;

          return (
            <label
              key={idx}
              htmlFor={optionId}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition-all focus-within:ring-2 focus-within:ring-[#173838] focus-within:ring-offset-2 ${
                isSelected
                  ? "border-[#173838] bg-[#f4f3f0] font-semibold text-[#173838] shadow-sm"
                  : "border-slate-200 bg-[#faf9f8] text-slate-700 hover:border-slate-300 hover:bg-white"
              }`}
            >
              <span className="text-[15px]">{opt.text}</span>
              <div className="flex items-center">
                <input
                  type="radio"
                  id={optionId}
                  name={`screening_q_${currentQuestion.id}`}
                  value={idx}
                  checked={isSelected}
                  onChange={() => handleSelectOption(idx)}
                  className="h-5 w-5 accent-[#173838] cursor-pointer"
                />
              </div>
            </label>
          );
        })}
      </fieldset>

      <div className="mt-8 flex items-center justify-between gap-4">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex min-h-[44px] items-center rounded-full border border-slate-300 px-6 py-2.5 text-[12px] font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2"
            aria-label="Zur vorherigen Frage zurückkehren"
          >
            ← Vorherige Frage
          </button>
        ) : (
          <div></div>
        )}

        <button
          type="button"
          onClick={handleNext}
          disabled={userAnswers[currentStep] === undefined}
          className={`inline-flex min-h-[48px] items-center rounded-full bg-[#173838] px-8 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white shadow transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#173838] focus-visible:ring-offset-2 ${
            userAnswers[currentStep] === undefined ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {currentStep === SCREENING_QUESTIONS.length - 1 ? "Auswertung anzeigen" : "Weiter →"}
        </button>
      </div>
    </div>
  );
}
