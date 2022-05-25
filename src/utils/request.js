import axios from 'axios'
import store from '@/store'

const instance = axios.create({
  baseURL: '',
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么

    const token = store.state.user.token
    console.log(token)
    if (token) {
      // 需要验证 token 是否过期
      config.headers.Authorization = 'Bearer' + ' ' + store.state.user.token
    }
    return config
  },
  error => {
  // 对请求错误做些什么
    return Promise.reject(error)
  })

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
    if (response.status === 200) {
      return response.data
    } else return response
  },
  error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
    return Promise.reject(error)
  })

export default instance
