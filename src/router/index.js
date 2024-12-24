import { createRouter, createWebHistory } from "vue-router"

import MainPage from "../views/MainPage.vue"
import NotFoundPage from "../views/NotFoundPage.vue"
import OrderPage from "../views/OrderPage.vue"
import ProjectPage from "../views/ProjectPage.vue"
import ProjectsPage from "../views/ProjectsPage.vue"

const routes = [
	{ name: "main", path: "/", component: MainPage },
	{ name: "projects", path: "/projects", component: ProjectsPage },
	{ name: "project", path: "/projects/:projectName", component: ProjectPage },
	{ name: "new-order", path: "/new-order", component: OrderPage },
	{ name: "not-found", path: "/:pathMatch(.*)", component: NotFoundPage }
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
