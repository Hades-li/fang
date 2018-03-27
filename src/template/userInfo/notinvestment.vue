<template>
  <div id="investment">
      <Menu class="menu" mode="horizontal"
            :theme="theme1" active-name="2" @on-select="change">
          <!-- <MenuItem name="1" >
                    签约
          </MenuItem> -->
          <MenuItem name="2">
                    未签约
          </MenuItem>
      </Menu>
      <div class="mainList_ul">
          <div class="list" >
              <room-item  @click.native="go(item.houseInfoVo.id,index)"  class="list_deta" v-for="(item,index) in getOrder"  v-bind:data="item.houseInfoVo">
              </room-item>
              <!-- <div v-show="getOrder.length>0?false:true">
                  暂无未签约
              </div> -->
          </div>
      </div>
  </div>
</template>

<script>
  import roomItem from 'template/roomListItem'
  import { mapActions , mapGetters} from 'vuex'
  import investmentDetail from './investmentDetail.vue'
  export default {
    name: 'investment',
    data() {
      return {
        theme1: 'light',
        sign: true,
      }
    },
    components: {
            roomItem,
            investmentDetail
    },
    created(){
      this.setHouseList(1)
      const user = JSON.parse(this.$cookie.get('userInfo'))
      let landlord_id = '',user_id='' ;
      this.getBoss == false?
        user_id = user.data.userId
        : 
        landlord_id = user.data.userId

      console.log(user)
      this.setOrder({
          "order_id":"",
          "landlord_id":landlord_id,
          "user_id":user_id, 
          "type":1,        
      })
    },
    computed:{
      ...mapGetters([
        "getOrder",
        "getBoss"
      ])
    },
    methods:{
      ...mapActions([
        "setHouseList",
        "setCurrentTab",
        "setOrder",
        "setHouseDetail"
      ]),
      change(){},
      go (name,index) {
        this.setHouseDetail({id:name,ind:index})
        this.setCurrentTab('investmentDetail')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .mainList_ul {
        overflow: hidden;
        padding-top: 3px;
        padding-left: 3px;
        .list{
            display: flex;
            flex-wrap: wrap;
            padding: 20px 55px;
        }
    }

</style>
