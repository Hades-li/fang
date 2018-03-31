<template>
  <div class="userTab">
  
    <Menu theme="light" active-name="1"  style="width: 160px;">
        <!-- <div class="user_ifon">
          <img src="../assets/fang1.png" alt="">
          <p> {{ user_ifo.data.realName }} </p>
        </div> -->
      
        <MenuGroup title="个人中心">
        <MenuItem name="1" @click.native="setCurrentTab({'page':'index','tab':['个人中心','基本信息']})">
          基本信息
        </MenuItem>
        <MenuItem name="2" @click.native="setCurrentTab({'page':'card','tab':['个人中心','证件信息']})">
          证件信息
        </MenuItem>
        </MenuGroup>
        <MenuGroup title="资金管理">
          <MenuItem name="3" @click.native="setCurrentTab({'page':'myMoney','tab':['资金管理','账户信息']})">
            账户信息
          </MenuItem>
          <MenuItem name="4" @click.native="setCurrentTab({'page':'records','tab':['资金管理','资金明细']})">
            资金明细
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="租约管理">
          <MenuItem name="5" @click.native="setCurrentTab({'page':'investment','tab':['租约管理','已签约']})">
              已签约
          </MenuItem>
          <MenuItem name="6" @click.native="setCurrentTab({'page':'notinvestment','tab':['租约管理','未签约']})">
              未签约
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="账单管理">
          <MenuItem name="7" @click.native="setCurrentTab({'page':'bill','tab':['账单管理','已付账单']})">
              {{ getBoss?"已收账单":"已付账单" }}
          </MenuItem>
          <MenuItem name="8" @click.native="setCurrentTab({'page':'bill','tab':['账单管理','未付账单']})">
              {{ getBoss?"未收账单":"未付账单" }}
          </MenuItem>
          <MenuItem name="9" @click.native="setCurrentTab({'page':'bill','tab':['账单管理','待付账单']})">
              {{ getBoss?"待收账单":"待付账单" }}
          </MenuItem>
        </MenuGroup>

        <MenuGroup title="房源管理" v-show="getBoss">
          <!-- <MenuItem name="9" @click.native="setCurrentTab({'page':'houseList')">
              房源列表
          </MenuItem> -->
          <MenuItem name="10" @click.native="setCurrentTab({'page':'sendHouse','tab':['房源管理','发布房源']})">
              发布房源
          </MenuItem>
          <MenuItem name="11" @click.native="setCurrentTab({'page':'myHouse','tab':['房源管理','个人房源']})">
              个人房源
          </MenuItem>
        </MenuGroup>

    </Menu>
    <Breadcrumb separator="/" class="userInfo_tab">
        <BreadcrumbItem v-for="item in getCurrentTab.tab">{{ item }}</BreadcrumbItem>
    </Breadcrumb>
    <index class="template" :is="getCurrentTab.page" keep-alive>
    </index>


  </div>
</template>
<script>
import index from './userInfo/index'
import myHouse from './userInfo/myHouse'
import myMoney from './userInfo/myMoney'
import bill from './userInfo/bill'
import card from './userInfo/card'
import sendHouse from './userInfo/sendHouse'
import houseList from './userInfo/houseList'
import records from './userInfo/records'
import investment from './userInfo/investment'
import notinvestment from './userInfo/notinvestment'
import investmentDetail from './userInfo/investmentDetail.vue'
import investmentDetailBill from './userInfo/investmentDetailBill'

import { mapGetters,mapActions } from "vuex"
export default{
  data () {
    return {
      tab: 1, // currentTab 用于标识当前触发的子组件，
      user_ifo:''
    }
  },
  components:{
    index,
    card,
    sendHouse,
    houseList,
    records,
    investment,
    investmentDetailBill,
    investmentDetail,
    notinvestment,
    myMoney,
    bill,
    myHouse

  },
  created(){
    this.user_ifo =JSON.parse( this.$cookie.get('userInfo'))
    console.log(this.user_ifo.data.realName )
  },
  computed:{
    ...mapGetters([
      "getCurrentTab",
      "getSendHouse",
      "getBoss"
    ])
  },
  methods:{
    ...mapActions([
      "setCurrentTab"
    ]),
    toggleTab: function(tab) {
      this.currentTab = tab; // tab 为当前触发标签页的组件名
    }



  }
}
</script>

<style>
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #fff;
    background: #2d8cf0 !important;
    border-right: 2px solid #7fd4f3 !important;
    z-index: 2;
}
.ivu-menu-item:hover{
    color: #fff !important;
    background: #2d8cf0 !important;
    border-right: 2px solid #7fd4f3 !important;
    z-index: 2;
}
.ivu-menu-item-group-title{
      background: #efefef;
}

.userTab{
  display: flex;
  position: relative;

}
.userInfo_tab{
  position: absolute;
  top: 15px;
  left: 170px;
 
}
.template{
  margin-left: 20px;
  width: 1120px;
  margin-top: 40px;
}
.user_ifon{
  text-align: center;
  padding: 20px 0;
}
.user_ifon img{
  width: 60px;
  height: 60px;
}
.user_ifon p{
  line-height: 35px;
  margin-bottom: 0 !important;
}
</style>
