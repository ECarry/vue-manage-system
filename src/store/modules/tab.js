export default {
  state: {
    menu: [],
    currentMenu: null,
    tabList: [
      {
        path: '/',
        name: 'dashboard',
        label: '控制面板',
        icon: 'menu'
      }
    ]
  },
  getters: {
  },
  mutations: {
    selectMenu (state, val) {
      if (val.name === 'dashboard') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        const result = state.tabList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabList.push(val)
        }
      }
    },
    closeTag (state, val) {
      if (val.name !== 'dashboard') {
        const result = state.tabList.findIndex(item => item.name === val.name)
        state.tabList.splice(result, 1)
      }
    }
  },
  actions: {
  }
}
