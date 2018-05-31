import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

let service = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
  transformRequest: function(data) {
        return qs.stringify(data)
    }
})

// http request 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response 拦截器
service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})


Vue.prototype.$http = axios
export const Service = service