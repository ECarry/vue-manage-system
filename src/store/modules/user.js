import { setToken, getToken } from '@/utils/auth'
import { login, getUserInfo, logout } from '@/api/user'

export default {
  state: {
    username: '',
    id: '',
    avatar: '',
    token: getToken()
  },
  getters: {
  },
  mutations: {
    SET_USERNAME (state, username) {
      state.username = username
    },
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_ID (state, id) {
      state.id = id
    },
    SET_AVATAR (state, avatar) {
      state.avatar = avatar
    }
  },
  actions: {
    // user login
    login ({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password })
          .then(response => {
            const { data } = response
            commit('SET_TOKEN', data.access)
            setToken(data.access)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // get user info
    getUserInfo ({ commit }, state) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(response => {
            const data = response

            // if (!data) {
            //   reject('Verification failed, please login again')
            // }

            const { username, avatar } = data
            commit('SET_USERNAME', username)
            commit('SET_AVATAR', avatar)
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // user logout
    logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          commit('SET_TOKEN', '')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
