import Vue from 'vue'
import Vuex from 'vuex'
import { getCurentUser } from '../api/user'

Vue.use(Vuex)

const state = {
  user: {
    uid: '',
    displayName: ''
  }
}

const getters = {
  currentUser: (state) => state.user
}

const actions = {
  async loadLoggedInUser ({ commit }) {
    try {
      const user = await getCurentUser()
      commit('USER_LOADED', { user })
    } catch (error) {
      commit('NO_USER')
    }
  }
}

const mutations = {
  USER_LOADED (state, { user }) {
    state.user.uid = user.uid
    state.user.displayName = user.displayName
  },
  NO_USER (state) {
    state.user.uid = ''
    state.user.displayName = ''
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
