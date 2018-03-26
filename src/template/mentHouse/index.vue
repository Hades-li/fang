<template>
    <div>
        
        <Button class="yuyue-btn" @click="modal1 = true" style="font-size:16px; width: 218px; height: 46px;    margin-top: 20px;
    margin-left: 40px;" type="primary" icon="eye">预约看房
        </Button>
        <Modal
            v-model="modal1"
            title="预约看房"
            @on-ok="ok"
            @on-cancel="cancel">
                <Form ref="formInline2" :model="formInline2">
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline2.user" placeholder="手机号码">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem class="from2_password" prop="password" inline>
                        <Col span="10">
                            <Input type="password" v-model="formInline2.smsCode" placeholder="验证码">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </Col>    
                        <Col span="12">
                            <Button class="password_primary" type="primary" :loading="loading"
                                @click="toLoading({'mobile':formInline2.user,'sms_type':5})">
                                <span v-if="!loading">获取验证码</span>
                                <span v-else>{{ time1 }}秒后获取</span>
                            </Button>
                        </Col>  
                    </FormItem>

                    <FormItem >
                        <Row>
                            <Col span="10">
                                <DatePicker type="date" :options="options3" format="yyyy-MM-dd" value="yyyy-MM-dd" placeholder="预约日期" v-model="formInline2.date"></DatePicker>
                            </Col>
                            <Col span="4" style="text-align: center">-</Col>
                            <Col span="10">
                            <TimePicker type="time" format="HH:mm:ss" value="HH:mm:ss" placeholder="预约时间" v-model="formInline2.time"></TimePicker>
                        </Col>
                    </Row>
                    </FormItem>


                </Form>
        </Modal>
    </div>

</template>
<script>
     import {mapActions , mapState, mapGetters} from "vuex"
     import qs from "qs"
import { clearInterval } from 'timers';
    export default {
        data () {
            return {
                time1:60,
                loading: false,
                modal1: false,
                formInline2: {
                    user: '',
                    smsCode: '',
                    type: 1,
                    deviceType: "1",
                    userId: '',
                    houseId: '',
                    appointTime: '',
                    date:'',
                    time:''
                },
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
            }
        },
        computed:{
            ...mapGetters([
                "getMainUrl"
            ])
        },
        methods: {
            ...mapActions([
                "smsMsg"
            ]),
            toLoading(data) {
                const that = this;
                this.loading = true;
                this.smsMsg(data);
                let timer = setInterval(function (param) { 
                    that.time1-- 
                    if(that.time1 == 0){
                        that.loading = false;
                        clearInterval(timer)
                        that.time1 = 60;
                    }
                },1000)
            },
                        //             userId:userInfo.data.userId,
                        // houseId:that.$route.query.id, 
                        // appointTime:that.appointTime,
                        // verificationCode:that.smsCode,
                        // mobile:that.user

            ok () {
                const that = this; 
                let userInfo =JSON.parse(this.$cookie.get('userInfo'))
                console.log(userInfo)
               
Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


                this.$axios.post(
                    that.getMainUrl + '/index?opt=400',
                    qs.stringify(
                    {
                        userId:userInfo.data.userId,
                        houseId:that.$route.query.id, 
                        appointTime:new Date(this.formInline2.date).Format("yyyy-MM-dd") + " " + new Date(this.formInline2.time).Format("hh:mm:ss"),
                        verificationCode:that.formInline2.smsCode,
                        mobile:that.formInline2.user
                    }
                    )).then(function (response) {
                        that.$Message.info(response.data.msg);
                    }).catch(function (error) {
                
                    });
  
                console.log(this.formInline2)
            },
            cancel () {
                this.$Message.info('您取消了预约看房');
            }
        }
    }
</script>