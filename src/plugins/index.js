import cookie from 'js-cookie'
import axios from 'axios'
import {host, api} from './tools'

const install = (Vue, opt) => {
    // 1.增加实例函数
    Vue.prototype.$cookie = cookie

    Vue.prototype.$host = host

    Vue.prototype.$axios = axios
}

export default install
