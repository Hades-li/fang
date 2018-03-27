<template>
  <div id="investment">
      <Menu class="menu" mode="horizontal"
            :theme="theme1" active-name="1" @on-select="change">
          <MenuItem name="1" >
                    签约
          </MenuItem>
          <!-- <MenuItem name="2">
                    未签约
          </MenuItem> -->
      </Menu>
      <div class="mainList_ul">
          <div class="list" >
              <room-item  @click.native="go(item.houseInfoVo.id,index)"  class="list_deta" v-for="(item,index) in getOrder"  v-bind:data="item.houseInfoVo">
              </room-item>
              <!-- <div v-show="getOrder.length>0?false:true">
                  暂无签约
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
      let pram,userInfo = JSON.parse(this.$cookie.get('userInfo'));
      this.getBoss== false?
          pram = {
            "order_id":'',
            "landlord_id":'',
            "user_id":userInfo.data.userId, 
            "type":3,
          }:
          pram = {
            "order_id":'',
            "landlord_id":userInfo.data.userId,
            "user_id":'', 
            "type":3,
          };
          // type -1 订单取消 ； 0 待房东审核 ； 1 待看房 ； 2 待签约 3 ：签约完成
      this.setOrder(pram)
    },
    computed:{
      ...mapGetters([
        "getOrder",
        "getBoss"
      ])
    },
    methods:{
      ...mapActions([
        "setOrder",
        "setCurrentTab",
        "setHouseDetail",
      ]),
      change (name) {

       },
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
