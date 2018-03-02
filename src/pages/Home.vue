<template>
  <div class="home">
     <banner> </banner>
     <main-list> </main-list>
  </div>
</template>
<script>

import mainList from "../template/mainList.vue"
import banner from "../template/banner.vue"
import { mapActions } from "vuex"

export default{
  components:{
    mainList:mainList,
    banner:banner
  },
  created(){
    this.changeTabBar(["首页"])
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

