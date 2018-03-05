<template>
  <div class="release">
    <user-tab> </user-tab>
    <div class="release_mian">
        <div class="release_mian_from">
        <Form :model="formRight" label-position="right" :label-width="100">
            <FormItem label="小区所在城市">
                <Select @on-change="changevalue(formRight.model3)" v-model="formRight.model3" size="large" style="width:100px">
                    <Option v-for="item in getProvince" :value="item.regionId" :key="item.name">{{ item.name }}</Option>
                </Select>
                <Select v-model="formRight.model4" size="large" style="width:200px">
                    <Option v-for="item in getCity" :value="item.name" :key="item.name">{{ item.name }}</Option>
                </Select>
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
                <upload></upload>
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
import upload from "../template/upload/index"
import { mapActions,mapGetters } from "vuex" 
export default{
  data(){
    return{
        formRight: {
            input1: '',
            input2: '',
            input3: '',
            model4:'',
            model4:'',
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
        },
    }   
  },
  components:{
    userTab,
    upload
  },
  created(){
    this.setProvince()
  },
  computed:{
      ...mapGetters([
          "getProvince",
          "getCity"
      ])
  },
  methods:{
      ...mapActions([
          "setProvince",
          "setCity"
      ]),
      changevalue(value){
          this.setCity({"region_type":1,"parent_id":value})
      }
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