<template>
  <div id="investmentDetail">
      <Row>
          <Col span="12">
          <Carousel autoplay v-model="value1" loop>
              <CarouselItem v-for="item in getHouseDetail.housePictures">
                  <div class="demo-carousel"><img :src="item.picture" alt=""></div>
              </CarouselItem>
          </Carousel>
          <!-- <Carousel  v-model="value2" loop>
              <CarouselItem>
                  <div class="demo-carousel-bottom">1</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel-bottom">2</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel-bottom">3</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel-bottom">4</div>
              </CarouselItem>
          </Carousel> -->
          </Col>
          <Col span="12" style="padding: 10px 20px">
                <div class="investmentDetail-right">
                    <h4>{{ getHouseDetail.houseInfoVo.houseRental }}元/月  </h4>
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
                <div class="investmentDetail-right">
                    <h5>预约信息</h5>
                    <p><span>提交时间</span><span class="float">{{ getHouseDetail.orderList.createTime }}</span></p>
                    <p><span>看房时间</span><span class="float">{{ getHouseDetail.orderList.appointTime }}</span></p>

                    <!-- <Row>
                        <Col :span="12">
                        <p>备注</p>
                        </Col>
                        <Col :span="12">
                        <p>  </p>
                        </Col>
                    </Row> -->
                </div>
                <div class="investmentDetail-right">
                    <h5>租客信息</h5>
                    <p><span>姓名</span><span class="float">{{ getHouseDetail.orderList.userName }}</span></p>
                    <p><span>手机号</span><span class="float">{{ getHouseDetail.orderList.userMobile }}</span></p>
                </div>

                <div class="investmentDetail-right">
                    <h5>房东信息</h5>
                    <p><span>姓名</span><span class="float">{{ getHouseDetail.orderList.landlordName }}</span></p>
                </div>

                <div class="investmentDetail-right">
                    <h5>订单信息</h5>
                    <p><span>订单号</span><span class="float">{{ getHouseDetail.orderList.order_id }}</span></p>
                    <p><span>创建时间</span><span class="float">{{  getHouseDetail.orderList.houseInfoVo.createTime }}</span></p>
                </div>


                <div v-if="getHouseDetail.orderList.orderStatus == 3">
                    <Button @click='changeShows()' type="primary">查看合同</Button>
                    <Button type="ghost" @click.native="goBill()" style="margin-left: 8px">查看账单</Button>
                </div>
                <div v-else>
                    <div class="" v-if="userInfogo">
                        <Button @click.native="contract({id:2,title:'生成合同',contant:'确定生成合同吗？'})"  v-if="getHouseDetail.orderList.orderStatus == 1" type="primary">生成合同{{ getHouseDetail.orderList.orderStatus }}</Button>
                        <Button @click='changeShows()'  v-if="getHouseDetail.orderList.orderStatus !== 1" type="primary">查看合同</Button>
                        <!-- <Button type="ghost" @click.native="setCurrentTab('investmentDetailBill')" style="margin-left: 8px">查看账单</Button> -->
                    </div>
                    
                    <div class=""  v-if="getHouseDetail.orderList.orderStatus == 2&&!userInfogo">
                        <Button @click.native="contract({id:3,title:'签约合同',contant:'确定签约合同吗？'})" type="primary">确认合同</Button>
                        <!-- <Button type="ghost" @click.native="setCurrentTab('investmentDetailBill')" style="margin-left: 8px">查看账单</Button> -->
                    </div>

                </div>


          </Col>
      </Row>

      <div class="contract" v-show="contractShow">
          <Button class="contract_btn" @click="changeShow()">关闭</Button>
          <div class="contract_mian" v-html="getContract.content">
              
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
            this.setCurrentTab('investmentDetailBill')
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
        margin-top: 20px;
    }
    .demo-carousel {
        height: 350px;
        line-height: 350px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }
    .demo-carousel-bottom {
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: red;
    }
    .investmentDetail-right{
            border-bottom:1px solid #ccc;
        .float{
            float: right;
        }
    }
    .demo-carousel img{
        width: 485px;
        height: 380px;
    }
    .contract{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 999;
    }
    .contract_mian{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        background: #ffffff;
    }
    .contract_btn{
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
