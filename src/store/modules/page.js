export default {
  state: {
    currentPage: 1,
    pageSize: 12
  },
  getters: {
  },
  mutations: {
    handleSizeChange (state, val) {
      state.pageSize = val
    },
    handleCurrentChange (state, val) {
      state.currentPage = val
    }
  },
  actions: {
  }
}
