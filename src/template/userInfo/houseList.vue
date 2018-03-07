<template>
  <div id="houseList">
           <div class="mainList_ul">
                <div class="list">
                    <room-item v-for="item in getHouseList"  v-bind:data="item"></room-item>
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
        theme1: 'light'
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
    }
  }
</script>

<style lang="scss" scoped>
    .mainList_ul {
        overflow: hidden;
        padding-top: 3px;
        padding-left: 3px;
        .list {
            display: flex;
            flex-wrap: wrap;
        }
    }

</style>