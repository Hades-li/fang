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
}

ul>li{
  list-style: none;
}

</style>
