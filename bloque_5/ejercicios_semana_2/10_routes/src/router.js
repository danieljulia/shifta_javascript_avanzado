// Definición de las rutas de la aplicación.
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ContactView from './views/ContactView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ProjectDetailView from './views/ProjectDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/contacto', name: 'contact', component: ContactView },
  { path: '/proyectos', name: 'projects', component: ProjectsView },
  // ":id" es un parámetro dinámico: /proyecto/1, /proyecto/2...
  // Se lee en el componente con useRoute().params.id
  { path: '/proyecto/:id', name: 'project', component: ProjectDetailView },
  // Cualquier otra URL redirige a la home
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  // Hash history: las URLs son index.html#/proyectos.
  // Funciona en cualquier servidor estático sin configuración extra
  // (con createWebHistory el servidor tendría que devolver index.html en todas las rutas).
  history: createWebHashHistory(),
  routes
})
