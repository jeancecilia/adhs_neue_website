type ContactSubmissionResponse = {
  ok?: unknown;
  accepted?: unknown;
};

/**
 * Treat a contact request as a lead only after the backend explicitly confirms
 * that it accepted and handed off the message. A generic HTTP 2xx response is
 * intentionally insufficient because the spam honeypot also responds with 2xx.
 */
export async function isAcceptedContactSubmission(
  response: Response,
): Promise<boolean> {
  if (!response.ok) return false;

  try {
    const payload = (await response.json()) as ContactSubmissionResponse;
    return payload.ok === true && payload.accepted === true;
  } catch {
    return false;
  }
}
