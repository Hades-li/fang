/**
 * Created by wiki on 2017/2/27.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import {actions, mutations} from './actions'
import * as getters from './getters'
import roomDetail from './modules/roomDetail'

Vue.use(Vuex);

const state = {

  tabBar:666,
  MainUrl:"http://120.79.140.174:10080/",
  banner_list:null,
  house_list:null,
  province_list:[],
  city_list:[],
  currentTab:"index",


};

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    actions,
    mutations,
    modules:{
        roomDetail
    }
})
