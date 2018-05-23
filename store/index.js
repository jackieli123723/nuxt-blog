/*
*
* 根数据状态 存放全局数据和异步方法
*
*/
import Vue from 'vue'

// global actions
export const actions = {
  // 全局服务初始化
  nuxtServerInit (store, { params, route, req }) {
    // 检查设备类型 不能用windows
    const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
    store.commit('option/SET_IS_MOBILE', isMobile)
    store.commit('option/SET_USER_AGENT', userAgent)

    const initAppData = [
      // 内容数据
      //store.dispatch('loadTagList'),
     // store.dispatch('loadCategories')
    ]
    // 如果不是移动端的话，则请求热门文章
    if (!isMobile) {
    //  initAppData.push(store.dispatch('loadHotArticles'))
    }
    return Promise.all(initAppData)
  }

}