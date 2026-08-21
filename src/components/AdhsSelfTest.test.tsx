// @vitest-environment jsdom

import { act } from "react-dom/test-utils";
import { createRoot, type Root } from "react-dom/client";
import { createElement } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AdhsSelfTest from "./AdhsSelfTest";

function button(name: string): HTMLButtonElement {
  const match = Array.from(document.querySelectorAll("button")).find(
    (element) => element.textContent?.trim() === name,
  );
  if (!(match instanceof HTMLButtonElement)) {
    throw new Error(`Button not found: ${name}`);
  }
  return match;
}

async function click(element: HTMLElement): Promise<void> {
  await act(async () => {
    element.click();
    await Promise.resolve();
  });
}

async function completeTest(answerValue: number): Promise<Record<string, unknown>> {
  const consent = document.querySelector<HTMLInputElement>("#selftest-consent");
  if (!consent) throw new Error("Consent checkbox not found");
  await click(consent);
  await click(button("Einwilligen & Selbsttest starten"));

  for (let index = 0; index < 26; index += 1) {
    const radios = Array.from(
      document.querySelectorAll<HTMLInputElement>('input[type="radio"]'),
    );
    expect(radios).toHaveLength(5);
    await click(radios[answerValue]);
    await click(
      button(index === 25 ? "Weiter zu den Zusatzangaben" : "Weiter →"),
    );
  }

  await click(button("Persönliches Ergebnis anzeigen"));
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });

  const fetchMock = vi.mocked(global.fetch);
  expect(fetchMock).toHaveBeenCalledOnce();
  return JSON.parse(String(fetchMock.mock.calls[0][1]?.body));
}

describe("ADHS self-test result flow", () => {
  let root: Root;

  beforeEach(async () => {
    document.body.innerHTML = '<div id="root"></div>';
    window.sessionStorage.clear();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );
    root = createRoot(document.querySelector("#root")!);
    await act(async () => {
      root.render(createElement(AdhsSelfTest));
    });
  });

  afterEach(async () => {
    await act(async () => root.unmount());
    vi.unstubAllGlobals();
  });

  it("shows and stores an exact minimum result profile", async () => {
    const payload = await completeTest(0);
    const text = document.body.textContent ?? "";

    expect(text).toContain("Ihr persönliches ADHS-Antwortprofil");
    expect(text).toContain("0 von 12 Fragen");
    expect(text).toContain("0 von 4 Fragen");
    expect(text).toContain("0 von 5 Fragen");
    expect(text).toContain("keine starke oder sehr starke Beeinträchtigung");
    expect(text).toContain("Zusätzlicher Aufwand, um im Alltag zuverlässig zu funktionieren: Gar nicht");
    expect(text).toContain("ohne einen besonders hervortretenden Schwerpunkt");
    expect(text).toContain("Ihre pseudonymisierte Antwort wurde gespeichert.");
    expect(Object.values(payload.answers as Record<string, number>)).toEqual(
      Array(26).fill(0),
    );
  });

  it("shows and stores an exact maximum result profile", async () => {
    const payload = await completeTest(4);
    const text = document.body.textContent ?? "";

    expect(text).toContain("12 von 12 Fragen");
    expect(text).toContain("4 von 4 Fragen");
    expect(text).toContain("5 von 5 Fragen");
    expect(text).toContain("mindestens einem Lebensbereich eine starke oder sehr starke Beeinträchtigung");
    expect(text).toContain("Zusätzlicher Aufwand, um im Alltag zuverlässig zu funktionieren: Sehr stark");
    expect(text).toContain("Schwierigkeiten mit Aufmerksamkeit, Organisation und Aufgabensteuerung");
    expect(text).toContain("innere Unruhe oder einen ausgeprägten Aktivitätsdrang");
    expect(text).toContain("impulsive Reaktionen oder Schwierigkeiten mit dem Abwarten");
    expect(Object.values(payload.answers as Record<string, number>)).toEqual(
      Array(26).fill(4),
    );
  });
});
