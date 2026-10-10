// app.js — Migrado a Vue 3 + Vue Router 4
//
// En Vue 3 ya no existe "new Vue({...})": ahora se crea una instancia de
// aplicación con Vue.createApp() y se monta con app.mount(). El router
// tampoco se pasa como opción, se instala como plugin con app.use(router).

// 1) Definición de rutas: qué componente se muestra en cada URL.
//    Home, About, Contact y NotFound son objetos globales definidos en
//    templates/*.js (por eso esos scripts se cargan antes en index.html).
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  // Ruta "catch-all" (404): en Vue Router 4 el antiguo path '*' se escribe
  // con un parámetro dinámico + expresión regular que captura cualquier ruta.
  { path: '/:pathMatch(.*)*', component: NotFound }
];

// 2) Creación del router con la nueva API de Vue Router 4.
const router = VueRouter.createRouter({
  // createWebHashHistory() usa URLs con # (ej. index.html#/about):
  // funciona abriendo el archivo directamente, sin configurar el servidor.
  // La alternativa, createWebHistory(), genera URLs limpias (/about) pero
  // exige que el servidor devuelva index.html para cualquier ruta.
  history: VueRouter.createWebHashHistory(),
  routes
});

// 3) Creación de la aplicación Vue 3.
//    El objeto de opciones (data, methods, etc.) iría dentro de createApp({...}).
const app = Vue.createApp({});

// 4) Instalamos el router como plugin: a partir de aquí <router-view> y
//    <router-link> funcionan y todos los componentes tienen acceso a
//    this.$route y this.$router.
app.use(router);

// 5) Montamos la app sobre el elemento <div id="app"> del HTML.
app.mount('#app');
