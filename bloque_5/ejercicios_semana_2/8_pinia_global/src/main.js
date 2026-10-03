import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

const app = createApp(App)
// Registramos Pinia como plugin: así todos los componentes pueden usar los stores
app.use(createPinia())
app.mount('#app')
