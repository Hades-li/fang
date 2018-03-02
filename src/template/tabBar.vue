<template>
    <div class="tabBar">
        <div class="tabBar_main">
            <div class="tb-left">
                <img src="" alt="logo">
                <div class="area">
                    <span>上海</span>
                    <Icon type="arrow-down-b"></Icon>
                    <div class="area-list">
                        <a href="javascript:" v-for="i in 10">上海</a>
                    </div>
                </div>
                <a class="link" href="">立即找房</a>
            </div>
            <div class="tb-right">
                <a href="javascript:" class="link">房东入驻</a>
                <a href="javascript:" class="login-btn tenant">租客登录</a>
                <a href="javascript:" class="login-btn landlord">房东登录</a>
            </div>

        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex"

    export default {
        computed: {
            ...mapGetters([
                "getTabBar"
            ])
        },
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
            width: 112px;
            height: 100%;
            background-color: #666;
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
