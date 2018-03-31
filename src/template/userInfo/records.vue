<template>
  <div id="records">
      <div class="records_right">
        <ul>
          <li>
            <p> 已收租金 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>
          
          <li>
            <p> 已交租金 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>
          
          <li>
            <p> 未交租金 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>

          <li>
            <p> 总额 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>
        </ul>
        <Table :loading="loading2" :data="data" :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'records',
    data(){
       return{
          loading2: false, // 分页loading
           columns1: [
                { 
                    
                    title: '编号',
                    key: 'g'
                },                
                { 
                    
                    title: '交易标号',
                    key: 'x'
                },
                { 
                    
                    title: '账户名称',
                    key: 'y'
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
                    title: '变动金额',
                    key: 'c'
                }, 
                 {
                    title: '余额',
                    key: 'd'
                }, 



            ],
            data:[
                {'g':'1','x':'1','y':'李大钊','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'1','x':'1','y':'李大钊','a':'2017-7-9' ,'b':'收房租' ,'c':'-2' ,'d':'100'},
                {'g':'1','x':'1','y':'李大钊','a':'2017-7-9' ,'b':'充值' ,'c':'-2' ,'d':'100'},
                {'g':'1','x':'1','y':'李大钊','a':'2017-7-9' ,'b':'提现' ,'c':'-2' ,'d':'100'},
                {'g':'1','x':'1','y':'李大钊','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'}
            ]
        }    
    },
    created(){

    },
    methods:{

    }
  }
</script>

<style>

.records_right ul{
  display: flex;
}
.records_right{
  margin-top: 20px;
}
.records_right li{
  flex: 1;
  background: #efefef;
  margin-bottom: 5px;
  position: relative;
  padding: 20px;
  margin: 10px;
}
.records_right li span{
  position:absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #2d8cf0;
}

</style>