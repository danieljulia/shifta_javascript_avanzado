import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Project from "./components/Project.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/project/:id", component: Project }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
