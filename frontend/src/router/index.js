import {createRouter,createWebHashHistory} from 'vue-router'        //1
import Login from '../components/Login'
import SignIn from '../components/SignIn.vue'
import ApartmanDetails from '../components/ApartmanDetails'
import ApartmanServices from '../components/ApartmanServices'
import HouseDetails from '../components/HouseDetails'
import Chart from '../components/Chart'
import CalendarUklid from '../components/CalendarUklid'
// import Chart from '../components/Chart'


console.log('\n\n\n')
console.log('-------------        R    O    U    T    E   R--------------------------')
console.log(CalendarUklid)


const routes = [
    {path: "/login",name: "login", component: Login},
    {path: "/apartdetails",name: "apartmandetails", component: ApartmanDetails},
    {path: "/apartservices",name: "apartmanservices", component: ApartmanServices},
    {path: "/housedetails",name: "housedetails", component: HouseDetails},
    {path: "/chart",name: "chart", component: Chart},
    {path: "/calendaruklid",name: "calendaruklid", component: CalendarUklid},
    {path: "/signin",name: "signin", component: SignIn},
    // {path: "/project/:id",name: "project",
    //     component: () => import("../views/ToDoProject.vue"), props: true}
],

router = createRouter({                                             //4
    history: createWebHashHistory(),                                //5
    routes,
    scrollBehavior(to, from, savedPosition){return{top:0}}
})


export default router;