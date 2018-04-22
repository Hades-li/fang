<template>
  <div id="investmentDetail">
 
        <Carousel class="demo-carousel"  v-model="value1" loop  :autoplay="autoplay">
            <CarouselItem v-for="item in getHouseDetail.housePictures">
                <div> <img  class="carousel_img" :src="item.picture" alt=""> </div>
            </CarouselItem>
        </Carousel>
        

        <div class="main">
            <div class="investmentDetail-right">
                <h4 class="house_monny">{{ getHouseDetail.houseInfoVo.houseRental }}元/月  </h4>
                <h4>  
                    {{ getHouseDetail.houseInfoVo.addressArea }} 
                        -
                    {{  getHouseDetail.houseInfoVo.addressInfo }}
                        -
                    {{  getHouseDetail.houseInfoVo.houseTypeRoomCount }}室{{ getHouseDetail.houseInfoVo.houseTypeHallCount }}厅{{ getHouseDetail.houseInfoVo.houseTypeToiletCount }}卫
                        -
                    {{  getHouseDetail.houseInfoVo.houseArea }}m²
                </h4>
                <p>{{ getHouseDetail.houseInfoVo.houseContent }}</p>
            </div>
        </div>

        <div class="investmentDetail_right">
            <div class="timo">
                <h5>预约信息</h5>
                <p><span>提交时间</span><span class="float">{{ getHouseDetail.orderList.createTime }}</span></p>
                <p><span>看房时间</span><span class="float">{{ getHouseDetail.orderList.appointTime }}</span></p>
            </div>


            <div class="timo">
                <h5>房东信息</h5>
                <p><span>姓名</span><span class="float">{{ getHouseDetail.orderList.landlordName }}</span></p>
                <p><span>手机</span><span class="float">{{ getHouseDetail.orderList.landlordMobile }}</span></p>
            </div>

            <div class="timo">
                <h5>订单信息</h5>
                <p><span>订单号</span><span class="float">{{ getHouseDetail.orderList.order_id }}</span></p>
                <p><span>创建时间</span><span class="float">{{  getHouseDetail.orderList.houseInfoVo.createTime }}</span></p>
            </div>  
            
            <div v-if="getHouseDetail.orderList.orderStatus == 3">
                    <Button @click='changeShows()' type="primary">查看合同</Button>
                    <!-- <Button type="ghost" @click.native="goBill()" style="margin-left: 8px">查看账单</Button> -->
                </div>
                <div v-else>
                    <div class="" v-if="!userInfogo">
                        <Button @click.native="contract({id:2,title:'生成合同',contant:'确定生成合同吗？'})"  v-if="getHouseDetail.orderList.orderStatus == 1" type="primary">生成合同</Button>
                        <Button @click='changeShows()'   type="primary">查看合同</Button>
                    </div>
               
                    <div class=""  v-if=" userInfogo">
                        <Button @click='changeShows()'   type="primary">查看合同</Button>
                        <Button v-if="getHouseDetail.orderList.orderStatus == 2" @click.native="contract({id:3,title:'签约合同',contant:'确定签约合同吗？'})" type="primary">确认合同</Button>
                    </div>
            </div>   

        </div>


      <div class="contract" v-show="contractShow">
            <div class="contract_top">
                <!-- <Button  v-if="getHouseDetail.orderList.orderStatus == 2&&!userInfogo" @click.native="contract({id:3,title:'签约合同',contant:'确定签约合同吗？'})" type="primary">确认合同</Button> -->
                <Button class="contract_btn" @click="changeShow()">关闭</Button>
            </div>
         
            <div class="contract_mian" >
              
            </div>
      </div>
  </div>
</template>

<script>
  import { mapActions , mapGetters} from 'vuex'
  import qs from "qs"
  export default {
    name: 'investmentDetail',
    data() {
      return {
          autoplay:false,
          value1: 0,
          value2:'',
          userInfogo:true,
          contractShow:false
      }
    },
    created(){
        let userInfo = JSON.parse(this.$cookie.get('userInfo'));
        this.getBoss == false?this.userInfogo = false : this.userInfogo =  true
    },
    computed:{
        ...mapGetters([
            "getHouseDetail",
            "getMainUrl",
            "getContract",
            "getBoss"
        ])
    },
    methods:{
        ...mapActions([
            "setCurrentTab",
            "setContract",
            "setBill"
        ]),
        changeShow(){
            this.contractShow = !this.contractShow;
        },
        changeShows(){
            this.contractShow = !this.contractShow;
            this.setContract({"order_id":this.getHouseDetail.orderList.order_id})
        },

        goBill(){
            let userInfo = JSON.parse(this.$cookie.get('userInfo'));
            let landlord_id = "",user_id="";
            
            this.getBoss == false ?user_id = userInfo.data.userId : landlord_id =  userInfo.data.userId
            this.setBill({
                "order_id":this.getHouseDetail.orderList.order_id,
                "landlord_id":landlord_id,
                "user_id":user_id
            })
            this.setCurrentTab({'page':'investmentDetailBill','tab':['签约管理','账单']})
        },
        contract (name) {
            const that = this;
            this.$Modal.confirm({
                title: name.title,
                    content: '<p>'+ name.contant +'</p>',
                    // type :审核状态类型，-1取消，2待签约，3签约 
                    onOk: () => {
                       
                        this.$axios.post(
                            this.getMainUrl + '/index?opt=403',
                            qs.stringify(
                            {
                                id:this.getHouseDetail.orderList.order_id,
                                type:name.id,
                                reason:'',
                            }
                        )).then(function (response) {
                             that.$Message.info(response.data.msg);
                        }).catch(function (error) {
                            console.log(error);
                        });
                    },
                    onCancel: () => {
                        this.$Message.info('您取消了生成合同');
                    }
                });
            },
    }
  }
</script>

<style lang="scss" scoped>
    #investmentDetail{
        width: 960px;
        margin-top: 50px;
        position: relative;
    }
    .demo-carousel {
        width: 800px;

    }
    .carousel_img{
        width: 800px;
        height: 450px;
    }
    .main{
        width: 800px;
    }
    .house_monny{
        float: right;
        color: #2d8cf0;
    }
    .investmentDetail_right{
        position: absolute;
        width: 195px;
        right: -60px;
        top: 0;
    }
    .timo{
        width: 100%;
        height: 120px;
        // background: #f8f8f8;
        margin-bottom: 10px;
        border-bottom: 1px solid #f8f8f8;
    }
    .timo h5{
        line-height: 40px;
        margin: 0;
        font-weight: bold;
    }
    .timo p{
        line-height: 40px;
        margin-bottom: 0;
    }
    .float{
        float: right;
        color: #2d8cf0;
    }
    .contract{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
        z-index: 9999;
    }
    .contract_mian{
        width: 960px;
        margin: 0 auto;
        background: #ffffff;
        overflow: scroll;
    }
    .contract_top{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -ms-transform: translateX(-50%);
    }
</style>
