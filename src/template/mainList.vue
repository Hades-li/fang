<template>
    <div class="mainList">
        <div class="mainList_div" >
            <h1 class="title"> 
                <img src="../assets/002.png" alt="">
            </h1>

            <div class="mainList_ul">
                <div class="list">
                    <room-item class="list_item" v-for="item in getHouseList"  v-on:click.native="toRoomDetail(item.id)" v-bind:data="item"></room-item>
                </div>
            </div>
        </div>
        <div class="mainList_div" >
            <h1 class="title"> 
                <img src="../assets/001.png" alt="">
            </h1>

            <div class="mainList_ul">
                <div class="list">
                    <room-item class="list_item" v-for="item in getHouseList"  v-on:click.native="toRoomDetail(item.id)" v-bind:data="item"></room-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import roomItem from 'template/roomListItem'
    import { mapActions , mapGetters} from 'vuex'
    export default {
        name: 'mainList',
        data() {
            return {
                theme1: 'light'
            }
        },

        computed:{
            ...mapGetters([
               "getHouseList"
            ])
        },
        methods: {

             // 跳转至详情
            toRoomDetail(id) {
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
                    this.$Spin.hide();
                    this.$router.push({path:'/roomDetail',query:{id: id}})
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
        text-align: center;
    }
    .list_item{
        width: 33.33%;
    }
</style>
