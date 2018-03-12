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
                 :data="listData"
                 :columns="columns1" ref="table" @on-select="" @on-selection-change=""></Table>
          <Page :total='dataTotal' :page-size='20' show-elevator show-total @on-change="" style="margin-top: 10px"
                @on-page-size-change=""></Page>
      </div>
  </div>
</template>

<script>
  import { mapActions , mapGetters} from 'vuex'
  export default {
    name: 'investmentDetailBill',
    data() {
      return {
          listData: [], // @:data
          loading2: false, // 分页loading
          dataTotal:'',
          columns1: [
              { // @:columns
//            type: 'index',
                  key: 'index', // 开启序号
                  title: '月份'
              },
              {
                  title: '房租',
                  key: 'fname'
              },
              {
                  title: '水电费',
                  key: 'sex'
              },
              {
                  title: '物业费',
                  key: 'phone'
              },
              {
                  title: '煤气费',
                  key: 'address',
                  ellipsis: true
              },
              {
                  title: '天然气费',
                  key: 'detail',
                  ellipsis: true
              },
              {
                  title: '污水费',
                  key: 'create_time',
                  sortable: true
              },
              {
                  title: '总金额',
                  key: 'update_time',
                  sortable: true
              },
              {
                  title: '逾期（滞纳金）',
                  key: 'update_time',
                  sortable: true
              }, {
                  title: '支付状态',
                  key: 'update_time',
                  sortable: true
              }

          ]
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

    .bill-title{
        border-bottom:1px solid #ccc;
        margin: 10px 0;
    }
</style>
