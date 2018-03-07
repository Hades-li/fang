<template>
  <div class="userTab">
    <Menu theme="light" active-name="1" style="width: 160px;">
        <MenuGroup title="首页">
        <MenuItem name="1" @click.native="toggleTab('index')">
          个人中心
        </MenuItem>
        </MenuGroup>
        <MenuGroup title="资金管理">
          <MenuItem name="2" @click.native="toggleTab('records')">
            资金管理
          </MenuItem>  
        </MenuGroup>

        <MenuGroup title="租约管理">
          <MenuItem name="6" @click.native="toggleTab('investment')">
              租约管理
          </MenuItem>   
        </MenuGroup>

        <MenuGroup title="房源管理">
          <MenuItem name="9" @click.native="toggleTab('houseList')">
              房源列表
          </MenuItem>  
          <MenuItem name="10" @click.native="toggleTab('sendHouse')">
              发布房源
          </MenuItem>  
        </MenuGroup>

    </Menu>
    
    <index class="template" :is="currentTab" keep-alive></index>


  </div>
</template>
<script>
import index from './userInfo/index'
import sendHouse from './userInfo/sendHouse'
import houseList from './userInfo/houseList'
import records from './userInfo/records'
import investment from './userInfo/investment'


export default{
  data () {
    return {
      currentTab: 'index' // currentTab 用于标识当前触发的子组件
     
    }
  },
  components:{
    index,
    sendHouse,
    houseList,
    records,
    investment
  },
  created(){

  },
  methods:{
    // pagego(url){
    //     console.log(url)
    //     this.$Spin.show();
    //         setTimeout(() => {
    //             this.$router.push({path: url})
    //             this.$Spin.hide();
    //         }, 800);
    // }
    toggleTab: function(tab) {
      this.currentTab = tab; // tab 为当前触发标签页的组件名
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
.userTab{
  display: flex;
}
.template{
  margin-left: 20px;
  width: 1120px;
}
.ivu-menu-item-group>ul {
    padding: 0 0 0 20px!important;
    list-style: none!important;
    text-align: center;
}
</style>