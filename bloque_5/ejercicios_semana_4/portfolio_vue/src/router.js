import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/Home.vue"
import Project from "./components/Project.vue"
import ProjectDetails from "./components/ProjectDetails.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/project/:id", component: ProjectDetails }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
