<template>
  <div id="index">
    <div class="index_left">
          <div>
            <p> <b> 用户姓名: </b> 利达 </p>
            <p> <b> 真实姓名: </b> 张利达 </p>
            <p> <b> 手机号码: </b>13797417685 </p>
            <p> <b> 性别: </b>男 </p>
            <p> <b> 出生日期: </b>1995-02-08 </p>
            <p> <b> 邮箱绑定: </b>gdnjsah@foxmail.com </p>
            <p> <Button type="success"> 修改信息 </Button> </p> 
          </div>
    </div>

      <div class="index_right">
          <div>
        <h1> 账户余额 </h1>
        <p> 0.00元可用,冻结金额0.00元 </p>
        <Button type="success">充值</Button>
        <Button type="info">提现</Button>
          </div>

          
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
.index_left>div{
    background: #efefef;
    width: 400px;
    margin: 100px auto;
    padding: 20px;
}
.index_left>div p{
    width: 80%;
}
.index_right{
    flex: 1;
}
.index_right>div{
    background: #efefef;
    width: 400px;
    margin: 100px auto;
    padding: 20px;
}

.index_right>div h1{
    margin-top: 0;
}
</style>