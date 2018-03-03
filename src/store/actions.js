
import * as types from './mutation-types'
import state from "./index"
import axios from "axios"
import qs from "qs"
import router from "router"
// import iView from "iView"

export const actions = {
    // 登陆
    logingo(context,data){
        axios.post(
            state.state.MainUrl + '/index?opt=100',
            qs.stringify(
                {
                    'mobile': 15913351558,
                    "password":234567,
                    "smsCode":'',
                    "type":2,
                    "deviceType":"1"
                }
        )).then(function (response) {
                console.log(response);
                // router.go({name:"home"})
                router.push({path: '/home'});
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
                    "verificationCode":data.password3,
                    "deviceType":"1"
                }
        )).then(function (response) {
            if(response.data.success == false){
                iView.Message.error({
                    content:response.data.msg
                })
            }else if(response.data.success == true){
                iView.Message.success({
                    content:response.data.msg
                })
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
                    iView.Message.error({
                        content:response.data.msg
                    })
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
    }
};


