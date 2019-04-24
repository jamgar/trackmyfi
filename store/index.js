// Is user is authenticated
// Authenicated username to show
export const state = () => ({
  isAuthenicated: false,
  username: ''
})

export const mutations = {
  authenticateUser(state, user) {
    // get user token
    if (user) {
      state.isAuthenicated = true
      state.username = user
    }
  }
}

export const actions = {
  authenticateUser({ commit }, payload) {
    // Perform a call to Firebase Auth
    commit('authenticateUser', payload)
  }
}
