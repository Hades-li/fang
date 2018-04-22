<template>
  <div id="index">
    <div class="index_left">

        <p class="user_img"> 
            <img v-if="getUserInfos.headImage" :src="`${$host}${getUserInfos.headImage}`" alt=""> 
            <div class="text" v-if="!getUserInfos.headImage" > 暂无图片 </div>
            <div class="user_img_btn"> 点击修改  <input class="file" type="file" accept="image/jpeg,image/png" v-on:change="upload($event)"></div>
            <div class="user_img_tip"> 仅支持jpg,png格式的图片 </div>
           
        </p>
        <p class=""> 
            <Row>
                <Col span="5"><b> 用户姓名: </b></Col>
                <Col span="15"><Input v-model="getUserInfos.userName" >  </Input>  </Col>
                
            </Row>
        </p>
   
        <p> 
            <Row>
                <Col span="5"><b> 手机号码: </b></Col>
                <Col span="15"><Input v-model="getUserInfos.mobile" >  </Input>  </Col>
            </Row> 
        </p>    
        <p> 
            <Row>
                <Col span="5"><b> 邮箱绑定: </b></Col>
                <Col span="15"><Input v-model="getUserInfos.email" >  </Input>  </Col>
            </Row>
        </p>


        <p> <Button type="success" @click="changeUserInfo(getUserInfos)"> 保存 </Button> </p> 
    </div>

  </div>
</template>

<script>
  import lrz from "lrz"
  import qs from "qs"
  import { mapActions , mapGetters } from "vuex"
  export default {
    name: 'index',
    data(){
        return{
     
            img:'',
            userInfo:Object,
            headImage:require("../../assets/fang.png"),
            getUserInfos:{
                "headImage":'',
                "userName":'',
                "mobile":'',
                "email":''
            }
        }
    },

    created(){
        let userInfo = JSON.parse(this.$cookie.get('userInfo'))
        this.setUserInfos(userInfo.data.userId)
    },
    computed:{
        ...mapGetters([
          
        ]),


    },
    methods:{
        ...mapActions([
          
            "setUserInfo"
        ]),
        upload(event){
                const that = this
                const file = event.target.files[0]
                const fd = new FormData()
                console.log(file)
                console.log("压缩前："　+　file.size)
                lrz(file,{width:300}).then(function (rest) {
                rest.file["name"] = "ic_ga-brnn.png"  

 
                console.log(rest)    
                console.log("压缩前后："　+ rest.file.size)
    
                if(rest.file.size>1024000){
                    that.$Message.error('图片太大（温馨提示：不能超过１Ｍ哟）');
                }else{

                if (rest.file) {
                    const msg = that.$Message.loading({
                        content: '正在上传...',
                        duration: 0
                    });
                    fd.append('imgFile', rest.file, file.name)
                    that.$axios.post(`${that.$host}/global/imgupload`,fd, {
                        method: 'post',
                        headers: {'Content-Type': 'multipart/form-data'}
                    }).then((res) => {
                        msg()
                        if (res.data.code === 0) {
                            that.getUserInfos.headImage =  res.data.url
                            console.log(that.getUserInfos.headImage)
                            that.$Message.success('上传成功');
                   
                        } else {
                            that.$Message.error('上传失败');
                        }
                    }).catch((error) => {
                        msg()
                        that.$Message.error('上传失败');
                    })
                }
                }

                });
        },


    setUserInfos(type){
        const that = this
        this.$axios.post(
            `${that.$host}/index?opt=200`,
            qs.stringify(
                {
                    "userId":type,
                }
        )).then(function (response) {
           that.getUserInfos = response.data.data 
        }).catch(function (error) {
                
        });
    },        
    changeUserInfo(type){
        const that = this
        this.$axios.post(
            `${that.$host}/index?opt=201`,
            qs.stringify(
                {
                    "userName":type.userName,
                    "userId":type.userId,
                    "email":type.email,
                    "headImage":type.headImage,
                    "sex":'2'
                }
        )).then(function (response) {
            if(response.data.success == true){
                that.$Message.success(response.data.msg);
                that.setUserInfo(type.userId)
            }else{
                that.$Message.success(response.data.msg);
            }
        }).catch(function (error) {
                
        });
    }  
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
    position: relative;
    cursor: pointer;
}
        .file{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
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
.text{
    width: 80px;
    height: 80px;
    background: #cccccc;
    margin: 0 auto;
    border-radius: 100px;
    line-height: 80px;
    text-align: center;
    color: #ffffff;
}

</style>