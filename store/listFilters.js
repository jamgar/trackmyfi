export const state = () => ({
  text: '',
  sortBy: '',
  startDate: '',
  endDate: ''
})

export const mutations = {
  updateText(state, payload) {
    state.text = payload
  },
  resetDefaults(state) {
    state.text = ''
    state.sortBy = ''
    state.startDate = ''
    state.endDate = ''
  }
}
