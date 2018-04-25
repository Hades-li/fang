<template>
  <div id="records">

      <div class="records_right" v-if="getBillListBoss">
        <ul>
          <li>
        <p> 姓名 : {{ getUserInfo.userName }}  </p> 
        <p> 卡号 : {{ getUserInfo.paymentAccount }}  </p> 
          </li>
          <li>
            <p> 可用余额 </p>
            <p> {{ getBillListBoss.balance }}元 </p>
            <!-- <span> 查看详情 </span> -->
          </li>
          
          <li>
            <p> 可提现余额 </p>
            <p> {{ getBillListBoss.cash_balance }}元 </p>
            <!-- <span> 查看详情 </span> -->
          </li>
          
          <!-- <li>
            <p> 未交租金 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li> -->

          <li>
            <p> 总额 </p>
            <p> {{ getBillListBoss.acct_balance }}元 </p>
            <!-- <span> 查看详情 </span> -->
          </li>
        </ul>
        <Table :loading="loading2" :data="getBillBoss" :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
      </div>
      <div   class="open_id" v-if="!getBillListBoss" @click="open(getUserInfo.userId)">
        <img src="../../assets/icon-add.png" alt="">
        <p> 立即开户 </p> 
      </div>

  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import qs from "qs"
import { setTimeout } from 'timers';
  export default {
    name: 'records',
    data(){
       return{
          href:"#",
          loading2: false, // 分页loading
           columns1: [
                { 
                    
                    title: '编号',
                    type: 'index',
                },                
                { 
                    
                    title: '交易标号',
                    key: 'orderNo'
                },
                { 
                    
                    title: '账户名称',
                    key: 'userId'
                },
                {
                    title: '时间',
                    key: 'createTime'
                },
                {
                    title: '帐变类型',
                    key: 'dealType'
                }, 
                {
                    title: '变动金额',
                    key: 'amount'
                }, 
                 {
                    title: '余额',
                    key: 'balance'
                }, 



            ],

        }    
    },
    created(){

    },
    computed:{
      ...mapGetters([
        "getBillBoss",
        "getBillListBoss",
        "getUserInfo",
        "getMainUrl"
      ])
    },
    methods:{
      
      open(userId){
          const that = this;
          var createNewTab = window.open('about:blank', '_blank');
          this.$axios.post(
            that.getMainUrl + '/index?opt=501',
            qs.stringify(
                {
                  userId:userId,
                  pageType:1, 
                }
            )).then(function (response) {
                console.log(response)
                if(response.data.success == true){
                  // window.open(response.data.url)
         
                      setTimeout(function() {
                    createNewTab.location.href =response.data.url;
              }, 100)
             
                 
                }else {
        // close the blank tab
               alert(response.data.msg)
                createNewTab.close();
              }
            }).catch(function (error) {
            });        
      }
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
  border: 1px solid #ffffff;
}
.records_right li span{
  position:absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #2d8cf0;
}
.records_right li p{
  text-align: center;
}
.records_right li:nth-child(1){
  background: #ffffff;
  flex: 2;
  border: 1px solid #cccccc;
  margin-right: 20px;
  border-radius: 8px;
}
.records_right li:nth-child(1) p{
  text-align: left;
}
.myacont{
  margin-top: 20px;
}
.open_id{
  display: block;
  width: 300px;
  height: 200px;
  margin: 200px auto;
  border: 1px  dashed #2d8cf0;
  position: relative;
}
.open_id img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-100%);
}
.open_id p{
  line-height: 200px;
  text-align: center;
  margin-top: 20px;
  color: #2d8cf0;
  cursor: pointer;
}

</style>