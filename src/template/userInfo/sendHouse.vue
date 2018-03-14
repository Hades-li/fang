<template>
    <div class="sendHouse" style="padding: 30px 0">
        <Row>
            <Col span="14" offset="5">
                <Form :model="formItem" :label-width="120">
                <FormItem label="小区所在城市">
                    <Row>
                        <Col span="8">
                        省
                        <Select v-model="formItem.houseInfoVo.addressProvince" @on-change="setCity({parent_id:formItem.houseInfoVo.addressProvince,region_type:1})">
                            <Option v-for="item in getProvince" :value="item.regionId">{{ item.name }}</Option>
                        </Select>
                        </Col>
                        <Col span="8">
                        市
                        <Select v-model="formItem.houseInfoVo.addressCity" @on-change="setCounty({parent_id:formItem.houseInfoVo.addressCity,region_type:2})">
                            <Option v-for="item in getCity" :value="item.regionId">{{ item.name }}</Option>
                        </Select>
                        </Col>
                        <Col span="8">
                        区
                        <Select v-model="formItem.houseInfoVo.addressCounty" >
                            <Option v-for="item in getCounty" :value="item.regionId">{{ item.name }}</Option>
                        </Select>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="上传图片">
                    <updated></updated>
                </FormItem>
                <FormItem label="房屋地址">
                    <Input v-model="formItem.houseInfoVo.addressInfo" placeholder=""></Input>
                </FormItem>
                <FormItem label="小区楼盘">
                    <Input v-model="formItem.houseInfoVo.addressHousingEstate" placeholder=""></Input>
                </FormItem>
                <FormItem label="所属片区">
                    <Input v-model="formItem.houseInfoVo.addressArea" placeholder=""></Input>
                </FormItem>
                <FormItem label="经纬度">
                    <Row>
                        <Col span="8">
                            经度
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            维度
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem label="是否是品牌公寓">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="品牌公寓名称">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房屋类型">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>

                <FormItem label="房屋信息">
                    <Row>
                        <Col span="8">
                            房源楼层
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            房屋最高楼层
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            房源面积
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            房屋朝向
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="公寓设备">
                    <Row>
                        <Col span="8">
                            装修程度
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            附属设施
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            公寓公约
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="租赁">
                    <Row>
                        <Col span="8">
                            租赁方式
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            租赁期限-起租
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            租赁期限-止租
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            付租方式
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            优惠类型
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            优惠值
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            房子租金
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            押金
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            附近交通
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            详情描述
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            是否提供发票
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="联系">
                    <Row>
                        <Col span="8">
                            创建时间
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            看房联系人
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            看房联系电话
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="户型">
                    <Row>
                        <Col span="8">
                            室
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            厅
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            厨房
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            卫
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            阳台
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="产权">
                    <Row>
                        <Col span="8">
                            房东产权人关系
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            权属编号
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="费用">
                    <Row>
                        <Col span="8">
                            其它费用
                            <Input v-model="formItem.houseInfoVo.addressLongitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            承租人自付费用
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                        <Col span="8">
                            出租人代付费用
                            <Input v-model="formItem.houseInfoVo.addressLatitude" placeholder=""></Input>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem label="房子租赁状态">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                
                <FormItem>
                    <Button type="primary">保存</Button>
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
                
                input: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            },
            
        }
    },
    components:{
        updated
    },
    created(){
        this.setProvince()
    },
    computed:{
        ...mapGetters([
            "getProvince",
            "getCity",
            "getCounty"
        ])
    },
    methods:{
        ...mapActions([
            "setProvince",
            "setCity",
            "setCounty"
        ])
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
