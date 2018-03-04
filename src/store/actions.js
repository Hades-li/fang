
import * as types from './mutation-types'
import state from "./index"
import axios from "axios"
import qs from "qs"

import router from "router"
// import iView from "iView"

// document.cookie = 'key=value'; 
export const actions = {
    // 登陆 15913351558 234567
    logingo(context,data){
        axios.post(
            state.state.MainUrl + '/index?opt=100',
            qs.stringify(
                {
                    'mobile': data.user,
                    "password":data.password,
                    "smsCode":data.smsCode,
                    "type":data.type,
                    "deviceType":data.deviceType
                }
        )).then(function (response) {
            if(response.data.success == true){
                router.push({path: '/home'});
                // context.commit('SET_USER_IOFN', response.data)
            }else{
                alert(response.data.msg)
            }
        }).catch(function (error) {
                console.log(error);
        });
    },
    // 注册
    registers(context,data){
        console.log(data)
        axios.post(
            state.state.MainUrl + '/index?opt=103',
            qs.stringify(
                {
                    'mobile':data.user,
                    "password":data.password1,
                    "imgCode":'',
                    "verificationCode":data.password,
                    "deviceType":"1"
                }
        )).then(function (response) {
            if(response.data.success == false){
                alert(response.data.msg)
            }else if(response.data.success == true){
                alert(response.data.msg) 

            }
        }).catch(function (error) {
                console.log(error);
        });
    },
    // 短信验证
    smsMsg(context,data){
        axios.post(
            state.state.MainUrl + '/index?opt=101',
            qs.stringify(
                {
                    'mobile':data.mobile,
                    "sms_type":data.sms_type,
                }
        )).then(function (response) {
                if(response.data.success == false){

                    alert(response.data.msg) 

                }else if(response.data.success == true){

                }

        }).catch(function (error) {
                console.log(error);
        });
    },

    changeTabBar(context,tabBar){
        context.commit(types.SET_TABBAR,{
            tabBar:tabBar
        })
    }

};
export const mutations = {
    [types.SET_TABBAR] (state,{tabBar}){
        state.tabBar = tabBar
    },
    // [types.SET_USER_IOFN](state,data){
    //     state.set_user_Info = data
    // }
};


