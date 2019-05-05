import { database } from '~/services/firebase.js'

export const state = () => ({
  isEditing: false,
  expenses: [],
  expense: {
    description: '',
    amount: '',
    note: '',
    createdAt: ''
  }
})

export const mutations = {
  addExpense(state, expense) {
    state.expenses.push({
      id: expense.id,
      description: expense.description,
      amount: expense.amount,
      note: expense.note,
      createdAt: expense.createdAt
    })
  },
  updateExpense(state, payload) {
    const idx = state.expenses.findIndex(expense => expense.id === payload.id)
    state.expenses[idx] = payload
  },
  setExpenses(state, expenses) {
    state.expenses = expenses
  },
  setExpense(state, expense = {}) {
    state.expense = expense
  },
  resetExpense(state) {
    state.expense = {
      description: '',
      amount: '',
      note: '',
      createdAt: ''
    }
  },
  deleteExpense(state, id) {
    const idx = state.expenses.findIndex(expense => expense.id === id)
    state.expenses.splice(idx, 1)
  },
  setEditing(state, editing = false) {
    state.isEditing = editing
  },
  updateDescription(state, description) {
    state.expense.description = description
  },
  updateAmount(state, amount) {
    state.expense.amount = amount
  },
  updateNote(state, note) {
    state.expense.note = note
  },
  updateCreatedAt(state, date) {
    state.expense.createdAt = date
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
    const expenses = []
    return database
      .ref('expenses')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        commit('setExpenses', expenses)
      })
  },
  updateExpense({ commit }, expense) {
    const path = `expenses/${expense.id}`
    return database
      .ref(path)
      .update(expense)
      .then(() => {
        commit('updateExpense', expense)
      })
  },
  async setExpense({ state, commit }, id) {
    const expense = await state.expenses.find(expense => expense.id === id)
    commit('setExpense', expense)
  },
  resetExpense({ commit }) {
    commit('resetExpense')
  },
  deleteExpense({ commit }, id) {
    const path = `expenses/${id}`
    return database
      .ref(path)
      .remove()
      .then(() => {
        commit('deleteExpense', id)
      })
  }
}
