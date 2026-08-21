import { describe, expect, it } from "vitest";
import {
  SELFTEST_ITEMS,
  hasCompleteSelfTestAnswers,
  scoreSelfTest,
} from "./adhsSelftest";

describe("ADHS-ST-0.2 scoring", () => {
  it("keeps the frozen instrument at exactly 26 unique items", () => {
    expect(SELFTEST_ITEMS).toHaveLength(26);
    expect(new Set(SELFTEST_ITEMS.map((item) => item.id)).size).toBe(26);
  });

  it("calculates the documented subscales without treating compensation as impairment", () => {
    const answers = Object.fromEntries(
      SELFTEST_ITEMS.map((item) => [item.id, 0]),
    );
    for (const id of ["A01", "A02", "A03"]) answers[id] = 4;
    answers.B01 = 3;
    answers.C01 = 4;
    answers.D01 = 3;
    answers.D05 = 4;

    const result = scoreSelfTest(answers);

    expect(result.meanAttention).toBe(1);
    expect(result.frequentAttention).toBe(3);
    expect(result.frequentActivation).toBe(1);
    expect(result.frequentImpulsivity).toBe(1);
    expect(result.impairmentMean).toBe(0.75);
    expect(result.compensationScore).toBe(4);
    expect(result.hasHighImpairment).toBe(true);
  });

  it("rejects incomplete answer sets", () => {
    expect(hasCompleteSelfTestAnswers({ A01: 4 })).toBe(false);
    expect(() => scoreSelfTest({ A01: 4 })).toThrow();
  });
});
