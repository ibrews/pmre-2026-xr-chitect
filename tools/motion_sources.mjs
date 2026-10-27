// Where a motion graphic named <name> lives, for every tool that renders or measures one (render_motion, motion_fit,
// venue_capture, venue_audit_selftest). Either media/motion/<name>.html, or the iframe slide module of the case in
// talk/sections.js with motion:"<name>", opened with that case's props in the #sdp fragment, exactly as the deck does.
import crypto from 'crypto'; import fs from 'fs'; import path from 'path'; import vm from 'vm';
import { fileURLToPath, pathToFileURL } from 'url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), MOT = path.join(ROOT, 'media/motion');
function moduleDef(id) {
  let def = null; const sb = { SD: { defineSlide: (d) => (def = d) }, document: { currentScript: null }, window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'slides', id, 'slide.js'), 'utf8'), sb);
  return def;
}
let cache = null;
function moduleCases() {
  if (cache) return cache;
  const ctx = {}; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'talk/sections.js'), 'utf8') + ';this.S=SECTIONS;', ctx);
  cache = {};
  for (const c of ctx.S.flatMap((s) => s.cases)) {
    if (!c.use || !c.motion) continue; const d = moduleDef(c.use); if (!d || !d.frame) continue;
    cache[c.motion] = { file: path.join(ROOT, 'slides', c.use, d.frame), frag: '#sdp=' + encodeURIComponent(JSON.stringify(Object.assign({}, d.props || {}, c.props || {}))) };
  }
  return cache;
}
export const motionSource = (n) => moduleCases()[n] || { file: path.join(MOT, n + '.html'), frag: '' };
// file:// URL with an optional query (e.g. '?t=0&look=sheet') placed before the props fragment
export const motionUrl = (n, query = '') => { const s = motionSource(n); return pathToFileURL(s.file).href + query + s.frag; };
export const motionNames = () => [...new Set([...fs.readdirSync(MOT).filter((f) => f.endsWith('.html') && f !== 'look.html').map((f) => f.replace(/\.html$/, '')), ...Object.keys(moduleCases())])];
// Changes when the graphic's html or its props change (EOL-normalized: same hash on a Windows checkout).
export const motionHash = (n) => { const s = motionSource(n); return crypto.createHash('sha256').update(fs.readFileSync(s.file, 'utf8').replace(/\r\n/g, '\n') + s.frag).digest('hex').slice(0, 16); };
