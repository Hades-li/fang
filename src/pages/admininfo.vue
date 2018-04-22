<template>
  <div class="">
    <div class="user_bg"> 
      <div class="user_some">
        <img v-if="getUserInfo.headImage" :src="`${$host}${getUserInfo.headImage}`" alt=""> 
        <div class="text" v-if="!getUserInfo.headImage" > 暂无图片 </div>
        <span> 欢迎你 {{ getUserInfo.userName }} </span>
      </div>
    </div>
    <div class="admininfo">
      <user-tab> </user-tab>
    </div>
 
  </div>
</template>
<script>
import userTab from "../template/userTab"
import { mapActions ,mapGetters } from "vuex"
export default{
  data () {
    return {
      headImage:require("../assets/fang.png")
    }
  },
  components:{
    userTab,
  },
  created(){
    
  },
  computed:{
    ...mapGetters([
      "getUserInfo"
    ])
  },
  methods:{

  }    
}
</script>

<style scoped>
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
  .text{
    width: 80px;
    height: 80px;
    background: #cccccc;
    display: inline-block;
    border-radius: 100px;
    line-height: 80px;
    text-align: center;
    color: #ffffff;
}
</style>