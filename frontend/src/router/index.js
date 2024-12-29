import { createRouter, createWebHashHistory } from "vue-router"; //1
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

console.log("\n\n-----     R  O  U  T  E  R    --------");
console.log(CalendarUklid);

const routes = [
	{
		path: "/login",
		name: "login",
		component: Login
	},
	{
		path: "/home",
		name: "home",
		component: Home
	},
	{
		path: "/",
		name: "layout",
		component: Layout
	},
	{
		path: "/apartdetails",
		name: "apartmandetails",
		component: ApartmanDetails
	},
	{
		path: "/apartservices",
		name: "apartmanservices",
		component: ApartmanServices
	},
	{
		path: "/housedetails",
		name: "housedetails",
		component: HouseDetails
	},
	{
		path: "/chart",
		name: "chart",
		component: Chart
	},
	{
		path: "/calendaruklid",
		name: "calendaruklid",
		component: CalendarUklid
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
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})
*/
export default router;
