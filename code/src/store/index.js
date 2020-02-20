import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  // vuex配置
  modules: {
    app,
  },
  getters,
  userId: '',
  userName: ''
});

export default store