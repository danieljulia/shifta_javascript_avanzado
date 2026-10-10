// Nombre y versión del caché. Al cambiarlo (v1 -> v2), el evento "activate"
// borra el caché antiguo y obliga a descargar los archivos nuevos (Vue 3).
const CACHE_NAME = 'vue-spa-pwa-v2';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/app.js',
    '/styles.css',
    '/manifest.json',
    '/offline.html',
    '/images/fallback.png',
    'https://unpkg.com/vue@3/dist/vue.global.js',
    'https://unpkg.com/vue-router@4/dist/vue-router.global.js',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
];

// Ciclo del service worker - evento "install":
// se ejecuta una vez al registrar el SW. Aquí precargamos en el caché
// todos los archivos necesarios para que la app funcione offline.
self.addEventListener('install', event => {
    event.waitUntil(
    caches.open(CACHE_NAME)
        .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Evento "fetch": intercepta cada petición de red de la página.
// Estrategia "cache first": si el recurso está en caché lo devolvemos;
// si no, lo pedimos a la red y lo guardamos para la próxima vez.
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
        // Si todo falla (sin red y sin caché), devolvemos respuestas de reserva:
        if (event.request.url.match(/\\.(jpg|jpeg|png|gif|svg)$/)) {
            return caches.match('/images/fallback.png'); // imagen de reserva
        }
        return caches.match('/offline.html'); // página offline de reserva
        })
    );
});

// Evento "activate": se ejecuta cuando el nuevo SW toma el control.
// Borramos los cachés de versiones anteriores para no acumular archivos viejos.
self.addEventListener('activate', event => {
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
