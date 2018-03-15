
import * as types from './mutation-types'
import state from "./index"
import axios from "axios"
import qs from "qs"
import cookie from "js-cookie"

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
            if(response.data.success == true) {
                console.log(cookie.$cookie)
                cookie.set('userInfo',JSON.stringify(response.data))
                router.push({path: '/admininfo'});
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
                alert("恭喜您 注册成功 请放回登录")

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
    // 首页banenr
    setBanner(context){
        axios.post(state.state.MainUrl + '/index?opt=1000')
            .then(function (response) {
                response.data.success == false?alert(response.data.msg):context.commit('SET_BANNER', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 房源列表  type列表类型
    setHouseList(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=300',
            qs.stringify(
                {
                    'type':type,
                    "distance":800,
                    "currPage":1,
                    "pageSize":20,
                    "longitude":"",
                    "latitude":""
                }
        )).then(function (response) {
            response.data.success == false?alert(response.data.msg):context.commit('SET_HOUSE_LIST', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },
    // 获取省份列表
    setProvince(context){
        axios.post(
            state.state.MainUrl + '/index?opt=310')
            .then(function (response) {
            response.data.success == false?console.log(response.data.msg):context.commit('SET_PROVINCE', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 获取市列表
    setCity(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=311',
            qs.stringify(
                {
                    'region_type':type.region_type,
                    "parent_id":type.parent_id,

                }
        )).then(function (response) {
            response.data.success == false?console.log(response.data.msg):context.commit('SET_CITY', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },
    // 获取区列表
    setCounty(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=311',
            qs.stringify(
                {
                    'region_type':type.region_type,
                    "parent_id":type.parent_id,

                }
        )).then(function (response) {
            response.data.success == false?console.log(response.data.msg):context.commit('SET_COUNTY', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 发布房源
    sendHouse(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=302',
            qs.stringify(
                {
                    "landlordId": type.landlordId, /** 房东ID **/
                    "title": type.title, /** 标题 **/
                    "houseNo": type.houseNo, /** 房源编号，唯一 **/
                    "addressProvince": type.addressProvince, /** 省 **/
                    "addressCity": type.addressCity, /** 市 **/
                    "addressCounty": type.addressCounty, /** 县 **/
                    "addressInfo": type.addressInfo, /** 房源地址 **/
                    "addressHousingEstate": type.addressHousingEstate, /** 小区楼盘 **/
                    "addressArea": type.addressArea, /** 所属片区 **/
                    "addressLongitude": type.addressLongitude, /** 经度 **/
                    "addressLatitude": type.addressLatitude, /** 纬度 **/
                    "isBrandApartment": type.isBrandApartment, /** 是否是品牌公寓 **/
                    "brandApartmentName": type.brandApartmentName, /** 品牌公寓名称 **/
                    "houseType": type.houseType, /** 房屋类型，1住宅，2sohu公寓， 3外口公寓，4商办公寓 **/
                    "houseFloor": type.houseFloor, /** 房源楼层 **/
                    "houseFloorMax": type.houseFloorMax, /** 房屋最高楼层 **/
                    "houseArea": type.houseArea, /** 房源面积(m*m) **/
                    "houseTowards": type.houseTowards, /** 房屋朝向 **/
                    "decorationType": type.decorationType, /** 装修程度：1豪装  2精装  3简装 **/
                    "ancillaryFacilities": type.ancillaryFacilities, /** 附属设施 **/
                    "apartmentConvention": type.apartmentConvention, /** 公寓公约 **/
                    "rentType": type.rentType, /** 租赁方式（1：整租，2：合租） **/
                    "rentPeroidMin": type.rentPeroidMin, /** 租赁期限-起租 **/
                    "rentPeroidMax": type.rentPeroidMax, /** 租赁期限-止租 **/
                    "payType": type.payType, /** 付租方式，1月付  2季付  3半年付  4年付 5一次性付 **/
                    "discountType": type.discountType, /** 优惠类型,0无优惠，1租金打折,2减少金额 **/
                    "discountValue": type.discountValue, /** 优惠值 **/
                    "houseRental": type.houseRental, /** 房子租金 **/
                    "houseDeposit": type.houseDeposit, /** 押金 **/
                    "traffic": type.traffic, /** 附近交通 **/
                    "houseContent": type.houseContent, /** 详情描述 **/
                    "isInvoice": type.isInvoice, /** 是否提供发票 **/
                    "createTime": type.createTime, /** 创建时间 **/
                    "contacts": type.contacts, /** 看房联系人 **/
                    "contactsPhone": type.contactsPhone, /** 看房联系电话 **/
                    "houseTypeRoomCount": type.houseTypeRoomCount, /** 户型-室 **/
                    "houseTypeHallCount": type.houseTypeHallCount, /** 户型-厅 **/
                    "houseTypeKitchenCount": type.houseTypeKitchenCount, /** 户型-厨房 **/
                    "houseTypeToiletCount": type.houseTypeToiletCount, /** 户型-卫 **/
                    "houseTypeBalconyCount": type.houseTypeBalconyCount, /** 户型-阳台 **/
                    "landlordOwnershipRelation": type.landlordOwnershipRelation, /** 房东产权人关系（1：同一人，2：代理关系，3：二房东） **/
                    "ownershipNumber": type.ownershipNumber, /** 权属编号 **/
                    "payFees": type.payFees, /** 其它费用**/
                    "landlordPayFees": type.landlordPayFees, /** 承租人自付费用**/
                    "renterPayFees": type.renterPayFees, /** 出租人代付费用**/
                    "houseStatus": type.houseStatus /** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/

                }
        )).then(function (response) {
            response.data.success == false?console.log(response.data.msg):context.commit('SEND_HOUSE', response.data.data)
        }).catch(function (error) {
            console.log(error);
        });
    },







    changeTabBar(context,tabBar){
        context.commit(types.SET_TABBAR,{
            tabBar:tabBar
        })
    },
    setCurrentTab(context,currentTab){
        context.commit(types.SET_CURRENT_TAB,{
            currentTab:currentTab
        })
    },
    setSendHouse(context,val){
        context.commit(types.SET_SEND_HOUSE,{
            val:val
        })
    }

};
export const mutations = {
    [types.SET_TABBAR] (state,{tabBar}){
        state.tabBar = tabBar
    },
    [types.SET_BANNER](state,data){
        state.banner_list = data
    },
    [types.SET_HOUSE_LIST](state,data){
        state.house_list = data
    },
    [types.SET_PROVINCE](state,data){
        state.province_list = data
    },
    [types.SET_CITY](state,data){
        state.city_list = data
    },
    [types.SET_CURRENT_TAB](state,data){
        state.currentTab = data.currentTab
    },
    [types.SET_SEND_HOUSE](state,data){
        state.sendHouse = data.val
    },
    [types.SET_COUNTY](state,data){
        state.county_list = data
    },
};


