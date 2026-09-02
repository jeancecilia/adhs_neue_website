const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const domain = "neurofeedback-praxis-muenchen.de";
const zoneId = "9edf4a960e6478788dbc83168a57ab72";

if (!apiToken) {
  throw new Error("CLOUDFLARE_API_TOKEN is required.");
}

const headers = {
  Authorization: `Bearer ${apiToken}`,
  "Content-Type": "application/json",
};

async function cloudflare(path, options = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: { ...headers, ...options.headers },
  });
  const payload = await response.json();

  if (!response.ok || !payload.success) {
    throw new Error(
      `Cloudflare API failed (${response.status}): ${JSON.stringify(payload.errors ?? payload)}`,
    );
  }

  return payload.result;
}

let sendingDomains = await cloudflare(`/zones/${zoneId}/email/sending/subdomains`);
let sendingDomain = sendingDomains.find((entry) => entry.name === domain);

if (!sendingDomain) {
  sendingDomain = await cloudflare(`/zones/${zoneId}/email/sending/subdomains`, {
    method: "POST",
    body: JSON.stringify({ name: domain }),
  });
}

if (!sendingDomain.enabled) {
  sendingDomain = await cloudflare(
    `/zones/${zoneId}/email/sending/subdomains/${sendingDomain.tag}`,
    {
      method: "PATCH",
      body: JSON.stringify({ enabled: true }),
    },
  );
}

const dns = await cloudflare(
  `/zones/${zoneId}/email/sending/subdomains/${sendingDomain.tag}/dns`,
);
const missing = Array.isArray(dns?.errors) ? dns.errors : [];

if (missing.length > 0) {
  throw new Error(
    `Email Sending DNS is incomplete: ${JSON.stringify(
      missing.map((entry) => ({ code: entry.code, missing: entry.missing })),
    )}`,
  );
}

process.stdout.write(
  `${JSON.stringify(
    {
      domain: sendingDomain.name,
      enabled: sendingDomain.enabled,
      dkimSelector: sendingDomain.dkim_selector,
      returnPathDomain: sendingDomain.return_path_domain,
      previewEnabled: sendingDomain.preview_enabled,
      dnsReady: true,
    },
    null,
    2,
  )}\n`,
);
