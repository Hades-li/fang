<template>
    <div class="login">

        <div class="group_method" v-if="!register">
            <span class="gohome" @click="gohome()"> 返回首页 </span>
            <span class="rsgister" @click="gologin()"> 注册账号 </span>
            <div class="tab_login">
                <span :class="login?'':'active'" @click="changeLogin()" role="tab"> 账号登录 </span>
                <span :class="login?'active':''" @click="changeLogin()" role="tab"> 验证码登录  </span>
            </div>

            <div class="login_from from1" v-if="!login">
                <Form ref="formInline1" :model="formInline1" :rules="ruleInline1">
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline1.user" placeholder="账号">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline1.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <Button class="btn" type="primary" @click="logingo(formInline1)"> 登陆</Button>
                </Form>
            </div>

            <div class="login_from from2" v-else>
                <Form ref="formInline2" :model="formInline2" :rules="ruleInline2">
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline2.user" placeholder="手机号码">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem class="from2_password" prop="password" inline>

                        <Input type="password" v-model="formInline2.smsCode" placeholder="验证码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                        <Button class="password_primary" type="primary" :loading="loading"
                                @click="toLoading({'mobile':formInline1.user,'sms_type':3})">
                            <span v-if="!loading">获取验证码</span>
                            <span v-else>59秒后获取</span>
                        </Button>

                    </FormItem>
                    <FormItem>
                        <Button class="btn" type="primary" @click="logingo(formInline2)">登陆</Button>
                    </FormItem>
                </Form>
            </div>
        </div>

        <div class="group_method method_2" v-else>
            <h4> 注册 </h4>
            <span class="gohome" @click="gohome()"> 返回首页 </span>
            <span class="rsgister" @click="gologin()"> 返回登陆 </span>
            <Form ref="formInline3" :model="formInline3" :rules="ruleInline3">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline3.user" placeholder="手机号码">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline3.password1" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>

                <FormItem class="from2_password" prop="password" inline>

                    <Input type="password" v-model="formInline3.password3" placeholder="验证码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                    <Button class="password_primary" type="primary" :loading="loading1"
                            @click="toLoading1({'mobile':formInline3.user,'sms_type':1})">
                        <span v-if="!loading1">获取验证码</span>
                        <span v-else>59秒后获取</span>
                    </Button>

                </FormItem>

                <Button class="btn" type="primary" @click="registers(formInline3)"> 注册</Button>
            </Form>
        </div>

    </div>

</template>
<script>
    import {mapActions} from "vuex"

    export default {
        data() {
            return {
                register: false,
                login: false,
                loading: false,
                loading1: false,
                formInline1: {
                    user: '',
                    password: '',
                    smsCode: '',
                    type: 2,
                    deviceType: "1"
                },
                ruleInline1: {
                    // user: [
                    //   { required: true, message: '请您填写账号', trigger: 'blur' }
                    // ],
                    // password: [
                    //     { required: true, message: '请您填写密码', trigger: 'blur' },
                    //     { type: 'string', min: 6, message: '密码最少6为字符', trigger: 'blur' }
                    //   ]
                },

                formInline2: {
                    user: '',
                    password: '',
                    smsCode: '',
                    type: 2,
                    deviceType: "1"
                },
                ruleInline2: {},

                formInline3: {
                    user: '',
                    password1: '',
                    password2: '',
                    password3: '',
                },
                ruleInline3: {},

            }
        },
        methods: {
            ...mapActions([
                "logingo",
                "registers",
                "smsMsg"
            ]),
            handleSubmit(name) {

            },
            formLoginReset(name) {

            },
            toLoading(data) {
                this.loading = true;
                this.smsMsg(data);
            },
            toLoading1(data) {
                this.loading1 = true;
                this.smsMsg(data);
                this.$Spin.show();
                setTimeout(() => {

                }, 800);
            },
            changeLogin() {
                this.login = !this.login;
            },
            gologin() {
                this.register = !this.register
            },
            gohome() {
                                  this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'load-c',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$router.push({path: '/home'})
                    this.$Spin.hide();
                }, 800);
            }
        },
        created() {
            if (this.$checkLogin() === true) {
                this.$router.replace('/home')
            }
        }
    }
</script>


<style>
    .login {
        background: url("../assets/bg.jpg");
        height: 100%;
        background-position: center;
        overflow: hidden;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .group_method {
        background-color: #edebee;
        width: 350px;
        position: absolute;
        right: 150px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
    }

    .login_from {
        padding: 50px;
    }

    .btn {
        width: 100%;
    }

    .tab_login {
        display: flex;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }

    .tab_login span {
        flex: 1;
        text-align: center;
        background-color: #dedede;
        cursor: pointer;
        padding: 20px 0;
    }

    .tab_login span:nth-child(1) {
        border-top-left-radius: 5px;
    }

    .tab_login span:nth-child(2) {
        border-top-right-radius: 5px;
    }

    .group_method .active {
        background-color: #edebee;
        color: #f65000;
    }

    .ivu-input {
        padding: 10px;
    }

    .rsgister {
        position: absolute;
        bottom: -30px;
        color: #f65000;
        right: 0;
        cursor: pointer;
    }

    .gohome {
        position: absolute;
        bottom: -30px;
        color: #f65000;
        left: 0;
        cursor: pointer;
    }

    .from2_password .ivu-form-item-content {
        display: flex;
    }

    .from2_password .ivu-input-wrapper {
        width: 55%;
        margin-right: 5%;
    }

    .password_primary {
        width: 40%;
    }

    .method_2 {
        padding: 20px 50px;
    }

    .method_2 h4 {
        color: #f65000;
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
    }
</style>
