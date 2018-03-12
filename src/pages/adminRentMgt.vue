<template>
  <div class="adminRentMgt">
      <tab-bar> </tab-bar>
  </div>
</template>
<script>
import tabBar from "../template/tabBar.vue"
import { mapActions } from "vuex"
export default{
  components:{
    tabBar:tabBar
  },
  created(){
    this.changeTabBar(["房东","租约管理"])
  },
  methods:{
    ...mapActions([
      "changeTabBar"
    ])
  }    
}
</script>

<style scoped >
</style>
