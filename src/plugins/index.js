import cookie from 'js-cookie'
import axios from 'axios'

const install = (Vue, opt) => {
    // 1.增加实例函数
    Vue.prototype.$cookie = cookie

    Vue.prototype.$host = 'http://120.79.140.174:10080'

    Vue.prototype.$axios = axios
}

export default install
