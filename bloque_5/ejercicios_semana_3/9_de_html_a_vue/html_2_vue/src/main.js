// Punto de entrada de la app Vue 3
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Instalamos el router con .use() y montamos la app en el #app de index.html
createApp(App).use(router).mount('#app')
