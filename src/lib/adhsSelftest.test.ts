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

  it("returns an exact zero profile for exclusively minimal answers", () => {
    const answers = Object.fromEntries(
      SELFTEST_ITEMS.map((item) => [item.id, 0]),
    );

    expect(scoreSelfTest(answers)).toEqual({
      meanAttention: 0,
      meanActivation: 0,
      meanImpulsivity: 0,
      impairmentMean: 0,
      compensationScore: 0,
      frequentAttention: 0,
      frequentActivation: 0,
      frequentImpulsivity: 0,
      attentionPercent: 0,
      activationPercent: 0,
      impulsivityPercent: 0,
      impairmentPercent: 0,
      hasHighImpairment: false,
    });
  });

  it("returns an exact maximum profile for exclusively maximal answers", () => {
    const answers = Object.fromEntries(
      SELFTEST_ITEMS.map((item) => [item.id, 4]),
    );

    expect(scoreSelfTest(answers)).toEqual({
      meanAttention: 4,
      meanActivation: 4,
      meanImpulsivity: 4,
      impairmentMean: 4,
      compensationScore: 4,
      frequentAttention: 12,
      frequentActivation: 4,
      frequentImpulsivity: 5,
      attentionPercent: 100,
      activationPercent: 100,
      impulsivityPercent: 100,
      impairmentPercent: 100,
      hasHighImpairment: true,
    });
  });

  it("keeps domain scores separated in a deliberately mixed profile", () => {
    const answers = Object.fromEntries(
      SELFTEST_ITEMS.map((item) => [item.id, 0]),
    );
    for (const item of SELFTEST_ITEMS) {
      if (item.domain === "attention") answers[item.id] = 4;
      if (item.domain === "activation") answers[item.id] = 3;
      if (item.domain === "impulsivity") answers[item.id] = 1;
    }
    Object.assign(answers, { D01: 3, D02: 2, D03: 1, D04: 0, D05: 4 });

    expect(scoreSelfTest(answers)).toEqual({
      meanAttention: 4,
      meanActivation: 3,
      meanImpulsivity: 1,
      impairmentMean: 1.5,
      compensationScore: 4,
      frequentAttention: 12,
      frequentActivation: 4,
      frequentImpulsivity: 0,
      attentionPercent: 100,
      activationPercent: 75,
      impulsivityPercent: 25,
      impairmentPercent: 38,
      hasHighImpairment: true,
    });
  });

  it.each([-1, 1.5, 5, Number.NaN])(
    "rejects the invalid answer value %s",
    (invalidValue) => {
      const answers = Object.fromEntries(
        SELFTEST_ITEMS.map((item) => [item.id, 2]),
      );
      answers.A01 = invalidValue;
      expect(hasCompleteSelfTestAnswers(answers)).toBe(false);
      expect(() => scoreSelfTest(answers)).toThrow();
    },
  );
});
