export default function({ store, redirect, route }) {
  if (store.state.auth.isAuthenticated) {
    return redirect('/dashboard')
  }
}
