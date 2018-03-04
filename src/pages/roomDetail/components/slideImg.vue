<template>
    <div class="slide-img">
        <!--轮播大图-->
        <div class="swiper-wrap">
            <swiper :options="swiperOptionLarge" ref="slideLarge">
                <!-- slides -->
                <swiper-slide v-for="item in dataList">
                    <img v-bind:data-src="item.url" class="swiper-lazy">
                    <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <!--蒙层-->
            <div class="img-cover">
                <div class="num">
                    {{slideIndex + 1}} / {{dataList.length}}
                </div>
            </div>
        </div>

        <!--轮播小图-->
        <swiper class="swiper-wrap-small" :options="swiperOptionSmall" ref="slideSmall">
            <swiper-slide v-for="(item,index) in dataList">
                <img v-bind:src="item.url">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "slide-img",
        data() {
            const self = this
            return {
                slideLarge: undefined,
                slideSmall: undefined,
                slideIndex: -1,
                swiperOptionLarge: {
                    // Enable lazy loading
                    lazy: true,
                    loadPrevNext: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    on: {
                        slideChange () {
                            const index = self.slideLarge.activeIndex
                            self.slideIndex = index
                            // self.changeSlide(index)
                        }
                    }
                },
                swiperOptionSmall: {
                    spaceBetween: 10,
                    // centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.5,
                    // slidesOffsetBefore: 0,
                    slideToClickedSlide: true,
                    on: {
                        init () {
                            this.slides.css('opacity',0.5)
                            this.slides.eq(0).css('opacity', 1)
                        },
                        click () {
                            const index = self.slideSmall.clickedIndex
                            self.slideLarge.slideTo(index, 300, false)
                            // self.changeSlide(index)

                        }
                    }
                }
            }
        },
        props: {
            dataList: [Array]
        },
        mounted() {
            this.$nextTick(() => {
                this.slideLarge = this.$refs.slideLarge.swiper
                this.slideSmall = this.$refs.slideSmall.swiper
                // this.slideLarge.controller.control = this.slideSmall
                // this.slideSmall.controller.control = this.slideLarge
            })
        },
        watch: {
            slideIndex (newVal,oldVal) {
                this.slideSmall.slides.css('opacity',0.5)
                this.slideSmall.slides[newVal].style.opacity = 1
            }
        },
        methods: {

        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="scss" scoped>
    .slide-img {
    }

    .swiper-wrap {
        position: relative;
        border-radius: 3px;
        overflow: hidden;
        .swiper-slide {
            img {
                width: 700px;
                height: 438px;
            }
        }
        .img-cover {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40px;
            background-color: rgba(0, 0, 0, 0.3);
            padding: 0 10px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            z-index: 100;
            .num {
                float: right;
                height: 100%;
                line-height: 40px;
                font-size: 14px;
                color: #fff;
            }
        }
    }

    .swiper-wrap-small {
        margin-top: 10px;
        .swiper-slide {
            width: 90px;
            opacity: 0.5;
            img {
                width: 90px;
                height: 56px;
                border-radius: 3px;
            }
        }
    }
</style>
