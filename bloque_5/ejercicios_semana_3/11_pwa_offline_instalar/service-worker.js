const CACHE_NAME = "pwa-offline-instalar-v2";

// Archivos que se guardan en caché al instalar el service worker.
// ¡Importante! Aquí tienen que estar también la página offline y su CSS.
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./offline.html",
  "./offline.css",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// 1. INSTALL: se ejecuta una vez, al registrar el service worker.
//    Guardamos todos los archivos en caché.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// 2. ACTIVATE: borramos las cachés antiguas de versiones anteriores.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// 3. FETCH: interceptamos todas las peticiones de la app.
self.addEventListener("fetch", (event) => {
  // a) Navegación (el usuario abre o recarga una página):
  //    intentamos ir a la red y, si falla (sin conexión),
  //    mostramos nuestra página offline personalizada.
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("./offline.html"))
    );
    return;
  }

  // b) Resto de archivos (imágenes, manifest, etc.):
  //    estrategia cache-first → primero miramos en caché,
  //    y solo si no están los pedimos a la red.
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
