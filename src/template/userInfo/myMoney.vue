<template>
  <div class="myMoney">
        <Row>
            <Col span="11">
            <Card class="card">
                <div >
                    <p> 账户余额: </p>
                    <h3> 999.99元 </h3>
                    <p class="btn"> <Button type="success" >充值</Button> <Button type="info" @click="modal1 = true">提现</Button>  </p>
                </div>
            </Card>
            </Col>
           
            <Col span="11">
            <Card class="card">
                <div >
                    <p> 账户信息资料: </p>
                    <h3> 姓名：**刚 </h3>
                </div>
            </Card>
            </Col>
        </Row>   
        <div>
             <Table :loading="loading2" :data="data" :columns="columns1"  ref="table" @on-select="" @on-selection-change=""></Table>
        </div> 
        <Modal
            v-model="modal1"
            title="提现">
        <Form :model="formItem" >
        <FormItem label="卡号">
            <Select v-model="formItem.select">
                <Option value="beijing"> 656454*****123121 农业银行 </Option>
                <Option value="shanghai"> 656454*****123121 工商银行</Option>
                <Option value="shenzhen"> 656454*****123121 中国银行</Option>
            </Select>
        </FormItem>
        <FormItem label="金额">
            <Input v-model="formItem.input" placeholder="0.00"></Input>
        </FormItem>
        </Form>
        </Modal>

  </div>
</template>
<script>

export default{
  data(){
      return{
          modal1: false,
          loading2: false, // 分页loading
          formItem:{
                    input: '',
                    select: '',
          },
           columns1: [
                { 
                    
                    title: '编号',
                    key: 'g'
                },
                {
                    title: '时间',
                    key: 'a'
                },
                {
                    title: '帐变类型',
                    key: 'b'
                }, 
                {
                    title: '变动金额',
                    key: 'c'
                }, 
                 {
                    title: '余额',
                    key: 'd'
                }, 



            ],
            data:[
                {'g':'1','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'},
                {'g':'1','a':'2017-7-9' ,'b':'收房租' ,'c':'-2' ,'d':'100'},
                {'g':'1','a':'2017-7-9' ,'b':'充值' ,'c':'-2' ,'d':'100'},
                {'g':'1','a':'2017-7-9' ,'b':'提现' ,'c':'-2' ,'d':'100'},
                {'g':'1','a':'2017-7-9' ,'b':'交房租' ,'c':'-2' ,'d':'100'}
            ]
        }    
  },
  components:{

  },
  created(){

  },
  methods:{

  }    
}
</script>

<style scoped >
.myMoney{
    margin-top: 50px;
}
.card{
    margin: 20px;
    position: relative;
}
.btn{
    text-align: right;
    width: 100%;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
}
</style>