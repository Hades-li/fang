<template>
  <div class="userTab">
    <Menu theme="light" active-name="1">
    
        <MenuItem name="1" @click.native="pagego('./admininfo')">
          <Icon type="document-text"></Icon>
          首页
        </MenuItem>
        <!-- <MenuItem name="2" @click.native="pagego('./release')">
          <Icon type="document-text"></Icon>
            发布房源
          </MenuItem> -->
       
        <MenuGroup title="资金管理">
          <MenuItem name="2" >
            <Icon type="document-text"></Icon>
              交易记录
          </MenuItem>  
          <MenuItem name="3" >
            <Icon type="document-text"></Icon>
              充值
          </MenuItem>  
          <MenuItem name="4" >
            <Icon type="document-text"></Icon>
              提现
          </MenuItem>  
          <MenuItem name="5" >
            <Icon type="document-text"></Icon>
              我的支付宝账号
          </MenuItem>  
        </MenuGroup>

        <MenuGroup title="理财管理">
          <MenuItem name="6" >
            <Icon type="document-text"></Icon>
              我的投资
          </MenuItem>  
          <MenuItem name="7" >
            <Icon type="document-text"></Icon>
              我的体验金
          </MenuItem>  
          <MenuItem name="8" >
            <Icon type="document-text"></Icon>
              我的收款计划
          </MenuItem>  
        </MenuGroup>

        <MenuGroup title="账户管理">
          <MenuItem name=9 >
            <Icon type="document-text"></Icon>
              基础信息
          </MenuItem>  
          <MenuItem name="10" >
            <Icon type="document-text"></Icon>
              安全设置
          </MenuItem>  
          <MenuItem name="11" >
            <Icon type="document-text"></Icon>
              银行卡信息
          </MenuItem>  
          <MenuItem name="12" >
            <Icon type="document-text"></Icon>
              提醒设置
          </MenuItem> 
          <MenuItem name="13" >
            <Icon type="document-text"></Icon>
              站内信息
          </MenuItem> 
        </MenuGroup>

    </Menu>
    



  </div>
</template>
<script>


export default{
  data () {
    return {
      spinShow: true,
     
    }
  },
  components:{
    
  },
  created(){
    
  },
  methods:{
    pagego(url){
        console.log(url)
        this.$Spin.show();
            setTimeout(() => {
                this.$router.push({path: url})
                this.$Spin.hide();
            }, 800);
        }
    }    
}
</script>

<style>
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #fff;
    background: #7fd4f3 !important;
    border-right: 2px solid #7fd4f3 !important;
    z-index: 2;
}
.ivu-menu-item:hover{
    color: #fff !important;
    background: #7fd4f3 !important;
    border-right: 2px solid #7fd4f3 !important;
    z-index: 2;
}
.ivu-menu-item-group-title{
      background: #efefef;
}
.ivu-menu-vertical.ivu-menu-light:after {

    display: block;
    width:0px !important;
}
</style>