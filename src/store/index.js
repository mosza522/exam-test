import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: Cookies.get('user') ? Cookies.get('user') : null,
    stock : Cookies.get('stock') ? Cookies.getJSON('stock') : [],
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    logout(state){
      state.user = null
    },
    setStock(state,stock){
      state.stock = stock
    }
  },
  actions: {
    saveUser ({ commit }, user) {
      commit('setUser', user)
      Cookies.set('user', user)
    },
    logout ({ commit }) {
      commit('logout')
      Cookies.remove('user')
    },
    addItem({ commit }, data){
      let stock = this.state.stock
      stock.push({
        id:this.state.stock.length+1,
        name:data.name,
        imageUrl:data.imageUrl
      })
      commit('setStock', stock)
      Cookies.set('stock', stock)
    },
    removeItem({ commit }, index){
      let stock = Cookies.getJSON('stock')
      stock.splice(index, 1)
      commit('setStock', stock)
      Cookies.set('stock', stock)
    },
    updateItem({ commit }, data){
      let stock = Cookies.getJSON('stock')
      stock[data.index]=data.data
      commit('setStock', stock)
      Cookies.set('stock', stock)
    }
  },
})
