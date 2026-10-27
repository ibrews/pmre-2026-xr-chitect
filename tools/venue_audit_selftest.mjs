// Proves the baked-text safe-zone audit is not vacuous: a motion graphic shown FULL-FRAME must report text outside the
// 1344x756 zone, and the same graphic in the 70% safe-zone rect must report none.
//   node tools/venue_audit_selftest.mjs [name ...]     (default: scale sightline lane)
import path from 'path'; import { pathToFileURL, fileURLToPath } from 'url';
import { loadPlaywright, CHROME, auditMotionText } from './venue_capture.mjs';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const names = process.argv.slice(2).length ? process.argv.slice(2) : ['scale', 'sightline', 'lane'];
const { chromium } = loadPlaywright(); const b = await chromium.launch({ executablePath: CHROME }); let ok = true;
try { const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const n of names) { await p.goto(pathToFileURL(path.join(ROOT, 'media/motion', n + '.html')).href + '?t=0'); await p.waitForFunction(() => typeof window.seek === 'function'); await p.evaluate(() => document.fonts.ready);
    const full = await auditMotionText(p, [0, 0, 1920, 1080]), safe = await auditMotionText(p, [288, 162, 1344, 756]);
    const good = full.length > 0 && safe.length === 0; ok &&= good;
    console.log(`${n.padEnd(12)} full-frame: ${full.length} text box(es) outside  |  safe-framed: ${safe.length}  ${good ? 'OK' : 'UNEXPECTED'}`); } }
finally { await b.close(); }
process.exit(ok ? 0 : 1);
