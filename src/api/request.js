/* eslint-disable no-undef */
import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    const { meta, data } = response.data
    if (meta.status == 200) {
      ElMessage({
        message: meta.msg,
        type: 'success'
      })
      return data
    } else {
      ElMessage({
        message: meta.msg,
        type: 'error'
      })
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    error.response &&
      ElMessage({
        message: error.response.message,
        type: 'error'
      })
    return Promise.reject(new Error(error.response.data))
  }
)

export default service
