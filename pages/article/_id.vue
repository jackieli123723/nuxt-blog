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
      <!-- 内容html -->
      <div class="post-content" v-html="articleDetail.content"  >
        
      </div>
      

      <!--  评论 -->
      <div class="comment-respond" id="respond">
          <p class="comment-form-comment">
            <label for="comment">
              去留言
            </label>
            <textarea autocomplete="nope" id="comment"  cols="45"
            rows="8" maxlength="65525" ref="textarea" v-model="content">
            </textarea>
          </p>
          <div class="face">
            <div>
               <span class="diy-face"  @click="openFaceChange">DIY表情</span>
            </div>
            <div class="xei-qq-face-wrapper" v-if="faceFlag">
              <ul>
                <li v-for="item in 105" @click="insertText(item)">
                  <span data-idx="item"></span>
                </li>
              </ul>
            </div>
          </div>
          <p class="comment-form-author">
            <label for="author">
              姓名
              <span class="required">
                *
              </span>
            </label>
            <input id="author" name="author" type="text" v-model="username" size="30" maxlength="245"
            >
          </p>
          <p class="comment-form-email">
            <label for="email">
              邮箱
              <span class="required">
                *
              </span>
            </label>
            <input id="email"  name="email" type="text" v-model="email" size="30" maxlength="100"
             required="required">
          </p>
          <p class="comment-form-email">
            <label for="email">
              评分
            </label>
            <select class="rate-stars" v-model="stars">
             <option>1</option>
             <option>2</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
            </select>
            
          </p>
          <p class="comment-form-url">
            <label for="url">
              网站
            </label>
            <input id="url" name="url" type="text" v-model="website" size="30" maxlength="200">
            (添加http或https协议)
          </p>
          <p class="form-submit"  @click="postComment">
           <span class="submit">提交评论</span>
          </p>
 
        </div>
     <!-- 评论列表    -->
    <comment-box 
      :commentList="commentLists"
      :totalRecords="totalRecords"
      :page="page"
     />
    </comment-box>

    <!-- 评论分页组件  -->
    <pagination-box 
        @changePageButton="changePageButton" 
        :totalPage="totalPage"
        :currentPage="currentPage"
        v-if="commentLists && commentLists.length > 0"
    />
    </pagination-box>
  

    </div>
  </div>
 


 

   <footer-nav/>
</div>
<!-- <div id="content" class="container-fluid" v-else>
   404
</div> -->
<div class="error" v-else>
  <img src="~assets/img/404.png" alt="错误页面" class="logo" />
  <h1 class="title">
   数据不存在
  </h1>
  <nuxt-link to="/">首页</nuxt-link>
</div>

</template>

<script>

  import { mapGetters } from 'vuex'
  import {seo} from '../../utils/utils'
  import { Service } from '~/plugins/axios'
  export default {
      components: {
        FooterNav: () => import('~/components/Footer'),
        CommentBox: () => import('~/components/Comment'),
        PaginationBox: () => import('~/components/Pagination')
      },
      //这个是单个请求
      // asyncData ({route,error},callback) {
      //   let params = {
      //       articleId:route.params.id 
      //   }
      //   Service.post('article/detail',params)
      //   .then((res) => {
      //     //404
      //     if(!res){
      //       return error({
      //         statusCode: 404,
      //         message: "对不起，没有找到这个页面"
      //       });
      //     }
      //     callback(null, { articleDetail: res.data.data })
      //   })
      //    .catch((e) => {
      //       return error({
      //         statusCode: 500,
      //         message: e.message
      //       });
      //   })
      // },
      //这个是多个请求 对比上面的区别 这里可以看到xhr why？ 
    //   async asyncData({ route, error }) {
    //      let params = {
    //       articleId:route.params.id 
    //      }
    //     let [articleContent, comments] = await Promise.all([
    //          Service.post('article/detail',params),
    //          Service.post('comment/front/list',params)
    //       ]).catch(err => {
    //           error({ statusCode: 400, message: err })
    //       })
    //       return {
    //           articleDetail: articleContent.data.data,
    //           commentLists: comments.data.data.list,
    //           totalPage: comments.data.data.pages, //总共分几页 要和totalRecords一起判断分页显示
    //           totalRecords:comments.data.data.totalRecords //留言总数
    //       }
    //   },
     // 第一次进入这里可以看到xhr why？ 刷新没有
        async asyncData({ route, error },callback) {
         let params = {
          articleId:route.params.id 
         }
        let [articleContent, comments] = await Promise.all([
             Service.post('article/detail',params),
             Service.post('comment/front/list',params)
          ]).catch(err => {
              error({ statusCode: 400, message: err })
          })
		   callback(null, { 
              articleDetail: articleContent.data.data,
              commentLists: comments.data.data.list,
              totalPage: comments.data.data.pages, //总共分几页 要和totalRecords一起判断分页显示
              totalRecords:comments.data.data.totalRecords //留言总数
           })
      },   
      created () {
          //这里调用没挂在window.__NUXT__
          //不能调用这个否者的话会覆盖tab切换数据 调用导致pv+2
          //this.GetArticleById()
          //this.GetArticleComments()
      },
      mounted(){
        //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
       // seo()
      },
      watchQuery: ['page'],
      data(){
         return{
          articleDetail:{
              type: null,
              title: null,
              creat_date:null,
              placeholder_img: null,
              background_img:null,
              content: null,
              _id:'',
          },
          commentLists:[],
          username: '',
          email: "",
          website:"",
          stars:5,
          content:'',
          page:1,
          pageSize:10,
          totalPage:'',
          totalRecords:'',
          faceFlag:false
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
              .substring(0, 300)
              
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
          },
          currentPage(){
            return this.page //当前页面监听否则在大于1页的分页的时候锚点错误
          }
      },
     methods: {
      // [qq_100][qq_101][qq_117][qq_115]
      insertText(str) {
            str = '[qq_'+parseInt(99+str)+']' + ``;
            const oTextarea = this.$refs.textarea;
            oTextarea.value += str;
            this.content = oTextarea.value;
            this.faceFlag = !this.faceFlag
        },
        openFaceChange(){
       
          this.faceFlag = !this.faceFlag
        },
      changePageButton(page){
         this.page = page
         this.GetArticleComments()
         // console.log('接收的页码',page) 
      },
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
      },
      GetArticleComments() {
        let params = {
          page:this.page,
          pageSize:this.pageSize,
          articleId:this.$route.params.id 
        }
         Service.post('comment/front/list',params)
          .then(res => {
    
            const success = res.data && res.data.code === 200
            if (success) {
              this.commentLists = res.data.data.list
              this.totalRecords = res.data.data.totalRecords
            }
          }, err => {
             console.log(err)
          })
      },
     postComment(){
        let self = this

        if(!self.username || !self.email || !self.website || !self.content){
          alert('评论内容格式有误')
          return
        }

        const isEmail = (email) => {
          const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
          return email.match(emailRegex) ? true : false;
        }

        const isURL = (string) => {
            let protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
            let localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/
            let nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
            if (typeof string !== 'string') {
                return false;
            }

            let match = string.match(protocolAndDomainRE);
              if (!match) {
                return false;
            }

            let everythingAfterProtocol = match[1];
              if (!everythingAfterProtocol) {
                return false;
            }

            if (localhostDomainRE.test(everythingAfterProtocol) ||
                  nonLocalhostDomainRE.test(everythingAfterProtocol)) {
              return true;
            }
           return false;
      }

      if(!isEmail(self.email)){
        alert('邮箱格式错误')
        return
      }
      if(!isURL(self.website)){
        alert('website格式错误')
        return
      }

        let params = {
          articleId:this.$route.params.id,
          username: this.username,
          email: this.email,
          website:this.website,
          stars:this.stars,
          content:this.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        }
         Service.post('comment/add',params)
          .then(res => {
            const success = res.data && res.data.code === 200
            if (success) {
               setTimeout(function(){
                self.username = ''
                self.email= ''
                self.website=''
                self.content=''
                self.page = 1
                self.GetArticleComments()
               },300);
            }
          }, err => {
             console.log(err)
          })
     } 

    }

  }
</script>

<style scoped>


.submit{
    display: inline-block;
    padding: 8px 20px;
    border: none;
    color: #fff;
    background: #f00;
    text-decoration: none;
    text-shadow: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    bottom: 60px;
    opacity: 1
}
.submit:hover{
   -webkit-transition: all ease-out 200ms;
    transition: all ease-out 200ms;
    opacity:0.8;

}
#respond  {
    clear: both;
    padding-top: 30px;
    max-width: 1290px;
    position: relative; 
    margin:10px auto;
    padding-bottom: 65px;
}

#respond  label {
    float: left;
    padding-right: 10px;
    width: 65px;
    color: #BCCEDE;
    text-align: right;
}

#respond  p {
  
    margin: 5px 0px;
    line-height: 40px;
}

#respond p a{
    outline: none;
    color: #647993;
    text-decoration: none;
    font-weight: inherit;
}
#respond  p .required {
    position: absolute;
    left: 0;
    color: #BCCEDE;
}

#respond  p.comment-notes {
    font-size: 12px;
    line-height: 16px;
}

input[type="text"],input[type="email"]
textarea {
    padding: 8px 7px;
    outline-color: #e2eaed;
    border: 1px solid #d2dadd;
    background: #F8F8F8;
    color: #3a3a3a;
    font-size: 13px;
}

#respond  input[type="text"],
#respond  textarea {
    display: inline-block
}

.ct-comment-form #respond  input[type="text"],
.ct-comment-form #respond  textarea {
    background: #fff
}

#respond  textarea {
    display: block;
    float: none;
    clear: both;
    width: 97%;
}

.ql-editor .ql-align-center img{
    text-align: center;
}
.error {
  text-align: center;
  padding: 30px 0;
}
.title {
  margin:0 auto;
  margin-top: 15px;
  font-size: 3em;
  text-align: left;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
a {
  margin-top: 50px;
  border: 1px solid #f00;
  color: #f00;
  font-size: 16px;
  display: inline-block;
  padding: 10px 30px;
  border-radius: 4px;
}

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
