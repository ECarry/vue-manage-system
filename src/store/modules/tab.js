export default {
  state: {
    menu: [],
    currentMenu: null,
    isCollapse: false,
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
        // findIndex 查找数组是否存在传进来的值,有则返回该数值索引,无则返回 -1
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
    },
    collapseMenu (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  }
}
