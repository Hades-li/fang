<template>
  <div id="investment">
      <Menu class="menu" mode="horizontal"
            :theme="theme1" active-name="1" @on-select="change">
          <MenuItem name="1" >
                    签约
          </MenuItem>
          <MenuItem name="2">
                    未签约
          </MenuItem>
      </Menu>
      <div class="mainList_ul">
          <div class="list" >
              <room-item class="list_deta" v-for="item in getHouseList"  v-bind:data="item"></room-item>
          </div>
      </div>
  </div>
</template>

<script>
  import roomItem from 'template/roomListItem'
  import { mapActions , mapGetters} from 'vuex'
  export default {
    name: 'investment',
    data() {
      return {
        theme1: 'light',
        sign: true,
      }
    },
    components: {
            roomItem
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
      change (name) {

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
        }
    }

</style>
