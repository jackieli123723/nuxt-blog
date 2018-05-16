import Vue from 'vue'
import axios from 'axios'

// mock service in remote
let service = axios.create({
  baseURL: 'https://api.textnuxt.lilidong.cn'
})

//爬取md文章
let notes = axios.create({
  baseURL: 'https://api.github.com/repos/jackieli123723/jackieli123723.github.io'
})

// http request 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

notes.interceptors.request.use(config => {
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

notes.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export const Service = service
export const Notes = notes