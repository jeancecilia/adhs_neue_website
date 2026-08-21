import worker from "../../workers/contact-form/src/index.js";

export async function onRequest(context) {
  const response = await worker.fetch(context.request, context.env);

  if (
    context.request.method === "POST" &&
    response.ok &&
    context.env.SELFTEST_DB
  ) {
    context.waitUntil(
      context.env.SELFTEST_DB.prepare(
        "DELETE FROM selftest_responses WHERE unixepoch(completed_at) < unixepoch('now', '-5 years')",
      ).run(),
    );
  }

  return response;
}
