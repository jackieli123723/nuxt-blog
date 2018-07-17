module.exports = {
  head: {
    title: '西门互联nuxt博客',
    /*下面这个是title模板主要应用详情的标题例如新闻标题*/
    titleTemplate: '西门互联nuxt博客 - %s', 
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      /*优先使用 IE 最新版本和 Chrome  */
      { name: 'renderer', content: 'webkit' },
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'browsermode', content: 'application' },
      { name: 'x5-page-mode', content: 'app' },
      { name: 'theme-color', content: '#263238' },
      { name: 'apple-mobile-web-app-title', content: '西门互联nuxt博客' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'author', content: 'jackeili,380863274@qq.com' },
      { name: 'apple-mobile-web-app-title', content: '西门互联nuxt博客' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#263238' },
      { name: 'keywords', content: '西门互联nuxt博客,nuxt博客,西门互联前端博客,node全栈开发,F2E,node+nuxt开发自动化部署' },
      { name: 'description', content: '西门互联前端学习,致力于web前端开发,全栈开发者' },
      { name: 'author', content: '西门互联, jackieli,380863274@qq.com' },
      { name: 'country', content: 'China' },
      { name: 'revisit-after', content: '7 days' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS 2.0', href: '/rss.xml' },
      { rel: 'author', type: 'text/plain', href: '/humans.txt' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [{
            innerHTML: `
               var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?565377e3b26617c374503b81e05e790d";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
            type: 'text/javascript'
        }]
  },
  loading: { color: '#3B8070' },
  //这里是放公用的css
  css: [
      { src: '~assets/css/font.css', lang: 'css'},
      { src: '~assets/css/reset.css', lang: 'css'},
      { src: '~assets/css/new-style.css', lang: 'css'},
      { src: '~assets/css/style.css', lang: 'css'},
      { src: '~assets/css/frontpage.css', lang: 'css'}
  ],
  cache: {
        max: 1000,
        maxAge: 900000
  },
  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/copy-right.js', ssr: false },
    { src: '~/plugins/baidu-seo-push.js', ssr: false },
  ],
  build: {
    vendor: [
      '~/plugins/axios.js'
    ],
    extractCSS: true,
  },
  render: {
        bundleRenderer: {
            cache: require('lru-cache')({
                max: 1000,
                maxAge: 1000 * 60 * 15
            })
        }
  }
};


