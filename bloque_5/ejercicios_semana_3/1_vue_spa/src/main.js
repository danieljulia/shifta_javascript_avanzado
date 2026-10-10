// Punto de entrada de la aplicación Vue 3
// createApp crea la instancia de la app a partir del componente raíz (App.vue)
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// .use(router) instala el plugin vue-router (enrutado SPA)
// .mount('#app') monta la app en el <div id="app"> de index.html
createApp(App).use(router).mount('#app')
