#!/usr/bin/env node
import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outPath = resolve(projectRoot, "public", "portfolio.pdf");
const DEFAULT_PORT = process.env.PDF_PORT || "3030";

const CHROME_PATHS = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

function findChrome() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  for (const p of CHROME_PATHS) {
    if (existsSync(p)) return p;
  }
  return null;
}

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* not ready */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`server not ready at ${url} within ${timeoutMs}ms`);
}

async function isServerUp(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  const chromePath = findChrome();
  if (!chromePath) {
    console.error(
      "[pdf] Chrome/Chromium not found. Install Google Chrome or set CHROME_PATH.",
    );
    process.exit(1);
  }

  mkdirSync(dirname(outPath), { recursive: true });

  // Reuse existing dev server on common ports if present
  const candidates = [DEFAULT_PORT, "3000", "3001"];
  let serverUrl = null;
  for (const p of candidates) {
    const url = `http://localhost:${p}`;
    if (await isServerUp(url)) {
      serverUrl = url;
      console.log(`[pdf] reusing existing dev server at ${url}`);
      break;
    }
  }

  let dev = null;
  if (!serverUrl) {
    serverUrl = `http://localhost:${DEFAULT_PORT}`;
    console.log("[pdf] starting next dev on port", DEFAULT_PORT);
    dev = spawn("npx", ["next", "dev", "-p", DEFAULT_PORT], {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NODE_ENV: "development" },
    });
    dev.stderr.on("data", (d) => process.stderr.write(`[next] ${d}`));
  }

  let exitCode = 1;
  try {
    await waitForServer(serverUrl);
    console.log("[pdf] server ready, launching browser");

    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.emulateMediaType("print");
    await page.goto(serverUrl, { waitUntil: "networkidle0", timeout: 60000 });
    // wait for fonts
    await page.evaluateHandle("document.fonts.ready");

    await page.pdf({
      path: outPath,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
    });

    await browser.close();
    console.log("[pdf] saved →", outPath);
    exitCode = 0;
  } catch (err) {
    console.error("[pdf] failed:", err);
  } finally {
    if (dev) dev.kill("SIGTERM");
    setTimeout(() => process.exit(exitCode), 200);
  }
}

main();
