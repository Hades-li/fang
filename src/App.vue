<template>
  <div id="app">
    <!--<keep-alive>-->
    <router-view></router-view>
    <!--</keep-alive>-->
  </div>
</template>

<script>
  import { mapActions } from "vuex"
  export default {
    name: 'app',
    created(){
      // this.login()
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
  font-family: Arial, Helvetica, sans-serif;
}

ul>li{
  list-style: none;
}
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>
