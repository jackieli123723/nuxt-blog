const moment = require('moment');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
// let rssApi = 'http://localhost:8080/article/archives'
let rssApi = 'http://118.24.30.92:8085/api/article/archives'
const updateSiteMapScript = () => {
  const doUpdateSiteMap = () => {
    axios.get(rssApi, { timeout: 6000 }).then(res => {
      if (res.status === 200) {
        // 10小时更新
        console.log('sitemap 脚本更新成功', new Date())
        console.log('文章数组',JSON.stringify(res.data.data.list.length,null,3))
        const url_list = [
          'https://textnuxt.lilidong.cn/production', // 作品
          'https://textnuxt.lilidong.cn/archives', // 归档
          'https://textnuxt.lilidong.cn/about', // 关于
          'https://textnuxt.lilidong.cn/'
        ]

        const article_list = (data) => {
           const url = 'https://textnuxt.lilidong.cn/article/';
           const article_url = data.map(k => {
                return url + k._id;
            });
           return article_url
        }

        console.log('文章',JSON.stringify(article_list(res.data.data.list),null,3))

        const xml = create_sitemap(Array.prototype.concat.apply(url_list,article_list(res.data.data.list)));
        fs.writeFileSync(path.join(__dirname, './static/sitemap.xml'), xml);
        setTimeout(doUpdateSiteMap, 1000 )
      } else {
        console.log('sitemap 脚本更新失败', new Date(), JSON.parse(res.data))
        setTimeout(doUpdateSiteMap, 1000 )
      }
      
    }).catch(error => {
      // 1小时更新
      console.log('sitemap脚本更新网络连接失败', new Date(), error)
      setTimeout(doUpdateSiteMap, 1000)
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
        <priority>0.80</priority>
        <changefreq>daily</changefreq>
      </url>`;
    })
    .join('');
  return xml_head + xml_body + xml_foot;
}

 
