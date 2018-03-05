import cookie from 'js-cookie'
import axios from 'axios'
import * as tools from './tools'

const install = (Vue, opt) => {
    // 1.增加实例函数
    Vue.prototype.$cookie = cookie

    Vue.prototype.$host = tools.host

    Vue.prototype.$axios = axios

    Vue.prototype.$checkLogin = tools.checkLogin
}

export default install
