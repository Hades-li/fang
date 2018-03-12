<template>
  <div id="records">
      <div class="records_left">
          <h1> 账户余额 </h1>
          <p> 0.00元可用,冻结金额0.00元 </p>
          <p> <Button type="success">充值</Button> <Button type="info">提现</Button> </p>
      </div>
      <div class="records_right">
        <ul>
          <li>
            <p> 已收租金 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>
          
          <li>
            <p> 代收租金 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>
          
          <li>
            <p> 未付费用 </p>
            <p> 0.00元 </p>
            <span> 查看详情 </span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'records',


    created(){

    },
    methods:{

    }
  }
</script>

<style>
#records{
  display: flex;
}
.records_left{
  flex: 3;
  padding-top: 100px;
}
.records_left h1{
  text-align: center;
}
.records_left p{
  text-align: center;
}
.records_right{
  flex: 2;
  margin-top: 80px;
}
.records_right li{
  background: #efefef;
  margin-bottom: 5px;
  position: relative;
  padding: 20px;
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