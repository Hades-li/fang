<template>
  <div class="card">
    <p>
        <Row>
            <Col span="5"><b> 真实姓名: </b></Col>
            <Col span="15"><Input v-model="userInfo.rrealName" >  </Input>  </Col>
        </Row>   
    </p>  

    <p>
        <Row>
            <Col span="5"><b> 证件类型: </b></Col>
            <Col span="15">
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </Col>
        </Row>   
    </p>  

    <p>
        <Row>
            <Col span="5"><b> 证件号码: </b></Col>
            <Col span="15"><Input v-model="userInfo.realName" >  </Input>  </Col>
        </Row>   
    </p>  

    <p>
        <Row>
            <Col span="5"><b> 证件照片: </b></Col>
            <Col span="15"> 
                <div>
                    <p> 正面: </p>
                    <updated ></updated>
                </div>
                <div>
                    <p> 背面: </p>
                    <updated ></updated>
                </div>
            </Col>
        </Row>   
    </p> 
    <p> <Button type="success"> 保存 </Button> </p> 
  </div>
</template>
<script>
import updated from "../upload/index"
export default{
    data(){
        return{
            userInfo:{
                realName:"",
            },
                cityList: [
                    {
                        value: '身份证',
                        label: '身份证'
                    },
                    {
                        value: '护照',
                        label: '护照'
                    },
                    {
                        value: '驾驶证',
                        label: '驾驶证'
                    },
                    {
                        value: '学生证',
                        label: '学生证'
                    },
                ],
                model1: ''            
        }
    },
    components:{
        updated
    },
    created(){

    },
    methods:{

    }    
}
</script>

<style scoped >
    .card{
        width: 400px;
        margin: 80px auto 0;
    }
</style>