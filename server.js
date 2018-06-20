const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3001
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

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
// app.use('/static', require('express').static('static')); //app.use(express.static(path.join(__dirname, 'public')));

// 设置静态资源目录
app.use(require('express').static(path.join(__dirname, 'static')));

//爬虫
// let baseUrl = `http://${globalConfig.app.host}:${globalConfig.app.port}`

let baseUrl = 'http://localhost:3001/'
let rssApi = 'http://localhost:8080/article/archives'

const updateSiteMapScript = () => {
  const doUpdateSiteMap = () => {
    axios.get('http://localhost:8080/article/archives', { timeout: 6000 }).then(res => {
      if (res.status === 200) {
        // 10小时更新
        console.log('sitemap 脚本更新成功', new Date())
        console.log('文章数组',JSON.stringify(res.data.data.list,null,3))
        const url_list = [
          'http://localhost:3001/production', // 作品
          'http://localhost:3001/archives', // 归档
          'http://localhost:3001/about', // 关于
          'http://localhost:3001/'
        ]

        const article_list = (data) => {
           const url = 'http://localhost:3001/article/';
           const article_url = data.map(k => {
                return url + k._id;
            });
           return article_url
        }

        const xml = create_sitemap(Array.prototype.concat.apply(url_list,article_list(res.data.data.list)));
        fs.writeFileSync(path.join(__dirname, './static/rss.xml'), xml);
        setTimeout(doUpdateSiteMap, 1000 * 60 * 60 * 10)
      } else {
        console.log('sitemap 脚本更新失败', new Date(), JSON.parse(res.data))
        setTimeout(doUpdateSiteMap, 1000 * 60 * 60 * 1)
      }
      
    }).catch(error => {
      // 1小时更新
      console.log('sitemap脚本更新网络连接失败', new Date(), error)
      setTimeout(doUpdateSiteMap, 1000 * 60 * 60 * 1)
    })
  }
  doUpdateSiteMap()
}

//爬虫爬取生成sitemap
updateSiteMapScript()

const create_sitemap = url_arr => {
  const xml_head = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  const xml_foot = `</urlset>`;
  const xml_body = url_arr.map(k => {
      return `
      <url>
        <loc>${k}</loc>
        <lastmod>${moment().format('YYYY-MM-DDTHH:mm:ss+08:00')}</lastmod>
        <changefreq>daily</changefreq>
      </url>`;
    })
    .join('');
  return xml_head + xml_body + xml_foot;
}


app.get('/rss.xml',function (req,res) {
   updateSiteMapScript()
});

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