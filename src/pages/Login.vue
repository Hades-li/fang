<template>
  <div class="login">
    <div class="main_sign">
      <a class="login_hot" target="_blank" href="http://www.mogoroom.com:80/activity/17931">
          <img src="http://image.mgzf.com/mogoroom/2018-01/cms/9/0/1522929/1522929_1515747072304.jpg">
      </a>
      <div class="aside_sign">
        <div class="box_sign">
          <div class="group_method">
            <a class="active" href="#1" role="tab">账号登录</a>
            <a href="#2" role="tab" class="">验证码登录</a>
            <div class="login_from">
               <Input v-model="value" placeholder="username" style="width:100%;margin:50px 0 20px 0;"><Icon type="locked"></Icon></Input>
               <Input v-model="value" placeholder="password" style="width: 100%"><Icon type="locked"></Icon></Input>
            </div>
          </div>
        </div>
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

      }
    },
    methods: {
      handleSubmit(name) {

      },
      formLoginReset(name){

      }
    },
    mounted() {

    }
  }
</script>


<style scoped>
  .login{
    background: url("../assets/bg.jpg");
    height: 100%;
    background-position: center;
    overflow: hidden;
  }
  .main_sign{
    width: 1200px;
    display: block;
    overflow: hidden !important;
    margin: 0 auto;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

  }
  .login_hot{
    margin-top: 62px;
    display: inline-block;
    float: left;
    width: 730px;
    height: 430px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.15);
  }
  .aside_sign{
    display: inline-block;
    float: right;
    width: 420px;
  }
  .box_sign{
    margin-top: 62px;
    box-shadow: 0 0 10px #333;
    border-radius: 5px;
    color: #666666;
    min-height: 430px;
    background: #edebee;
    overflow: hidden !important;
  }
  .group_method a{
    display: inline-block;
    float: left;
    text-align: center;
    line-height: 60px;
    width: 50%;
    height: 60px;
    background-color: #dedede;
    color: #333333;
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
  }
  .login_from{
    padding:20px;
  }
  .group_method .active{
    background-color:#edebee;
    color: #f65000;
  }
</style>
