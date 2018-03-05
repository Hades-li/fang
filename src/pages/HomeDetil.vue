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
          <li v-for="item in getHouseList" @click="pagego(item.id)"> 
            <img src="http://image.mgzf.com/mogoroom/2018-01/mogoWeixin/9/1/3120619/3120619_1516100301211.jpg!pc.list"> 
            <div> 
              <h3> {{ item.addressArea }} {{ item.addressInfo }} </h3>
              <p> {{ item.houseTypeRoomCount }}室{{ item.houseTypeHallCount }}厅{{  item.houseTypeKitchenCount }}厨{{ item.houseTypeToiletCount }}卫-{{ item.houseArea }}㎡ </p>
              <p> {{ item.traffic  }} </p>
              <p> <span> {{ item.rentType == 1?"整租":"合租"  }} </span> </p>
              <p> {{ item.title  }} </p>
            </div> 
            <span class="monny">
              {{ item.houseRental }}元/月
            </span>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import tabBar from "../template/tabBar.vue"
import { mapActions,mapGetters } from "vuex"
export default{
  components:{
    tabBar:tabBar
  },
  created(){
    this.setHouseList(1) 
  },
  computed:{
    ...mapGetters([
      "getHouseList"
    ])
  },
  methods:{
    ...mapActions([
      "setHouseList"
    ]),
    pagego(id){
        this.$Spin.show();
        setTimeout(() => {
         this.$router.push({path: '/roomDetail',query:{id: id}})
          this.$Spin.hide();
        }, 800);
    }
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
