<template>
    <div class="mainList">
        <div class="mainList_div" v-for="i in 3">
            <h1 class="title"> 热门房源 </h1>
            <Menu class="menu" mode="horizontal" :theme="theme1" active-name="1">
                <MenuItem name="1">

                    放心租
                </MenuItem>
                <MenuItem name="2">

                    就不放心租
                </MenuItem>

                <MenuItem name="4">

                    尼玛放心租
                </MenuItem>
            </Menu>
            <div class="mainList_ul">
                <ul>
                    <li v-for="i in 7">
                        <!--<Card class="mainList_card" style=" width: 282px;" v-for="i in 8">
                            <div style="text-align:center">
                                <img style="height: 178px;width: 282px;"
                                     src="http://image.mgzf.com/mogoroom/2018-01/mogoWeixin/9/1/3120619/3120619_1516100301211.jpg!pc.list">
                                <p> 1700元/月 </p>
                                <p> 闵行区-东方都市公寓B栋-1室0厅1卫-32.0㎡ </p>
                                <p> 年轻人喜爱的生活社区，全屋精装 </p>
                            </div>
                        </Card>-->
                        <a class="item-content">
                            <img style="height: 178px;width: 282px;"
                                 src="http://image.mgzf.com/mogoroom/2018-01/mogoWeixin/9/1/3120619/3120619_1516100301211.jpg!pc.list">
                            <div class="item-inf">
                                <div class="money">
                                    2456 <span>元/月</span>
                                </div>
                                <div class="text">
                                    嘉定区-索纳特酒店公寓（曹安店）-1室1厅1卫-35.0㎡
                                </div>
                                <div class="sub-text">
                                    宜家装修风格，温馨舒适
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mainList',
        data() {
            return {
                theme1: 'light'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mainList {
        background: #f8f8f8;

    }

    .mainList_div {
        width: 1200px;
        margin: 0 auto;
        padding-top: 30px;
    }

    .ivu-card-body {
        padding: 0 !important;
    }

    .mainList_card {
        overflow: hidden;
    }

    .mainList_ul {
        overflow: hidden;
        ul{
            width: 1230px;
            display: flex;
            flex-wrap: wrap;
        }
        li{
            margin-bottom: 24px;
            margin-right: 24px;
            .item-content{
                display: block;
                width: 282px;
                height: 282px;
                border-radius: 3px;
                overflow: hidden;
                color:#000;
                img{
                    display: block;
                }
                .item-inf{
                    padding: 18px 15px;
                    background-color: #fff;
                    .money{
                        color: #f65000;
                        font-size: 20px;
                        font-weight: 700;
                        span{
                            font-size: 14px;
                        }
                    }
                    .text{
                        font-size: 14px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        padding-bottom: 5px;
                    }
                    .sub-text{
                        font-size: 12px;
                        color: #666;
                    }
                }
            }
        }
    }


    .menu{
        margin-bottom: 30px;
        background-color: transparent;
        .ivu-menu-item{
            font-size: 16px;
        }
    }
    .title{
        margin: 0;
        font-size: 30px;
    }
</style>
