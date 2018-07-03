/*
** 只在生成模式的客户端中使用
*/


if (process.env.NODE_ENV === 'production') {
  /*
  ** 百度seo-自动push脚本
  ** https://zz.bdstatic.com/linksubmit/push.js
  */
  const baiduPush = () => {
    // !function(){
    //   let e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi
    //   let r = href || window.location.href
    //   let t = document.referrer
    //   if (!e.test(r)) {
    //     let o = "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif"
    //     t ? (o += "?r=" + encodeURIComponent(document.referrer), r && (o += "&l=" + r)) : r && (o += "?l=" + r)
    //     let i = new Image
    //     i.src = o
    //   }
    // }(window)
    
    (function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
        }
        else {
            bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
    })();
  }

  baiduPush()

  /*
  ** 应用挂载后
  */
  window.onNuxtReady((app) => {
    app.$nuxt.$on('routeChanged', (to, from) => {
      baiduPush(window.location.origin + to.fullPath)
    })
  })
}