export const list = {
  state: {
    list: [
      {
        id: 1,
        text: 'ahmet'
      },
      {
        id: 2,
        text: 'ahmet2'
      },
      {
        id: 3,
        text: 'ahmet3'
      }
    ]
  },
  getters: {
    getList(state) {
      return state.list
    }
  },
  mutations: {
    setList(state, payload) {
      state.list.push(payload)
    },
    deleteElement(state, id) {
      state.list = state.list.filter((element) => {
        return element.id !== id
      })
    },
    updateList(state, payload) {
      state.list.forEach((element) => {
        if (element.id === payload.id) {
          element.text = payload.text
        }
      })
    }
  },
  actions: {
    appendToList({ commit }, payload) {
      commit('setList', payload)
    },
    deleteFromList({ commit }, id) {
      commit('deleteElement', id)
    },
    updateFromList({ commit }, payload) {
      commit('updateList', payload)
    }
  }
}
