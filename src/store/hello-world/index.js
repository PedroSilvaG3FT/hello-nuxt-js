export const state = () => ({
  name: '',
})

export const getters = {
  getName: (state) => state.name,
}

export const mutations = {
  SET_NAME(state, value) {
    state.name = value
  },
}

export const actions = {
  setName({ commit }, value) {
    commit('SET_NAME', value)
  },
}
