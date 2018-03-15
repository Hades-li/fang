<template>
  <div class="index">
    <tabBar></tabBar>
    <router-view ></router-view>
  </div>
</template>
<script>
  import tabBar from "../template/tabBar.vue"
  import { mapActions , mapGetters} from 'vuex'
  export default {
    data () {
      return {
      
      }
    },
    components: {
       tabBar:tabBar,
    },
    created(){
      this.setHouseList(1)
    },
    beforeMount () {

    },
    mounted () {

    },
    computed: {

    },
    methods: {
                 ...mapActions([
                "setHouseList"
            ]),
    }
  }
</script>
<style scoped>

</style>
