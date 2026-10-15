// ---------- 1. Registrar el service worker ----------
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.error("Error al registrar el SW", err));
}

// ---------- 2. Aviso de conexión online / offline ----------
const aviso = document.getElementById("aviso-offline");

function actualizarAviso() {
  // navigator.onLine es true si hay conexión
  aviso.style.display = navigator.onLine ? "none" : "block";
}

// Los eventos "online" y "offline" saltan al cambiar la conexión
window.addEventListener("online", actualizarAviso);
window.addEventListener("offline", actualizarAviso);
actualizarAviso(); // comprobar al cargar la página

// ---------- 3. Botón de instalar la app ----------
const btnInstalar = document.getElementById("btn-instalar");
let eventoInstalar = null;

// El navegador lanza "beforeinstallprompt" cuando la PWA es instalable.
// Guardamos el evento para lanzarlo nosotros al pulsar el botón.
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();       // evitar el banner automático del navegador
  eventoInstalar = event;
  btnInstalar.style.display = "inline-block";
});

btnInstalar.addEventListener("click", async () => {
  if (!eventoInstalar) return;
  eventoInstalar.prompt();                       // mostrar el diálogo de instalación
  const { outcome } = await eventoInstalar.userChoice;
  console.log("El usuario eligió:", outcome);    // "accepted" o "dismissed"
  eventoInstalar = null;
  btnInstalar.style.display = "none";
});

// Cuando la app ya está instalada, ocultamos el botón
window.addEventListener("appinstalled", () => {
  btnInstalar.style.display = "none";
  console.log("¡App instalada!");
});
