import { database } from '~/plugins/firebase.js'

export const state = () => ({
  isEditing: false,
  expenses: []
})

export const getters = {
  getExpenseById: state => id => {
    return state.expenses.find(expense => expense.id === id)
  }
}

export const mutations = {
  addExpense(state, expense) {
    state.list.push({
      id: expense.id,
      description: expense.description,
      amount: expense.amount,
      note: expense.note,
      createdAt: expense.createdAt
    })
  },
  setExpenses(state, expenses) {
    state.expenses = expenses
  }
}

export const actions = {
  addExpense({ commit }, expense) {
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        commit('addExpense', { id: ref.key, ...expense })
      })
  },
  getExpenses({ commit }) {
    return database
      .ref('expenses')
      .once('value')
      .then(snapshot => {
        commit('setExpenses', snapshot.val())
      })
  }
}
