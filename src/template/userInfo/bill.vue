<template>
  <div class="bill">
    <Table :loading="loading2" :data="data" :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
  </div>
</template>
<script>

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
                    key: 'c'
                }, 
                {
                    title: '余额',
                    key: 'd'
                }, 



            ],
            data:[
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'10151124','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'}
            ]
        }    
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