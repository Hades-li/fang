<template>
  <div class="card">
    <p>
        <Row>
            <Col span="5"><b> 真实姓名: </b></Col>
            <Col span="15"><Input v-model="getIdCard.realName" disabled>  </Input>  </Col>
        </Row>   
    </p>  

    <p>
        <Row>
            <Col span="5"><b> 证件类型: </b></Col>
            <Col span="15"><Input value="身份证" disabled>  </Input></Col>
        </Row>   
    </p>  

    <p>
        <Row>
            <Col span="5"><b> 证件号码: </b></Col>
            <Col span="15"><Input v-model="getIdCard.identityNumber" disabled>  </Input>  </Col>
        </Row>   
    </p>  

    <!-- <p>
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
    <p> <Button type="success"> 保存 </Button> </p>  -->
  </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex"
import updated from "../upload/index"
export default{
    data(){
        return{
            userInfo:{
                realName:"",
            },
          
        }
    },
    components:{
        updated
    },
    created(){

    },
    computed:{
        ...mapGetters([
            "getIdCard"
        ])
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