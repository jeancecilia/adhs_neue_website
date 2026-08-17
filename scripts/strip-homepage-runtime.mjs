import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const homepagePath = resolve("out", "index.html");
const original = await readFile(homepagePath, "utf8");

const withoutScriptPreload = original.replace(
  /<link\b(?=[^>]*\brel="preload")(?=[^>]*\bas="script")[^>]*\/?>(?:<\/link>)?/gi,
  "",
);

const withoutNextScripts = withoutScriptPreload
  .replace(
    /<script\b[^>]*\bsrc="\/_next\/[^"]+"[^>]*><\/script>/gi,
    "",
  )
  .replace(
    /<script>(?:\(self\.__next_f|self\.__next_f)[\s\S]*?<\/script>/g,
    "",
  );

if (withoutNextScripts === original) {
  throw new Error("No Next.js runtime markup was removed from out/index.html");
}

if (!withoutNextScripts.includes('type="application/ld+json"')) {
  throw new Error("Structured data was unexpectedly removed from out/index.html");
}

await writeFile(homepagePath, withoutNextScripts, "utf8");

const removedBytes = Buffer.byteLength(original) - Buffer.byteLength(withoutNextScripts);
console.log(`Removed ${removedBytes} bytes of unused Next.js runtime markup from the static homepage.`);
