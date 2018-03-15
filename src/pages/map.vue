<template>
    <div class="map">
        <!-- {{ getHouseList }} -->
        <div class="amap-page-container">
            <el-amap
                vid="amapDemo"
                :center="center"
                :zoom="zoom"
                class="amap-demo"
                :events="events">
                <el-amap-marker v-for="marker in markers" :position="marker.position" :content="marker.content" :events="marker.events"></el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>



<script>
    import { mapActions,mapGetters } from "vuex"
import { setTimeout } from 'timers';
    export default {
        data: function() {
            let self = this;

            return {
                zoom: 12,
                center: [113.332264,  23.156206],
                markers: [],
                markerRefs: [],
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
        computed:{
            ...mapGetters([
                "getHouseList"
            ])
        },
        created() {
            let self = this;
            let markers = [];

            let basePosition = [113.332264, 23.156206];
            setTimeout(()=>{
                console.log(this.getHouseList)
                for(var i =0;i<this.getHouseList.length;i++){
                markers.push({
                    position: [this.getHouseList[i].addressLongitude, this.getHouseList[i].addressLatitude],
                    content: '<div style="text-align:center; background-color: hsla(180, 100%, 50%, 0.7); height: 50px; width: 50px; border: 1px solid hsl(180, 100%, 40%); border-radius: 100px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;">'+  this.getHouseList[i].addressInfo +'</div>',
                    events: {
                        init(o) {
                            self.markerRefs.push(o);
                        }
                    }
                });
            }
            },1000)

           
            this.markers = markers;
        },

        methods: {
            ...mapActions([

            ]),
            _renderCluserMarker(context) {
                const count = this.markers.length;
                let factor = Math.pow(context.count/count, 1/18)
                let div = document.createElement('div');
                let Hue = 180 - factor* 180;
                let bgColor = 'hsla('+Hue+',100%,50%,0.7)';
                let fontColor = 'hsla('+Hue+',100%,20%,1)';
                let borderColor = 'hsla('+Hue+',100%,40%,1)';
                let shadowColor = 'hsla('+Hue+',100%,50%,1)';
                div.style.backgroundColor = bgColor
                let size = Math.round(30 + Math.pow(context.count/count,1/5) * 20);
                div.style.width = div.style.height = size+'px';
                div.style.border = 'solid 1px '+ borderColor;
                div.style.borderRadius = size/2 + 'px';
                div.style.boxShadow = '0 0 1px '+ shadowColor;
                div.innerHTML = context.count;
                div.style.lineHeight = size+'px';
                div.style.color = fontColor;
                div.style.fontSize = '14px';
                div.style.textAlign = 'center';
                context.marker.setOffset(new AMap.Pixel(-size/2,-size/2));
                context.marker.setContent(div)
            },
        }
    };
</script>
<style>
    .map{
        position: fixed;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .amap-page-container{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .amap-demo {
        height: 300px;
    }
</style>
