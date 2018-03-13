import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './style/style.scss'
import iView from 'iview'
import myPlugin from './plugins'
import '../node_modules/iview/dist/styles/iview.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/angle-right'
import 'vue-awesome/icons/gear'
import 'vue-awesome/icons/sort'
// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '089242ca20e29f108f8ca5e2b7285e91',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.MarkerClusterer','AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});


Vue.use(iView);
Vue.use(myPlugin);





/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

Array.prototype.contains = function ( needle ) {

  return false;
};
