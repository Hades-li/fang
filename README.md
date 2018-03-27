# Vue-iView-fang
使用 Vue iView一个房的故事。

# 新增 js-cookie 模块用于简单处理 cookie；新增 vue 自定义插件 plugin
项目中使用 this.$cookie.get('key') this.$cookie.set('key','value')来处理 cookie，详情可参考 [js-cookie](https://github.com/js-cookie/js-cookie) 参考


            formItem: {
                houseInfoVo :{
                    landlordId:'', /** 房东ID **/
                    title:'',/** 标题 **/ 
                    houseNo:'',/** 房源编号，唯一 **/
                    addressProvince:'',/** 省 **/
                    addressCity:'',/** 市 **/
                    addressCounty:'',/** 县 **/
                    addressInfo:'',/** 房源地址 **/
                    addressHousingEstate:'',/** 小区楼盘 **/

                    addressArea:'',/** 所属片区 **/

                    addressLongitude:'',/** 经度 **/
                    addressLatitude:'',/** 纬度 **/

                    isBrandApartment:'',/** 是否是品牌公寓 **/
                    brandApartmentName:'',/** 品牌公寓名称 **/
                    houseType:'',/** 房屋类型，1住宅，2sohu公寓， 3外口公寓，4商办公寓 **/
                    houseFloor:'',/** 房源楼层 **/
                    houseFloorMax:'',/** 房屋最高楼层 **/
                    houseArea:'',/** 房源面积(m*m) **/
                    houseTowards:'',/** 房屋朝向 **/
                    decorationType:'',/** 装修程度：1豪装  2精装  3简装 **/
                    ancillaryFacilities:'',/** 附属设施 **/
                    apartmentConvention:'',/** 公寓公约 **/
                    rentType:'',/** 租赁方式（1：整租，2：合租） **/
                    rentPeroidMin:'',/** 租赁期限-起租 **/
                    rentPeroidMax:'',/** 租赁期限-止租 **/
                    payType:'',/** 付租方式，1月付  2季付  3半年付  4年付 5一次性付 **/
                    discountType:'',/** 优惠类型,0无优惠，1租金打折,2减少金额 **/
                    discountValue:'',/** 优惠值 **/
                    houseRental:'',/** 房子租金 **/
                    houseDeposit:'',/** 押金 **/
                    traffic:'',/** 附近交通 **/
                    houseContent:'',/** 详情描述 **/
                    isInvoice:'',/** 是否提供发票 **/
                    createTime:'',/** 创建时间 **/
                    contacts:'',/** 看房联系人 **/
                    contactsPhone:'',/** 看房联系电话 **/
                    houseTypeRoomCount:'',/** 户型-室 **/
                    houseTypeHallCount:'',/** 户型-厅 **/
                    houseTypeKitchenCount:'',/** 户型-厨房 **/
                    houseTypeToiletCount:'',/** 户型-卫 **/
                    houseTypeBalconyCount:'',/** 户型-阳台 **/
                    landlordOwnershipRelation:'',/** 房东产权人关系（1：同一人，2：代理关系，3：二房东） **/
                    ownershipNumber:'',/** 权属编号 **/
                    payFees:'',/** 其它费用**/
                    landlordPayFees:'',/** 承租人自付费用**/
                    renterPayFees:'',/** 出租人代付费用**/
                    houseStatus:'',/** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/
                },
                agentAuthorization :{
                    createTime:'',/** 创建时间 **/
                    houseId:'',/** 房源id **/
                    Integertype :'',/** 图片类型（1：房屋图片，2：房屋权属证明，3：一手租赁合同，4：代理人委托书） **/
                    picture:'',/** 房源图片 **/
                    description:'',/** 图片描述 **/
                },
                houseFees:{
                    feeType:'',/** 费用类型 **/
                    createTime:'',/** 创建时间 **/
                },
                housePictures:{
                    createTime:'',/** 创建时间 **/
                    houseId:'',/** 房源id **/
                    Integertype :'',/** 图片类型（1：房屋图片，2：房屋权属证明，3：一手租赁合同，4：代理人委托书） **/
                    picture:'',/** 房源图片 **/
                    description:'',/** 图片描述 **/
                },
                userInfo:{
                    userId:'',/** 用户id **/
                    headImage:'',/** 头像 **/
                    userName:'',/** 用户名 **/
                    realName:'',/** 真实姓名 **/
                    mobile:''/** 手机 **/
                },

landlordId: 9
title: 1
addressProvince: 江西省
addressCity: 赣州市
addressCounty: 兴国县
addressInfo: 江西省赣州市兴国县
addressHousingEstate: 1
addressArea: 1
addressLongitude: 1
addressLatitude: 1
isBrandApartment: true
brandApartmentName: 1
houseType: 1
houseFloor: 1
houseFloorMax: 1
houseArea: 1
houseTowards: 1
decorationType: 1
ancillaryFacilities: 1
apartmentConvention: 1
rentType: 1
rentPeroidMin: 2018-03-28
rentPeroidMax: 2018-03-28
payType: 1
discountType: 0
discountValue: 1
houseRental: 1
houseDeposit: 1
traffic: 1
houseContent: 1
isInvoice: true
contacts: 1
contactsPhone: 1
houseTypeRoomCount: 1
houseTypeHallCount: 1
houseTypeKitchenCount: 1
houseTypeToiletCount: 1
houseTypeBalconyCount: 1
landlordOwnershipRelation: 1
ownershipNumber: 1
payFees: 1
landlordPayFees: 1
renterPayFees: 1
housePicture: http://120.79.140.174:10080/static/upload/image/2018/3/27/89aaf282-4704-48b3-8a85-4ef2d27c424f.png
ownershipCertificate: http://120.79.140.174:10080/static/upload/image/2018/3/27/b5e8bb5e-1977-4e10-9bb6-439d83a6dc16.png
leaseContract: http://120.79.140.174:10080/static/upload/image/2018/3/27/306b929d-1693-48c9-bc13-2883c9d02298.png
agentAuthorization: http://120.79.140.174:10080/static/upload/image/2018/3/27/24101c1d-838c-4408-9173-92cc82cb7413.png