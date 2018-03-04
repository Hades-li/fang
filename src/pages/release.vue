<template>
  <div class="release">
    <user-tab> </user-tab>
    <div class="release_mian">
        <div class="release_mian_from">
        <Form :model="formRight" label-position="right" :label-width="100">
            <FormItem label="小区所在城市">
                <Cascader :data="formRight.data" trigger="hover"></Cascader>
            </FormItem>
            <FormItem label="小区">
                <Input v-model="formRight.input1"></Input>
            </FormItem>
            <FormItem label="房屋地址">
                <Input v-model="formRight.input2"></Input>
            </FormItem>
            <FormItem label="面积">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="楼层">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="房型">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="房源配置">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="期望租金">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="姓名">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="手机号">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem label="上传图片">
                <Input v-model="formRight.input3"></Input>
            </FormItem>
            <FormItem >
                <Button type="primary">提交</Button>
                <Button type="primary">取消</Button>
            </FormItem>
            
    </Form>
        </div>
    </div>
  </div>
</template>
<script>

import userTab from "../template/userTab"
export default{
  data(){
    return{
        formRight: {
            input1: '',
            input2: '',
            input3: '',
            data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
        },
    }   
  },
  components:{
    userTab,
  },
  created(){
    
  },
  methods:{

  }    
}
</script>

<style>
    .release{
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .release_mian{
        margin-left: 20px;
        padding: 20px 0;   
        width: 960px;
    }
    .release_mian_from{
        width: 500px;
        margin: 0 auto;
    }
</style>