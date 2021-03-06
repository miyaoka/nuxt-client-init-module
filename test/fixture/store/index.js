export const state = () => ({
  isDispatched: false
})

export const getters = {
  isDispatched: (state) => state.isDispatched
}

export const mutations = {
  dispatchAction(state) {
    state.isDispatched = true
  }
}

export const actions = {
  nuxtClientInit({ commit }) {
    commit('dispatchAction')
  }
}
