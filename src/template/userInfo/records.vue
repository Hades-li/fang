<template>
  <div id="records">
      <div class="records_left">
          <h1> 账户余额 </h1>
          <p> 0.00元可用,冻结金额0.00元 </p>
          <Button type="success">充值</Button>
          <Button type="info">提现</Button>
          
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
  flex: 1;
}
.records_right{
  flex: 2;
}
</style>