<template>
  <div class="userRentMgt">
          <div class="list" >
              
              <room-item   class="userRentMgt_list" v-for="(item,index) in getHouseList"  v-bind:data="item">
              </room-item>
          </div>
  </div>
</template>
<script>
import roomItem from 'template/roomListItem'
import { mapGetters } from "vuex"
export default{
  components:{
    roomItem
  },
  computed:{
    ...mapGetters([
        "getHouseList"
    ])
  },
  created(){
   
  },
  methods:{
  }
}
</script>

<style scoped >
.list{
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.userRentMgt_list{
    width: 20%;
    float: left;
}
.userRentMgt{
    margin-top: 50px;
}
</style>
