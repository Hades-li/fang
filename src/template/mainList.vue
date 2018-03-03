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
                <div class="list">
                    <room-item v-for="i in 7" v-on:click.native="toRoomDetail"></room-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import roomItem from 'template/roomListItem'

    export default {
        name: 'mainList',
        data() {
            return {
                theme1: 'light'
            }
        },

        methods: {
            // 跳转至详情
            
            toRoomDetail() {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                    this.$router.push('/roomDetail')
                }, 800);

            }
        },
        components: {
            roomItem
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
        padding-top: 3px;
        padding-left: 3px;
        .list {
            width: 1230px;
            display: flex;
            flex-wrap: wrap;
        }
    }

    .menu {
        margin-bottom: 30px;
        background-color: transparent;
        .ivu-menu-item {
            font-size: 16px;
        }
    }

    .title {
        margin: 0;
        font-size: 30px;
    }
</style>
