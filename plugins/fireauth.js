import { auth } from '@/services/firebase.js'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const currentUser = {
          uid: user.uid,
          email: user.email
        }
        return resolve(store.commit('auth/setUser', currentUser))
      }
      return resolve()
    })
  })
}
