if (process.env.NODE_ENV === 'production') {
//通用官网生成sitemap
const fs = require('fs');
const path = require('path');
const request = require('request');
const spiderUrl = 'http://dev-website.dragonest.com:8080/sitemap'
const spiderBody = {
    "data":{
        "appCode":"deae7c1e916",
        "baseUrl":"http://website-demo.dragonest.com",
        "params":[
            {
                "type":"topMenu",
                "menu_mark":"news",
                "menu_code":"",
                "list":"/news/{menu_mark}/{page}",
                "per-page":10,
                "detail":"/news/detail/{resource_code}"
            },
            {
                "type":"topMenu",
                "menu_mark":"videos",
                "menu_code":"",
                "list":"/videos/{menu_mark}/{page}",
                "per-page":10,
                "detail":"/videos/detail/{resource_code}"
            },
            {
                "type":"topMenu",
                "menu_mark":"strategy",
                "menu_code":"",
                "list":"/strategy/{menu_mark}/{page}",
                "per-page":10,
                "detail":"/strategy/detail/{resource_code}"
            },
             {
                "type":"topMenu",
                "menu_mark":"charactor",
                "menu_code":"",
                "list":"/charactor/{menu_mark}/{page}",
                "per-page":10,
                "detail":"/charactor/detail/{resource_code}"
            },
             {
                "type":"topMenu",
                "menu_mark":"/"
            }
        ]
    }
}

const updateSiteMapScript = () => {
  const doUpdateSiteMap = () => {
     request.post({
          url: spiderUrl,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(spiderBody),
      },
      function(error, response, body) {
          let sitemapUrl = JSON.parse(body) 
          if (error) {
             console.error('错误信息:', error);
             console.log('sitemap脚本更新失败', new Date())
             setTimeout(doUpdateSiteMap, 1000 * 60 * 60 * 1)
             return 
          }
          if(sitemapUrl.code == 200){
             console.log('sitemap脚本更新成功', new Date())
             request(sitemapUrl.data.file_url).pipe(fs.createWriteStream(path.join(__dirname, './static/spider-seo.xml')))
             setTimeout(doUpdateSiteMap, 1000 * 60 * 1 * 10)
          }else{
             console.log('sitemap脚本更新失败', new Date())
             setTimeout(doUpdateSiteMap, 1000 * 60 * 60 * 1)
          }
      })
  }
  doUpdateSiteMap()
}
//爬虫爬取生成sitemap
updateSiteMapScript()  
}else{
  console.log('容器部署才能爬');
}