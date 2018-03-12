<template>
    <div class="sendHouse" style="padding: 30px 0">
        <Row>
            <Col span="14" offset="5">
                <Form :model="formItem" :label-width="120">
                <FormItem label="小区所在城市">
                    <Row>
                        <Col span="8">
                        省
                        <Select v-model="formItem.addressProvince" @on-change="setCity({parent_id:formItem.addressProvince,region_type:1})">
                            <Option v-for="item in getProvince" :value="item.regionId">{{ item.name }}</Option>
                        </Select>
                        </Col>
                        <Col span="8">
                        市
                        <Select v-model="formItem.addressCity" @on-change="setCounty({parent_id:formItem.addressCity,region_type:2})">
                            <Option v-for="item in getCity" :value="item.regionId">{{ item.name }}</Option>
                        </Select>
                        </Col>
                        <Col span="8">
                        区
                        <Select v-model="formItem.addressCounty" >
                            <Option v-for="item in getCounty" :value="item.regionId">{{ item.name }}</Option>
                        </Select>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="上传图片">
                    <updated></updated>
                </FormItem>
                <FormItem label="小区">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房屋地址">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="面积">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="楼层">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房型">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房源配置" class="houseWaySet">
                    <Row>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>空调</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>床</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>空调</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>床</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>空调</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>床</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>空调</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>床</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>空调</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>床</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>空调</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>床</p>
                        </Col>
                    </Row>
                </FormItem>
                    <FormItem label="期望租金">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="姓名">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="手机号">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="图形验证码">
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
                addressProvince: '',
                addressCity:'',
                addressCounty:'',



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
