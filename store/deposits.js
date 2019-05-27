import { database } from '~/services/firebase.js'

export const state = () => ({
  isEditing: false,
  deposits: [],
  deposit: {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
    category: ''
  },
  categories: [
    { label: 'Employment', color: '#3C91E6' },
    { label: 'Investment', color: '#A7CCED' },
    { label: 'Other', color: '#818D92' }
  ]
})

export const mutations = {
  addDeposit(state, deposit) {
    state.deposits.push({
      id: deposit.id,
      description: deposit.description,
      amount: deposit.amount,
      note: deposit.note,
      createdAt: deposit.createdAt,
      category: deposit.category
    })
  },
  updateDeposit(state, payload) {
    const idx = state.deposits.findIndex(deposit => deposit.id === payload.id)
    state.deposits[idx] = payload
  },
  setDeposits(state, deposits) {
    state.deposits = deposits
  },
  setDeposit(state, deposit = {}) {
    state.deposit = deposit
  },
  resetDeposit(state) {
    state.deposit = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
      category: ''
    }
  },
  deleteDeposit(state, id) {
    const idx = state.deposits.findIndex(deposit => deposit.id === id)
    state.deposits.splice(idx, 1)
  },
  setEditing(state, editing = false) {
    state.isEditing = editing
  },
  setId(state, id) {
    state.id = id
  },
  updateDescription(state, description) {
    state.deposit.description = description
  },
  updateCategory(state, category) {
    state.deposit.category = category
  },
  updateAmount(state, amount) {
    state.deposit.amount = amount
  },
  updateNote(state, note) {
    state.deposit.note = note
  },
  updateCreatedAt(state, date) {
    state.deposit.createdAt = date
  }
}

export const actions = {
  addDeposit({ rootState, commit }, deposit) {
    const uid = rootState.auth.user.uid
    const updatedDeposit = {
      description: deposit.description,
      amount: deposit.amount,
      note: deposit.note,
      createdAt: deposit.createdAt,
      category: deposit.category
    }
    return database
      .ref(`users/${uid}/deposits`)
      .push(updatedDeposit)
      .then(ref => {
        commit('addDeposit', { id: ref.key, ...deposit })
        commit('resetDeposit')
      })
      .catch(error => {
        alert('Add Deposit Error: ', error.message)
      })
  },
  getDeposits({ rootState, commit }) {
    const deposits = []
    const uid = rootState.auth.user.uid
    return database
      .ref(`users/${uid}/deposits`)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          deposits.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        commit('setDeposits', deposits)
      })
  },
  updateDeposit({ rootState, commit }, deposit) {
    const uid = rootState.auth.user.uid
    const path = `users/${uid}/deposits/${deposit.id}`
    const updatedDeposit = {
      description: deposit.description,
      amount: deposit.amount,
      note: deposit.note,
      createdAt: deposit.createdAt,
      category: deposit.category
    }
    return database
      .ref(path)
      .update(updatedDeposit)
      .then(() => {
        commit('updateDeposit', deposit)
        commit('resetDeposit')
      })
  },
  async setDeposit({ state, commit }, id) {
    const deposit = await state.deposits.find(deposit => deposit.id === id)
    commit('setDeposit', deposit)
  },
  resetDeposit({ commit }) {
    commit('resetDeposit')
  },
  deleteDeposit({ rootState, commit }, id) {
    const uid = rootState.auth.user.uid
    const path = `users/${uid}/deposits/${id}`
    return database
      .ref(path)
      .remove()
      .then(() => {
        commit('deleteDeposit', id)
      })
  }
}
