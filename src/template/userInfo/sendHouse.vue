<template>
    <div class="sendHouse" style="padding: 30px 0">
        <Row>
            <Col span="14" offset="5">
            <Form :model="formItem" :label-width="120">
                <!-- <FormItem label="房屋手机号">
                    <Input v-model="formItem.houseInfoVo.landlordId" placeholder="请输入"></Input>
                </FormItem> -->
                <FormItem label="标题">
                    <Input v-model="formItem.houseInfoVo.title" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="房屋坐落">
                    <Row>
                        <Col span="8">
                            <Col span="16">
                                <Select v-model="formItem.houseInfoVo.addressProvinceid" @on-change="province()">
                                    <Option v-for="item in getProvince" :value="item.region">{{ item.name }}</Option>
                                </Select>
                            </Col>
                        <Col span="8">
                            省
                        </Col>
                        
                        </Col>
                        
                        <Col span="8">
                            <Col span="16">
                                <Select v-model="formItem.houseInfoVo.addressCityid" @on-change="city()">
                                    <Option v-for="item in getCity" :value="item.region">{{ item.name }}</Option>
                            </Select>
                        </Col>
                        <Col span="8">
                        市
                        </Col>
                        </Col>
                        <Col span="8">
                        <Col span="16">
                        <Select v-model="formItem.houseInfoVo.addressCountyid" @on-change="county()">
                            <Option v-for="item in getCounty" :value="item.region">{{ item.name }}</Option>
                        </Select>
                        </Col>
                        <Col span="8">
                        区
                        </Col>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="详细地址">
                    <Input v-model="formItem.houseInfoVo.addressInfo" placeholder="请输入"></Input>
                </FormItem>
                <Row>
                    <Col span="12">
                    <FormItem label="经度">
                        <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="维度">
                        <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                    <FormItem label="小区楼盘">
                        <Input v-model="formItem.houseInfoVo.addressHousingEstate" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="所属片区">
                        <Input v-model="formItem.houseInfoVo.addressArea" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                    <FormItem label="品牌公寓">
                        <RadioGroup v-model="formItem.houseInfoVo.isBrandApartment">
                            <Radio label="true">
                                <span>是</span>
                            </Radio>
                            <Radio label="false">
                                <span>否</span>
                            </Radio>
                        </RadioGroup>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="公寓名称">
                        <Input v-model="formItem.houseInfoVo.brandApartmentName" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="房屋类型">
                    <RadioGroup v-model="formItem.houseInfoVo.houseType">
                        <Radio label="1">住宅</Radio>
                        <Radio label="2">sohu公寓</Radio>
                        <Radio label="3">外口公寓</Radio>
                        <Radio label="4">商办公寓</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="房屋户型">
                    <Row>
                        <Col span="5">
                        <Col span="12">
                        <Input v-model="formItem.houseInfoVo.houseTypeRoomCount" placeholder=""></Input>
                        </Col>
                        <Col span="12">
                        <span>室</span>
                        </Col>
                        </Col>
                        <Col span="5">
                        <Col span="12">
                        <Input v-model="formItem.houseInfoVo.houseTypeHallCount" placeholder=""></Input>
                        </Col>
                        <Col span="12">
                        厅
                        </Col>
                        </Col>
                        <Col span="5">
                        <Col span="12">
                        <Input v-model="formItem.houseInfoVo.houseTypeKitchenCount" placeholder=""></Input>
                        </Col>
                        <Col span="12">
                        厨房
                        </Col>
                        </Col>
                        <Col span="5">
                        <Col span="12">
                        <Input v-model="formItem.houseInfoVo.houseTypeToiletCount" placeholder=""></Input>
                        </Col>
                        <Col span="12">
                        卫
                        </Col>
                        </Col>
                        <Col span="4">
                        <Col span="12">
                        <Input v-model="formItem.houseInfoVo.houseTypeBalconyCount" placeholder=""></Input>
                        </Col>
                        <Col span="12">
                        阳台
                        </Col>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="房屋楼层">
                    <Row>
                        <Col span="11">
                        <Col span="16">
                        <Input v-model="formItem.houseInfoVo.houseFloor" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                        层
                        </Col>
                        </Col>
                        <Col span="2">/</Col>
                        <Col span="11">
                        <Col span="16">
                        <Input v-model="formItem.houseInfoVo.houseFloorMax" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                        层
                        </Col>
                        </Col>
                    </Row>
                </FormItem>
                <Row>
                    <Col span="12">
                    <FormItem label="房源面积">
                        <Input v-model="formItem.houseInfoVo.houseArea" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="房屋朝向">
                        <Input v-model="formItem.houseInfoVo.houseTowards" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="装修程度">
                    <RadioGroup v-model="formItem.houseInfoVo.decorationType">
                        <Radio label="1">豪装</Radio>
                        <Radio label="2">精装</Radio>
                        <Radio label="3">简装</Radio>
                    </RadioGroup>
                </FormItem>
                <Row>
                    <Col span="12">
                    <FormItem label="附属设施">
                        <Input v-model="formItem.houseInfoVo.ancillaryFacilities" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="公寓公约">
                        <Input v-model="formItem.houseInfoVo.apartmentConvention" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="附近交通">
                    <Input v-model="formItem.houseInfoVo.traffic" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="详情描述">
                    <Input v-model="formItem.houseInfoVo.houseContent" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="租赁方式">
                    <RadioGroup v-model="formItem.houseInfoVo.rentType">
                        <Radio label="1">整租</Radio>
                        <Radio label="2">合租</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="租赁期限">
                    <Row>
                        <Col span="12">
                        <Col span="4">
                        起租
                        </Col>
                        <Col span="16">
                        <DatePicker type="date" placeholder="请输入" v-model="formItem.houseInfoVo.rentPeroidMin"></DatePicker>
                        </Col>
                        <Col span="4">
                        月
                        </Col>
                        </Col>
                        <Col span="12">
                        <Col span="4">
                        止租
                        </Col>
                        <Col span="16">
                        <DatePicker type="date" placeholder="请输入" v-model="formItem.houseInfoVo.rentPeroidMax"></DatePicker>
                        </Col>
                        <Col span="4">
                        月
                        </Col>
                        </Col>
                    </Row>
                </FormItem>
                <Row>
                    <Col span="12">
                    <FormItem label="房子租金">
                        <Input v-model="formItem.houseInfoVo.houseRental" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="押金">
                        <Input v-model="formItem.houseInfoVo.houseDeposit" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="提供发票">
                    <RadioGroup v-model="formItem.houseInfoVo.isInvoice">
                        <Radio label="true">是</Radio>
                        <Radio label="false">否</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="付租方式">
                    <RadioGroup v-model="formItem.houseInfoVo.payType">
                        <Radio label="1">月付</Radio>
                        <Radio label="2">季付</Radio>
                        <Radio label="3">半年付</Radio>
                        <Radio label="4">年付</Radio>
                        <Radio label="5">一次性付</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="优惠类型">
                    <RadioGroup v-model="formItem.houseInfoVo.discountType">
                        <Radio label="0">无优惠</Radio>
                        <Radio label="1">租金打折</Radio>
                        <Radio label="2">减少金额</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="优惠值">
                    <Input v-model="formItem.houseInfoVo.discountValue" placeholder="请输入"></Input>
                </FormItem>
                <Row>
                    <Col span="8">
                    <FormItem label="其它费用">
                        <Input v-model="formItem.houseInfoVo.payFees" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="承租人自付费用">
                        <Input v-model="formItem.houseInfoVo.landlordPayFees" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="8">
                    <FormItem label="出租人代付费用">
                        <Input v-model="formItem.houseInfoVo.renterPayFees" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="12">
                    <FormItem label="看房联系人">
                        <Input v-model="formItem.houseInfoVo.contacts" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="看房联系电话">
                        <Input v-model="formItem.houseInfoVo.contactsPhone" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span="14">
                    <FormItem label="房东产权人关系">
                        <RadioGroup v-model="formItem.houseInfoVo.landlordOwnershipRelation">
                            <Radio label="1">同一人</Radio>
                            <Radio label="2">代理关系</Radio>
                            <Radio label="3">二房东</Radio>
                        </RadioGroup>
                    </FormItem>
                    </Col>
                    <Col span="10">
                    <FormItem label="权属编号">
                        <Input v-model="formItem.houseInfoVo.ownershipNumber" placeholder="请输入"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <!-- <FormItem label="房子租赁状态">
                    <RadioGroup v-model="formItem.houseInfoVo.houseStatus">
                        <Radio label="0">发布中</Radio>
                        <Radio label="1">招租中</Radio>
                        <Radio label="2">已租赁</Radio>
                        <Radio label="3">已到期</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="创建时间">
                  <Input v-model="formItem.houseInfoVo.createTime" placeholder="请输入"></Input>
                </FormItem> -->
                <FormItem label="房子图片"> 
                    <updated v-model="picList0"></updated>
                </FormItem>
                <FormItem label="权属证明"> 
                    <updated v-model="picList1"></updated>
                </FormItem>
                <FormItem label="一手租凭合同"> 
                    <updated v-model="picList2"></updated>
                </FormItem>
                <FormItem label="代理人委托书"> 
                    <updated v-model="picList3"></updated>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="send()">保存</Button>
                    <Button type="ghost" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
            </Col>
        </Row>
    </div>
</template>
<script>
      import updated from "../upload/index"
      import { mapActions,mapGetters } from "vuex"
    export default {
        data () {
            return {
                picList0:[],
                picList1:[],
                picList2:[],
                picList3:[],
                formItem: {
                    houseInfoVo: {
                        landlordId: '', /** 房东ID **/
                        title: '', /** 标题 **/
                        houseNo: '', /** 房源编号，唯一 **/
                        addressProvince: '', /** 省 **/
                        addressProvinceid: '', /** 省 **/
                        provinceid:'',/** 省 **/
                        addressCity: '', /** 市 **/
                        addressCityid: '', /** 市 **/
                        cityid:'',/** 市 **/
                        addressCounty: '', /** 县 **/
                        addressCountyid: '', /** 县 **/
                        countyid:'',/** 县 **/
                        addressInfo: '', /** 房源地址 **/
                        addressHousingEstate: '', /** 小区楼盘 **/
                        addressArea: '', /** 所属片区 **/
                        addressLongitude: '', /** 经度 **/
                        addressLatitude: '', /** 纬度 **/
                        isBrandApartment: '', /** 是否是品牌公寓 **/
                        brandApartmentName: '', /** 品牌公寓名称 **/
                        houseType: '', /** 房屋类型，1住宅，2sohu公寓， 3外口公寓，4商办公寓 **/
                        houseFloor: '', /** 房源楼层 **/
                        houseFloorMax: '', /** 房屋最高楼层 **/
                        houseArea: '', /** 房源面积(m*m) **/
                        houseTowards: '', /** 房屋朝向 **/
                        decorationType: '', /** 装修程度：1豪装  2精装  3简装 **/
                        ancillaryFacilities: '', /** 附属设施 **/
                        apartmentConvention: '', /** 公寓公约 **/
                        rentType: '', /** 租赁方式（1：整租，2：合租） **/
                        rentPeroidMin: '', /** 租赁期限-起租 **/
                        rentPeroidMax: '', /** 租赁期限-止租 **/
                        payType: '', /** 付租方式，1月付  2季付  3半年付  4年付 5一次性付 **/
                        discountType: '', /** 优惠类型,0无优惠，1租金打折,2减少金额 **/
                        discountValue: '', /** 优惠值 **/
                        houseRental: '', /** 房子租金 **/
                        houseDeposit: '', /** 押金 **/
                        traffic: '', /** 附近交通 **/
                        houseContent: '', /** 详情描述 **/
                        isInvoice: '', /** 是否提供发票 **/
                        createTime: '', /** 创建时间 **/
                        contacts: '', /** 看房联系人 **/
                        contactsPhone: '', /** 看房联系电话 **/
                        houseTypeRoomCount: '', /** 户型-室 **/
                        houseTypeHallCount: '', /** 户型-厅 **/
                        houseTypeKitchenCount: '', /** 户型-厨房 **/
                        houseTypeToiletCount: '', /** 户型-卫 **/
                        houseTypeBalconyCount: '', /** 户型-阳台 **/
                        landlordOwnershipRelation: '', /** 房东产权人关系（1：同一人，2：代理关系，3：二房东） **/
                        ownershipNumber: '', /** 权属编号 **/
                        payFees: '', /** 其它费用**/
                        landlordPayFees: '', /** 承租人自付费用**/
                        renterPayFees: '', /** 出租人代付费用**/
                        houseStatus: '', /** 房子租赁状态，0，发布中，1招租中，2已租赁，3已到期 **/
                        housePicture:'', // 房子图片
                        ownershipCertificate:'', //权属证明(多个用“,”分割）
                        leaseContract:'', //权属证明(多个用“,”分割）
                        agentAuthorization:'' //代理人委托书(多个用“,”分割）
                    },
                    agentAuthorization: {
                        createTime: '', /** 创建时间 **/
                        houseId: '', /** 房源id **/
                        Integertype: '', /** 图片类型（1：房屋图片，2：房屋权属证明，3：一手租赁合同，4：代理人委托书） **/
                        picture: '', /** 房源图片 **/
                        description: '' /** 图片描述 **/
                    },
                    houseFees: {
                        feeType: '', /** 费用类型 **/
                        createTime: '' /** 创建时间 **/
                    },
                    housePictures: {
                        createTime: '', /** 创建时间 **/
                        houseId: '', /** 房源id **/
                        Integertype: '', /** 图片类型（1：房屋图片，2：房屋权属证明，3：一手租赁合同，4：代理人委托书） **/
                        picture: '', /** 房源图片 **/
                        description: '' /** 图片描述 **/
                    },
                    userInfo: {
                        userId: '', /** 用户id **/
                        headImage: '', /** 头像 **/
                        userName: '', /** 用户名 **/
                        realName: '', /** 真实姓名 **/
                        mobile: '' /** 手机 **/
                    },
                    input: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        },
    components:{
        updated
    },
    created(){
        this.setProvince();
        this.formItem.houseInfoVo.landlordId = JSON.parse(this.$cookie.get('userInfo')).data.userId  
    },
    computed:{
        ...mapGetters([
            'getProvince',
            'getCity',
            'getCounty'
        ])
    },
    methods:{
        ...mapActions([
            "setProvince",
            "setCity",
            "setCounty",
            "sendHouse"
        ]),
        
        province(){
            
            let name =  this.formItem.houseInfoVo.addressProvinceid 
            let reg = /[\u4e00-\u9fa5]/g;  
            var names = name.match(reg); 
            this.formItem.houseInfoVo.addressProvince = (name.match(reg)).join("")
            this.formItem.houseInfoVo.provinceid = name.replace(reg, "")
            this.setCity({parent_id:this.formItem.houseInfoVo.provinceid,region_type:1})
        },
        
        city(){
            let name =  this.formItem.houseInfoVo.addressCityid 
            let reg = /[\u4e00-\u9fa5]/g;  
            var names = name.match(reg); 
            this.formItem.houseInfoVo.addressCity = (name.match(reg)).join("")
            this.formItem.houseInfoVo.cityid = name.replace(reg, "")
            this.setCounty({parent_id:this.formItem.houseInfoVo.cityid,region_type:2})
        },
        
        county(){
            let name =  this.formItem.houseInfoVo.addressCountyid 
            let reg = /[\u4e00-\u9fa5]/g;  
            var names = name.match(reg); 
            this.formItem.houseInfoVo.addressCounty = (name.match(reg)).join("")
            this.formItem.houseInfoVo.countyid = name.replace(reg, "")
        },

        send(){
            // picList0
            // housePicture:'', // 房子图片
            // ownershipCertificate:'', //权属证明(多个用“,”分割）
            // leaseContract:'', //权属证明(多个用“,”分割）
            // agentAuthorization:'' //代理人委托书(多个用“,”分割）
            console.log(this.picList0)
            this.formItem.houseInfoVo.housePicture = this.picList0.join(",")
            this.formItem.houseInfoVo.ownershipCertificate = this.picList1.join(",")
            this.formItem.houseInfoVo.leaseContract = this.picList2.join(",")
            this.formItem.houseInfoVo.agentAuthorization = this.picList3.join(",")

Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

        this.formItem.houseInfoVo.rentPeroidMin = new Date(this.formItem.houseInfoVo.rentPeroidMin).Format("yyyy-MM-dd")
        this.formItem.houseInfoVo.rentPeroidMax = new Date(this.formItem.houseInfoVo.rentPeroidMax).Format("yyyy-MM-dd")
        


            this.sendHouse(this.formItem.houseInfoVo)
        }


    }
}
</script>

<style scoped>
    .houseWaySet{
        text-align: center;
    }
    .houseWaySet .ivu-icon{
        font-size: 40px;
    }
    .houseWaySet p{
        margin-bottom: 0;
        line-height: 24px;
    }
</style>
