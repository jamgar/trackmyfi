import { database } from '~/services/firebase.js'

export const state = () => ({
  isEditing: false,
  expenses: [],
  expense: {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
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
      amount: 0,
      note: '',
      createdAt: 0
    }
  },
  deleteExpense(state, id) {
    const idx = state.expenses.findIndex(expense => expense.id === id)
    state.expenses.splice(idx, 1)
  },
  setEditing(state, editing = false) {
    state.isEditing = editing
  },
  setId(state, id) {
    state.id = id
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
  addExpense({ rootState, commit }, expense) {
    const uid = rootState.auth.user.uid
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        commit('addExpense', { id: ref.key, ...expense })
      })
      .catch(error => {
        alert('Add Expense Error: ', error.message)
      })
  },
  getExpenses({ rootState, commit }) {
    const expenses = []
    const uid = rootState.auth.user.uid
    return database
      .ref(`users/${uid}/expenses`)
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
  updateExpense({ rootState, commit }, expense) {
    const uid = rootState.auth.user.uid
    const path = `users/${uid}/expenses/${expense.id}`
    const updatedExpense = {
      description: expense.description,
      amount: expense.amount,
      note: expense.note,
      createdAt: expense.createdAt
    }
    return database
      .ref(path)
      .update(updatedExpense)
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
  deleteExpense({ rootState, commit }, id) {
    const uid = rootState.auth.user.uid
    const path = `users/${uid}/expenses/${id}`
    return database
      .ref(path)
      .remove()
      .then(() => {
        commit('deleteExpense', id)
      })
  }
}
