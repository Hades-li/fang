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

Vue.use(iView)
Vue.use(myPlugin)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

Array.prototype.contains = function ( needle ) {

  return false;
}
