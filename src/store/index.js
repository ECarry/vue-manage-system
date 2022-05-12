import Vue from 'vue'
import Vuex from 'vuex'
import tab from './modules/tab'
import page from './modules/page'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab,
    page
  }
})
