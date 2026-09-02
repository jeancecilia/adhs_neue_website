const ALLOWED_ORIGIN = "https://neurofeedback-praxis-muenchen.de";
const DESTINATION = "neurofeedback.praxis.muenchen@gmail.com";
// The account is on Workers Free. Cloudflare permits free sends to verified
// destination addresses only when the sender belongs to an active Email
// Routing domain in the same account. The ADHS domain keeps its Google MX
// records, so the practice's active psychotherapy routing domain is used only
// as the technical envelope sender. Replies still go directly to the lead.
const SENDER = "formular@psychotherapie-praxis-in-muenchen.de";
const SELFTEST_INSTRUMENT_VERSION = "ADHS-ST-0.2";
const SELFTEST_CONSENT_VERSION = "CONSENT-0.1";
const SELFTEST_ITEM_IDS = [
  "A01", "A02", "A03", "A05", "A07", "A08", "A09", "A10", "A11", "A12", "A13", "A14",
  "B01", "B03", "B04", "B06",
  "C01", "C02", "C03", "C04", "C05",
  "D01", "D02", "D03", "D04", "D05",
];
const ATTENTION_IDS = SELFTEST_ITEM_IDS.filter((id) => id.startsWith("A"));
const ACTIVATION_IDS = SELFTEST_ITEM_IDS.filter((id) => id.startsWith("B"));
const IMPULSIVITY_IDS = SELFTEST_ITEM_IDS.filter((id) => id.startsWith("C"));
const IMPAIRMENT_IDS = ["D01", "D02", "D03", "D04"];

const serviceNames = {
  "adhs-diagnostik": "ADHS-Diagnostik (Verdacht auf ADHS)",
  "adhs-therapie": "Psychotherapie / Einzeltherapie",
  neurofeedback: "Neurofeedback",
  allgemein: "Allgemeine Anfrage",
};

const timeslotNames = {
  egal: "Flexibel",
  vormittags: "Vormittags (08:00–12:00 Uhr)",
  nachmittags: "Nachmittags (13:00–17:00 Uhr)",
  spaet: "Später Nachmittag / abends (ab 17:00 Uhr)",
};

function clean(value, limit = 500) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, limit);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function isUuidV4(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value ?? ""));
}

function mean(answers, ids) {
  return ids.reduce((sum, id) => sum + answers[id], 0) / ids.length;
}

function frequent(answers, ids) {
  return ids.filter((id) => answers[id] >= 3).length;
}

async function storeSelftest(body, env) {
  if (!env.SELFTEST_DB) return json({ error: "Storage unavailable" }, 503);

  const responseId = clean(body.responseId, 36);
  const instrumentVersion = clean(body.instrumentVersion, 30);
  const consentVersion = clean(body.consentVersion, 30);
  const consentAt = clean(body.consentAt, 40);
  const consentDate = new Date(consentAt);
  const now = Date.now();

  if (
    !isUuidV4(responseId) ||
    instrumentVersion !== SELFTEST_INSTRUMENT_VERSION ||
    body.consent !== true ||
    consentVersion !== SELFTEST_CONSENT_VERSION ||
    !Number.isFinite(consentDate.getTime()) ||
    consentDate.getTime() > now + 5 * 60 * 1000 ||
    consentDate.getTime() < now - 7 * 24 * 60 * 60 * 1000
  ) {
    return json({ error: "Invalid consent data" }, 400);
  }

  const answers = body.answers;
  if (
    !answers ||
    typeof answers !== "object" ||
    Array.isArray(answers) ||
    Object.keys(answers).length !== SELFTEST_ITEM_IDS.length ||
    !SELFTEST_ITEM_IDS.every((id) => Number.isInteger(answers[id]) && answers[id] >= 0 && answers[id] <= 4)
  ) {
    return json({ error: "Invalid answer data" }, 400);
  }

  const age = body.age === null || body.age === undefined ? null : Number(body.age);
  if (age !== null && (!Number.isInteger(age) || age < 18 || age > 99)) {
    return json({ error: "Invalid age" }, 400);
  }

  const gender = clean(body.gender, 40);
  const existingAdhdDx = clean(body.existingAdhdDx, 40);
  const diagnosisSource = body.diagnosisSource === null ? null : clean(body.diagnosisSource, 60);
  const adhdMedication = body.adhdMedication === null ? null : clean(body.adhdMedication, 30);
  const allowedGenders = new Set(["weiblich", "maennlich", "divers", "keine-angabe"]);
  const allowedDiagnosis = new Set(["ja", "nein", "in-abklaerung", "keine-angabe"]);
  const allowedSources = new Set(["fachaerztlich", "psychotherapeutisch-psychologisch", "andere", "keine-angabe"]);
  const allowedMedication = new Set(["ja", "nein", "keine-angabe"]);

  if (
    !allowedGenders.has(gender) ||
    !allowedDiagnosis.has(existingAdhdDx) ||
    (diagnosisSource !== null && !allowedSources.has(diagnosisSource)) ||
    (adhdMedication !== null && !allowedMedication.has(adhdMedication)) ||
    (existingAdhdDx !== "ja" && (diagnosisSource !== null || adhdMedication !== null))
  ) {
    return json({ error: "Invalid optional data" }, 400);
  }

  const meanAttention = mean(answers, ATTENTION_IDS);
  const meanActivation = mean(answers, ACTIVATION_IDS);
  const meanImpulsivity = mean(answers, IMPULSIVITY_IDS);
  const impairmentMean = mean(answers, IMPAIRMENT_IDS);
  const completedAt = new Date().toISOString();

  try {
    await env.SELFTEST_DB.prepare(
      `INSERT OR IGNORE INTO selftest_responses (
        response_id, instrument_version, created_at, completed_at,
        consent, consent_version, consent_at,
        age, gender, existing_adhd_dx, diagnosis_source, adhd_medication,
        answers, mean_attention, mean_activation, mean_impulsivity,
        impairment_mean, compensation_score,
        frequent_attention, frequent_activation, frequent_impulsivity
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      responseId,
      instrumentVersion,
      consentDate.toISOString(),
      completedAt,
      1,
      consentVersion,
      consentDate.toISOString(),
      age,
      gender,
      existingAdhdDx,
      diagnosisSource,
      adhdMedication,
      JSON.stringify(answers),
      meanAttention,
      meanActivation,
      meanImpulsivity,
      impairmentMean,
      answers.D05,
      frequent(answers, ATTENTION_IDS),
      frequent(answers, ACTIVATION_IDS),
      frequent(answers, IMPULSIVITY_IDS),
    ).run();
  } catch (error) {
    console.error("Self-test storage failed", error);
    return json({ error: "Storage failed" }, 502);
  }

  return json({ ok: true, responseId }, 200);
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

    const pathname = new URL(request.url).pathname;
    if (pathname !== "/api/contact" && pathname !== "/api/selftest") {
      return json({ error: "Not found" }, 404);
    }

    const origin = request.headers.get("Origin");
    if (origin && origin !== ALLOWED_ORIGIN) return json({ error: "Forbidden" }, 403);
    if (pathname === "/api/selftest" && origin !== ALLOWED_ORIGIN) {
      return json({ error: "Forbidden" }, 403);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 16_000) return json({ error: "Payload too large" }, 413);

    let body;
    try {
      const rawBody = await request.text();
      if (rawBody.length > 16_000) return json({ error: "Payload too large" }, 413);
      body = JSON.parse(rawBody);
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    if (pathname === "/api/selftest") return storeSelftest(body, env);

    // Keep the honeypot response non-descriptive, but make its acceptance
    // state explicit so the frontend never reports it as a real lead.
    if (clean(body.website, 200)) {
      return json({ ok: true, accepted: false });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const service = clean(body.service, 60);
    const timeslot = clean(body.timeslot, 60);
    const message = clean(body.message, 2000);
    const healthDataConsent = body.healthDataConsent === true;
    const linkedResponseId = body.linkedResponseId ? clean(body.linkedResponseId, 36) : null;

    if (!name || !serviceNames[service] || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !healthDataConsent || (linkedResponseId && !isUuidV4(linkedResponseId))) {
      return json({ error: "Invalid form data" }, 400);
    }

    const consentTimestamp = new Date().toISOString();

    const subject = `Neue Terminanfrage: ${serviceNames[service]}`;
    const text = [
      "Neue Terminanfrage über neurofeedback-praxis-muenchen.de",
      "",
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Anliegen: ${serviceNames[service]}`,
      `Terminwunsch: ${timeslotNames[timeslot] || "–"}`,
      `Nachricht: ${message || "–"}`,
      `Verknüpfte Selbsttest-Antwort-ID: ${linkedResponseId || "nicht freigegeben"}`,
      "Ausdrückliche Einwilligung zur Verarbeitung freiwillig übermittelter Gesundheitsdaten: erteilt",
      `Einwilligungszeitpunkt: ${consentTimestamp}`,
    ].join("\n");

    const html = `<h2>Neue Terminanfrage</h2><table cellpadding="6" style="border-collapse:collapse"><tr><th align="left">Name</th><td>${escapeHtml(name)}</td></tr><tr><th align="left">E-Mail</th><td>${escapeHtml(email)}</td></tr><tr><th align="left">Anliegen</th><td>${escapeHtml(serviceNames[service])}</td></tr><tr><th align="left">Terminwunsch</th><td>${escapeHtml(timeslotNames[timeslot] || "–")}</td></tr><tr><th align="left">Nachricht</th><td>${escapeHtml(message || "–")}</td></tr><tr><th align="left">Verknüpfte Selbsttest-Antwort-ID</th><td>${escapeHtml(linkedResponseId || "nicht freigegeben")}</td></tr><tr><th align="left">Datenschutzeinwilligung</th><td>Ausdrücklich erteilt</td></tr><tr><th align="left">Einwilligungszeitpunkt</th><td>${escapeHtml(consentTimestamp)}</td></tr></table>`;

    try {
      const receipt = await env.EMAIL.send({
        to: DESTINATION,
        from: { email: SENDER, name: "ADHS Praxis München" },
        replyTo: email,
        subject,
        text,
        html,
      });

      if (!clean(receipt?.messageId, 998)) {
        throw new Error("Email provider returned no message receipt");
      }
    } catch (error) {
      console.error("Contact email failed", error);
      return json({ error: "Delivery failed" }, 502);
    }

    return json({ ok: true, accepted: true }, 200);
  },

  async scheduled(_controller, env) {
    if (!env.SELFTEST_DB) return;
    await env.SELFTEST_DB.prepare(
      "DELETE FROM selftest_responses WHERE unixepoch(completed_at) < unixepoch('now', '-5 years')",
    ).run();
  },
};
