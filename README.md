# Vue-iView-fang
使用 Vue iView一个房的故事。

# 新增 js-cookie 模块用于简单处理 cookie；新增 vue 自定义插件 plugin
项目中使用 this.$cookie.get('key') this.$cookie.set('key','value')来处理 cookie，详情可参考 [js-cookie](https://github.com/js-cookie/js-cookie) 参考


landlordId;
// 标题
title;
// 房源编号，唯一
houseNo;
// 省
addressProvince;
// 市
addressCity;
// 县
addressCounty;
// 房源地址
addressInfo;
// 小区楼盘
addressHousingEstate;
// 所属片区
addressArea;
// 经度
addressLongitude;
// 纬度
addressLatitude;
// 是否是品牌公寓
private Boolean isBrandApartment;
// 品牌公寓名称
brandApartmentName;
// 房屋类型，1住宅，2sohu公寓， 3外口公寓，4商办公寓
houseType;
// 房源楼层
houseFloor;
// 房屋最高楼层
houseFloorMax;
// 房源面积(m*m)
houseArea;
// 房屋朝向
houseTowards;
// 装修程度：1豪装  2精装  3简装
decorationType;
// 附属设施
ancillaryFacilities;
// 公寓公约
apartmentConvention;
// 租赁方式（1：整租，2：合租）
rentType;
// 租赁期限-起租
rentPeroidMin;
// 租赁期限-止租
rentPeroidMax;
// 付租方式，1月付  2季付  3半年付  4年付 5一次性付
payType;
// 优惠类型,0无优惠，1租金打折,2减少金额
discountType;
// 优惠值
discountValue;
// 房子租金
houseRental;
// 押金
houseDeposit;
// 附近交通
traffic;
// 详情描述
houseContent;
// 是否提供发票
private Boolean isInvoice;
// 创建时间
private Date createTime;
// 看房联系人
contacts;
// 看房联系电话
contactsPhone;
// 户型-室
houseTypeRoomCount;
// 户型-厅
houseTypeHallCount;
// 户型-厨房
houseTypeKitchenCount;
// 户型-卫
houseTypeToiletCount;
// 户型-阳台
houseTypeBalconyCount;
// 房东产权人关系（1：同一人，2：代理关系，3：二房东）
landlordOwnershipRelation;
// 权属编号
ownershipNumber;
// 其它费用（t_house_fee表的id，多个用“,”分割）
payFees;
// 承租人自付费用（t_house_fee表的id，多个用“,”分割）
landlordPayFees;
// 出租人代付费用（t_house_fee表的id，多个用“,”分割）
renterPayFees;
 
//房源图片
housePicture
//权属证明
ownershipCertificate
//权属证明
leaseContract
//代理人委托书
agentAuthorization
}