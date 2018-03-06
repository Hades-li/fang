<template>
  <div class="">
      <div class="user_bg">

    </div>
    <div class="admininfo">
          <user-tab> </user-tab>

    <div class="admininfo_main">
        <ul>
          <li> 
            <p> 用户名 : 彭总 </p>
            <P> 真实姓名 : 培根 </P>
            <P> 手机号码 : 1397417685 </P>
          </li>
          <li> 
            <p> 性别 : 女 </p>
            <P> 出生日期 : 2020-13-14 </P>
            <P> 邮箱绑定 : peng@foxmail.com </P>
          </li>
          <Button class="change_info" type="error" @click = "changespinShow()"> {{ spinShow?"修改":"完成" }} </Button>
        </ul>
        <div class="change_userinfo" v-if="!spinShow">
          <h4> 修改信息 </h4>
          <Form :model="formLeft" label-position="left" :label-width="100">
          <FormItem label="用户名:">
            <Input v-model="formLeft.input1"></Input>
          </FormItem>
          <FormItem label="真实姓名:">
            <Input v-model="formLeft.input2"></Input>
          </FormItem>
          <FormItem label="手机号码:">
            <Input v-model="formLeft.input3"></Input>
          </FormItem>
          <FormItem label="性别:">
            <Input v-model="formLeft.input4"></Input>
          </FormItem>
          <FormItem label="出生日期:">
            <Input v-model="formLeft.input5"></Input>
          </FormItem>
          <FormItem label="邮箱绑定:">
            <Input v-model="formLeft.input6"></Input>
          </FormItem>
        </Form>
        </div>

    </div> 
    </div>
 
  </div>
</template>
<script>
import userTab from "../template/userTab"
import { mapActions } from "vuex"
export default{
  data () {
    return {
      spinShow: true,
      formLeft: {
        input1: '彭总',
        input2: '培根',
        input3: '1397417685',
        input4: '女',
        input5: '2020-13-14',
        input6: 'peng@foxmail.com'
      },
    }
  },
  components:{
    userTab,
  },
  created(){
    
  },
  methods:{
    changespinShow(){
      this.spinShow = !this.spinShow
    }
  }    
}
</script>

<style>
  .admininfo{
    width: 1200px;
    margin: 0 auto;
    display: flex;
  }
  .admininfo_main ul {
    display: flex;
    margin-left: 20px;
    width: 940px;
    padding: 20px 0;
    position: relative;
  }
  .admininfo_main ul li{
    flex:1;
  }
  .admininfo .change_info{
    position: absolute;
    right: 20px;
    bottom: 0;
  }
  .change_userinfo{
    width: 400px;
    margin-left: 20px;
    margin-top: 50px;
  }
  .change_userinfo h4{
    text-align: center;
  }
  .user_bg{
    width: 100%;
    height: 117px;
    background: url("https://www.yushundai.com/css/blue/images/u_banner.jpg");
    background-position:center;
  }
</style>