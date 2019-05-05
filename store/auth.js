import { auth } from '@/services/firebase'

export const state = () => ({
  isAuthenticated: false,
  message: '',
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload || null
  },
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload
  },
  setMessage(state, message) {
    state.message = message
  }
}

export const actions = {
  async signIn({ commit }, user) {
    const currentUser = {
      uid: user.uid,
      email: user.email
    }
    await commit('setUser', currentUser)
    await commit('setIsAuthenticated', true)
  },
  async signOut({ commit }) {
    await auth.signOut()
    commit('setUser')
    commit('setIsAuthenticated', false)
  }
}
