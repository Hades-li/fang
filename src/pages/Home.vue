<template>
  <div class="home">
     <banner> </banner>
     <!-- <div class="findHouse">
        <div class="findType"  @click="gopage('/map')">
          <img src="../assets/fang.png" alt="">  地图找房
        </div>
        <div class="findType"  @click="gopage('/homeDetil')">
          <img src="../assets/fang2.png" alt=""> 月付找房
        </div>
        <div class="findType"  @click="gopage('/homeDetil')">
          <img src="../assets/fang3.png" alt=""> 整租
        </div>
        <div class="findType"  @click="gopage('/homeDetil')">
          <img src="../assets/fang1.png" alt=""> 月租
        </div>
     </div> -->
     <main-list> </main-list>
     <footer-list>  </footer-list>
  </div>
</template>
<script>

import mainList from "../template/mainList.vue"
import banner from "../template/banner.vue"
import footerList from "../template/footerList.vue"
export default{
  components:{
    mainList:mainList,
    banner:banner,
    footerList:footerList
  },

  methods:{
            gopage(url){
                  this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'load-c',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$router.push({path: url})
                    this.$Spin.hide();
                }, 800);
            }    
  }
}
</script>

<style scoped >
  .findHouse{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
  }
  .findType{
    flex: 1;
    text-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    color: #333;
  }
  .findType img{
    width: 60px;
    margin-right: 10px;
  }
</style>

