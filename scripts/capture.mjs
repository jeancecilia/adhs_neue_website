import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const edgePath = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
].find(p => fs.existsSync(p));

if (!edgePath) {
  console.error('No browser found');
  process.exit(1);
}

const pages = [
  { url: 'http://localhost:3001', name: 'screenshot_homepage_portrait_fix.png', width: 1280, height: 2600 },
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const item of pages) {
    await page.setViewport({ width: item.width, height: item.height });
    await page.goto(item.url, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(process.cwd(), item.name), fullPage: true });
    console.log(`Captured ${item.name}`);
  }

  await browser.close();
}

run().catch(console.error);
