import Vue from 'vue'
import Router from 'vue-router'

// import index from '../pages/index.vue'
const index = () => import('pages/index')
// import Home from '../pages/Home.vue'
const home = () => import('pages/Home')
// import HomeDetil from '../pages/HomeDetil.vue'
const homeDetil =() => import('pages/HomeDetil')

// import userRentMgt from '../pages/userRentMgt.vue'
const userRentMgt = () => import('pages/userRentMgt')
// import userMonneyMgt from '../pages/userMonneyMgt.vue'
const userMonneyMgt = () => import('pages/userMonneyMgt')


// import admininfo from '../pages/admininfo.vue'
const admininfo = () => import('pages/admininfo')
// import adminMonneyMgt from '../pages/adminMonneyMgt.vue'
const adminMonneyMgt = () => import('pages/adminMonneyMgt')
// import adminRentMgt from '../pages/adminRentMgt.vue'
const adminRentMgt = () => import('pages/adminRentMgt')
// import adminHouseMgt from '../pages/adminHouseMgt.vue'
const adminHouseMgt = () => import('pages/adminHouseMgt')

// import Login from '../pages/Login.vue'
const login = () => import('pages/login')
// import Register from '../pages/Register.vue'
const register = () => import('pages/register')

const roomDetail = () => import('pages/roomDetail')

// 成为房东
const checkIn = () => import('pages/checkIn')

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: index,
        children: [{
            path: '/home',
            component: home
        },{
            path: 'homeDetil',
            component: homeDetil
        },{
            path: 'userRentMgt',
            component: userRentMgt
        },{
            path: 'userMonneyMgt',
            component: userMonneyMgt
        },{
            path: 'admininfo',
            component: admininfo
        },{
            path: 'adminMonneyMgt',
            component: adminMonneyMgt
        },{
            path: 'adminRentMgt',
            component: adminRentMgt
        },{
            path: 'adminHouseMgt',
            component: adminHouseMgt
        },{
            path:'/roomDetail/:id',
            component: roomDetail
        },{
            path: 'checkIn',
            component: checkIn
        }]
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
    },
]

routes.forEach((route) => {
    route.beforeEnter = async (to, from, next) => {
        next()
    }
})

export default new Router({
//   mode: 'history',
  routes
})
