<template>
  <div class="index">
    <tabBar></tabBar>
    <router-view ></router-view>
  </div>
</template>
<script>
  import tabBar from "../template/tabBar.vue"
  export default {
    data () {
      return {
      
      }
    },
    components: {
       tabBar:tabBar,
    },

    beforeMount () {

    },
    mounted () {

    },
    computed: {

    },
    methods: {
    
    }
  }
</script>
<style scoped>

</style>
