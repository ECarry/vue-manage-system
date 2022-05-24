import { setToken, getToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'

const state = {
  username: '',
  id: '',
  avatar: '',
  token: getToken()
}

const mutations = {
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
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          commit('SET_TOKEN', response.access)
          setToken(response.access)
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
