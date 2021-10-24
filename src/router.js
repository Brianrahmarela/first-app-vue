import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "",
			component: () => import("./components/Main.vue"),
			children: [
				{
					path: "/",
					name: "dashboard",
					component: () => import("./components/views/Dashboard.vue"),
				},
				{
					path: "/upload",
					name: "upload",
					component: () => import("./components/views/Upload.vue"),
				},
				{
					path: "/summary",
					name: "summary",
					component: () => import("./components/views/Summary.vue"),
				},
			],
		},
	],
});

export default router;
