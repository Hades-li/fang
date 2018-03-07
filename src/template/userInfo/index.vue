<template>
  <div id="index">
      <div class="index_left">
            <p> 用户姓名:利达 </p>
            <p> 真实姓名:利达 </p>
            <p> 真实姓名:利达 </p>
            <p> 性别:利达 </p>
            <p> 出生日期:利达 </p>
            <p> 邮箱绑定:利达 </p>
      </div>

      <div class="index_right">
                    <h1> 账户余额 </h1>
          <p> 0.00元可用,冻结金额0.00元 </p>
          <Button type="success">充值</Button>
          <Button type="info">提现</Button>
          
      </div>
  </div>
</template>

<script>

  export default {
    name: 'index',
    created(){

    },
    methods:{

    }
  }
</script>

<style>
#index{
    display: flex;
}
.index_left{
    flex: 1;
}
.index_right{
    flex: 1;
}

</style>