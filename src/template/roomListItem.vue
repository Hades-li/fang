<template>
    <div class="roomItem">
        <div class="item-content">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "room-list-item",
    }
</script>

<style lang="scss" scoped>
    .roomItem{
        margin-bottom: 24px;
        margin-right: 24px;
        .item-content{
            display: block;
            width: 282px;
            height: 282px;
            border-radius: 3px;
            overflow: hidden;
            color:#000;
            transition: all 300ms;
            &:hover{
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
            }
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
</style>
