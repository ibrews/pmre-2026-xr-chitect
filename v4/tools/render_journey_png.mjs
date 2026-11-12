#!/usr/bin/env node
// Static journey-minimap PNGs for the organizer PowerPoint (tools/export_talk_pptx.py places one per slide).
// Renders talk/journey.js's own map (window.journeyStaticSVG) inside the baked deck, per look, with a transparent
// background: media/journey/<look>/stop-<0..7>.png (chapter i) and end.png (bonus + close).
//   PLAYWRIGHT_CORE=/abs/node_modules/playwright-core node tools/render_journey_png.mjs [look ...]
// Needs: Google Chrome (CHROME_BIN overrides) and a playwright-core install (same lookup as tools/render_motion.mjs).
import { createRequire } from 'module';
import fs from 'fs'; import path from 'path'; import os from 'os'; import { pathToFileURL } from 'url';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const cands = [process.env.PLAYWRIGHT_CORE, path.join(os.homedir(), '.cache/spatial-deck/video-deps/node_modules/playwright-core')].filter(Boolean);
const pwPath = cands.find(p => fs.existsSync(path.join(p, 'package.json')));
if (!pwPath) { console.error('playwright-core not found. Set PLAYWRIGHT_CORE=/abs/path/node_modules/playwright-core (or run tools/export_video.py once to install it).'); process.exit(2); }
const { chromium } = require(pwPath);
const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const LOOKS = process.argv.slice(2).length ? process.argv.slice(2) : ['house', 'noir', 'sheet', 'folio', 'swiss', 'memo', 'cyanotype', 'gallery'];
const browser = await chromium.launch({ executablePath: CHROME });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
let n = 0;
for (const look of LOOKS) {
  await page.goto(pathToFileURL(path.join(ROOT, 'index.html')).href + `?journey=off&static&look=${look}`);
  await page.waitForFunction(() => typeof window.journeyStaticSVG === 'function' && typeof SECTIONS !== 'undefined');
  const out = path.join(ROOT, 'media/journey', look); fs.mkdirSync(out, { recursive: true });
  await page.evaluate(() => {
    document.documentElement.style.background = 'transparent';
    [...document.body.children].forEach(e => { e.style.visibility = 'hidden'; });
    document.body.style.background = 'transparent'; document.body.style.backgroundImage = 'none';
    const d = document.createElement('div'); d.id = 'jpng'; d.style.cssText = 'position:fixed;left:40px;top:40px;width:300px;visibility:visible;padding:4px 6px 2px';
    d.innerHTML = '<div class="j-label" style="text-align:right;font:700 18px/1 var(--font-mono,\'Space Grotesk\',Inter,sans-serif);letter-spacing:.2em;color:var(--acc-1,#00d4ff);margin:0 2px -2px 0"></div>';
    document.body.appendChild(d);
  });
  const states = SECTIONS_COUNT => [...Array(SECTIONS_COUNT).keys()].map(i => ({ i, file: `stop-${i}.png` })).concat([{ i: SECTIONS_COUNT - 1, end: true, file: 'end.png' }]);
  const count = await page.evaluate(() => SECTIONS.length);
  for (const st of states(count)) {
    await page.evaluate(({ i, end }) => { const d = document.getElementById('jpng'); d.querySelector('svg')?.remove();
      d.querySelector('.j-label').textContent = end ? (BONUS.year || 'THE LESSON') : String(SECTIONS[i].year); d.appendChild(window.journeyStaticSVG(i, end)); }, st);
    const el = await page.$('#jpng'); await el.screenshot({ path: path.join(out, st.file), omitBackground: true }); n++;
  }
}
await browser.close();
console.log(`render_journey_png: ${n} PNGs in media/journey/{${LOOKS.join(',')}}`);
