// Gypsum test viewer service worker — provider-neutral, relative paths.
// Caches only files inside the deployed folder. No remote dependencies.
const CACHE = 'gypsum-viewer-v1';
const PRECACHE = ['./', './index.html', './route_package_v1.json', './manifest.webmanifest', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    } catch (err) {
      return new Response('OFFLINE · this resource was never cached', {
        status: 503, headers: { 'Content-Type': 'text/plain' }
      });
    }
  })());
});
