import { createRouter, createWebHistory } from "vue-router"

import Home from "../components/Home.vue"
import ProjectDetail from "../components/ProjectDetail.vue"

const routes = [

{
path: "/",
component: Home
},

{
path: "/project/:id",
component: ProjectDetail
}

]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router