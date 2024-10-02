import {createRouter,createWebHashHistory} from 'vue-router'        //1
import Login from '../components/Login'
import ApartmanDetails from '../components/ApartmanDetails'
import ApartmanServices from '../components/ApartmanServices'
import HouseDetails from '../components/HouseDetails'
import Chart from '../components/Chart'
import Test from '../components/Test'
// import Chart from '../components/Chart'

const routes = [
    {path: "/login",name: "login", component: Login},
    {path: "/apartdetails",name: "apartmandetails", component: ApartmanDetails},
    {path: "/apartservices",name: "apartmanservices", component: ApartmanServices},
    {path: "/housedetails",name: "housedetails", component: HouseDetails},
    {path: "/chart",name: "chart", component: Chart},
    {path: "/test",name: "test", component: Test},
    // {path: "/project/:id",name: "project",
    //     component: () => import("../views/ToDoProject.vue"), props: true}
],

router = createRouter({                                             //4
    history: createWebHashHistory(),                                //5
    routes,
    scrollBehavior(to, from, savedPosition){return{top:0}}
})


export default router;