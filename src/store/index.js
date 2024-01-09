import Vue from 'vue'
import Vuex from 'vuex'
import {leaderboard} from './leaderboard.store'
import {tournament} from './tournament.store'
import {subscription} from './subscription.store'
import products from './product.store'
import cart from './cart.store'
import login from './login.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    leaderboard,
    tournament,
    products,
    cart,
    subscription,
  }
})
