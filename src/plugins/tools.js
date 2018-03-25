import cookie from 'js-cookie'


export const host = 'http://120.79.140.174:10080';
// export const host = 'http://183g310o99.imwork.net:10639';
export const api = {
    imgupload: host + '/global/imgupload',
    roomDetail: host + '/index?opt=301'
};

//验证登录
export const checkLogin = () => {
    const cookieData = cookie.get('userInfo');
    if (cookieData){
        const userInfo = JSON.parse(cookieData).data;
        if (userInfo.userName && userInfo.userId){
            return true
        } else {
            return false
        }
    }
};
