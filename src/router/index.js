import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('pages/index')
const home = () => import('pages/Home')
const homeDetil =() => import('pages/HomeDetil')
const userRentMgt = () => import('pages/userRentMgt')
const userMonneyMgt = () => import('pages/userMonneyMgt')
const admininfo = () => import('pages/admininfo')
const adminMonneyMgt = () => import('pages/adminMonneyMgt')
const adminRentMgt = () => import('pages/adminRentMgt')
const adminHouseMgt = () => import('pages/adminHouseMgt')

const login = () => import('pages/login')
const register = () => import('pages/register')
const roomDetail = () => import('pages/roomDetail')
// 成为房东
const checkIn = () => import('pages/checkIn')
// 发布房源
const release = () => import('pages/release')

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
            path:'/roomDetail',
            component: roomDetail
        },{
            path: 'checkIn',
            component: checkIn
        },{
            path: 'release',
            component: release
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
