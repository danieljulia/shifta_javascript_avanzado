// Punto de entrada de la PWA: crea la app Vue 3 y la monta en index.html
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// El service worker lo registra automáticamente vite-plugin-pwa
// (ver vite.config.js); no hace falta registrarlo a mano aquí
createApp(App).mount('#app')
