<template>
  <!-- 注意这里通过mongodb的_id来判断不存在的页面404 否则会报错 -->
  <div id="content" class="container-fluid" v-if="articleDetail && articleDetail._id !== ''">
   <!--大图标题 -->
  <div id="header-area" class="container-fluid with-subscribe" >
    <div class="placeholder">
      <!--  切换手机模式添加class="rotate" -->
      <!-- <img :class="{'rotate':isMobile == true}" src="~assets/img/background-beverage-breakfast-414645-1920x1281.jpg"  >  -->
      <img :class="{'rotate':isMobile == true}" :src=articleDetail.background_img  >
    </div>
   <div class="container">
      <div class="description-area">
      <div class="date">{{articleDetail.creat_date | formatDate}}</div>
      <h1 class="title">{{articleDetail.title}}</h1>
      <div class="tags">
      <ul>
        <li><a href="">{{articleDetail.type | formatType}}</a></li>
      </ul>
      </div>
      </div>
  </div>
  </div>
  <div class="container">
    <div id="content-area">
      <div class="post-content" v-html="articleDetail.content"  v-highlight>
        
      </div>
    </div>
  </div>
   <comment-box />
   <footer-nav/>
</div>
<div id="content" class="container-fluid" v-else>
   404
</div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/github.css'

Vue.use(VueHighlightJS)

  //html富文本 code高亮 
  Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  })


  import { mapGetters } from 'vuex'
  import {seo} from '../../utils/utils'
  import { Service } from '~/plugins/axios'
  export default {
      components: {
        FooterNav: () => import('~/components/Footer'),
        CommentBox: () => import('~/components/Comment')
      },
      asyncData ({route,error},callback) {
        let params = {
            articleId:route.params.id 
        }
        Service.post('article/detail',params)
        .then((res) => {
          //404
          if(!res){
            return error({
              statusCode: 404,
              message: "对不起，没有找到这个页面"
            });
          }
          callback(null, { articleDetail: res.data.data })
        })
         .catch((e) => {
            return error({
              statusCode: 500,
              message: e.message
            });
        })
      },
      created () {
          //这里调用没挂在window.__NUXT__
          //不能调用这个否者的话会覆盖tab切换数据
          this.GetArticleById()
      },
      mounted(){
        //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
       // seo()
      },
      data(){
         return{
          articleDetail:{
              type: null,
              title: null,
              creat_date:null,
              placeholder_img: null,
              background_img:null,
              content: null,
              _id:''
          }
         }
      },
      head() {
          return {
              //这里一定要判断否则会出现 this.articleDetail.title 不存在
                title: (this.articleDetail && this.articleDetail._id !== '') ? this.articleDetail.title : '文章被ufo抓跑了！！',
                meta: [{
                hid: "description",
                name: "description",
                content: (this.articleDetail && this.articleDetail._id !== '') ? this.description : '文章被ufo抓跑了！！'
              }],
          }
      },
      computed: {
          isMobile() {
            return this.$store.state.option.isMobile
          },
          //计算meta描述语言关键 核心seo
          description() {
            return this.articleDetail.content
              .substring(0, 150)
              
              //安全字符
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, '"')
              .replace(/&#39;/g, "'")
              .replace(/&nbsp;/g, " ")
              //html标签元素
              .replace(/<\/?[^>]*>/g,'') 
              //换行
              .replace(/\r\n/g, "")
              .replace(/\n/g, "")
              .replace(/#+/g, ",") + "...";
          }
      },
     methods: {
      GetArticleById() {
        let params = {
          articleId:this.$route.params.id 
        }
         Service.post('article/detail',params)
          .then(res => {
    
            const success = res.data && res.data.code === 200
            if (success) {
                 // this.articleDetail = res.data.data
            }
          }, err => {
             console.log(err)
          })
      }

    }

  }
</script>

<style scoped>


@media (max-width: 639px) {
    .container-fluid>.container {
        box-sizing:border-box;
        width: 100%;
        max-width: 420px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 15px;
        padding-right: 15px
    }
}
#header-area {
    position: relative;
    height: 647px;
    background-size: auto 100%;
    background-position: 50% 50%
}

.placeholder {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.placeholder img {
    width: 100%;
    height: auto
}

.placeholder img.rotate {
    width: auto;
    height: 100%
}

.description-area {
    position: absolute;
    left: 0;
    bottom: 158px;
    font-family: 'Roboto',sans-serif
}

.date {
    margin-bottom: 19px
}

.title {
    max-width: 800px;
    margin-bottom: 33px
}

.tags {
    font-size: 14px
}

.tags li {
    display: inline-block;
    margin-right: 19px
}

.tags a {
    color: #fff;
    background: #f00;
    padding: 8px 20px;
    border-radius: 5px;
    opacity: 1;
}

.tags a:hover {
    transition: all ease-out 200ms;
    opacity:0.8;
}




#content-area {
    width: 1290px;
    padding-left: 0px
}

.post-content {
    padding-top: 65px;
    padding-bottom: 30px
}

.post-content h1,.post-content h2,.post-content h3,.post-content h4,.post-content h5,.post-content h6 {
    font-family: 'Open Sans',sans-serif;
    line-height: 1.3;
    letter-spacing: 1px
}

.post-content p {
    line-height: 1.94
}

.post-content blockquote p {
    line-height: 1.54
}

.post-content li {
    line-height: 1.94;
    position: relative
}

.post-content ol {
    padding-left: 59px;
    list-style-type: decimal
}

.post-content ul li {
    padding-left: 64px
}

.post-content ol li {
    padding-left: 5px
}

.post-content ul li::before {
    position: absolute;
    left: 39px;
    content: '\00B7';
    font-weight: 800;
    transform: scale(1.3);
    -webkit-transform: scale(1.3)
}

.post-subscribe p a,.post-content a {
    text-decoration: underline
}

.post-subscribe p a:hover,.post-content a:hover {
    color: red!important
}

.post-content h2 {
    margin-bottom: 19px;
    line-height: 1.25
}

.post-content h4,.post-content h3 {
    margin-bottom: 5px;
    line-height: 1.94
}

.post-content p+h2 {
    margin-top: 56px
}

.post-content p+h4,.post-content p+h3 {
    margin-top: 35px
}

.post-content p+img {
    margin-top: 20px
}

.post-content p+ol,.post-content p+ul {
    margin-top: 5px;
    margin-bottom: 6px
}

.post-content blockquote {
    margin-bottom: 36px;
    padding: 0 35px;
    font-size: 26px
}

.post-content blockquote.img-desc {
    margin-top: 0
}

.post-content img+span,.post-content blockquote.img-desc span {
    display: inline-block;
    max-width: 500px;
    font-size: 14px;
    line-height: 1.3
}

.post-content p+blockquote {
    margin-top: 44px
}

.post-content em {
    font-style: italic
}

.post-content img {
    margin-bottom: 20px
}

.under-content b,.post-content b {
    font-weight: 600
}

.under-content {
    padding: 47px 0 51px;
    text-align: center;
    background-color: #f0f3f8
}

.post-subscribe-area {
    height: 59px;
    margin: 56px 0 67px
}

.post-subscribe-area .hire-us {
    position: relative;
    margin: 0 auto
}

.post-subscribe-area form {
    position: relative;
    left: 150%;
    opacity: 0;
    transforn: translateX(100%);
    -webkit-transforn: translateX(100%)
}

.under-content .h2 {
    margin-bottom: 28px;
    font-weight: 600;
    font-family: 'Open Sans',sans-serif;
    clear: both
}

.under-content input[type="text"] {
    width: 340px;
    margin-right: 37px;
    padding: 5px 5px 15px 0;
    font-size: 22px;
    background-color: transparent;
    border-color: transparent;
    border-bottom: 2px solid #282828
}

.under-content input[type="text"]::placeholder {
    opacity: 1
}

.under-content button[type="submit"] {
    font-size: 20px;
    line-height: 50px;
    padding: 0 28px;
    -webkit-transition: background-color .28s , color .28s;
    transition: background-color .28s , color .28s;
    color: #fd0202;
    border: 2px solid #fd0202;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer
}

.under-content button[type="submit"]:hover {
    color: #fff;
    background: red
}

._form-content {
    margin-left: auto;
    margin-right: auto;
    display: table
}

.related-articles {
    text-align: left
}

._form_3 {
    display: none
}

@media (min-width: 1920px) {
    #header-area {
        background-size:100% auto
    }
}

@media (max-width: 1319px) {
    #sidebar {
        width:116px
    }

    #content-area {
        width: auto;
        padding-left: 116px
    }

    .post-area:nth-of-type(3n) {
        display: none
    }
}

@media (max-width: 1023px) {
    #sidebar {
        width:73px
    }

    #content-area {
        padding-left: 73px
    }

    .post-content ul li {
        padding-left: 50px
    }

    .post-content ol {
        padding-left: 45px
    }

    .post-content ul li::before {
        left: 25px
    }

    .post-area:nth-of-type(3n) {
        display: block
    }

    .post-subscribe {
        padding: 0 50px;
        line-height: 1.94
    }

    .post-subscribe-area {
        margin-top: 55px
    }

    .under-content input[type="text"] {
        width: 265px
    }
}

@media (max-width: 639px) {
    .description-area {
        left:15px
    }

    #sidebar {
        width: 30px
    }

    #content-area {
        padding-left: 30px
    }

    .post-content blockquote {
        font-size: 20px;
        padding: 0 5px
    }

    .post-subscribe {
        padding: 0
    }

    ._form-content {
        display: block
    }

    ._form_element {
        float: none
    }

    .under-content input[type="text"] {
        width: 100%;
        margin-right: 0;
        margin-bottom: 13px
    }
}


</style>
