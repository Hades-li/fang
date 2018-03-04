import cookie from 'js-cookie'

const install = (Vue, opt) => {
    // 1.增加实例函数
    Vue.prototype.$cookie = cookie
}

export default install
