import request from '@/utils/request'

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

export function verifyToken (token) {
  return request({
    url: '/api/token/verify/',
    method: 'POST',
    token
  })
}
