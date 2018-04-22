<template>
  <div class="userRentMgt">
          <div class="list" >
              <room-item v-on:click.native="toRoomDetail(item.id)"   class="userRentMgt_list" v-for="(item,index) in getMyHouse"  v-bind:data="item">
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
        "getMyHouse"
    ])
  },
  created(){
   
  },
  methods:{
                   // 跳转至详情
            toRoomDetail(id) {
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
                    this.$Spin.hide();
                    this.$router.push({path:'/roomDetail',query:{id: id}})
                }, 800);

            }
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
