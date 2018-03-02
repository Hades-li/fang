<template>
    <div class="banner_s">
        <Carousel class="banner" loop autoplay >
        <CarouselItem>
            <div class="demo-carousel">
                <img class="banner_img" src="https://a0.muscache.com/im/pictures/6480447/b7ad1b90_original.jpg?aki_policy=x_large" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img class="banner_img" src="https://a0.muscache.com/im/pictures/6480365/4d89fd9c_original.jpg?aki_policy=xx_large" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img class="banner_img" src="https://a0.muscache.com/im/pictures/6471439/1d1ce1d7_original.jpg?aki_policy=x_large" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img class="banner_img" src="https://a0.muscache.com/im/pictures/6470168/d1dbdb25_original.jpg?aki_policy=x_large" alt="">
            </div>
        </CarouselItem>

    </Carousel>
    <div class="seach">
        <div class="seach_main">
            <Select class="my-sel" v-model="model3" size="large" style="flex:1;">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Input class="my-input" v-model="value" size="large" placeholder="地区，小区，地铁" style="flex:5;"></Input>
            <Button class="" type="primary" icon="ios-search" style="flex:1;margin-left: 10px">搜索</Button>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
               value:0,
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
        }
    }
</script>
<style>
.ivu-carousel-dots-inside{
    display: none !important;
}
.demo-carousel img{
    width: 100%;
    height: 500px;
}
.banner_s{
    position: relative;
}
.seach{
    position: absolute;
    background: rgba(0,0,0,0.3);
    padding: 20px 0;
    bottom: 0;
    left: 0 ;
    width: 100%;
}
.seach_main{
    width: 750px;
    margin: 0 auto;
    display: flex;
}
</style>

<style lang="scss" scoped>
</style>
