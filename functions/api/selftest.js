import worker from "../../workers/contact-form/src/index.js";

export function onRequest(context) {
  return worker.fetch(context.request, context.env);
}
