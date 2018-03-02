<template>
  <div class="login">

    <div class="group_method">
      <span class="gohome"> 返回首页 </span>
      <span class="rsgister"> 注册账号 </span>
      <div class="tab_login">
        <span :class="login?'':'active'"  @click="changeLogin()" role="tab"> 账号登录 </span>
        <span :class="login?'active':''"  @click="changeLogin()"  role="tab" > 验证码登录  </span>
      </div>

      <div class="login_from from1" v-if="!login">
        <Form ref="formInline1" :model="formInline1" :rules="ruleInline1" >
        <FormItem prop="user">
            <Input type="text" v-model="formInline1.user" placeholder="账号">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline1.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <Button class="btn" type="primary" @click="handleSubmit('formInline1')"> 登陆 </Button>
        </Form>
      </div>
      
      <div class="login_from from2" v-else>
        <Form ref="formInline2" :model="formInline2" :rules="ruleInline2">
        <FormItem prop="user">
            <Input type="text" v-model="formInline2.user" placeholder="手机号码">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="from2_password" prop="password" inline>

            <Input type="password" v-model="formInline2.password" placeholder="验证码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
            <Button class="password_primary" type="primary" :loading="loading" @click="toLoading">
              <span v-if="!loading">获取验证码</span>
              <span v-else>59秒后获取</span>
            </Button>
            
        </FormItem>
        <FormItem>
            <Button class="btn" type="primary" @click="handleSubmit('formInline2')">登陆</Button>
        </FormItem>
        </Form>
      </div>



    </div>

  </div>

</template>
<script>

  import axios from 'axios'
  import Qs from 'qs'

  export default {
    data () {
      return {
        login:false,
        loading: false,
        formInline1: {
          user: '',
          password: ''
        },
        ruleInline1: {
          user: [
            { required: true, message: '请您填写账号', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请您填写密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码最少6为字符', trigger: 'blur' }
            ]
        },

        formInline2: {
          user: '',
          password: ''
        },
        ruleInline2: {
          user: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { type: 'string', len: 11, message: '请输入正确手机号码', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入验证码', trigger: 'blur' },
              { type: 'string', len: 4, message: '验证码4为字符', trigger: 'blur' }
            ]
        },


      }
    },
    methods: {
      handleSubmit(name) {

      },
      formLoginReset(name){

      },
      toLoading () {
        this.loading = true;
      },
      changeLogin(){
        this.login = !this.login;
      }
    },
    mounted() {

    }
  }
</script>


<style>
  .login{
    background: url("../assets/bg.jpg");
    height: 100%;
    background-position: center;
    overflow: hidden;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .group_method{
    background-color:#edebee;
    width: 350px;
    position: absolute;
    right: 150px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 5px;
  }
  .login_from{
    padding:50px;
  }
  .btn{
    width: 100%;
  }
  .tab_login{
    display: flex;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .tab_login span{
    flex: 1;
    text-align: center;
    background-color: #dedede;
    cursor: pointer;
    padding: 20px 0;
  }
  .tab_login span:nth-child(1){
    border-top-left-radius: 5px;
  }
  .tab_login span:nth-child(2){
    border-top-right-radius: 5px;
  }
  .group_method .active{
    background-color:#edebee;
    color: #f65000;
  }
  .ivu-input{
    padding: 10px;
  }
  .rsgister{
    position: absolute;
    bottom: -30px;
    color: #f65000;
    right: 0;
    cursor: pointer;
  }
  .gohome{
    position: absolute;
    bottom: -30px;
    color: #f65000;
    left:0;
    cursor: pointer;
  }
  .from2_password .ivu-form-item-content{
    display: flex;
  }
  .from2_password .ivu-input-wrapper{
    width: 55%;
    margin-right: 5%;
  }
  .password_primary{
    width: 40%;
  }
</style>
