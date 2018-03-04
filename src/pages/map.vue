<template>
  <div class="map">
      <div id="container" class="mymap"></div>
  </div>
</template>
<script>
import AMap from 'AMap';   //在页面中引入高德地图

export default{
  components:{
    
  },
  created(){
    
  },
    mounted(){
       this.loadmap();     //加载地图和相关组件
    },
    methods: {
      loadmap(){
        const map = new AMap.Map('container', {
          zoom: 13
        });
      }
    }
}
</script>

<style scoped >
.map{
    position: fixed;
    left: 0;
    right: 0;
    top:50px ;
    bottom: 0;
}
#container{
    width: 100%;
    height: 100%;
}
</style>
