import request from './utils/request'

export function login (data) {
  return request({
    url: '/api/login/',
    method: 'POST',
    data
  })
}

export function getUserInfo (id) {
  return request({
    url: '/api/user/info/',
    method: 'GET',
    params: { id }
  })
}

export function logout () {
  return localStorage.removeItem('token')
}
