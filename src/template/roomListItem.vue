<template>
    <div>
    <div class="roomItem">
        <div class="item-content">
            <img style="height: 178px;width: 282px;"
                 :src="data.housePicture">
            <div class="item-inf">
                <div class="money">
                    {{ data.houseRental }} <span>元/月</span>
                </div>
                <div class="text">
                    {{ data.addressCity }} {{ data.addressCounty }} {{ data.addressArea }} {{ data.addressInfo}}
                    <!-- 嘉定区-索纳特酒店公寓（曹安店）-1室1厅1卫-35.0㎡ -->
                </div>
                <div class="sub-text">
                    {{ data.ancillaryFacilities }},{{ data.apartmentConvention }}
                </div>
            </div>
            <Tag class="tag" v-show="data.orderStatusStr"  color="blue">{{ data.orderStatusStr }}</Tag>
        </div>
       
    </div>
    </div>

</template>

<script>
 

    export default {
        name: "room-list-item",
        data(){
            return{

            }
        },
        props:{
          data:[Object]  
        },


        methods:{

        }
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
            cursor: pointer;
            position: relative;
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
    .tag{
        position: absolute;
        right: 0;
        top: 5px;
    }
</style>
