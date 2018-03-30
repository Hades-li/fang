<template>
    <div class="footerList">
        <div class="footerList_main">
            <div> 
                <Row class="list_row">

                <Col span="4">
                    <h3> 关于我们 </h3>
                    <ul>
                        <li> 关于在线家 </li>
                        <li> 联系在线家 </li>
                        <li> 加入在线家 </li>
                    </ul>
                </Col>

                <Col span="4">
                    <h3> 在线家业务 </h3>
                    <ul>
                        <li> 业务体系 </li>
                        <li> 在线家产品 </li>
                        <li> 在线家服务 </li>
                        <li> 在线家采购 </li>
                    </ul>
                </Col>

                <Col span="4">
                    <h3> 关注在线家 </h3>
                    <ul>
                        <li> 在线家微信 </li>
                        <li> 下载app </li>
                    </ul>
                </Col>

                </Row>
            </div>
            <div> 
                <Row class="logo_row">
                    <Col span="3">
                    <img src="../assets/logo.png" alt="">
                    </Col>

                    <Col span="19">
                        <p> 厦门在线家科技有限公司 Copyright@2018 ziroom.com 版权所有 京ICP备16015349号-1 </p>
                        <p> 本网站所有页面的数据统计均来源于自如数据库   联系客服：在线家客微信 周一至周日09:00-22:00 </p>
                    </Col>

                    <Col span="2">
                    <img src="../assets/pingzi.png" alt="">
                    </Col>                                        
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
export default{

  created(){
    
  },
  methods:{

  }    
}
</script>

<style scoped >
    .footerList{
        background: #fafafa;
        border-top: solid 1px #ccc;
    }
    .footerList_main{
        width: 1200px;
        margin: 0 auto;
    }
    .list_row h3{
        font-size: 14px;
        font-weight: 700;
        line-height: 35px;
    }
    .list_row li{
        font-size: 12px;
        line-height: 25px;
        cursor: pointer;
    }
    .logo_row{
        border-top: 1px solid #f2f2f2;
        padding: 20px 0;
    }
    .logo_row img{
        width: 100%;
    }
    .logo_row p{
        font-size: 12px;
        line-height: 25px;
        margin-bottom: 0 !important;
        padding:  0 10px;
    }
</style>
