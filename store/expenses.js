import { database } from '~/plugins/firebase.js'

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

export const getters = {
  getExpense: state => {
    return state.expense
  },
  getExpenseById: state => id => {
    return state.expenses.find(expense => expense.id === id)
  }
}

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
  setExpenses(state, expenses) {
    state.expenses = expenses
  },
  setExpense(state, id) {
    let expense = {
      description: '',
      amount: '',
      note: '',
      createdAt: ''
    }

    if (id) {
      expense = state.expenses.find(expense => expense.id === id)
    }
    state.expense = Object.assign({}, state.expense, expense)
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
    console.log('add expense', expense)
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
  setExpense({ commit }, id) {
    commit('setExpense', id)
  }
}
