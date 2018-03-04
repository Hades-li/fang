<template>
    <div class="room-detail" v-if="roomData">
        <Breadcrumb separator="->" class="bread">
            <BreadcrumbItem to="/">什么区</BreadcrumbItem>
            <BreadcrumbItem> XX 小区</BreadcrumbItem>
        </Breadcrumb>
        <div class="detail-wrap clearfix">
            <div class="detail-left">
                <!--图片滚动组件-->
                <slide-img v-bind:dataList="picList"></slide-img>
                <!--平台保障-->
                <div class="pingtai-wrap">
                    <h3 class="titleMargin">平台保障</h3>
                    <div class="icons">
                        <div class="icon-item">
                            <i class="icon fang">

                            </i>
                            <span>
                                真实房源
                            </span>
                        </div>
                        <div class="icon-item">
                            <i class="icon fangdong">

                            </i>
                            <span>
                                房东认证
                            </span>
                        </div>
                        <div class="icon-item">
                            <i class="icon baozhang">

                            </i>
                            <span>
                                支付保障
                            </span>
                        </div>
                        <div class="icon-item">
                            <i class="icon more">

                            </i>
                            <span>
                                了解更多
                            </span>
                        </div>
                    </div>
                </div>
                <!--房源信息-->
                <div class="fangyuan-wrap">
                    <h3 class="titleMargin">房源信息</h3>
                    <div class="inf">
                        <div class="code">
                            <i class="icon code"></i>
                            <span>编号：{{roomData.houseInfoVo.houseNo}}</span>
                        </div>
                        <div class="fy-text">
                            <span>户型：
                                {{roomData.houseInfoVo.houseTypeRoomCount}}室
                                {{roomData.houseInfoVo.houseTypeHallCount}}厅
                                {{roomData.houseInfoVo.houseTypeKitchenCount}}厨
                                {{roomData.houseInfoVo.houseTypeToiletCount}}卫
                                {{roomData.houseInfoVo.houseTypeBalconyCount}}阳台
                            </span>
                            <span>面积： {{roomData.houseInfoVo.houseArea}}㎡</span>
                        </div>
                        <div class="fy-text">
                            <span>类型： {{houseType}}</span>
                            <span>楼层：{{roomData.houseInfoVo.houseFloor}}/{{roomData.houseInfoVo.houseFloorMax}}层</span>
                        </div>
                    </div>
                </div>
                <!--分割线-->
                <div class="line mt30"></div>
                <!--房源配置-->
                <div class="fypz">
                    <h3 class="titleMargin">房源配置</h3>
                    <ul class="fypz-list">
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/aircondNum.png)"></i>
                            空调
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/bedNum.png)"></i>
                            床
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/deskNum.png)"></i>
                            书桌
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/wardrobeNum.png)"></i>
                            衣柜
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/veranda.png)"></i>
                            阳台
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/toilet.png)"></i>
                            卫生间
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/waterheaterNum.png)"></i>
                            热水器
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/washerNum.png)"></i>
                            洗衣机
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/fridgeNum.png)"></i>
                            冰箱
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/tv.png)"></i>
                            电视
                        </li>
                        <li>
                            <i style="background-image:url(http://image.mgzf.com/common/roomdetail/web/roomconfig/highlight/gasStoveNum.png)"></i>
                            燃气灶
                        </li>
                    </ul>
                </div>
            </div>
            <div class="detail-right">
                <h3 class="title">{{roomData.houseInfoVo.title}}</h3>
                <div class="sub-title">
                    <Icon class="icon-pos" type="android-pin"></Icon>
                    {{`${roomData.houseInfoVo.addressProvince}省${roomData.houseInfoVo.addressCity}市${roomData.houseInfoVo.addressCounty}区${roomData.houseInfoVo.addressInfo}`}}
                </div>
                <div class="money-wrap">
                    <div class="text">
                        {{ payType }}
                    </div>
                    <div class="price">
                        {{roomData.houseInfoVo.houseRental}}
                        <span>元/月</span>
                    </div>
                </div>
                <!--<div class="room-list">-->
                    <!--<h3>户型选择</h3>-->
                    <!--<ul>-->
                        <!--<li v-for="i in 10">-->
                            <!--1室1厅1卫-40㎡-Q型-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <div class="landlord-inf clearfix">
                    <img v-bind:src="roomData.userInfo.headImg" alt="">
                    <div class="inf-text">
                        <div class="name">{{roomData.userInfo.realName}}</div>
                        <div class="phone">
                            <Icon class="icon-phone" type="ios-telephone"></Icon>
                            {{roomData.userInfo.mobile}}
                        </div>
                    </div>
                    <Button class="yuyue-btn" style="font-size:16px; width: 218px; height: 46px" type="primary"
                            icon="eye">预约看房
                    </Button>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <!--房源描述-->
        <div class="fy-desc">
            <h3 class="titleMargin">房源描述</h3>
            <p>
                {{roomData.houseInfoVo.houseContent}}
            </p>
        </div>
        <div class="line mt30"></div>
        <!--相似房源-->
        <div class="fy-list">
            <h3 class="titleMargin">相似房源</h3>
            <div class="list">
                <div class="wrap">
                    <!--<room-item v-for="i in 10" v-on:click.native="toRoomDetail"></room-item>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import slideImg from './components/slideImg'
    import roomItem from 'template/roomListItem'
    // import uploadBtn from 'template/upload'

    export default {
        name: "roomDetail",
        data() {
            return {
                imgFiles: [],
                payTypeParams: {
                    1: '月付',
                    2: '季付',
                    3: '半年付',
                    4: '年付',
                    5: '一次性付'
                },
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
        mounted() {
            this.$store.dispatch('roomDetail/reqData', {
                id: 1
            })
        },
        computed: {
            roomData() {
                return this.$store.state.roomDetail.data
            },
            picList() {
                const list = []
                if (this.roomData.housePictures) {
                    this.roomData.housePictures.forEach((item) => {
                        list.push({
                            url: `${this.$host}${item.picture}`,
                            desc: item.description
                        })
                    })
                }
                return list
            },
            payType() {
                const type = {
                    1: '月付',
                    2: '季付',
                    3: '半年付',
                    4: '年付',
                    5: '一次性付'
                }
                // parTypeParams[`${roomData.houseInfoVo.payType}`]
                if (this.roomData.houseInfoVo.payType) {
                    return type[`${this.roomData.houseInfoVo.payType}`]
                } else {
                    return ''
                }
            },
            houseType() {
                // 1住宅，2sohu公寓， 3外口公寓，4商办公寓
                const type = {
                    1: '住宅',
                    2: 'sohu公寓',
                    3: '外口公寓',
                    4: '商办公寓'
                }
                if (this.roomData.houseInfoVo.houseType) {
                    return type[`${this.roomData.houseInfoVo.houseType}`]
                } else {
                    return ''
                }
            }
        },
        methods: {
            // 跳转至详情
            toRoomDetail() {
                this.$router.push('/roomDetail/2')
            }
        },
        components: {
            slideImg,
            roomItem,
            // uploadBtn
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
            margin-top: 0;
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

    i.icon {
        display: inline-block;
        background-image: url(~assets/fang-ico.png);
        &.fang {
            width: 44px;
            height: 44px;
            background-position: 0 -586px;
            background-repeat: no-repeat;
        }
        &.fangdong {
            width: 44px;
            height: 44px;
            background-position: 0 -309px;
            background-repeat: no-repeat;
        }
        &.baozhang {
            width: 44px;
            height: 44px;
            background-position: 0 -489px;
            background-repeat: no-repeat;
        }
        &.more {
            width: 44px;
            height: 44px;
            background-position: 0 -222px;
            background-repeat: no-repeat;
        }
        &.code {
            width: 18px;
            height: 18px;
            background-position: 0 0;
        }
    }

    .pingtai-wrap {
        h3 {

        }
        .icons {
            display: flex;
            justify-content: space-around;
            padding: 15px;
            background-color: #f1f1f1;
            .icon-item {
                .icon {
                    margin-right: 10px;
                    vertical-align: middle;
                }
                span {
                    vertical-align: middle;
                }
            }
        }
    }

    .titleMargin {
        font-size: 24px;
        margin: 25px 0;
    }

    .fangyuan-wrap {
        .inf {
            font-size: 14px;
            .code {
                line-height: 30px;
                i {
                    vertical-align: middle;
                }
                span {
                    vertical-align: middle;
                }
            }
            .fy-text {
                line-height: 30px;
                span {
                    display: inline-block;
                    width: 280px;
                }
            }
        }
    }

    .fypz {
        .fypz-list {
            display: flex;
            flex-wrap: wrap;
            li {
                margin-bottom: 10px;
                margin-right: 24px;
                text-align: center;
                font-size: 12px;
                i {
                    display: block;
                    width: 40px;
                    height: 40px;
                    background-size: cover;
                    margin: 0px auto 13px;
                }
            }
        }
    }

    .fy-desc {
        p {

        }
    }

    .fy-list {
        .list {
            overflow: hidden;
            padding-top: 3px;
            padding-left: 3px;
            .wrap {
                width: 1230px;
                display: flex;
                flex-wrap: wrap;

            }
        }
    }

    .line {
        border-bottom: 1px solid #ccc;
    }

    .mt30 {
        margin-top: 30px !important;
    }
</style>
