<template>
    <div>
    <div class="roomItem">
        <div class="item-content">
            <img :src="data.housePicture">
            <div class="item-inf">
                <div class="money">
                    {{ data.houseRental }} <span>元/月</span>
                </div>
                <div class="text">
                    {{ data.addressCity }} {{ data.addressCounty }} {{ data.addressArea }} {{ data.addressInfo}}
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
            border-radius: 3px;
            overflow: hidden;
            color:#000;
            transition: all 300ms;
            cursor: pointer;
            position: relative;
            width: 100%;
            &:hover{
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
            }
            img{
                display: block;
                width: 100%;
            }
            .item-inf{
                padding: 18px 15px;
                background-color: #fff;
                position: relative;
                .money{
                    color: #2d8cf0;
                    font-size: 20px;
                    font-weight: 700;
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
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
    .notinveslist_deta .money{
      top: -15px !important;
      right: 5px  !important;;
    }
    .inveslist_deta .money{
      top: -15px !important;
      right: 5px  !important;;
    }
    .userRentMgt_list .money{
      top: -15px !important;
      right: 5px  !important;;
    }
</style>
