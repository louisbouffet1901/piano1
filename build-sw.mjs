// Génère sw.js avec la liste des fichiers à mettre en cache et une version (empreinte du contenu).
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';
import { join, relative } from 'path';
const root = new URL('..', import.meta.url).pathname;
const skip = new Set(['tools', '.git', 'sw.js', 'README.md', '.nojekyll']);
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    if (skip.has(f) || f.startsWith('.')) continue;
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p); else files.push(relative(root, p));
  }
})(root);
files.sort();
const hash = createHash('sha256');
for (const f of files) hash.update(f).update(readFileSync(join(root, f)));
const version = hash.digest('hex').slice(0, 12);
const sw = `// Généré par tools/build-sw.mjs — ne pas modifier à la main.
const VERSION = 'piano-${version}';
const ASSETS = ${JSON.stringify(['./', ...files], null, 0)};
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match('./'))));
});
`;
writeFileSync(join(root, 'sw.js'), sw);
console.log('sw.js :', files.length, 'fichiers, version', version);
