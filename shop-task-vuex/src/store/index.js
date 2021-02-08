import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import client from './modules/client'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    client
  }
})
