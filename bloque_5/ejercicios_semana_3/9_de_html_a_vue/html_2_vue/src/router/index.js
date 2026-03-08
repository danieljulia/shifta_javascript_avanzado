import { createRouter, createWebHistory } from "vue-router"

import ProjectList from "../components/ProjectList.vue"
import ProjectDetail from "../components/ProjectDetail.vue"

const routes = [

{
path: "/",
component: ProjectList
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