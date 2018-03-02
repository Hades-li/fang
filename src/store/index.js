/**
 * Created by wiki on 2017/2/27.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import {actions,mutations}from './actions'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
  tabBar:666
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
