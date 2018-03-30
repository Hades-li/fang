<template>
  <div id="index">
    <div class="index_left">

        <p class="user_img"> 
            <img src="https://www.yushundai.com/css/blue/images/u_banner.jpg" alt=""> 
            <div class="user_img_btn"> 点击修改 </div>
            <div class="user_img_tip"> 仅支持jpg,png格式的图片 </div>
        </p>
        <p class=""> 
            <Row>
                <Col span="5"><b> 用户姓名: </b></Col>
                <Col span="15"><Input v-model="userInfo.data.userName" :disabled="show.val0">  </Input>  </Col>
                <Col span="4" class="change_user"> 修改 </Col>
            </Row>
        </p>
        <p>
            <Row>
                <Col span="5"><b> 真实姓名: </b></Col>
                <Col span="15"><Input v-model="userInfo.data.realName" :disabled="show.val0">  </Input>  </Col>
                <Col span="4" class="change_user"> 修改 </Col>
            </Row>   
        </p>    
        <p> 
            <Row>
                <Col span="5"><b> 手机号码: </b></Col>
                <Col span="15"><Input v-model="userInfo.data.mobile" :disabled="show.val0">  </Input>  </Col>
                <Col span="4" class="change_user"> 修改 </Col>
            </Row> 
        </p>    
        <p> 
            <Row>
                <Col span="5"><b> 邮箱绑定: </b></Col>
                <Col span="15"><Input v-model="userInfo.data.email" :disabled="show.val0">  </Input>  </Col>
                <Col span="4" class="change_user"> 修改 </Col>
            </Row>
        </p>
        <p> <Button type="success"> 保存 </Button> </p> 
    </div>

  </div>
</template>

<script>

  export default {
    name: 'index',
    data(){
        return{
            userInfo:JSON.parse(this.$cookie.get('userInfo')),
            show:{
                val0:true
            }
        }
    },
    created(){

    },
    methods:{

    }
  }
</script>

<style scoped>
#index{
    width: 100%;
    margin-top: 80px;
}
.index_left{
    flex: 1;
    width: 400px;
    margin:  0 auto;
}

.user_img{
    text-align: center;
}
.user_img img{
    width: 80px;
    height: 80px;
    border-radius: 80px;
}
.user_img_tip{
    text-align: center;
    font-size: 12px;
    color: #999999;
}
.user_img_btn{
    color:#2d8cf0;
    cursor: pointer;
    text-align: center;
    margin-bottom: 0;
}
.index_left b{
    line-height: 32px;
}
.change_user{
    line-height: 32px;
    text-align: center;
    color:#2d8cf0;
    cursor: pointer;
}
.index_left p{
    margin-bottom: 20px;
}
</style>