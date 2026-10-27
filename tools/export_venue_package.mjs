// One command: PMRE organizer package (PowerPoint + separate MP4s + cue sheet + checks) from the rendered deck.
//
//   node tools/export_venue_package.mjs                          # cut 20 and cut 30, current defaults, label smoke-test
//   node tools/export_venue_package.mjs --cuts 30 --pick thesis=b --pick lanemotion=sprite
//   node tools/export_venue_package.mjs --label final --cuts 30   # the submission build
//   options: --out ROOT (default ~/Archives/pmre2026-2026-10/organizer-package) --cache DIR --no-office --only 3,6
//
// Output: <ROOT>/<YYYY-MM-DD>-<label>-<sha>/cut<NN>/{PMRE2026-Coulombe-XR-chitect.pptx, .pdf, videos/, VIDEO-CUES.md/.pdf,
// NOTES-FULL.md, checks.json, build-report.json, contact-sheet.png} + MANIFEST.json/.sha256 + RERUN.md.
// Exit 1 if any venue check fails (the package is still written so you can see why).
// Pipeline: tools/venue_capture.mjs (headless Chrome walks every slide + substep in ?safe=70) -> tools/venue_pptx.py
// (python-pptx) -> tools/venue_checks.py (self-tested first) -> Keynote/PowerPoint PDF export.
import { execFileSync, spawnSync } from 'child_process';
import crypto from 'crypto'; import fs from 'fs'; import path from 'path'; import os from 'os';
import { capture, loadPlaywright, loadGuard, CHROME } from './venue_capture.mjs';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PY = process.env.PYTHON || (fs.existsSync('/opt/homebrew/bin/python3.14') ? '/opt/homebrew/bin/python3.14' : 'python3');
const NAME = 'PMRE2026-Coulombe-XR-chitect';

const a = { cuts: ['20', '30'], pick: [], label: 'smoke-test', out: path.join(os.homedir(), 'Archives/pmre2026-2026-10/organizer-package'), cache: path.join(os.homedir(), 'Archives/pmre2026-2026-10/venue-cache'), office: true, only: null, fps: 30, captured: null, keynote: true };
const av = process.argv.slice(2);
for (let i = 0; i < av.length; i++) { const k = av[i], v = () => av[++i];
  if (k === '--cuts') a.cuts = v().split(','); else if (k === '--pick') a.pick.push(v()); else if (k === '--label') a.label = v();
  else if (k === '--out') a.out = v(); else if (k === '--cache') a.cache = v(); else if (k === '--no-office') a.office = false;
  else if (k === '--only') a.only = v().split(',').map(Number); else if (k === '--captured') a.captured = v(); else if (k === '--no-keynote') a.keynote = false; else if (k === '-h' || k === '--help') { console.log(fs.readFileSync(new URL(import.meta.url)).toString().split('\n').slice(0, 12).join('\n')); process.exit(0); }
  else { console.error('unknown arg ' + k); process.exit(2); } }
if (a.pick.some(p => p.startsWith('cut='))) { console.error('use --cuts 20,30 instead of --pick cut=…'); process.exit(2); }

const git = (...x) => execFileSync('git', ['-C', ROOT, ...x]).toString().trim();
const commit = git('rev-parse', '--short', 'HEAD'), dirty = git('status', '--porcelain', '--', 'index.html', 'talk', 'media', 'tools', 'styles').length > 0;
const date = new Date().toISOString().slice(0, 10);
const pkg = path.join(a.out, `${date}-${a.label}-${commit}${dirty ? '-dirty' : ''}`);
fs.mkdirSync(pkg, { recursive: true });
const sha = f => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const py = (args, ok = [0]) => { const r = spawnSync(PY, args, { stdio: 'inherit', cwd: ROOT }); if (!ok.includes(r.status)) throw new Error(`${args[0]} exited ${r.status}`); return r.status; };
console.log(`venue package -> ${pkg}\n  built from ${commit}${dirty ? ' + uncommitted changes' : ''}; picks ${a.pick.join(' ') || '(defaults)'}; cuts ${a.cuts.join(',')}`);

const summary = { commit, dirty, date, label: a.label, picks: a.pick, cuts: {} };
let anyFail = false, selftested = false;
for (const cut of a.cuts) {
  const dir = path.join(pkg, 'cut' + cut), work = path.join(a.cache, 'work', `${a.label}-cut${cut}`);
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  let capWork = work;
  if (a.captured) { capWork = path.join(a.captured, `${a.label}-cut${cut}`); console.log(`\n== cut ${cut}: using capture rendered elsewhere: ${capWork}`); }
  else { fs.rmSync(work, { recursive: true, force: true }); console.log(`\n== cut ${cut}: walking the deck`);
  await capture({ work, cache: a.cache, pick: [...a.pick, 'cut=' + cut], fps: a.fps, safe: '70', only: a.only, maxSec: 12, videoMin: 1.6 }); }
  const capf = path.join(capWork, 'capture.json'), pptx = path.join(dir, NAME + '.pptx');
  py(['tools/venue_pptx.py', '--capture', capf, '--out', pptx, '--videos-dir', path.join(dir, 'videos'), '--notes-full', path.join(dir, 'NOTES-FULL.md'), '--report', path.join(dir, 'build-report.json'), '--cache', a.cache]);
  if (!selftested) { console.log('  checks self-test (a deliberately broken copy must fail every check):'); py(['tools/venue_checks.py', '--selftest', '--pptx', pptx, '--videos', path.join(dir, 'videos'), '--capture', capf]); selftested = true; }
  const st = py(['tools/venue_checks.py', '--pptx', pptx, '--videos', path.join(dir, 'videos'), '--capture', capf, '--json', path.join(dir, 'checks.json')], [0, 1]);
  anyFail ||= st !== 0;
  const cap = JSON.parse(fs.readFileSync(capf, 'utf8')), rep = JSON.parse(fs.readFileSync(path.join(dir, 'build-report.json'), 'utf8')), chk = JSON.parse(fs.readFileSync(path.join(dir, 'checks.json'), 'utf8'));
  // cue sheet
  const mmss = s => `${String(Math.floor(Math.round(s) / 60)).padStart(2, '0')}:${String(Math.round(s) % 60).padStart(2, '0')}`;
  const vids = rep.filter(r => r.video);
  const md = [`# PMRE 2026 · Alex Coulombe · "Architect to XR-chitect" · video cues (${cut}-minute cut)`, '',
    `**${a.label.toUpperCase()}** build ${date}, deck commit \`${commit}\`${dirty ? ' (+ uncommitted)' : ''}. Presentation: \`${NAME}.pptx\` (${rep.length} slides).`, '',
    'Every video is a separate file in `videos/` (1920×1080, 30 fps, H.264; silent unless the Audio column says otherwise), framed for the 1344×756 safe zone on a dark background. Nothing is embedded or linked in the PPTX.',
    'The PPTX slide shows the video\'s **final frame**, so returning to the deck after playback is seamless. The presenter\'s notes on that slide start with the same cue.', '',
    '| PPTX slide | File | Length | Audio | Crew action |', '|---|---|---|---|---|',
    ...vids.map(r => `| ${r.pptx} | videos/${r.video} | ${mmss(r.duration)} | ${r.audio ? 'yes (car horns): route to house sound' : 'silent'} | When the speaker advances to slide ${r.pptx}, play the video full-screen; when it ends, return to the deck on slide ${r.pptx} (same final frame). The speaker's next click goes to slide ${r.pptx + 1}. |`),
    '', vids.length ? '' : '_No video cues in this cut._', `Total video: ${vids.length} file(s), ${mmss(vids.reduce((s, r) => s + r.duration, 0))}.`].join('\n');
  fs.writeFileSync(path.join(dir, 'VIDEO-CUES.md'), md + '\n');
  summary.cuts[cut] = { slides: rep.length, modes: rep.reduce((m, r) => (m[r.mode] = (m[r.mode] || 0) + 1, m), {}), videos: vids.length, videoSec: +vids.reduce((s, r) => s + r.duration, 0).toFixed(1), pass: chk.pass, failures: Object.fromEntries(Object.entries(chk.results).filter(([, v]) => v.length)), timing: chk.timing && { talk_min: chk.timing.talk_min, with_qa_min: chk.timing.with_qa_min, fits: chk.timing.fits, fits_short_qa: chk.timing.fits_short_qa }, fit: (() => { const f = cap.states.filter(x => x.step === 0 && x.fit).map(x => +x.fit.split(' ')[0]).sort((p, q) => p - q); return f.length ? { min: f[0], median: f[f.length >> 1], max: f[f.length - 1], n: f.length } : null; })(), warnings: [...new Set(cap.states.flatMap(x => x.warn || []))], pageErrors: cap.errors.length, picks: cap.picks, deckUrl: cap.url, renderedOn: cap.host, renderedFrom: cap.roots && cap.roots.repo };
}

// PDFs: cue sheet via Chrome (one browser at a time), PPTX via Keynote (opens it = the Keynote check) then PowerPoint
await loadGuard('light');  // single-document PDF exports: light class (coordinator OK 2026-10-27)
{ const { chromium } = loadPlaywright(); const b = await chromium.launch({ executablePath: CHROME });
  try { const p = await b.newPage();
    for (const cut of a.cuts) { const dir = path.join(pkg, 'cut' + cut); const md = fs.readFileSync(path.join(dir, 'VIDEO-CUES.md'), 'utf8');
      const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
      const html = md.split('\n').map(l => l.startsWith('# ') ? `<h1>${esc(l.slice(2))}</h1>` : l.startsWith('|---') ? '' : l.startsWith('|') ? `<tr>${l.split('|').slice(1, -1).map(c => `<td>${esc(c.trim())}</td>`).join('')}</tr>` : l ? `<p>${esc(l)}</p>` : '').join('\n')
        .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/`(.+?)`/g, '<code>$1</code>').replace(/(<tr>[\s\S]*<\/tr>)/, '<table>$1</table>');
      await p.setContent(`<style>body{font:13px/1.45 Arial,sans-serif;margin:32px}h1{font-size:18px}table{border-collapse:collapse;width:100%}td{border:1px solid #999;padding:6px;vertical-align:top}tr:first-child td{font-weight:bold;background:#eee}</style>${html}`);
      await p.pdf({ path: path.join(dir, 'VIDEO-CUES.pdf'), format: 'Letter', landscape: true }); } }
  finally { await b.close(); } }

const office = {};
function osa(script, timeoutSec) { const r = spawnSync('osascript', ['-e', script], { timeout: timeoutSec * 1000, encoding: 'utf8' }); return r.error ? { ok: false, why: String(r.error.code || r.error) } : r.status ? { ok: false, why: (r.stderr || '').trim().slice(0, 200) } : { ok: true }; }
if (a.office) for (const cut of a.cuts) {
  const dir = path.join(pkg, 'cut' + cut), pptx = path.join(dir, NAME + '.pptx'), kpdf = path.join(dir, NAME + '.keynote.pdf'), ppdf = path.join(dir, NAME + '.pdf');
  await loadGuard('light');  // single-document PDF exports: light class (coordinator OK 2026-10-27)
  // Keynote: AppleScript `open` of a .pptx returns missing value on this Mac (sandbox import); try once, briefly.
  const k = a.keynote ? osa(`tell application "Keynote"\nset d to open (POSIX file "${pptx}")\ndelay 5\nexport front document to (POSIX file "${kpdf}") as PDF\nclose front document saving no\nend tell`, 90) : { ok: false, why: 'skipped (--no-keynote)' };
  const kp = k.ok && fs.existsSync(kpdf) ? +execFileSync('pdfinfo', [kpdf]).toString().match(/Pages:\s+(\d+)/)[1] : 0;
  // PowerPoint (sandboxed): open through LaunchServices so it gets read access, save the PDF inside its container, copy out.
  const box = path.join(os.homedir(), 'Library/Containers/com.microsoft.Powerpoint/Data/Documents/venue-export'); fs.mkdirSync(box, { recursive: true });
  const boxPdf = path.join(box, `cut${cut}.pdf`); fs.rmSync(boxPdf, { force: true });
  spawnSync('open', ['-a', 'Microsoft PowerPoint', pptx]);
  let pp = { ok: false, why: 'PowerPoint window never appeared' };
  for (let i = 0; i < 60; i++) { const r = spawnSync('osascript', ['-e', `tell application "Microsoft PowerPoint" to get name of every presentation`], { timeout: 8000, encoding: 'utf8' }); if ((r.stdout || '').includes(NAME)) { pp = osa(`tell application "Microsoft PowerPoint"\nsave presentation "${NAME}.pptx" in (POSIX file "${boxPdf}") as save as PDF\nclose presentation "${NAME}.pptx" saving no\nend tell`, 240); break; } spawnSync('sleep', ['3']); }
  if (fs.existsSync(boxPdf)) fs.copyFileSync(boxPdf, ppdf);
  const pn = fs.existsSync(ppdf) ? +execFileSync('pdfinfo', [ppdf]).toString().match(/Pages:\s+(\d+)/)[1] : 0;
  office[cut] = { keynote: k.ok && kp ? `opened + exported ${kp} pages` : 'skipped: ' + (k.why || 'no PDF'), powerpoint: pn ? `opened + exported ${pn} pages` : 'skipped: ' + (pp.why || 'no PDF written') };
  const ref = pn ? ppdf : kp ? kpdf : null;
  if (ref) { // contact sheet of what PowerPoint (or Keynote) actually renders
    const t = fs.mkdtempSync(path.join(os.tmpdir(), 'vxsheet-'));
    execFileSync('pdftoppm', ['-r', '24', '-png', ref, path.join(t, 'p')]);
    const pages = fs.readdirSync(t).filter(f => f.endsWith('.png')).sort().map(f => path.join(t, f));
    execFileSync('magick', ['montage', ...pages, '-tile', '6x', '-geometry', '+6+6', '-background', '#222', ...(fs.existsSync('/System/Library/Fonts/Supplemental/Arial.ttf') ? ['-font', '/System/Library/Fonts/Supplemental/Arial.ttf'] : []), path.join(dir, 'contact-sheet.png')]);
    fs.rmSync(t, { recursive: true, force: true });
  }
  console.log(`  cut ${cut}: Keynote ${office[cut].keynote}; PowerPoint ${office[cut].powerpoint}`);
}
summary.office = office;

// RERUN + manifest
fs.writeFileSync(path.join(pkg, 'RERUN.md'), `# Rebuild this package\n\nBuilt ${date} from \`${commit}\`${dirty ? ' (+ uncommitted changes)' : ''} of github.com/ibrews/pmre-2026-xr-chitect.\n\n\`\`\`bash\ncd /Users/alex/Archives/pmre2026-2026-10/export-package && git pull --rebase\nPLAYWRIGHT_CORE=/Users/alex/GH/xrsim/node_modules/playwright-core node tools/export_venue_package.mjs --cuts ${a.cuts.join(',')}${a.pick.map(p => ' --pick ' + p).join('')} --label ${a.label}\n\`\`\`\n\nUnchanged animations come from the MP4 cache (\`${a.cache}\`); only edited slides re-render. Exit code 1 = a venue check failed: read \`cut*/checks.json\` (or the console), each failure names the slide and what to change in the deck. For the submission build use \`--label final\`.\n\n**When the MBP is busy** (fleet load guard RED), walk the deck on another host and only write the PPTX here: on Archie run \`node tools/venue_capture.mjs --work G:/pmre-render/out/<label>-cut<NN> --cache G:/pmre-render/cache --pick cut=<NN>\` (TEMP/TMP/CHROME_BIN/PLAYWRIGHT_CORE on G:), \`scp -r\` the work dirs + cache back, then add \`--captured <dir> --cache <dir>/cache\` to the command above.${summary.cuts && Object.values(summary.cuts)[0] && Object.values(summary.cuts)[0].renderedOn ? '\n\nThis package: slides/videos rendered on ' + Object.values(summary.cuts)[0].renderedOn + '.' : ''}\n`);
const files = []; const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => { const f = path.join(d, e.name); if (e.isDirectory()) walk(f); else if (!/^MANIFEST\./.test(e.name)) files.push(f); }); walk(pkg);
const man = files.sort().map(f => ({ path: path.relative(pkg, f), bytes: fs.statSync(f).size, sha256: sha(f) }));
fs.writeFileSync(path.join(pkg, 'MANIFEST.json'), JSON.stringify({ ...summary, files: man }, null, 1));
fs.writeFileSync(path.join(pkg, 'MANIFEST.sha256'), man.map(m => `${m.sha256}  ${m.path}`).join('\n') + '\n');
console.log('\n' + JSON.stringify(summary, null, 1));
console.log(`\npackage: ${pkg}\n${anyFail ? 'VENUE CHECKS FAILED (see above)' : 'all venue checks passed'}`);
process.exit(anyFail ? 1 : 0);
