<template>
  <div class="checkIn">
    <div class="checkIn_form">
    <Form class="form" :model="formTop" label-position="top">
        
        <FormItem  label="">
            <Col span="8">
                <FormItem  label="省份">
                    <Input v-model="formTop.address_province"></Input>
                </FormItem>
            </Col>
            <Col span="8">
                <FormItem label="市">
                    <Input v-model="formTop.address_city"></Input>
                </FormItem>
            </Col>
            <Col span="8">
                <FormItem label="县区">
                    <Input v-model="formTop.county"></Input>
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
                user_id:''
            }
        }
    },
    components:{
        updated
    },
    created(){

    },
    methods:{

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
