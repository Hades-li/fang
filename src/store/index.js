/**
 * Created by wiki on 2017/2/27.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import {actions,mutations}from './actions'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
  tabBar:666,
  MainUrl:"http://120.79.140.174:10080/",
  set_user_Info:null,

};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
