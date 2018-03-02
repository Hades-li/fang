<template>
    <div class="mainList">
        <div class="mainList_div" v-for="i in 3">
            <h1> 热门房源 </h1>
            <Menu mode="horizontal" :theme="theme1" active-name="1">
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
                <div class="mainList_li">
                    <Card class="mainList_card" style=" width: 282px;" v-for="i in 8">
                        <div style="text-align:center">
                            <img style="height: 178px;width: 282px;"
                                 src="http://image.mgzf.com/mogoroom/2018-01/mogoWeixin/9/1/3120619/3120619_1516100301211.jpg!pc.list">
                            <p> 1700元/月 </p>
                            <p> 闵行区-东方都市公寓B栋-1室0厅1卫-32.0㎡ </p>
                            <p> 年轻人喜爱的生活社区，全屋精装 </p>
                        </div>
                    </Card>
                </div>
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

<style>
    .mainList {
        background: #f8f8f8;

    }

    .mainList_div {
        width: 1200px;
        margin: 0 auto;
    }

    .ivu-card-body {
        padding: 0 !important;
    }

    .mainList_card {
        overflow: hidden;
    }

    .mainList_ul {
        overflow: hidden;
    }

    .mainList_card {
        overflow: hidden;
        float: left;
        margin: 0 24px 24px 0;
    }

    .mainList_card:nth-child(4n) {
        margin: 0 0 24px 0;
    }
</style>
