
import * as types from './mutation-types'
import state from "./index"
import axios from "axios"
import qs from "qs"
import cookie from "js-cookie"
import md5 from 'js-md5';
import router from "router"
// import iView from "iView"

// document.cookie = 'key=value';
export const actions = {
    // 登陆 15913351558 234567 18859253925
    logingo(context,data){
        axios.post(
            state.state.MainUrl + '/index?opt=100',
            qs.stringify(
                {
                    'mobile': data.user,
                    "password":md5(data.password),
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
                    "password":md5(data.password1),
                    "imgCode":'',
                    "verificationCode":data.password3,
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
                    // window.sessionStorage.setItem("time",60)
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
                    "latitude":"",
                    "currPage":1,
                    "pageSize":10,
                    "province":'',
                    "city":''
                }
        )).then(function (response) {
            response.data.success == false?alert(response.data.msg):context.commit('SET_HOUSE_LIST', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },
    // 房源详情
    setHouseDetail(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=301',
            qs.stringify(
                {
                    'id':type.id,
                }
        )).then(function (response) {
            response.data.success == false?alert(response.data.msg):context.commit('SET_HOUSE_DRTAIL', {data:response.data.data,config:type})
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
                    // "houseNo": 1, /** 房源编号，唯一 **/
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
                    // "createTime": type.createTime, /** 创建时间 **/
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
                    // "houseStatus": type.houseStatus, /** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/
                    "housePicture":type.housePicture, // 房子图片
                    "ownershipCertificate":type.ownershipCertificate, //权属证明(多个用“,”分割）
                    "leaseContract":type.leaseContract, //权属证明(多个用“,”分割）
                    "agentAuthorization":type.agentAuthorization //代理人委托书(多个用“,”分割）
                }
        )).then(function (response) {
            alert(response.data.msg)
            // response.data.success == false?alert(response.data.msg):context.commit('SEND_HOUSE', response.data.data)
        }).catch(function (error) {
            console.log(error);
        });
    },

    // becomeHouse成为房东
    becomeHouse(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=405',
            qs.stringify(
                {
                    "address_province":type.address_province,
                    "address_city":type.address_city,
                    "address_county":type.address_city, 
                    "address":type.address,
                    "houseResource":type.houseResource,
                    "ownershipNumber":type.ownershipNumber,
                    "user_id":type.user_id,
                }
        )).then(function (response) {
            alert(response.data.msg)
            // response.data.success == false?console.log(response.data.msg):alert(response.data.msg)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 预约看房
    //verificationCode:短信验证码
    //mobile:手机
    // 订单列表


    // 订单列表 查看订单状态type -1取消，1未签约，2待签约，3签约
    setOrder(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=401',
            qs.stringify(
                {
                    "order_id":type.order_id,
                    "landlord_id":type.landlord_id,
                    "user_id":type.user_id, 
                    "type":type.type,
                }
        )).then(function (response) {
            // console.log(response)
            response.data.success == false?alert(response.data.msg):context.commit('SEND_ORDER', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 查看合同
    setContract(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=406',
            qs.stringify(
                {
                    "pid":type.order_id,
                }
        )).then(function (response) {
            response.data.success == false?alert(response.data.msg):context.commit('SET_CONTRACT', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 获取账单列表
    setBill(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=402',
            qs.stringify(
                {
                    "order_id":type.order_id,
                    "landlord_id":type.landlord_id,
                    "user_id":type.user_id
                }
        )).then(function (response) {
            response.data.success == false?alert(response.data.msg):context.commit('SET_BILL', response.data.data)
        }).catch(function (error) {
                console.log(error);
        });
    },

    // 个人信息:http://120.79.140.174:10080/index?opt=200&userId=7

    // 修改个人信息:http://120.79.140.174:10080/index?opt=201&userName=n7123123&userId=16&email=11111111111111@qq.com&headImage=1&sex=2

    // 获取身份证信息: http://120.79.140.174:10080/index?opt=203&userId=1

    // 房源收藏列表: http://120.79.140.174:10080/index?opt=206&userId=1&currPage=1&pageSize=10

    // 收藏或取消收藏房源: http://120.79.140.174:10080/index?opt=207&userId=1&houseId=1&remark=备注

    // 获取资金页面接口：http://120.79.140.174:10080/index?opt=501&pageType=3&userId=2&reciveUserId=1111&transAmt=1033.01&orderNo=1234511111111
    // pageType=1注册，2绑卡，3支付，3提现

    // 获取个人信息
    setUserInfo(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=200',
            qs.stringify(
                {
                    "userId":type,
                }
        )).then(function (response) {
            console.log(response.data.data)
            context.commit('SET_USER_INFO', response.data.data)

        }).catch(function (error) {
                
        });
    },

    // 修改个人信息
    changeUserInfo(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=201',
            qs.stringify(
                {
                    "userName":type.userName,
                    "userId":type.userId,
                    "email":type.email,
                    "headImage":type.headImage,
                    "sex":'2'
                }
        )).then(function (response) {
           
        }).catch(function (error) {
                
        });
    },

    // 获取身份证信息
    setIdCard(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=203',
            qs.stringify(
                {
                    "userId":type
                }
        )).then(function (response) {
            context.commit('SET_ID_CARD', response.data.data)
        }).catch(function (error) {
                
        });
    },

    // 房源收藏列表
    setLikeList(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=206',
            qs.stringify(
                {
                    "userId":type,
                    // "currPage":1,
                    // "pageSize":10
                }
        )).then(function (response) {
            context.commit('SET_LIKE_LISE', response.data.data)
        }).catch(function (error) {
                
        });
    },

    // 收藏或取消收藏房源
    setLikeHouse(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=207',
            qs.stringify(
                {
                    "userId":1,
                    "houseId":1,
                    "remark":"备注"
                }
        )).then(function (response) {
            
        }).catch(function (error) {
                
        });
    },

    // 我的房源  http://120.79.140.174:10080/index?opt=303&userId=1&status=1   可用余额 balance 可取现余额 cash_balance 账户余额 acct_balance 
    setMyHouse(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=303',
            qs.stringify(
                {
                    "userId":type,
                    "status":-1,
                }
        )).then(function (response) {
            context.commit('SET_MY_HOUSE', response.data.data)
        }).catch(function (error) {
                
        });
    },
    setBills(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=204',
            qs.stringify(
                {
                    "userId":type,
                }
        )).then(function (response) {
            context.commit('SET_BILL_BOSS', response.data.data)
        }).catch(function (error) {
                
        });
    },
    setBillList(context,type){
        axios.post(
            state.state.MainUrl + '/index?opt=210',
            qs.stringify(
                {
                    "userId":type,
                }
        )).then(function (response) {
            context.commit('SET_BILL_LIST', response.data.data)
        }).catch(function (error) {
                
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
        context.commit(types.SET_SEND_HOUSE,val)
    },
    becomeBoss(context,val){
        context.commit(types.BECOME_BOSS,val)
    }

};
export const mutations = {
    [types.BECOME_BOSS] (state,data){
        state.isBoss = data
    },
    [types.SET_BILL] (state,data){
        function timeFormat(nS) {     
            return new Date(parseInt(("/Date("+nS+")/").substr(6, 13))).toLocaleDateString();     
        };
        for(let i = 0;i<data.length;i++){
            data[i]["repaymentTime"] = timeFormat(data[i]["repaymentTime"])
        }
        state.billList = data
    },
    [types.SET_CONTRACT] (state,data){

        state.contract = data
    },
    [types.SET_TABBAR] (state,{tabBar}){
        state.tabBar = tabBar
    },
    [types.SET_BANNER](state,data){
        // console.log(data)
        for(var i = 0;i<data.length;i++){
            data[i].imageUrl = state.MainUrl+data[i].imageUrl
        }
        state.banner_list = data
    },
    [types.SET_HOUSE_LIST](state,data){
        for(let i = 0;i<data.length;i++){

            data[i]["housePicture"] = state.MainUrl + data[i]["housePicture"]
        }
        state.house_list = data
    },
    [types.SET_PROVINCE](state,data){
        state.province_list = data
        for(let i = 0;i<data.length;i++){
            data[i]["region"] = data[i].regionId+data[i].name
        }
    },
    [types.SET_CITY](state,data){
        state.city_list = data
        for(let i = 0;i<data.length;i++){
            data[i]["region"] = data[i].regionId+data[i].name
        }
    },
    [types.SET_COUNTY](state,data){
        state.county_list = data
        for(let i = 0;i<data.length;i++){
            data[i]["region"] = data[i].regionId+data[i].name
        }
    },
    [types.SET_CURRENT_TAB](state,data){
        state.currentTab = data.currentTab
    },
    [types.SET_SEND_HOUSE](state,data){

        state.sendHouse = data
    },
    [types.SEND_ORDER](state,data){

        for(let i = 0;i<data.length;i++){
            data[i]["houseInfoVo"]["orderStatusStr"] = data[i]["orderStatusStr"]
            data[i]["houseInfoVo"]["payType"] = data[i]["payType"]
            data[i]["houseInfoVo"]["housePicture"] = state.MainUrl + data[i]["houseInfoVo"]["housePicture"]
        }
        state.orderList = data
    },
    [types.SET_HOUSE_DRTAIL](state,data){
        for(let i = 0;i<data.data.housePictures.length;i++){
            data.data.housePictures[i]["picture"] = state.MainUrl + data.data.housePictures[i]["picture"]
        }
        function timeFormat(nS) {     
            return new Date(parseInt(("/Date("+nS+")/").substr(6, 13))).toLocaleDateString();     
        };
        state.orderList[data.config.ind].houseInfoVo.createTime = timeFormat(state.orderList[data.config.ind].houseInfoVo.createTime)
        state.orderList[data.config.ind].appointTime = timeFormat(state.orderList[data.config.ind].appointTime)
        state.orderList[data.config.ind].createTime = timeFormat(state.orderList[data.config.ind].createTime)
        data.data["orderList"] = state.orderList[data.config.ind]
        state.houseDetail = data.data
        console.log(state.houseDetail)
    },
    [types.SET_USER_INFO](state,data){
        state.userInfo = data
    },    
    [types.SET_ID_CARD](state,data){
        state.idCard = data  
    },
    [types.SET_LIKE_LISE](state,data){
        for(let i = 0;i<data.length;i++){

            data[i]["housePicture"] = state.MainUrl + data[i]["housePicture"]
        }
        state.likeList = data
    },
    [types.SET_MY_HOUSE](state,data){
        for(let i = 0;i<data.length;i++){

            data[i]["housePicture"] = state.MainUrl + data[i]["housePicture"]
        }
        state.myHouse = data  
    },
    [types.SET_BILL_LIST](state,data){
        state.bill = data  
    },
    [types.SET_BILL_BOSS](state,data){
        state.billListBoss = data  
    },
    
};


