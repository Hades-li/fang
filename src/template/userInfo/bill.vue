<template>
  <div class="bill">
    <Table :loading="loading2" :data="data" :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default{
  data(){
       return{
          loading2: false, // 分页loading
           columns1: [
                { 
                    
                    title: '订单号',
                    key: 'g'
                },
                {
                    title: '时间',
                    key: 'a'
                },
                {
                    title: '帐变类型',
                    key: 'b'
                }, 
                {
                    title: '已付金额',
                    key: 'c',
                    sortable: true,
                }, 
                {
                    title: '余额',
                    key: 'd',
                    // sortable: true,
                }, 
                {
                    title: '状态',
                    key: 'e',
                    // sortable: true,
                    render: (h, params) => {
                    const that = this;
                    let userInfo =JSON.parse(this.$cookie.get('userInfo')) ;
                    // console.log(params)
                    if( that.getBoss == false){
                   
                        return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },"已付/待付/未付(根据接口字段判断)");
                    }
                    
                    if( that.getBoss == true){
                   
                        return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },"已收/待收/未收(根据接口字段判断)");
                    }
                    

                    }
                }, 


            ],
            data:[
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-3' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'}
            ]
        }    
  },
  computed:{
    ...mapGetters([
        "getBoss"
    ])
  },
  components:{

  },
  created(){

  },
  methods:{

  }    
}
</script>

<style scoped >
.bill{
    margin-top: 50px;
}
</style>