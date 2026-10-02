// Généré par tools/build-sw.mjs — ne pas modifier à la main.
const VERSION = 'piano-5cc5fdb36f07';
const ASSETS = ["./","audio/piano/A0.mp3","audio/piano/A1.mp3","audio/piano/A2.mp3","audio/piano/A3.mp3","audio/piano/A4.mp3","audio/piano/A5.mp3","audio/piano/A6.mp3","audio/piano/A7.mp3","audio/piano/C1.mp3","audio/piano/C2.mp3","audio/piano/C3.mp3","audio/piano/C4.mp3","audio/piano/C5.mp3","audio/piano/C6.mp3","audio/piano/C7.mp3","audio/piano/C8.mp3","audio/piano/Ds1.mp3","audio/piano/Ds2.mp3","audio/piano/Ds3.mp3","audio/piano/Ds4.mp3","audio/piano/Ds5.mp3","audio/piano/Ds6.mp3","audio/piano/Ds7.mp3","audio/piano/Fs1.mp3","audio/piano/Fs2.mp3","audio/piano/Fs3.mp3","audio/piano/Fs4.mp3","audio/piano/Fs5.mp3","audio/piano/Fs6.mp3","audio/piano/Fs7.mp3","css/app.css","fonts/LICENSE-inter.txt","fonts/LICENSE-literata.txt","fonts/inter-latin-wght-normal.woff2","fonts/literata-latin-wght-italic.woff2","fonts/literata-latin-wght-normal.woff2","icons/favicon.svg","icons/icon-192.png","icons/icon-512.png","icons/icon.svg","icons/maskable-512.png","index.html","js/app.js","js/audio.js","js/charts.js","js/content/excerpts.js","js/content/index.js","js/content/n1/impro.js","js/content/n1/interpretation.js","js/content/n1/lecture.js","js/content/n1/technique.js","js/content/n1/theorie.js","js/content/n2/impro.js","js/content/n2/interpretation.js","js/content/n2/lecture.js","js/content/n2/technique.js","js/content/n2/theorie.js","js/content/pieces.js","js/diagrams.js","js/metronome.js","js/midi.js","js/score.js","js/store.js","js/toast.js","js/util.js","js/widgets.js","manifest.webmanifest","vendor/abcjs-LICENSE.md","vendor/abcjs-basic-min.js","vendor/abcjs-basic-min.js.LICENSE"];
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
