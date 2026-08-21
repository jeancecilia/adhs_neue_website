"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";
import {
  FREQUENCY_OPTIONS,
  IMPACT_OPTIONS,
  SELFTEST_CONSENT_VERSION,
  SELFTEST_INSTRUMENT_VERSION,
  SELFTEST_ITEMS,
  SELFTEST_LINK_KEY,
  SELFTEST_SESSION_KEY,
  compensationLabel,
  hasCompleteSelfTestAnswers,
  scoreSelfTest,
  type SelfTestAnswers,
  type SelfTestScores,
} from "@/lib/adhsSelftest";

type TestStage = "consent" | "questions" | "details" | "result";
type StorageStatus = "idle" | "saving" | "saved" | "failed";

type Demographics = {
  age: string;
  gender: string;
  existingAdhdDx: string;
  diagnosisSource: string;
  adhdMedication: string;
};

type PersistedSession = {
  instrumentVersion: string;
  responseId: string;
  consentAt: string;
  stage: TestStage;
  currentIndex: number;
  answers: SelfTestAnswers;
  demographics: Demographics;
  submitted: boolean;
};

const EMPTY_DEMOGRAPHICS: Demographics = {
  age: "",
  gender: "keine-angabe",
  existingAdhdDx: "keine-angabe",
  diagnosisSource: "keine-angabe",
  adhdMedication: "keine-angabe",
};

const RESULT_CARDS = [
  {
    key: "attention" as const,
    title: "Aufmerksamkeit & Organisation",
    total: 12,
    description:
      "Dieser Bereich umfasst unter anderem Aufgabenabschluss, Organisation, Ablenkbarkeit, Daueraufmerksamkeit und das Erinnern an Verpflichtungen.",
  },
  {
    key: "activation" as const,
    title: "Innere Unruhe & Aktivierung",
    total: 4,
    description:
      "Erfasst werden sowohl körperlicher Bewegungsdrang als auch innere Getriebenheit und Schwierigkeiten mit längerer Untätigkeit.",
  },
  {
    key: "impulsivity" as const,
    title: "Impulsivität",
    total: 5,
    description:
      "Dieser Bereich umfasst unter anderem vorschnelles Antworten, Unterbrechen, Schwierigkeiten beim Warten und spontane Entscheidungen.",
  },
];

function readPersistedSession(): PersistedSession | null {
  try {
    const raw = window.sessionStorage.getItem(SELFTEST_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedSession;
    if (
      parsed.instrumentVersion !== SELFTEST_INSTRUMENT_VERSION ||
      !parsed.responseId ||
      !parsed.consentAt
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export default function AdhsSelfTest() {
  const [stage, setStage] = useState<TestStage>("consent");
  const [consentChecked, setConsentChecked] = useState(false);
  const [responseId, setResponseId] = useState("");
  const [consentAt, setConsentAt] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<SelfTestAnswers>({});
  const [demographics, setDemographics] =
    useState<Demographics>(EMPTY_DEMOGRAPHICS);
  const [submitted, setSubmitted] = useState(false);
  const [storageStatus, setStorageStatus] =
    useState<StorageStatus>("idle");
  const [formError, setFormError] = useState("");
  const [linkResult, setLinkResult] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const persisted = readPersistedSession();
    if (persisted) {
      setStage(persisted.stage);
      setResponseId(persisted.responseId);
      setConsentAt(persisted.consentAt);
      setCurrentIndex(
        Math.min(Math.max(persisted.currentIndex, 0), SELFTEST_ITEMS.length - 1),
      );
      setAnswers(persisted.answers ?? {});
      setDemographics(persisted.demographics ?? EMPTY_DEMOGRAPHICS);
      setSubmitted(Boolean(persisted.submitted));
      if (persisted.submitted) setStorageStatus("saved");
    }
    setHydrated(true);
    trackAnalyticsEvent("selftest_view");
  }, []);

  useEffect(() => {
    if (!hydrated || !responseId || stage === "consent") return;
    const persisted: PersistedSession = {
      instrumentVersion: SELFTEST_INSTRUMENT_VERSION,
      responseId,
      consentAt,
      stage,
      currentIndex,
      answers,
      demographics,
      submitted,
    };
    try {
      window.sessionStorage.setItem(
        SELFTEST_SESSION_KEY,
        JSON.stringify(persisted),
      );
    } catch {
      // The test remains usable when browser storage is unavailable.
    }
  }, [
    answers,
    consentAt,
    currentIndex,
    demographics,
    hydrated,
    responseId,
    stage,
    submitted,
  ]);

  useEffect(() => {
    if (stage !== "consent") headingRef.current?.focus();
  }, [currentIndex, stage]);

  const scores = useMemo<SelfTestScores | null>(() => {
    if (!hasCompleteSelfTestAnswers(answers)) return null;
    return scoreSelfTest(answers);
  }, [answers]);

  const currentItem = SELFTEST_ITEMS[currentIndex];
  const currentOptions =
    currentItem?.scale === "impact" ? IMPACT_OPTIONS : FREQUENCY_OPTIONS;
  const progressPercent = Math.round(
    ((currentIndex + 1) / SELFTEST_ITEMS.length) * 100,
  );

  const startTest = () => {
    if (!consentChecked) {
      setFormError("Bitte erteilen Sie zuerst die ausdrückliche Einwilligung.");
      return;
    }

    const newResponseId = crypto.randomUUID();
    const newConsentAt = new Date().toISOString();
    setResponseId(newResponseId);
    setConsentAt(newConsentAt);
    setAnswers({});
    setDemographics(EMPTY_DEMOGRAPHICS);
    setCurrentIndex(0);
    setSubmitted(false);
    setStorageStatus("idle");
    setFormError("");
    setStage("questions");
    trackAnalyticsEvent("selftest_start");
  };

  const selectAnswer = (value: number) => {
    setAnswers((current) => ({ ...current, [currentItem.id]: value }));
    setFormError("");
  };

  const nextQuestion = () => {
    if (answers[currentItem.id] === undefined) {
      setFormError("Bitte wählen Sie eine Antwort aus.");
      return;
    }

    const completedCount = currentIndex + 1;
    if ([5, 10, 20].includes(completedCount)) {
      trackAnalyticsEvent(`selftest_question_${completedCount}`);
    }

    if (currentIndex === SELFTEST_ITEMS.length - 1) {
      setStage("details");
      setFormError("");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setFormError("");
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((index) => index - 1);
    setFormError("");
  };

  const updateDemographic = (field: keyof Demographics, value: string) => {
    setDemographics((current) => ({
      ...current,
      [field]: value,
      ...(field === "existingAdhdDx" && value !== "ja"
        ? { diagnosisSource: "keine-angabe", adhdMedication: "keine-angabe" }
        : {}),
    }));
  };

  const saveResponse = async () => {
    if (!scores || submitted) return;
    setStorageStatus("saving");

    try {
      const response = await fetch("/api/selftest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          responseId,
          instrumentVersion: SELFTEST_INSTRUMENT_VERSION,
          consent: true,
          consentVersion: SELFTEST_CONSENT_VERSION,
          consentAt,
          age: demographics.age ? Number(demographics.age) : null,
          gender: demographics.gender,
          existingAdhdDx: demographics.existingAdhdDx,
          diagnosisSource:
            demographics.existingAdhdDx === "ja"
              ? demographics.diagnosisSource
              : null,
          adhdMedication:
            demographics.existingAdhdDx === "ja"
              ? demographics.adhdMedication
              : null,
          answers,
        }),
      });

      if (!response.ok) throw new Error("Response storage failed");
      setSubmitted(true);
      setStorageStatus("saved");
    } catch {
      setStorageStatus("failed");
    }
  };

  const showResult = () => {
    if (demographics.age) {
      const age = Number(demographics.age);
      if (!Number.isInteger(age) || age < 18 || age > 99) {
        setFormError("Bitte geben Sie ein Alter zwischen 18 und 99 Jahren ein oder lassen Sie das Feld frei.");
        return;
      }
    }
    if (!scores) {
      setFormError("Es fehlen noch Antworten. Bitte kehren Sie zum Test zurück.");
      return;
    }

    setFormError("");
    setStage("result");
    trackAnalyticsEvent("selftest_complete");
    void saveResponse();
  };

  const restartTest = () => {
    try {
      window.sessionStorage.removeItem(SELFTEST_SESSION_KEY);
      window.sessionStorage.removeItem(SELFTEST_LINK_KEY);
    } catch {
      // No action needed when storage is unavailable.
    }
    setStage("consent");
    setConsentChecked(false);
    setResponseId("");
    setConsentAt("");
    setCurrentIndex(0);
    setAnswers({});
    setDemographics(EMPTY_DEMOGRAPHICS);
    setSubmitted(false);
    setStorageStatus("idle");
    setLinkResult(false);
    setFormError("");
  };

  const handleDiagnosticsClick = () => {
    try {
      if (linkResult) {
        window.sessionStorage.setItem(SELFTEST_LINK_KEY, responseId);
      } else {
        window.sessionStorage.removeItem(SELFTEST_LINK_KEY);
      }
    } catch {
      // Linking remains optional and never blocks the diagnostics CTA.
    }
    trackAnalyticsEvent("diagnostics_cta_click");
  };

  const copyResponseId = async () => {
    try {
      await navigator.clipboard.writeText(responseId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  if (stage === "consent") {
    return (
      <div className="rounded-[28px] border border-[rgba(47,79,79,0.14)] bg-white p-6 shadow-[0_30px_80px_rgba(23,56,56,0.1)] sm:p-10">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-[#173838] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-white">
            ADHS-ST-0.2
          </span>
          <span className="text-[13px] font-semibold text-slate-500">
            26 Fragen · ca. 5 Minuten
          </span>
        </div>
        <p className="eyebrow mb-2">Sicher und pseudonymisiert</p>
        <h2 className="text-[28px] leading-[1.15] text-[#173838] sm:text-[36px]">
          Bevor Sie starten
        </h2>
        <p className="mt-4 text-[15px] leading-[1.75] text-slate-700 sm:text-[16px]">
          Der Selbsttest verarbeitet Angaben zu Ihrer psychischen Gesundheit, um Ihr persönliches Ergebnisprofil zu erstellen und die Qualität des Fragebogens statistisch weiterzuentwickeln.
        </p>
        <p className="mt-3 text-[15px] leading-[1.75] text-slate-700 sm:text-[16px]">
          Ihre Testantworten werden <strong>ohne Namen, E-Mail-Adresse oder Telefonnummer</strong> unter einer zufällig erzeugten Kennung gespeichert.
        </p>

        <div className="mt-7 rounded-2xl border border-[#dec77f] bg-[#fffaf0] p-5">
          <label className="flex cursor-pointer items-start gap-4 text-[14px] leading-[1.65] text-slate-700" htmlFor="selftest-consent">
            <input
              id="selftest-consent"
              type="checkbox"
              checked={consentChecked}
              onChange={(event) => {
                setConsentChecked(event.target.checked);
                setFormError("");
              }}
              className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-[#173838] focus:ring-[#173838]"
            />
            <span>
              Ich willige ausdrücklich ein, dass meine Angaben zur Durchführung und Auswertung dieses ADHS-Selbsttests sowie zur pseudonymisierten statistischen Prüfung und Weiterentwicklung des Fragebogens verarbeitet werden.
            </span>
          </label>
          <p className="mt-3 pl-9 text-[12px] leading-relaxed text-slate-600">
            Weitere Informationen zur Verarbeitung, Speicherdauer und zu Ihren Rechten finden Sie in den{" "}
            <Link href="/datenschutz#adhs-selbsttest" className="font-semibold text-[#173838] underline decoration-[#c99a1d] underline-offset-2">
              Datenschutzhinweisen
            </Link>.
          </p>
        </div>

        {formError && (
          <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-800">
            {formError}
          </p>
        )}

        <button
          type="button"
          onClick={startTest}
          className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Einwilligen & Selbsttest starten
        </button>
        <p className="mt-4 text-[12px] leading-relaxed text-slate-500">
          Keine Registrierung · keine Kontaktdaten · Ergebnis direkt im Browser
        </p>
      </div>
    );
  }

  if (stage === "questions" && currentItem) {
    const isImpactSection = currentIndex === 21;
    return (
      <div className="rounded-[28px] border border-[rgba(47,79,79,0.14)] bg-white shadow-[0_30px_80px_rgba(23,56,56,0.1)]">
        <div className="sticky top-16 z-20 rounded-t-[28px] border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:top-20 sm:px-9">
          <div className="mb-2 flex items-center justify-between gap-4 text-[12px] font-bold text-[#173838]">
            <span>Frage {currentIndex + 1} von {SELFTEST_ITEMS.length}</span>
            <span>{progressPercent} %</span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-label={`Fortschritt: Frage ${currentIndex + 1} von ${SELFTEST_ITEMS.length}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progressPercent}
          >
            <div className="h-full rounded-full bg-[#b17a00] transition-[width] duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="p-5 sm:p-9">
          {currentIndex === 0 && (
            <div className="mb-7 rounded-2xl border border-slate-200 bg-[#faf9f8] p-5 text-[14px] leading-relaxed text-slate-700">
              <p className="font-bold text-[#173838]">So beantworten Sie die Fragen</p>
              <p className="mt-1">
                Bitte beziehen Sie Ihre Antworten auf die <strong>vergangenen sechs Monate</strong> und darauf, wie Sie normalerweise funktionieren – nicht nur auf einzelne außergewöhnliche Stressphasen.
              </p>
            </div>
          )}

          {isImpactSection && (
            <div className="mb-7 rounded-2xl border border-[#dec77f] bg-[#fffaf0] p-5 text-[14px] leading-relaxed text-slate-700">
              <p className="font-bold text-[#173838]">Wie stark wirken sich die Schwierigkeiten auf Ihren Alltag aus?</p>
              <p className="mt-1">
                Bitte geben Sie an, wie stark die zuvor beschriebenen Schwierigkeiten Sie in den folgenden Bereichen beeinträchtigen.
              </p>
            </div>
          )}

          <p className="eyebrow mb-2">{currentItem.title}</p>
          <h2
            id={`selftest-question-${currentItem.id}`}
            ref={headingRef}
            tabIndex={-1}
            className="text-[23px] font-semibold leading-[1.35] text-[#173838] focus:outline-none sm:text-[30px]"
          >
            {currentItem.question}
          </h2>

          <fieldset className="mt-7 space-y-3" aria-labelledby={`selftest-question-${currentItem.id}`}>
            <legend className="sr-only">Bitte wählen Sie eine Antwort</legend>
            {currentOptions.map((option, value) => {
              const selected = answers[currentItem.id] === value;
              return (
                <label
                  key={option}
                  htmlFor={`${currentItem.id}-${value}`}
                  className={`flex min-h-[54px] cursor-pointer items-center justify-between gap-4 rounded-2xl border px-5 py-3.5 transition-colors focus-within:ring-2 focus-within:ring-[#173838] focus-within:ring-offset-2 ${
                    selected
                      ? "border-[#173838] bg-[#f4f3f0] text-[#173838] shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#9caaa6] hover:bg-[#faf9f8]"
                  }`}
                >
                  <span className="text-[15px] font-semibold sm:text-[16px]">{option}</span>
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#173838] bg-[#173838]" : "border-slate-300"}`} aria-hidden="true">
                    {selected && <span className="h-2 w-2 rounded-full bg-white" />}
                  </span>
                  <input
                    id={`${currentItem.id}-${value}`}
                    type="radio"
                    name={`selftest-${currentItem.id}`}
                    value={value}
                    checked={selected}
                    onChange={() => selectAnswer(value)}
                    className="sr-only"
                  />
                </label>
              );
            })}
          </fieldset>

          <div aria-live="polite">
            {formError && (
              <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-800">
                {formError}
              </p>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={previousQuestion}
              disabled={currentIndex === 0}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-[13px] font-bold text-[#173838] hover:bg-slate-50 disabled:invisible sm:px-7"
            >
              ← Zurück
            </button>
            <button
              type="button"
              onClick={nextQuestion}
              disabled={answers[currentItem.id] === undefined}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#173838] px-6 py-3 text-[13px] font-bold text-white shadow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 sm:px-8"
            >
              {currentIndex === SELFTEST_ITEMS.length - 1 ? "Weiter zu den Zusatzangaben" : "Weiter →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === "details") {
    return (
      <div className="rounded-[28px] border border-[rgba(47,79,79,0.14)] bg-white p-6 shadow-[0_30px_80px_rgba(23,56,56,0.1)] sm:p-10">
        <p className="eyebrow mb-2">Fast geschafft</p>
        <h2 ref={headingRef} tabIndex={-1} className="text-[28px] text-[#173838] focus:outline-none sm:text-[36px]">
          Noch drei kurze Angaben
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          Diese freiwilligen Angaben helfen uns, die Ergebnisse statistisch besser einzuordnen. Sie können jedes Feld auslassen.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="selftest-age" className="mb-2 block text-[13px] font-bold text-[#173838]">
              Wie alt sind Sie? <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input
              id="selftest-age"
              type="number"
              min={18}
              max={99}
              inputMode="numeric"
              value={demographics.age}
              onChange={(event) => updateDemographic("age", event.target.value)}
              className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white"
              placeholder="18–99"
            />
          </div>
          <div>
            <label htmlFor="selftest-gender" className="mb-2 block text-[13px] font-bold text-[#173838]">
              Geschlecht <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <select
              id="selftest-gender"
              value={demographics.gender}
              onChange={(event) => updateDemographic("gender", event.target.value)}
              className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white"
            >
              <option value="weiblich">Weiblich</option>
              <option value="maennlich">Männlich</option>
              <option value="divers">Divers / andere Angabe</option>
              <option value="keine-angabe">Keine Angabe</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="selftest-diagnosis" className="mb-2 block text-[13px] font-bold text-[#173838]">
              Wurde bei Ihnen bereits ADHS professionell diagnostiziert? <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <select
              id="selftest-diagnosis"
              value={demographics.existingAdhdDx}
              onChange={(event) => updateDemographic("existingAdhdDx", event.target.value)}
              className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white"
            >
              <option value="ja">Ja</option>
              <option value="nein">Nein</option>
              <option value="in-abklaerung">Aktuell in Abklärung</option>
              <option value="keine-angabe">Keine Angabe</option>
            </select>
          </div>

          {demographics.existingAdhdDx === "ja" && (
            <>
              <div>
                <label htmlFor="selftest-source" className="mb-2 block text-[13px] font-bold text-[#173838]">
                  Diagnose gestellt durch <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <select
                  id="selftest-source"
                  value={demographics.diagnosisSource}
                  onChange={(event) => updateDemographic("diagnosisSource", event.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white"
                >
                  <option value="fachaerztlich">Fachärztlich</option>
                  <option value="psychotherapeutisch-psychologisch">Psychotherapeutisch / psychologisch</option>
                  <option value="andere">Andere</option>
                  <option value="keine-angabe">Weiß ich nicht / keine Angabe</option>
                </select>
              </div>
              <div>
                <label htmlFor="selftest-medication" className="mb-2 block text-[13px] font-bold text-[#173838]">
                  Aktuell ADHS-Medikation? <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <select
                  id="selftest-medication"
                  value={demographics.adhdMedication}
                  onChange={(event) => updateDemographic("adhdMedication", event.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-slate-200 bg-[#faf9f8] px-4 py-3 text-[15px] text-slate-800 focus:border-[#173838] focus:bg-white"
                >
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                  <option value="keine-angabe">Keine Angabe</option>
                </select>
              </div>
            </>
          )}
        </div>

        <p className="mt-6 text-[12px] leading-relaxed text-slate-500">
          Eine selbstberichtete bestehende Diagnose wird ausschließlich als freiwillige Zusatzangabe gespeichert und nicht als klinisch bestätigter Referenzbefund behandelt.
        </p>

        {formError && (
          <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-[14px] text-red-800">
            {formError}
          </p>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => {
              setCurrentIndex(SELFTEST_ITEMS.length - 1);
              setStage("questions");
            }}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-[13px] font-bold text-[#173838] hover:bg-slate-50"
          >
            ← Zur letzten Frage
          </button>
          <button
            type="button"
            onClick={showResult}
            className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#173838] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Persönliches Ergebnis anzeigen
          </button>
        </div>
      </div>
    );
  }

  if (stage === "result" && scores) {
    const resultValues = {
      attention: {
        frequent: scores.frequentAttention,
        percent: scores.attentionPercent,
      },
      activation: {
        frequent: scores.frequentActivation,
        percent: scores.activationPercent,
      },
      impulsivity: {
        frequent: scores.frequentImpulsivity,
        percent: scores.impulsivityPercent,
      },
    };
    const summaryParts = [
      scores.meanAttention >= 2.5
        ? "In Ihren Antworten fallen insbesondere Schwierigkeiten mit Aufmerksamkeit, Organisation und Aufgabensteuerung auf."
        : null,
      scores.meanActivation >= 2.5
        ? "Zusätzlich berichten Sie häufiger über innere Unruhe oder einen ausgeprägten Aktivitätsdrang."
        : null,
      scores.meanImpulsivity >= 2.5
        ? "Auch impulsive Reaktionen oder Schwierigkeiten mit dem Abwarten wurden häufiger angegeben."
        : null,
      scores.hasHighImpairment
        ? "Sie berichten zudem über deutliche Auswirkungen auf mindestens einen wichtigen Lebensbereich."
        : null,
    ].filter(Boolean);

    return (
      <div className="space-y-7">
        <div className="rounded-[28px] border border-[rgba(47,79,79,0.14)] bg-white p-6 shadow-[0_30px_80px_rgba(23,56,56,0.1)] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-[#f0cc65] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.13em] text-[#173838]">
              Strukturiertes Ergebnisprofil
            </span>
            <span className="text-[12px] font-semibold text-slate-500">{SELFTEST_INSTRUMENT_VERSION}</span>
          </div>
          <h2 ref={headingRef} tabIndex={-1} className="mt-6 text-[30px] leading-[1.15] text-[#173838] focus:outline-none sm:text-[42px]">
            Ihr persönliches ADHS-Antwortprofil
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-slate-700">
            Ihre Antworten zeigen, in welchen Bereichen Sie aktuell besonders häufig Schwierigkeiten angegeben haben.
          </p>
          <p className="mt-3 rounded-2xl border border-[#dec77f] bg-[#fffaf0] p-4 text-[14px] font-semibold leading-relaxed text-[#5f480e]">
            Dieses Ergebnis ist keine Diagnose und keine Prozentangabe für die Wahrscheinlichkeit einer ADHS.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {RESULT_CARDS.map((card) => {
              const value = resultValues[card.key];
              return (
                <article key={card.key} className="rounded-2xl border border-slate-200 bg-[#faf9f8] p-5">
                  <h3 className="text-[20px] font-bold text-[#173838]">{card.title}</h3>
                  <p className="mt-3 text-[14px] font-semibold leading-relaxed text-[#173838]">
                    Sie haben {value.frequent} von {card.total} Fragen in diesem Bereich mit „häufig“ oder „fast immer“ beantwortet.
                  </p>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white" aria-hidden="true">
                    <div className="h-full rounded-full bg-[#9a6900]" style={{ width: `${value.percent}%` }} />
                  </div>
                  <p className="mt-2 text-[11px] font-semibold text-slate-500">Ausprägung der Antworten: {value.percent} von 100 Profilpunkten</p>
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-600">{card.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-[20px] font-bold text-[#173838]">Beeinträchtigung im Alltag</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
                {scores.hasHighImpairment
                  ? "Sie haben in mindestens einem Lebensbereich eine starke oder sehr starke Beeinträchtigung angegeben."
                  : "Sie haben in den abgefragten Lebensbereichen keine starke oder sehr starke Beeinträchtigung angegeben."}
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-[20px] font-bold text-[#173838]">Kompensationsaufwand</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-700">
                Zusätzlicher Aufwand, um im Alltag zuverlässig zu funktionieren: <strong>{compensationLabel(scores.compensationScore)}</strong>
              </p>
              {scores.compensationScore >= 3 && (
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Ein hoher Kompensationsaufwand kann bedeuten, dass der Alltag nach außen funktioniert, dafür jedoch besonders viel Planung, Kontrolle oder Energie erforderlich ist.
                </p>
              )}
            </article>
          </div>

          <div className="mt-7 rounded-2xl bg-[#173838] p-6 text-white">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f0cc65]">Einordnung Ihrer Antworten</p>
            {summaryParts.length > 0 ? (
              summaryParts.map((sentence) => <p key={sentence} className="mt-3 text-[15px] leading-relaxed text-slate-100">{sentence}</p>)
            ) : (
              <p className="mt-3 text-[15px] leading-relaxed text-slate-100">
                Ihre Antworten verteilen sich ohne einen besonders hervortretenden Schwerpunkt über die abgefragten Bereiche.
              </p>
            )}
            <p className="mt-3 text-[14px] leading-relaxed text-slate-200">
              Solche Schwierigkeiten können bei ADHS vorkommen, sind jedoch nicht spezifisch für ADHS. Ähnliche Beschwerden können unter anderem auch im Zusammenhang mit Schlafproblemen, anhaltendem Stress, Depressionen, Angststörungen oder anderen psychischen beziehungsweise körperlichen Ursachen auftreten.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-[#faf9f8] p-5" aria-live="polite">
            <p className="text-[13px] font-bold text-[#173838]">
              {storageStatus === "saving" && "Ihre Antworten werden pseudonymisiert gespeichert …"}
              {storageStatus === "saved" && "Ihre pseudonymisierte Antwort wurde gespeichert."}
              {storageStatus === "failed" && "Die Speicherung konnte gerade nicht bestätigt werden. Ihr Ergebnis bleibt vollständig sichtbar."}
              {storageStatus === "idle" && "Ihr Ergebnis ist bereit."}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-[12px] text-slate-600">
              <span>Ihre Antwort-ID: <code className="break-all font-semibold text-[#173838]">{responseId}</code></span>
              <button type="button" onClick={copyResponseId} className="min-h-[44px] font-bold text-[#173838] underline underline-offset-2">
                {copied ? "Kopiert" : "ID kopieren"}
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              Bewahren Sie die ID auf, wenn Sie später Auskunft oder Löschung dieser pseudonymen Antwort wünschen.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#173838] p-7 text-white shadow-[0_30px_80px_rgba(23,56,56,0.16)] sm:p-10">
          <p className="eyebrow-dark mb-2">Nächster sinnvoller Schritt</p>
          <h2 className="text-[28px] leading-[1.2] text-white sm:text-[38px]">
            Möchten Sie wissen, ob tatsächlich ADHS vorliegt?
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-slate-200">
            Ein Selbsttest kann Hinweise geben, aber keine vollständige diagnostische Abklärung ersetzen. Wenn Sie Klarheit möchten, können Sie bei uns eine strukturierte ADHS-Diagnostik für Erwachsene anfragen.
          </p>
          <p className="mt-4 text-[17px] font-bold text-[#f0cc65]">ADHS-Diagnostik für Erwachsene – 199 €</p>
          <label className="mt-6 flex max-w-2xl cursor-pointer items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4 text-[13px] leading-relaxed text-slate-100" htmlFor="link-selftest-result">
            <input
              id="link-selftest-result"
              type="checkbox"
              checked={linkResult}
              onChange={(event) => setLinkResult(event.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/40 text-[#f0cc65] focus:ring-[#f0cc65]"
            />
            <span>Mein Ergebnis aus dem ADHS-Selbsttest an meine anschließende Anfrage anhängen. Ohne diese Auswahl bleibt die Testantwort von der Kontaktanfrage getrennt.</span>
          </label>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/termin?anliegen=screening"
              onClick={handleDiagnosticsClick}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#f0cc65] px-8 py-3.5 text-[14px] font-bold text-[#173838] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              ADHS-Diagnostik anfragen
            </Link>
            <Link href="/adhs-test-muenchen" onClick={() => trackAnalyticsEvent("diagnostics_cta_click")} className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-[14px] font-bold text-white hover:bg-white/10">
              Mehr über die Diagnostik
            </Link>
          </div>
        </div>

        <button type="button" onClick={restartTest} className="mx-auto flex min-h-[44px] items-center text-[13px] font-bold text-[#173838] underline underline-offset-4">
          Selbsttest neu starten
        </button>
      </div>
    );
  }

  return null;
}
