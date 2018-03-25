<template>
  <div class="checkIn">
    <div class="checkIn_form">
    <Form class="form" :model="formTop" label-position="top">
        
        <FormItem  label="">
            <Col span="8">
                <FormItem  label="省份">
                    <Select v-model="formTop.addressProvinceid" @on-change="province()">
                        <Option v-for="item in getProvince" :value="item.region">{{ item.name }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="8">
                <FormItem label="市">
                    <Select v-model="formTop.addressCityid" @on-change="city()">
                        <Option v-for="item in getCity" :value="item.region">{{ item.name }}</Option>
                    </Select>
                </FormItem>
            </Col>
            <Col span="8">
                <FormItem label="市">
                    <Select v-model="formTop.addressCountyid" @on-change="county()">
                        <Option v-for="item in getCounty" :value="item.region">{{ item.name }}</Option>
                    </Select>
                </FormItem>
            </Col> 
        </FormItem>


        <FormItem label="详细地址">
            <Input v-model="formTop.address"></Input>
        </FormItem>
        <FormItem label="房源数量">
            <Input v-model="formTop.houseResource"></Input>
        </FormItem>
        <FormItem label="房源申请凭证">
            <updated v-model="picList"></updated>
        </FormItem>
        <Button class="primary" type="primary" @click="becomeAdmin()"> 提交 </Button>
    </Form>
    </div>
    </div>
</template>
<script>
import { mapGetters , mapActions } from "vuex"
import updated from "../template/upload/index"
export default{
    data () {
        return {
            picList:[],
            formTop: {
                address_province: '',
                address_city: '',
                county: '',
                address: '',
                houseResource: '',
                ownershipNumber:'',
                user_id:'',
                addressProvinceid:'',
                addressProvince:'',
                provinceid:'',
                addressCityid:'',
                addressCity:'',
                cityid:'',
                addressCountyid:'',
                addressCounty:'',
                countyid:''
            }
        }
    },
    components:{
        updated
    },
    created(){
        this.setProvince();
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
            "sendHouse",
            "becomeHouse"
        ]),
        province(){
            
            let name =  this.formTop.addressProvinceid 
            let reg = /[\u4e00-\u9fa5]/g;  
            var names = name.match(reg); 
            this.formTop.address_province = (name.match(reg)).join("")
            this.formTop.provinceid = name.replace(reg, "")
            this.setCity({parent_id:this.formTop.provinceid,region_type:1})
        },
        
        city(){
            let name =  this.formTop.addressCityid 
            let reg = /[\u4e00-\u9fa5]/g;  
            var names = name.match(reg); 
            this.formTop.address_city = (name.match(reg)).join("")
            this.formTop.cityid = name.replace(reg, "")
            this.setCounty({parent_id:this.formTop.cityid,region_type:2})
        },
        
        county(){
            let name =  this.formTop.addressCountyid 
            let reg = /[\u4e00-\u9fa5]/g;  
            var names = name.match(reg); 
            this.formTop.county = (name.match(reg)).join("")
            this.formTop.countyid = name.replace(reg, "")
        },
        becomeAdmin(){
            this.formTop.ownershipNumber = this.picList.join(",")
    
            console.log(this.formTop)
            // this.sendHouse(this.formItem.houseInfoVo)
            console.log(JSON.parse(this.$cookie.get('userInfo')))
             this.formTop.user_id = JSON.parse(this.$cookie.get('userInfo')).data.userId  
            this.becomeHouse(this.formTop)
        }
    }
}
</script>

<style scoped >
    .checkIn{
        background: url("http://www.mogoroom.com:80/pages/partner/imgs/img_p1_1.jpg");
        margin-top: 50px;
    }
    .checkIn_form{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .checkIn_form h3{
        margin: 20px 0 0 0;
        width: 300px;
        color: #ffffff;
        text-align: center;
    }
    .form{
        width: 400px;
        padding: 40px 50px;
        box-sizing: border-box;
    }
    .primary{
        width: 100%;
    }
</style>
