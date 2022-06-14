import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'hello-world',
    storage: window.localStorage
  }).plugin(store)
}
