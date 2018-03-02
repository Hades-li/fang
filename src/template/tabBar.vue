<template>
    <div class="tabBar">
        <div class="tabBar_main">
       
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default{
    computed:{
        ...mapGetters([
           "getTabBar"
        ])
    },
}
</script>

<style scoped >
.tabBar{
    background-color: #2e3543;
    border: 0px;
    margin-bottom: 0px;
    border-radius: 0px;
    min-height: 50px;
}
.tabBar_main{
    height: 50px;
    width: 1200px;
    min-width: 1200px;
    margin: auto;
}
</style>
