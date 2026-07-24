/**
 * Captures homepage screenshots of every project with a live URL into
 * public/projects/. Re-run any time a live site changes:
 *
 *   node scripts/capture-screenshots.mjs
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const targets = [
  { file: "staycation.png", url: "https://www.staycationhavenph.com" },
  {
    file: "urban-deca-tower.png",
    url: "https://hotel-deca-website-git-main-tryagain1122s-projects.vercel.app/",
  },
  { file: "mdb-movie-app.png", url: "https://mdb-web-app.vercel.app" },
  { file: "guess-my-number.png", url: "https://guess-my-number-beryl-six.vercel.app" },
  { file: "react-meals.png", url: "https://food-ordering-app-lake.vercel.app/" },
  { file: "le-sserafim.png", url: "https://le-sserafim-fan-page.vercel.app" },
  { file: "aespa-karina.png", url: "https://aespa-world.vercel.app" },
  { file: "couple-monthsary.png", url: "https://for-couple-web.vercel.app" },
];

mkdirSync("public/projects", { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1440, height: 810 },
  deviceScaleFactor: 2,
});

for (const { file, url } of targets) {
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "load", timeout: 45000 });
    // Give client-side apps a moment to render data and images
    await page.waitForTimeout(4000);
    await page.screenshot({ path: `public/projects/${file}` });
    console.log(`ok    ${file}  <-  ${url}`);
  } catch (err) {
    console.error(`FAIL  ${file}  (${err.message.split("\n")[0]})`);
  } finally {
    await page.close();
  }
}

await browser.close();
