<template>
    <div class="tabBar">
        <div class="tabBar_main">
            <div class="tb-left">
                <img src="../assets/logo.png"  @click="gopage('/home')" alt="logo">

                <div class="area">
                    <!-- <span></span>
                    <Icon type="arrow-down-b"></Icon>
                    <div class="area-list">
                        <span href="javascript:" v-for="i in ['厦门','武汉','广州','深圳','北京','上海','杭州',]">{{ i }}</span>
                    </div> -->
                    <Dropdown>
                        <span href="javascript:void(0)">
                            厦门
                            <Icon type="arrow-down-b"></Icon>
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="i in ['厦门','武汉','广州','深圳','北京','上海','杭州',]">{{ i }}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <span class="link" v-if="user == undefined?false:true" href="javascript:" @click="gopage('/admininfo')">个人中心</span>
                
                <span class="link" href="javascript:" @click="gopage('/homeDetil')">月付找房</span>
                <span class="link" href="javascript:" @click="gopage('/homeDetil')">整租</span>
                <span class="link" href="javascript:" @click="gopage('/homeDetil')">合租</span>
                <span class="link" href="javascript:" @click="gopage('/map')">地图找房</span>

            </div>
            <!-- v-if="getuserIfo == null?true:false" -->
            <div class="tb-right" v-if="user == undefined?true:false">
                <a href="javascript:" style="margin-right: 20px;" @click="gopage('/checkIn')" class="link">成为房东</a>
                <span href="javascript:" style="margin-right: 10px;" @click="gopage('/checkIn')" class="link"> app下载 </span>
                <!-- <a href="javascript:" @click="gopage('/login')" class="login-btn tenant">租客登录</a> -->
                <span href="javascript:" @click="gopage('/login')" class="login-btn landlord">登陆</span>
                <span href="javascript:" @click="gopage('/login')" class="login-btn landlord">注册</span>
            </div>
            <div class="tb-right" v-else>
                <!-- JSON.parse(usermsg) -->
                <!-- <span href="javascript:" v-if = "user.isLandlord == 1?false:true" @click="gopage('/checkIn')" style="margin-right: 10px;" class="link"> 成为房东 </span> -->
               
                <a href="javascript:" style="margin-right: 20px;" @click="gopage('/checkIn')" class="link">成为房东</a>
                <span href="javascript:" v-if = "user.isLandlord == 1?true:false" style="margin-right: 20px;" @click="getBoss?house(false):house(true)" class="link"> {{ getBoss?"切换用户":"切换房东" }} </span>
                <span href="javascript:" style="margin-right: 10px" @click="gopage('/admininfo')" class="link"> 欢迎 {{ user.userName }} </span>
                <span href="javascript:" @click="goLogin" class="link logout">退出</span>
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
                "getSendHouse",
                "getBoss",
                "getCurrentTab"
            ])
        },
        created(){
            this.user = JSON.parse(this.$cookie.get('userInfo')).data
            // console.log(JSON.parse(this.$cookie.get('userInfo')).data.isLandlord)
            // console.log(JSON.parse(this.$cookie.get('userInfo')).data)
            // console.log(this.user)
        },
        methods:{
            ...mapActions([
                "setSendHouse",
                "setCurrentTab",
                "becomeBoss"
            ]),
            house(val){
                // this.setSendHouse(val)
                this.setCurrentTab('index')
                this.becomeBoss(val)
                this.gopage('/home')
            },
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

                this.setCurrentTab('index')
                this.becomeBoss(false);
                this.$cookie.remove('userInfo')
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped>
    span{
        cursor: pointer;
    }
    .tabBar {
        background-color: #f8f8f8;;
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
            cursor: pointer;
        }
        .area {
            position: relative;
            color: #666;
            width: 62px;
            padding: 0 5px 0 15px;
            font-weight: bolder;
            cursor: pointer;
            &:hover {
                .area-list {
                    display: block;
                }
                color: #2d8cf0;;
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
                span {
                    display: inline-block;
                    color: #B3B6CA;
                    padding: 0 12px;
                    line-height: 30px;
                    &:hover {
                        color: #2d8cf0;
                    }
                }
            }
        }
        .link {
            padding: 0 25px;
            color: #666;
            font-weight: bolder;
            position: relative;
            &:hover, &.active {
                color: #2d8cf0;
            }

        }
    }
    .tb-right{
        display: flex;
        align-items: center;
        height: 100%;
        .link{
            color: #666;
            font-weight: bolder;

            &:hover, &.active {
                color: #2d8cf0;
            }
            &.logout{
                color: #2d8cf0;
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
                color: #2d8cf0;
                border-color: #2d8cf0;
                &:hover{
                    background-color: #2d8cf0;
                    color: #fff;
                }
            }

        }
    }

    // .link::after{
    //     content: "";
    //     position: absolute;
    //     width: 1px;
    //     height: 10px;
    //     right: 0;
    //     top: 50%;
    //     background: #999;
    //     transform: translateY(-50%);
    // }
</style>
