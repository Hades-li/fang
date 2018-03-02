<template>
    <div class="room-detail">
        <Breadcrumb separator="->" class="bread">
            <BreadcrumbItem to="/">什么区</BreadcrumbItem>
            <BreadcrumbItem> XX 小区</BreadcrumbItem>
        </Breadcrumb>
        <div class="detail-wrap clearfix">
            <div class="detail-left">
                <slide-img v-bind:dataList="dataList"></slide-img>
            </div>
            <div class="detail-right">
                <h3 class="title">宝山区-好日子大家园A区-5室3厅2卫-166.0㎡</h3>
                <div class="sub-title">
                    <Icon class="icon-pos" type="android-pin"></Icon>
                    一二三告诉对方光合速率电咖啡壶
                </div>
                <div class="money-wrap">
                    <div class="text">
                        付三
                    </div>
                    <div class="price">
                        5880
                        <span>元/月</span>
                    </div>
                </div>
                <div class="room-list">
                    <h3>户型选择</h3>
                    <ul>
                        <li v-for="i in 10">
                            1室1厅1卫-40㎡-Q型
                        </li>
                    </ul>
                </div>
                <div class="landlord-inf clearfix">
                    <img src="" alt="">
                    <div class="inf-text">
                        <div class="name"> 李先生</div>
                        <div class="phone">
                            <Icon class="icon-phone" type="ios-telephone"></Icon>
                            1234556654543
                        </div>
                    </div>
                    <Button class="yuyue-btn" style="font-size:16px; width: 218px; height: 46px" type="primary"
                            icon="eye">预约看房
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import slideImg from './components/slideImg'

    export default {
        name: "roomDetail",
        data() {
            return {
                dataList: [
                    {
                        url: 'https://image.mgzf.com/mogoroom/2016-12/room/8/0/168/168_1481419664357.jpg'
                    },
                    {
                        url: 'https://image.mgzf.com/mogoroom/2016-12/room/8/0/168/168_1481419946388.jpg'
                    },
                    {
                        url: 'https://image.mgzf.com/mogoroom/2016-12/room/8/0/168/168_1481419664357.jpg'
                    },
                    {
                        url: 'https://image.mgzf.com/mogoroom/2016-12/room/8/0/168/168_1481419946388.jpg'
                    },
                    {
                        url: 'https://image.mgzf.com/mogoroom/2016-12/room/8/0/168/168_1481419664357.jpg'
                    }
                ]
            }
        },
        components: {
            slideImg
        }
    }
</script>

<style lang="scss" scoped>
    .room-detail {
        width: 1200px;
        margin: 0 auto;
    }

    .bread {
        height: 50px;
        line-height: 50px;
    }

    .detail-wrap {
        .detail-left {
            float: left;
            width: 700px;
        }
        .detail-right {
            float: right;
            width: 460px;
        }
        .title {
            font-size: 20px;
        }
        .sub-title {
            font-size: 14px;
            color: #878787;
            line-height: 22px;
            .icon-pos {
                font-size: 18px;
                margin-right: 5px;
            }
        }
        .money-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            margin-top: 20px;
            background-color: #f1f1f1;
            .text {
                font-size: 16px;
            }
            .price {
                color: #f65000;
                font-size: 30px;
                span {
                    font-size: 18px;
                }
            }
        }
    }

    .landlord-inf {
        margin-top: 20px;
        img {
            float: left;
            width: 70px;
            height: 70px;
            background-color: #666;
            border-radius: 50%;
        }
        .inf-text {
            float: left;
            font-size: 16px;
            margin-left: 10px;

            .name {
                padding-top: 8px;
                padding-bottom: 10px;
            }
            .phone {
                color: #f65000;
                .icon-phone {
                    font-size: 20px;
                    margin-right: 5px;
                }
            }
        }
        .yuyue-btn {
            float: right;
            margin-top: 12px;
        }
    }

    .room-list {
        margin-top: 20px;
        background-color: #f1f1f1;
        padding: 15px;
        h3 {
            font-size: 16px;
            margin: 0 0 10px 0;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                border: 1px solid #999;
                width: 205px;
                padding: 5px 0;
                margin: 10px 5px 0;
                text-align: center;
                border-radius: 4px;
                cursor: pointer;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                &:hover {
                    border-color: #f65000;
                    color: #f65000;
                }
            }
        }
    }

</style>
