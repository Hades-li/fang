<template>
    <div class="banner_s">
        <Carousel class="banner" loop autoplay>
            <CarouselItem v-for="item in getBnner">
                <div class="demo-carousel">
                    <img class="banner_img"
                         :src="item.imageUrl"
                         alt="">
                </div>
            </CarouselItem>
        </Carousel>
        <div class="seach">
            <!--<div class="seach_main">-->
                <!--&lt;!&ndash;<Select class="my-sel" v-model="model3" size="large" style="flex:1;">&ndash;&gt;-->
                    <!--&lt;!&ndash;<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>&ndash;&gt;-->
                <!--&lt;!&ndash;</Select>&ndash;&gt;-->
                <!--&lt;!&ndash;<Input class="my-input" v-model="value" size="large" placeholder="地区，小区，地铁" style="flex:5;"></Input>&ndash;&gt;-->
                <!--&lt;!&ndash;<Button class="" type="primary" icon="ios-search" style="flex:1;margin-left: 10px">搜索</Button>&ndash;&gt;-->

                <!---->
            <!--</div>-->
            <button class="selBtn">
                <span>{{selText}}</span>
                <Icon type="arrow-down-b"></Icon>
                <ul class="">
                    <li v-for="(item,index) in selData" @click="chsSel(index)">{{item}}</li>
                </ul>
            </button>
            <input type="text" placeholder="地区，小区">
            <button class="searchBtn">搜索</button>
        </div>
    </div>
</template>
<script>
    import { mapActions,mapGetters } from "vuex"
    export default {
        data() {
            return {
                value: 0,
                selText: '全部',
                selData: [
                    '全部',
                    '整租',
                    '合租'
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],

                model3: '',

            }
        },
        created(){
            this.setBanner()
        },

        computed:{
            ...mapGetters([
                "getBnner"
            ])
        },
        methods:{
            ...mapActions([
                "setBanner"
            ]),
            chsSel(index) {
                this.selText = this.selData[index]
            }
        }
    }
</script>
<style lang="scss">
    .ivu-carousel-dots-inside {
        display: none !important;
    }

    .demo-carousel img {
        width: 100%;
        height: 500px;
    }

    .banner_s {
        position: relative;
    }

    .seach {
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        padding: 20px 0;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .selBtn{
            position: relative;
            width: 100px;
            height: 50px;
            border: 0 none;
            font-size: 16px;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
            background-color: #ccc;
            &:focus{
                box-shadow: none;
                outline: 0 none;
            }
            &:hover{
                background-color: #d4d4d4;
                ul{
                    display: block;
                }
            }
            ul{
                display: none;
                position: absolute;
                left: 0;
                top: 52px;
                width: 100%;
                padding: 5px 0;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
                li{
                    cursor: pointer;
                    line-height: 26px;
                    font-size: 14px;
                    &:hover{
                        background-color: #f5f5f5;
                    }
                }
            }
        }
        input{
            width: 522px;
            height: 50px;
            padding: 6px 12px;
            border: 1px solid #ccc;
            font-size: 18px;
        }
        .searchBtn{
            width: 130px;
            height: 50px;
            color: #fff;
            border: 0 none;
            font-size: 18px;
            background-color: #2d8cf0;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            &:hover{
                background-color: #ccc;
                color:#000;
            }
        }
    }

    .seach_main {
        width: 750px;
        margin: 0 auto;
        display: flex;
    }
</style>

<style lang="scss" scoped>
</style>
