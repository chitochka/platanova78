import { createRouter, createWebHashHistory } from "vue-router"; //1
import { useAuthStore } from "../stores/auth.js";

import Login from "../components/Login";
import SignIn from "../components/SignIn.vue";
import ApartmanDetails from "../components/ApartmanDetails";
import ApartmanServices from "../components/ApartmanServices";
import HouseDetails from "../components/HouseDetails";
import Chart from "../components/Chart";
import CalendarUklid from "../components/CalendarUklid";
import Home from "../components/Home.vue";
import Layout from "../components/Layout.vue";
// import Chart from '../components/Chart'

const routes = [
	{
		path: "/login",
		name: "login",
		component: Login
	},
	{
		path: "/home",
		name: "home",
		component: Home,
		meta: { requiresAuth: true }
	},
	{
		path: "/",
		name: "layout",
		component: Layout
	},
	{
		path: "/apartdetails",
		name: "apartmandetails",
		component: ApartmanDetails,
		meta: { requiresAuth: true }
	},
	{
		path: "/apartservices",
		name: "apartmanservices",
		component: ApartmanServices,
		meta: { requiresAuth: true }
	},
	{
		path: "/housedetails",
		name: "housedetails",
		component: HouseDetails,
		meta: { requiresAuth: true }
	},
	{
		path: "/chart",
		name: "chart",
		component: Chart,
		meta: { requiresAuth: true }
	},
	{
		path: "/calendaruklid",
		name: "calendaruklid",
		component: CalendarUklid,
		meta: { requiresAuth: true }
	},
	{
		path: "/signin",
		name: "signin",
		component: SignIn
	}
];
// {path: "/project/:id",name: "project",
//     component: () => import("../views/ToDoProject.vue"), props: true}],

const router = createRouter({
	//4
	history: createWebHashHistory(), //5
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			top: 0
		};
	}
});

/*

router.beforeEach((to, from, next) => {
  const publicPages = ['/login','/signin','/'];
  const authRequired = !publicPages.includes(to.path);
  // const loggedIn = this.store.;
  const loggedIn = this.store;
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})
*/


router.beforeEach(to => {
	const store = useAuthStore();
	const isLoggedIn = store.isLoggedIn;

	console.info(" \n - - - R O U T E R  ==-> ");
	console.log(
		`
      (to.meta.requiresAuth && !store.isLoggedIn) =
       ( ${to.meta.requiresAuth} && ${!store.isLoggedIn}) =
      ${to.meta.requiresAuth && !store.isLoggedIn}
    `
	);

	if (to.meta.requiresAuth && !store.isLoggedIn) return "/login";
});

export default router;
