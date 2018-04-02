<template>
    <div class="amap-page-container">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap
        vid="amapDemo"  
        :center="center"
        :zoom="zoom"
        class="amap-demo"
        :events="events">
        <el-amap-marker v-for="marker in markers" :position="marker.position" :content="marker.content" :events="marker.events">
            <Tooltip :content="marker.mark.addressInfo" placement="right">
            <div class="markers"> 
                <span class="price" @click="houseDetail(marker.mark)"> 
                    <i>¥</i> <em>{{ marker.mark.houseRental }} </em>  
                </span>  
            </div>
            </Tooltip>
        </el-amap-marker>
        </el-amap>
        <Modal
            v-model="modal6"
           
            title="房源"
            :loading="loading"
            @on-ok="asyncOK">
            <room-item class="item_house" v-for="item in HouseList"  v-on:click.native="toRoomDetail(item.id)" v-bind:data="item"></room-item>
    </Modal>
    </div>
  </template>



  <script>
    import roomItem from '../template/roomListItem'
    import { mapGetters , mapActions } from "vuex"
    export default {
      data: function() {
        let self = this;  
        return {
            HouseList:[],
            modal6: false,
            closable:false,
            loading: true,
            zoom: 5,
            center: [113.332264, 22.156206],
            markers: [],
            markerRefs: [],
            searchOption: {
                city: '广东',
                citylimit: true
            },
            events: {
                init(o) {
                    setTimeout(() => {
                        // console.log(self.markerRefs);
                        let cluster = new AMap.MarkerClusterer(o, self.markerRefs,{
                        gridSize: 80,
                        renderCluserMarker: self._renderCluserMarker
                    });
                        // console.log(cluster);
                    }, 1000);
                }
            }
        };
      },
      created(){
        this.setHouseList(1);
        let self = this;
        setTimeout(()=>{
            let markers = [];
            
            let basePosition =self.getHouseList;
            for(var i = 0 ; i<basePosition.length;i++ ){
                let addressLongitude = basePosition[i].addressLongitude
                let addressLatitude = basePosition[i].addressLatitude
                markers.push({
                    position: [addressLongitude, addressLatitude],
                    events: {
                        init(o) {
                            self.markerRefs.push(o);
                        },
                    },
                    mark:basePosition[i]
                });
            }
            self.markers = markers;
        },500) 

      },
      components: {
        roomItem  
      },
      computed: {
          ...mapGetters([
              "getHouseList"
          ])
      },
      methods: {
        ...mapActions([
            "setHouseList",
        ]),
        
        _renderCluserMarker(context) {
            const count = this.markers.length;
            let factor = Math.pow(context.count/count, 2/18)
            let div = document.createElement('div');
            let Hue = 180 - factor* 180;
            let bgColor = 'hsla('+Hue+',100%,50%,0.7)';
            let fontColor = 'hsla('+Hue+',100%,20%,1)';
            let borderColor = 'hsla('+Hue+',100%,40%,1)';
            let shadowColor = 'hsla('+Hue+',100%,50%,1)';
            div.style.backgroundColor = bgColor
            let size = Math.round(30 + Math.pow(context.count/count,1/5) * 20);
            div.style.width = div.style.height = size*(1.2)+'px';
            div.style.border = 'solid 1px '+ borderColor;
            div.style.borderRadius = size/1 + 'px';
            div.style.boxShadow = '0 0 1px '+ shadowColor;
            div.innerHTML = context.count+"套";
            div.style.lineHeight = size*(1.2)+'px';
            div.style.color = fontColor;
            div.style.fontSize = '18px';
            div.style.textAlign = 'center';
            context.marker.setOffset(new AMap.Pixel(-size/2,-size/2));
            context.marker.setContent(div)
        },

        onSearchResult(pois) {
        
        },
        houseDetail(maker){
            this.HouseList =[];
            this.HouseList.push(maker)
            this.modal6 = true;
        },
        asyncOK(){
            this.modal6 = false;
        },
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
      }
    };
</script>

<style>
    .amap-demo {
      height: 300px;
    }

    .search-box {
      position: absolute;
      top: 80px;
      left: 20px;
    }

    .amap-page-container {
      position: fixed;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
    .markers{
        text-align: center;
       
    }
    .item_house .item-content{
        margin: 0 auto;
    }
    .price{
        font-size: 14px;
        background-color: #fd5038;
        color: white;
        border-radius: 16px;
        border: 1px solid white;
        float: left;
        line-height: 26px;
        padding: 0 10px 0 20px;
        position: relative;
    }
    .price:before {
        border-top: 10px solid white;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        bottom: -9px;
        left: 10px;
        z-index: -1;
    }
    .price:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        line-height: 0;
        border-top: 11px solid #fd5038;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        left: 10px;
        bottom: -9px;
    }
    .price i {
        position: absolute;
        line-height: 28px;
        display: block;
        height: 28px;
        width: 20px;
        text-align: center;
        left: 3px;
        top: 0;
        font-size: .8em;
        font-family: arial;
        color: inherit;
    }
    .price em {
        color: inherit;
        font-style: normal;
    }
    .title{
        float: left;
    }
</style>