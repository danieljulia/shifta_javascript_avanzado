const CACHE_NAME = 'vue-spa-pwa-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/app.js',
    '/styles.css',
    '/manifest.json',
    '/offline.html',
    '/images/fallback.png',
    'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.5.3/vue-router.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
    caches.open(CACHE_NAME)
        .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
    caches.match(event.request)
        .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
            .then(response => {
            // Cache new responses for future offline use
            if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
                });
            }
            return response;
            });
        })
        .catch(() => {
        // Fallback for image requests
        if (event.request.url.match(/\\.(jpg|jpeg|png|gif|svg)$/)) {
            return caches.match('/images/fallback.png');
        }
        // Fallback for HTML
        return caches.match('/offline.html');
        })
    );
});

self.addEventListener('activate', event => {
    // Clean up old cache versions
    event.waitUntil(
    caches.keys().then(cacheNames => {
        return Promise.all(
        cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
            }
        })
        );
    })
    );
});
    