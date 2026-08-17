const ALLOWED_ORIGIN = "https://neurofeedback-praxis-muenchen.de";
const DESTINATION = "neurofeedback.praxis.muenchen@gmail.com";

const serviceNames = {
  "adhs-diagnostik": "ADHS-Diagnostik (Verdacht auf ADHS)",
  "adhs-therapie": "ADHS-Therapie / psychotherapeutische Begleitung",
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

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

    const origin = request.headers.get("Origin");
    if (origin && origin !== ALLOWED_ORIGIN) return json({ error: "Forbidden" }, 403);

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 16_000) return json({ error: "Payload too large" }, 413);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    if (clean(body.website, 200)) return json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const service = clean(body.service, 60);
    const timeslot = clean(body.timeslot, 60);
    const message = clean(body.message, 2000);

    if (!name || !serviceNames[service] || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ error: "Invalid form data" }, 400);
    }

    const subject = `Neue Terminanfrage: ${serviceNames[service]}`;
    const text = [
      "Neue Terminanfrage über neurofeedback-praxis-muenchen.de",
      "",
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Anliegen: ${serviceNames[service]}`,
      `Terminwunsch: ${timeslotNames[timeslot] || "–"}`,
      `Nachricht: ${message || "–"}`,
    ].join("\n");

    const html = `<h2>Neue Terminanfrage</h2><table cellpadding="6" style="border-collapse:collapse"><tr><th align="left">Name</th><td>${escapeHtml(name)}</td></tr><tr><th align="left">E-Mail</th><td>${escapeHtml(email)}</td></tr><tr><th align="left">Anliegen</th><td>${escapeHtml(serviceNames[service])}</td></tr><tr><th align="left">Terminwunsch</th><td>${escapeHtml(timeslotNames[timeslot] || "–")}</td></tr><tr><th align="left">Nachricht</th><td>${escapeHtml(message || "–")}</td></tr></table>`;

    try {
      await env.EMAIL.send({
        to: DESTINATION,
        from: { email: "formular@neurofeedback-praxis-muenchen.de", name: "ADHS Praxis München" },
        replyTo: email,
        subject,
        text,
        html,
      });
    } catch (error) {
      console.error("Contact email failed", error);
      return json({ error: "Delivery failed" }, 502);
    }

    return json({ ok: true }, 200);
  },
};
