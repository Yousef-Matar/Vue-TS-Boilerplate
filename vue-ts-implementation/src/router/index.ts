import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "HomeView",
		component: () => import("@/views/HomeView.vue"),
		meta: { title: "Home" }
	},
	{
		path: "/about",
		name: "AboutView",
		component: () => import("@/views/AboutView.vue"),
		meta: { title: "About Us" }
	},
	{
		path: "/login",
		name: "LoginView",
		component: () => import("@/views/LoginView.vue"),
		meta: { title: "Login" }
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
