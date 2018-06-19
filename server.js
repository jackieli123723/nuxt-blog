const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3001

// 传入配置初始化 Nuxt.js 实例
let config = require('./nuxt.config.js') //引入nuxt配置

//config.dev = !(process.env.NODE_ENV === 'production') // 设置这dev的这一步不能少，否则页面将不会显示，可以在这里，也可以在nuxt.config.js中配置

//或者
config.dev = process.env.NODE_ENV !== 'production' // 设置这dev的这一步不能少，否则页面将不会显示，可以在这里，也可以在nuxt.config.js中配置


const nuxt = new Nuxt(config) // 创建nuxt实例

// 若dev为true，即不是生产环境，就构建一遍nuxt
// 在开发模式下进行编译
// if (config.dev) {
//   const builder = new Builder(nuxt)
//   builder.build()
// }

//加强版
if (config.dev) {
    try {
         const builder = new Builder(nuxt)
         builder.build()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

//上传文件的静态资源分开http://localhost:3033/static/upload.css
//http://localhost:3033/humans.txt
//http://localhost:3033/rss.xml(爬虫)
app.use('/static', require('express').static('static')); //app.use(express.static(path.join(__dirname, 'public')));

// 使用nuxt的render，渲染页面中间件
app.use(nuxt.render)

// 监听指定端口
app.listen(port, '0.0.0.0')
console.log('服务器运行于 localhost:' + port)







// deploy 
//    -a
//      -.nuxt
//      -servera.js 
//    -b
//      -.nuxt
//      -serverb.js
//    -c 
//       -.nuxt
//      -serverb.js