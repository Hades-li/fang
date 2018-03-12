import cookie from 'js-cookie'

export const host = '/api'
export const api = {
    imgupload: host + '/global/imgupload',
    roomDetail: host + '/index?opt=301'
}

//验证登录
export const checkLogin = () => {
    const cookieData = cookie.get('userInfo')
    if (cookieData){
        const userInfo = JSON.parse(cookieData).data
        if (userInfo.userName && userInfo.userId){
            return true
        } else {
            return false
        }
    }
}
