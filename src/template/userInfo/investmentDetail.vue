<template>
  <div id="investmentDetail">
      <Row>
          <Col span="12">
          <Carousel autoplay v-model="value1" loop>
              <CarouselItem>
                  <div class="demo-carousel">1</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">2</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">3</div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">4</div>
              </CarouselItem>
          </Carousel>
          <Carousel  v-model="value2" loop>
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
          </Carousel>
          </Col>
          <Col span="12" style="padding: 10px 20px">
                <div class="investmentDetail-right">
                    <h4>1300元/月</h4>
                    <h4>宝安区-Foru家青年公寓-1室0厅1卫-30.0㎡</h4>
                    <p>地段好，很优雅</p>
                </div>
                <div class="investmentDetail-right">
                    <h5>退房信息</h5>
                    <p><span>提交时间</span><span class="float">2018-01-01 12:21:21</span></p>
                    <p><span>退房时间</span><span class="float">2018-01-01 12:21:21</span></p>
                    <Row>
                        <Col :span="12">
                        <p>退房原因</p>
                        </Col>
                        <Col :span="12">
                        <p>可能会说很容的内容具体职能换下行</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col :span="12">
                        <p>备注</p>
                        </Col>
                        <Col :span="12">
                        <p>可能会说很容的内容具体职能换下行
                            可能会说很容的内容具体职能换下行
                            可能会说很容的内容具体职能换下行</p>
                        </Col>
                    </Row>
                    <p><span>总退款金额</span><span class="float">李先生</span></p>
                    <p><span>含其他</span><span class="float">13699998888</span></p>
                </div>
                <div class="investmentDetail-right">
                    <h5>房东信息</h5>
                    <p><span>起止时间</span><span class="float">2017.08.01-2017.09.01</span></p>
                    <p><span>付款方式</span><span class="float">付一</span></p>
                    <p><span>房租</span><span class="float">1300元/月</span></p>
                    <p><span>房东电话</span><span class="float">13300009999</span></p>
                </div>
                <div class="">
                    <Button type="primary">查看合同</Button>
                    <Button type="ghost" style="margin-left: 8px">查看账单</Button>
                </div>
          </Col>
      </Row>
  </div>
</template>

<script>
  import { mapActions , mapGetters} from 'vuex'
  export default {
    name: 'investmentDetail',
    data() {
      return {
          value1: 0
      }
    },
    created(){

    },
    computed:{

    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
    #investmentDetail{
        flex: 1;
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
</style>
