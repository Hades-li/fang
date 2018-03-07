<template>
  <div class="">
    <div class="user_bg"> </div>
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
  }
</style>