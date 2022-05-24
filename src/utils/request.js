import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // const token = localStorage.getItem('token')

    // if (token) {
    //   config.headers.Authorization = 'Bearer' + ' ' + token
    //   return config
    // } else return config
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
    console.log('-----------------erro--------------------')
    return Promise.reject(error)
  })

export default instance
