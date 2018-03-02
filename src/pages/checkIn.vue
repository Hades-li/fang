<template>
  <div class="checkIn">
    <div class="checkIn_form">
    <Form class="form" :model="formTop" label-position="top">
        <FormItem  label="姓名">
            <Input v-model="formTop.input1"></Input>
        </FormItem>
        <FormItem label="手机号码">
            <Input v-model="formTop.input2"></Input>
        </FormItem>
        <FormItem label="所在城市">
            <Input v-model="formTop.input3"></Input>
        </FormItem>
        <FormItem label="公寓名称">
            <Input v-model="formTop.input3"></Input>
        </FormItem>
        <FormItem label="公寓数量">
            <Input v-model="formTop.input3"></Input>
        </FormItem>
        <Button class="primary" type="primary"> 提交 </Button>
    </Form>
    </div>
    </div>
</template>
<script>


export default{
    data () {
        return {
            formTop: {
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                input5: '',
            }
        }
    },
    components:{

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
        width: 300px;
        padding: 40px 50px;
        box-sizing: border-box;
    }
    .primary{
        width: 100%;
    }
</style>
