<template>
  <div class="bill">
     
    <Table :loading="loading2" :data="bill" :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
  </div>
</template>
<script>
import { mapGetters ,mapActions} from "vuex"
export default{
  data(){
       return{
          bill:[],
          loading2: false, // 分页loading
           columns1: [
                { 
                    
                    title: '订单号',
                    key: 'orderId'
                },
                {
                    title: '时间',
                    key: 'repaymentTime'
                },

                {
                    title: '金额',
                    key: 'repaymentCorpus',
                    sortable: true,
                }, 
 
                {
                    title: '状态',
                    key: 'status',
                    // sortable: true,
                    render: (h, params) => {
                    const that = this;
                    let userInfo =JSON.parse(this.$cookie.get('userInfo')) ;
                    if( that.getBoss == false){
                        let status;
                        if(params.row.status == 1){ status = "未付" }
                        if(params.row.status == 2){ status = "已付" }
                        if(params.row.status == 3){ status = "待付" }
                        return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },status);
                    }
                    
                    if( that.getBoss == true){
                        let status;
                        if(params.row.status == 1){ status = "未收" }
                        if(params.row.status == 2){ status = "已收" }
                        if(params.row.status == 3){ status = "待收" }
                        return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },status);
                    }
                    

                    }
                }, 


            ],

        }    
  },
  watch:{
     getBill(newVal,oldVal){
        for(var  i = 0 ;  i<newVal.length;i++){
            if(newVal[i].status == 1){ this.bill.push(newVal[i])}
        }
    }, 

  },
  computed:{
    ...mapGetters([
        "getBoss",
        "getBill",
        "getCurrentTab"
    ])
  },
  components:{

  },
  created(){
      const user = JSON.parse( this.$cookie.get('userInfo'))
      if(this.getBoss){
          this.setBill({
              "order_id":'',
              "landlord_id":user.data.id,
              "user_id":''
          })
      }else{
          this.setBill({
              "order_id":'',
              "landlord_id":'',
              "user_id":user.data.id
          })
      }
  },
  methods:{
      ...mapActions([
          "setBill"
      ])
  }    
}
</script>

<style scoped >
.bill{
    margin-top: 50px;
}
</style>