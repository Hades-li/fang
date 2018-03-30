<template>
  <div id="app">
    <!--<keep-alive>-->
    <router-view></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script>
  import { mapActions } from "vuex"
import { setInterval, clearInterval } from 'timers';
  export default {
    name: 'app',
    created(){
      // this.login()
    },
    created(){

    },
    methods:{
      ...mapActions([
        "login"
      ])
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-family:"PingFang SC", "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

ul>li{
  list-style: none;
}
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>
