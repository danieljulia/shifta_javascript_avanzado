// Configuración del router de Vue 3 (vue-router 4)
// El router convierte la web en una SPA: cambia de "página" sin recargar
import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Project from "./components/Project.vue"

// Cada ruta asocia una URL con el componente que se muestra en <router-view>
// "/project/:id" usa un parámetro dinámico: :id se lee con $route.params.id
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/project/:id", component: Project }
]

// createWebHistory usa URLs "limpias" (sin #) gracias a la History API del navegador
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
