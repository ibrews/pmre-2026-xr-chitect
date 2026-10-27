// Render seekable HTML motion graphics (media/motion/*.html exposing window.seek(sec) + window.MOTION_END) to MP4 + poster PNG.
// Deterministic: every frame is seek()-ed, never screen-recorded, so output is identical run to run.
// A page that sets window.MOTION_SFX gets a synthesized sound track (see below); every other page stays silent.
//   node tools/render_motion.mjs [name ...]            # default: every media/motion/*.html
//   PLAYWRIGHT_CORE=/path/to/node_modules/playwright-core FPS=30 node tools/render_motion.mjs lane
//   LOOK=sheet node tools/render_motion.mjs          # recolored for a styles/ look: <name>.<look>.mp4 + <name>-poster.<look>.png
//   LOOK=sheet POSTER_ONLY=1 node tools/render_motion.mjs   # just the final-frame posters (used by ?shot / PPTX exports)
// Needs: Google Chrome, ffmpeg, and a playwright-core install (export_video.py's cache is tried first).
import { createRequire } from 'module';
import { execFileSync } from 'child_process';
import fs from 'fs'; import path from 'path'; import os from 'os';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const MOTION = path.join(ROOT, 'media/motion'), OUT = path.join(MOTION, 'mp4');
const cands = [process.env.PLAYWRIGHT_CORE, path.join(os.homedir(), '.cache/spatial-deck/video-deps/node_modules/playwright-core')].filter(Boolean);
const pwPath = cands.find(p => fs.existsSync(path.join(p, 'package.json')));
if (!pwPath) { console.error('playwright-core not found. Set PLAYWRIGHT_CORE=/abs/path/node_modules/playwright-core (or run tools/export_video.py once to install it).'); process.exit(2); }
const { chromium } = require(pwPath);
const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FPS = +(process.env.FPS || 30), HOLD = +(process.env.HOLD || 2);
const LOOK = process.env.LOOK && process.env.LOOK !== 'noir' ? process.env.LOOK : '', SFX = LOOK ? '.' + LOOK : '', POSTER_ONLY = !!process.env.POSTER_ONLY;  // HOLD = seconds to hold the final frame
const names = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(MOTION).filter(f => f.endsWith('.html') && f !== 'look.html').map(f => f.replace(/\.html$/, ''));
fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: CHROME, args: ['--hide-scrollbars'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1, reducedMotion: 'no-preference' });
for (const n of names) {
  const url = 'file://' + path.join(MOTION, n + '.html') + '?t=0' + (LOOK ? '&look=' + LOOK : '');
  await page.goto(url); await page.waitForFunction(() => typeof window.seek === 'function');
  await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(LOOK ? 400 : 0);
  const end = await page.evaluate(() => window.MOTION_END);
  if (POSTER_ONLY) { await page.evaluate(s => window.seek(s), end); await page.waitForTimeout(150); const pp = path.join(OUT, n + '-poster' + SFX + '.png'); await page.screenshot({ path: pp }); console.log(`${n}: poster -> ${path.relative(ROOT, pp)}`); continue; }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-' + n + '-'));
  const frames = Math.ceil(end * FPS);
  for (let i = 0; i <= frames; i++) {
    await page.evaluate(s => window.seek(s), Math.min(i / FPS, end));
    await page.screenshot({ path: path.join(tmp, String(i).padStart(5, '0') + '.png') });
  }
  const mp4 = path.join(OUT, n + SFX + '.mp4'), poster = path.join(OUT, n + '-poster' + SFX + '.png');
  fs.copyFileSync(path.join(tmp, String(frames).padStart(5, '0') + '.png'), poster);
  // Sound cues (window.MOTION_SFX = [{ t, kind: 'honk', pitch }]): synthesized with ffmpeg (no audio assets), mixed at their times.
  const sfx = await page.evaluate(() => window.MOTION_SFX || null);
  const aud = sfx && sfx.length ? path.join(tmp, 'sfx.m4a') : null;
  if (aud) {
    const dur = frames / FPS + HOLD, ins = [], fl = [];
    sfx.forEach((c, i) => {  // a car horn: two detuned square tones, 0.28 s, soft attack/release, low-passed
      const f1 = (350 * (c.pitch || 1)).toFixed(1), f2 = (440 * (c.pitch || 1)).toFixed(1);
      ins.push('-f', 'lavfi', '-i', `aevalsrc=0.16*(sgn(sin(2*PI*${f1}*t))+sgn(sin(2*PI*${f2}*t)))*min(1\\,t/0.012)*min(1\\,(0.28-t)/0.05):s=48000:d=0.28`);
      fl.push(`[${i}]lowpass=f=2200,adelay=${Math.round(c.t * 1000)}:all=1[a${i}]`);
    });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...ins, '-filter_complex', fl.join(';') + ';' + sfx.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${sfx.length}:normalize=0,apad,atrim=0:${dur.toFixed(3)}[out]`, '-map', '[out]', '-c:a', 'aac', '-b:a', '128k', aud]);
  }
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(tmp, '%05d.png'), ...(aud ? ['-i', aud] : []),
    '-vf', `tpad=stop_mode=clone:stop_duration=${HOLD},format=yuv420p`, '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', ...(aud ? ['-c:a', 'copy', '-shortest'] : []), '-movflags', '+faststart', mp4]);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`${n}: ${frames + 1} frames @${FPS}fps -> ${path.relative(ROOT, mp4)} (${(fs.statSync(mp4).size / 1e6).toFixed(1)} MB)`);
}
await browser.close();
