<template>
  <div class="HomeDetil">
     <div class="HomeDetil_seach">
       <Input icon="ios-clock-outline" placeholder="地区 小区 地铁" style="width: 200px"></Input><Button type="error">搜索</Button><Button type="info">地图找房</Button>
     </div>
     <div class="HomeDetil_type">
       <div class="HomeDetil_type_mian" v-for="i in 2">
         <strong> 地铁: </strong>
         <ul>
          <li> 
            <span v-for="i in 8"> 硚口区 </span>
          </li>
         </ul>
       </div>
      </div>
      <div class="HomeDetil_main">
        <div class="HomeDetil_main_type">
             <strong> 共999+套房源: </strong>
              <ul>
                <li> 
                  <span v-for="i in 4" > 按热度 </span>
                </li>
              </ul>
        </div>
      </div>

      <div class="HomeDetil_list"> 
        <ul>
          <li v-for="i in 8"> 
            <img src="http://image.mgzf.com/imagefile/room/9/1/7219/7219_1426038499639.jpg!pc.list" alt=""> 
            <div> 
              <h3> 宝山区-龙湖北城天街 </h3>
              <p> 2室1厅1卫-35.0㎡ </p>
              <p> 距7号线潘广路494米，步行约5分钟 </p>
              <p> <span> 整租 </span> </p>
              <p> sb公寓 </p>
            </div> 
            <span class="monny">
              2100元/月
            </span>
          </li>
        </ul>
      </div>
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
    this.changeTabBar(["用户","用户中心"])
  },
  methods:{
    ...mapActions([
      "changeTabBar"
    ])
  }    
}
</script>

<style scoped >
  .HomeDetil_seach{
    width: 1200px;
    padding: 20px;
    background-color: #f8f8f8;
    margin: 0 auto;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .HomeDetil_type{
    border: 1px solid #e5e5e5;
    padding: 10px 5px;
    line-height: 40px;
    width: 1200px;
    margin:  0 auto;
    margin-top: 20px;
    border-radius: 5px;
  }
  .HomeDetil_type_mian{
    position: relative;
  }
  .HomeDetil_type_mian strong{
    position: absolute;
    left: 10px;
  }
  .HomeDetil_type_mian ul{
    padding-left: 60px;
    box-sizing: border-box;
  }
  .HomeDetil_type_mian ul span{
    margin-right: 10px;
  }
  .HomeDetil_main{
    padding: 10px 5px;
    width: 1200px;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    margin-top: 20px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }
  .HomeDetil_main_type strong{
    position: absolute;
    left: 10px;
  }
  .HomeDetil_main ul{
    padding-left: 120px;
    margin-bottom: 0;
  }
  .HomeDetil_list{
    padding: 10px 5px;
    width: 1200px;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    margin-top: 20px;
  }
  .HomeDetil_list ul li{
    display: flex;
    border-bottom: 1px dashed #e5e5e5;
    margin-bottom: 20px;
    padding: 20px 0;
    position: relative;
  }
  .HomeDetil_list ul li img{
    width: 380px;
    height: 270px;
    margin-right: 20px;
  }
  .HomeDetil_list ul li .monny{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #ff5600;
    font-size: 24px;
    font-weight: bold;
  } 
</style>
