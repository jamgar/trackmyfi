import { database } from '~/plugins/firebase.js'

export const state = () => ({
  isEditing: false,
  list: []
})

export const mutations = {
  add(state, expense) {
    state.list.push({
      description: expense.description,
      amount: expense.amount
    })
  }
}

export const actions = {
  addExpense({ commit }, expense) {
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        commit('add', expense)
      })
  }
}
