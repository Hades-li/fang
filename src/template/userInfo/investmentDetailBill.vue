<template>
  <div id="investmentDetailBill">
        <div class="bill-title">
            <Row>
                <Col span="6">
                <h4>租约详情-账单</h4>
                </Col>
                <Col span="18">
                <h4 style="float: right">宝安区-Foru家青年公寓-1室0厅1卫-30.0㎡ </h4>
                </Col>
            </Row>
        </div>
      <div class="bill-table">
          <Table :loading="loading2"
                 :data="getBill"
                 :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
          <Page  :page-size='10' show-elevator show-total @on-change="" style="margin-top: 10px"
                @on-page-size-change=""></Page>
      </div>
         <Modal
        v-model="modal1"
        title="房租编辑"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form :model="formItem" >
            <Row>
                <Col span="11">
                    <FormItem label="房租">
                        <Input v-model="formItem.repaymentCorpus" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center;color:#fff;"> - </Col>
                <Col span="11">
                    <FormItem label="管理费">
                        <Input v-model="formItem.managementFees" placeholder="Enter something..."></Input>
                    </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="11">
            <FormItem label="电费">
                <Input v-model="formItem.powerFees" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
                <Col span="2" style="text-align: center;color:#fff;"> - </Col>
                <Col span="11">
            <FormItem label="燃气费">
                <Input v-model="formItem.waterFees" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="11">
            <FormItem label="网费">
                <Input v-model="formItem.gasBillFees" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
                <Col span="2" style="text-align: center;color:#fff;"> - </Col>
                <Col span="11">
            <FormItem label="停车费">
                <Input v-model="formItem.parkingFees" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="11">
            <FormItem label="电视费">
                <Input v-model="formItem.tvFee" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
                <Col span="2" style="text-align: center;color:#fff;"> - </Col>
                <Col span="11">
            <FormItem label="保暖费">
                <Input v-model="formItem.heatingFee" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
            </Row>

            <Row>
                <Col span="11">

            <FormItem label="卫生费">
                <Input v-model="formItem.sanitationFee" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
                <Col span="2" style="text-align: center;color:#fff;"> - </Col>
                <Col span="11">

            <FormItem label="清洁费">
                <Input v-model="formItem.cleaningFee" placeholder="Enter something..."></Input>
            </FormItem>
                </Col>
            </Row>






            <!-- <FormItem label="逾期金额">
                <Input v-model="formItem.overdueFine" placeholder="Enter something..."></Input>
            </FormItem> -->



        </Form>   
        </Modal>

  </div>
</template>
   
<script>
// /** 管理费 **/
// managementFees;
// /** 电费 **/
// powerFees;
// /** 水费 **/
// waterFees;
// /** 燃气费 **/
// gasBillFees;
// /** 网费 **/
// networkFees;
// /** 停车费 **/
// parkingFees;
// /** 电视费 **/
// tvFee;
// /** 保暖费 **/
// heatingFee;

// /** 卫生费 **/
// sanitationFee;
// /** 清洁费 **/
// cleaningFee;

// /** 应付租金 **/
// repaymentCorpus;

// /** 逾期金额 **/
// overdueFine;
  import { mapActions , mapGetters} from 'vuex'
  import qs from "qs"
  export default {
    name: 'investmentDetailBill',
    data() {
      return {
          listData: [], // @:data
          loading2: false, // 分页loading
          dataTotal:0,
          modal1: false,
           formItem: {
                id:"",
                repaymentCorpus: '',
                managementFees: '',
                powerFees: '',
                waterFees: '',
                gasBillFees: '',
                parkingFees: '',
                tvFee: '',
                heatingFee: '',
                sanitationFee: '',
                cleaningFee: '',
                overdueFine: '',
            },
          columns1: [
                { // @:columns
//            type: 'index',
                    key: 'repaymentTime', // 开启序号
                    title: '月份'
                },
                {
                    title: '房租',
                    key: 'repaymentCorpus'
                },
                {
                    title: '管理费',
                    key: 'managementFees'
                }, 
                {
                    title: '电费',
                    key: 'powerFees'
                }, 
                 {
                    title: '水费',
                    key: 'waterFees'
                }, 
                {
                    title: '燃气费',
                    key: 'gasBillFees'
                }, 
                {
                    title: '网费',
                    key: 'networkFees'
                }, 
                 {
                    title: '停车费',
                    key: 'parkingFees'
                }, 
                {
                    title: '电视费',
                    key: 'tvFee'
                }, 

                 {
                    title: '保暖费',
                    key: 'heatingFee'
                },  
                {
                    title: '卫生费',
                    key: 'sanitationFee'
                }, 
                {
                    title: '清洁费',
                    key: 'cleaningFee'
                }, 
                                {
                    title: '逾期金额',
                    key: 'overdueFine'
                }, 
                {
                  title: '状态',
                  key: 'update_time',
                  sortable: true,
                  render: (h, params) => {
                    const that = this;
                    let userInfo =JSON.parse(this.$cookie.get('userInfo')) ;
                    // console.log(params)
                    if( userInfo.data.isLandlord == 1){
                    if(params.row.status == 1){
                    return h('Button', {
                                props: {
                                    type: 'primary',
                                    size: "small"
                                },
                                on:{
                                    click(){
                                        that.formItem.id = params.row.id
                                        that.modal1 = true
                                    }
                                },
                            },"编辑房租");
                    }
                    if(params.row.status == 2){
                    return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },"已支付");
                    }
                    if(params.row.status == 3){
                    return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },"未支付");
                    }
                    }
                    if( userInfo.data.isLandlord == 0){
                    if(params.row.status == 2){
                    return h('Button', {
                                props: {
                                    type: 'text',
                                    size: "small"
                                },

                            },"已支付");
                    }
                    if(params.row.status == 3){
                    return h('Button', {
                                props: {
                                    type: 'primary',
                                    size: "small"
                                },

                            },"支付");
                    }
                    }

                    }
              }

          ],
          data7:[{
              "createTime":1,
              "repaymentCorpus":1,
              "managementFees":1,
              "powerFees":6,
              "waterFees":1,
              "gasBillFees":1,
              "networkFees":1,
              "parkingFees":2,
              "tvFee":1,
              "heatingFee":1,
              "sanitationFee":2,
              "cleaningFee":1,
              "overdueFine":1,
              "update_time":2
          }]
      }
    },
    created(){

    },
    computed:{
        ...mapGetters([
            "getBill",
            "getMainUrl"
        ])
    },
    methods:{
            ok () {
                // this.$Message.info('提交完成');
                const that = this;
                                       
                        this.$axios.post(
                            this.getMainUrl + '/index?opt=407',
                            qs.stringify(
                            {
                                id:this.formItem.id,
                repaymentCorpus:this.formItem.repaymentCorpus,
                managementFees: this.formItem.managementFees,
                powerFees: this.formItem.powerFees,
                waterFees: this.formItem.waterFees,
                networkFees:this.formItem.waterFees,
                gasBillFees:this.formItem.gasBillFees,
                parkingFees: this.formItem.parkingFees,
                tvFee: this.formItem.tvFee,
                heatingFee: this.formItem.heatingFee,
                sanitationFee: this.formItem.sanitationFee,
                cleaningFee:this.formItem.cleaningFee,
                // overdueFine: this.formItem.overdueFine,
                            }
                        )).then(function (response) {
                             that.$Message.info(response.data.msg);
                        }).catch(function (error) {
                            console.log(error);
                        });
            },
            cancel () {
                this.$Message.info('取消编辑');
            }
    }
  }
</script>

<style lang="scss" scoped>

    .bill-title{
        border-bottom:1px solid #ccc;
        margin: 10px 0;
    }
</style>
