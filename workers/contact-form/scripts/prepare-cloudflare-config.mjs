import { readFile, writeFile } from "node:fs/promises";

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;
const databaseName = "adhs-selftest-responses";

if (!accountId || !apiToken) {
  throw new Error("CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are required.");
}

const endpoint = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database`;
const headers = {
  Authorization: `Bearer ${apiToken}`,
  "Content-Type": "application/json",
};

async function cloudflare(path = "", options = {}) {
  const response = await fetch(`${endpoint}${path}`, { ...options, headers: { ...headers, ...options.headers } });
  const payload = await response.json();
  if (!response.ok || !payload.success) {
    throw new Error(`Cloudflare API failed (${response.status}): ${JSON.stringify(payload.errors ?? payload)}`);
  }
  return payload;
}

const listed = await cloudflare("?per_page=100");
let database = listed.result.find((entry) => entry.name === databaseName);

if (!database) {
  const created = await cloudflare("", {
    method: "POST",
    body: JSON.stringify({
      name: databaseName,
      jurisdiction: "eu",
      read_replication: { mode: "disabled" },
    }),
  });
  database = created.result;
}

if (database.jurisdiction !== "eu") {
  throw new Error(`Existing D1 database ${databaseName} is not restricted to the EU jurisdiction.`);
}

const baseConfig = JSON.parse(await readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8"));
baseConfig.d1_databases = [
  {
    binding: "SELFTEST_DB",
    database_name: databaseName,
    database_id: database.uuid,
    migrations_dir: "migrations",
  },
];

await writeFile(
  new URL("../wrangler.generated.json", import.meta.url),
  `${JSON.stringify(baseConfig, null, 2)}\n`,
);

process.stdout.write(`Prepared EU D1 binding for ${databaseName}.\n`);
