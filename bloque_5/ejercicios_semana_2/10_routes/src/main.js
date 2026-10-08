// Punto de entrada: carga los datos, crea la app, instala el router y la monta.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { loadData } from './store.js'
import './style.css'

// Descargamos el JSON ANTES de montar la app, así todas las páginas
// tienen ya los datos disponibles cuando se muestran.
loadData().then(() => {
  createApp(App)
    .use(router)      // registra <RouterLink>, <RouterView> y $route / $router
    .mount('#app')    // pinta la aplicación dentro de <div id="app">
})
