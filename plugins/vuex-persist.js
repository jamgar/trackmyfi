import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  return new VuexPersistence({
    key: 'vuex-track-my-fi',
    storage: window.localStorage
  }).plugin(store)
}
