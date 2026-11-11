// Render talk/social.html → talk/social.png (1200×630) for og:image / twitter:image.
//   PLAYWRIGHT_CORE=/abs/node_modules/playwright-core node tools/render_social.mjs
import { createRequire } from 'module'; import path from 'path'; import fs from 'fs'; import os from 'os';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const pw = [process.env.PLAYWRIGHT_CORE, path.join(os.homedir(), '.cache/spatial-deck/video-deps/node_modules/playwright-core')].filter(Boolean).find(p => fs.existsSync(path.join(p, 'package.json')));
if (!pw) { console.error('set PLAYWRIGHT_CORE=/abs/path/node_modules/playwright-core'); process.exit(2); }
const { chromium } = require(pw);
const b = await chromium.launch({ executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.goto('file://' + path.join(ROOT, 'talk/social.html')); await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: path.join(ROOT, 'talk/social.png') }); await b.close();
console.log('talk/social.png', fs.statSync(path.join(ROOT, 'talk/social.png')).size, 'bytes');
