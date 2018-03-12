<template>
<<<<<<< HEAD
    <div class="sendHouse" style="padding: 30px 0">
        <Row>
            <Col span="14" offset="5">
                <Form :model="formItem" :label-width="120">
                <FormItem label="小区所在城市">
                    <Row>
                        <Col span="12">
                        <Select v-model="formItem.select">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                        </Col>
                        <Col span="12">
                        <Select v-model="formItem.select">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="小区">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房屋地址">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="面积">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="楼层">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房型">
                    <Input v-model="formItem.input" placeholder=""></Input>
                </FormItem>
                <FormItem label="房源配置" class="houseWaySet">
                    <Row>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>空调</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>床</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>空调</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>床</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>空调</p>
                        </Col>
                        <Col span="3">
                            <Icon type="ionic"></Icon>
                            <p>床</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>空调</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>床</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>空调</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>床</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>空调</p>
                        </Col>
                        <Col span="3">
                        <Icon type="ionic"></Icon>
                        <p>床</p>
                        </Col>
                    </Row>
                </FormItem>
                    <FormItem label="期望租金">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="姓名">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="手机号">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="图形验证码">
                        <Input v-model="formItem.input" placeholder=""></Input>
                    </FormItem>
                <FormItem>
                    <Button type="primary">保存</Button>
                    <Button type="ghost" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
            </Col>
        </Row>
    </div>
</template>
<script>

  export default {
    name: 'sendHouse',
    data(){
      return{
        value:'',
          formItem: {
              input: '',
              select: '',
              radio: 'male',
              checkbox: [],
              switch: true,
              date: '',
              time: '',
              slider: [20, 50],
              textarea: ''
          }
      }
    },
    created(){
=======
    <div id="sendHose">
    <Form :model="formItem" :label-width="80">
        <FormItem label="房东手机号">
          <Row>
            <Col span="11">
               <Input v-model="formItem.input" placeholder="请输入"></Input>
            </Col>
          </Row>  
        </FormItem>

        <FormItem label="标题">
          <Row>
            <Col span="11">
               <Input v-model="formItem.input" placeholder="请输入"></Input>
            </Col>
          </Row>  
        </FormItem>


        <FormItem label="房屋坐落">
          <Row>
            <Col span="8">
               <Input v-model="formItem.input" placeholder="省"></Input>
            </Col>
  
            <Col span="8">
               <Input v-model="formItem.input" placeholder="市"></Input>
            </Col>
 
            <Col span="8">
               <Input v-model="formItem.input" placeholder="区"></Input>
            </Col>

          </Row>  
        </FormItem>

        <FormItem label="详细地址">
          <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>

        <FormItem label="小区楼盘">
          <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>

        <FormItem label="所属片区">
          <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>

        <FormItem label="公寓名称">
          <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>

        <FormItem label="品牌公寓">
             <RadioGroup v-model="formItem.radio">
                <Radio label="male">是</Radio>
                <Radio label="female">否</Radio>
            </RadioGroup>
        </FormItem>

        <FormItem label="房屋类型">
             <RadioGroup v-model="formItem.radio">
                <Radio label="male"> 住宅 </Radio>
                <Radio label="female">公寓</Radio>
                <Radio label="female">外口公寓</Radio>
                <Radio label="female">商务公寓</Radio>
            </RadioGroup>
        </FormItem>


        <FormItem label="房屋户类">
          <Row>
            <Col span="4">
               <Input v-model="formItem.input" placeholder="室"></Input>
            </Col>
  
            <Col span="4">
               <Input v-model="formItem.input" placeholder="厅"></Input>
            </Col>
 
            <Col span="4">
               <Input v-model="formItem.input" placeholder="厨"></Input>
            </Col>
            
            <Col span="4">
               <Input v-model="formItem.input" placeholder="卫"></Input>
            </Col>
            <Col span="4">
               <Input v-model="formItem.input" placeholder="阳台"></Input>
            </Col>
          </Row>  
        </FormItem>

        <FormItem label="房屋楼层">
          <Row>
            <Col span="4">
               <Input v-model="formItem.input" placeholder="层"></Input>
            </Col>
            <Col span="1">
               /
            </Col>
            <Col span="4">
               <Input v-model="formItem.input" placeholder="层"></Input>
            </Col>
          </Row>  
        </FormItem>

        <FormItem label="房屋面积（平方米）">
>>>>>>> bc4c057958bee0643800788adfd938caa3f6d617

          <Input v-model="formItem.input" placeholder=""></Input>
   
        </FormItem>

        <FormItem label="房屋朝向">

          <Input v-model="formItem.input" placeholder="房屋面积（平方米）"></Input>
   
        </FormItem>

        <FormItem label="装修程度">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male"> 豪装 </Radio>
                <Radio label="female"> 精装 </Radio>
                <Radio label="female"> 简装 </Radio>
            </RadioGroup>
        </FormItem>

        <FormItem label="租凭方式">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male"> 整租 </Radio>
                <Radio label="female"> 合租 </Radio>
            </RadioGroup>
        </FormItem>


        <FormItem label="租凭期限">

          <Input v-model="formItem.input" placeholder="月"></Input>
   
        </FormItem>


        <FormItem>
            <Button type="primary">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
     </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>

<<<<<<< HEAD
<style scoped>
    .houseWaySet{
        text-align: center;
    }
    .houseWaySet .ivu-icon{
        font-size: 40px;
    }
    .houseWaySet p{
        margin-bottom: 0;
        line-height: 24px;
    }
=======
<style>
  #sendHose{
    margin-top: 20px;
    padding: 20px 150px;
  }
>>>>>>> bc4c057958bee0643800788adfd938caa3f6d617
</style>
