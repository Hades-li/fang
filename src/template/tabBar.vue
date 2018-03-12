<template>
    <div class="tabBar">
        <div class="tabBar_main">
            <div class="tb-left">
                <img src="../assets/logo.png" alt="logo">
                <a class="link" href="javascript:" @click="gopage('/home')">首页</a>
                <div class="area">
                    <span>厦门</span>
                    <Icon type="arrow-down-b"></Icon>
                    <div class="area-list">
                        <a href="javascript:" v-for="i in ['厦门','武汉','广州','深圳','北京','上海','杭州',]">{{ i }}</a>
                    </div>
                </div>
                <!-- <a class="link" href="javascript:" @click="gopage('/map')">地图找房</a> -->
            </div>
            <!-- v-if="getuserIfo == null?true:false" -->
            <div class="tb-right" v-if="user == undefined?true:false">
                <!-- <a href="javascript:" style="margin-right: 20px;" @click="gopage('/checkIn')" class="link">成为房东</a> -->
                <a href="javascript:" style="margin-right: 10px;" @click="gopage('/checkIn')" class="link"> app下载 </a>
                <!-- <a href="javascript:" @click="gopage('/login')" class="login-btn tenant">租客登录</a> -->
                <a href="javascript:" @click="gopage('/login')" class="login-btn landlord">用户登陆</a>
            </div>
            <div class="tb-right" v-else>
                <!-- JSON.parse(usermsg) -->
                <a href="javascript:" v-if = "user.isLandlord !== 1?false:true" @click="gopage('/checkIn')" style="margin-right: 10px;" class="link"> 成为房东 </a>
                <a href="javascript:" style="margin-right: 20px;" @click="setSendHouse(true)" class="link"> 切换房东 </a>
                <a href="javascript:" style="margin-right: 10px" @click="gopage('/admininfo')" class="link"> 欢迎 {{ user.realName }} </a>
                <a href="javascript:" @click="goLogin" class="link logout">退出</a>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from "vuex"

    export default {
        data(){
            return{
                user:undefined,
            }
        },
        computed: {
            ...mapGetters([
                // "getuserIfo"
            ])
        },
        created(){
            this.user = JSON.parse(this.$cookie.get('userInfo')).data
            // console.log(JSON.parse(this.$cookie.get('userInfo')).data.isLandlord)
            // console.log(JSON.parse(this.$cookie.get('userInfo')).data)
        },
        methods:{
            ...mapActions([
                "setSendHouse",
            ]),
            gopage(url){
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
                    this.$router.push({path: url})
                    this.$Spin.hide();
                }, 800);
            },
            goLogin() {
                this.setSendHouse(false);
                this.$cookie.remove('userInfo')
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabBar {
        background-color: #2e3543;
        border: 0px;
        margin-bottom: 0px;
        border-radius: 0px;
        min-height: 50px;
    }

    .tabBar_main {
        height: 50px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .tb-left {
        display: flex;
        align-items: center;
        height: 100%;
        img {
            height: 100%;
        }
        .area {
            position: relative;
            color: #B3B6CA;
            width: 62px;
            padding: 0 5px 0 15px;
            cursor: pointer;
            &:hover {
                .area-list {
                    display: block;
                }
                color: #fff;
            }
            .area-list {
                display: none;
                position: absolute;
                left: 0;
                top: 35px;
                background-color: #2e3543;
                padding: 12px 10px;
                width: 230px;
                z-index: 100;
                a {
                    display: inline-block;
                    color: #B3B6CA;
                    padding: 0 12px;
                    line-height: 30px;
                    &:hover {
                        color: #f65000;
                    }
                }
            }
        }
        .link {
            padding: 0 15px;
            color: #B3B6CA;
            &:hover, &.active {
                color: #fff;
            }
        }
    }
    .tb-right{
        display: flex;
        align-items: center;
        height: 100%;
        .link{
            color: #B3B6CA;
            &:hover, &.active {
                color: #fff;
            }
            &.logout{
                color: #FF661A;
            }
        }
        .login-btn{
            display: block;
            border: 1px solid #979aa9;
            padding: 3px 12px;
            border-radius: 5px;
            margin: 0 10px;
            font-size: 12px;
            &.tenant{
                color: #B3B6CA;
                &:hover{
                    background-color: #979aa9;
                    color: #fff;
                }
            }
            &.landlord{
                color: #FF661A;
                border-color: #FF661A;
                &:hover{
                    background-color: #FF661A;
                    color: #fff;
                }
            }

        }
    }
</style>
