export default {
  state: {
    username: '',
    token: '',
    refresh: ''
  },
  getters: {
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
      localStorage.setItem('username', username)
    },
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    setRefresh (state, refresh) {
      state.refresh = refresh
      localStorage.setItem('refresh', refresh)
    }
  },
  actions: {
  }
}
