<template>
  <div class="">
    <div class="user_bg"> 
      <div class="user_some">
        <img src="https://www.yushundai.com/css/blue/images/u_banner.jpg" alt="">
        <span> {{ userInfo.data.userName }} </span>
      </div>
    </div>
    <div class="admininfo">
      <user-tab> </user-tab>
    </div>
 
  </div>
</template>
<script>
import userTab from "../template/userTab"
import { mapActions } from "vuex"
export default{
  data () {
    return {
      userInfo:JSON.parse(this.$cookie.get('userInfo'))
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
  .admininfo{
    width: 1200px;
    margin: 0 auto;
  }
  .user_bg{
    width: 100%;
    height: 117px;
    background: url("https://www.yushundai.com/css/blue/images/u_banner.jpg");
    background-position:center;
    overflow: hidden;
  }
  .user_some{
    width: 960px;
    height: 100px;
    margin:  20px auto 0;
  }
  .user_some img{
    width: 50px;
    height: 50px;
  }
  .user_some span{
    color: #ffffff;
  }
</style>