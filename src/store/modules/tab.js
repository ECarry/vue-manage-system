export default {
  state: {
    menu: [],
    currentMenu: null
  },
  getters: {
  },
  mutations: {
    selectMenu (state, val) {
      val.name === 'dashboard' ? state.currentMenu = null : state.currentMenu = val
    }
  },
  actions: {
  }
}
