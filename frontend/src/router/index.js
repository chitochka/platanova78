import {createRouter,createWebHashHistory} from 'vue-router'        //1
import Login from '../components/Login'
import ApartmanDetails from '../components/ApartmanDetails'
import ApartmanServices from '../components/ApartmanServices'

const routes = [
    {path: "/login",name: "login", component: Login},
    {path: "/apartdetails",name: "apartmandetails", component: ApartmanDetails},
    {path: "/apartservices",name: "apartmanservices", component: ApartmanServices},
    // {path: "/project/:id",name: "project",
    //     component: () => import("../views/ToDoProject.vue"), props: true}
],

router = createRouter({                                             //4
    history: createWebHashHistory(),                                //5
    routes,
    scrollBehavior(to, from, savedPosition){return{top:0}}
})


export default router;