<template>
  <div id="content" >
   
       <div class="post-block archive" v-if="archive && archive.length > 0">

          <div id="posts" class="posts-collapse">
            <span class="archive-move-on"></span>
            <span class="archive-page-counter">
              非常好! 目前共计 <i style="color:#f00">{{totalRecords}}</i> 篇文章。 继续努力。
            </span>

            <div class="collection-title">
              <h1 class="archive-year">2018</h1>
            </div>
              
            <article class="post post-type-normal" v-for="(article,index) in archive" >
              <header class="post-header">
                <h2 class="post-title">
                       <nuxt-link :to="'/article/' + article._id " >
                         <span>{{article.title}}</span>
                      </nuxt-link>
                </h2>
                <div class="post-meta">
                  <time class="post-time" >
                    {{article.creat_date | formatDate}}
                  </time>
                </div>
              </header>
            </article>
          </div>

      </div>
     <footer-nav/>
  </div>
</template>
<script>
  import { Service } from '~/plugins/axios'
  export default{
       components: {
        FooterNav: () => import('~/components/Footer')
      },
      data(){
        return {
               totalRecords: null,
               archive:[]
        }
      },
      //way1
      // async asyncData() {
      //   let {data} = await Service.get('article/archives')
      //   return {
      //     archive: data.data.list,
      //     totalRecords:data.data.totalRecords
      //   }
      // },
      // way2
      // 这种方式必须 { params } 传这个就算没值
      // 而且data 赋值不能是对象嵌套 callback 方式 推荐
      asyncData ({ params }, callback) {
        Service.get('article/archives')
        .then((res) => {
          callback(null, { 
           archive: res.data.data.list,
           totalRecords: res.data.data.totalRecords
           })
        })
        .catch((e) => {
            callback({ statusCode: 404, message: '对不起，没有找到这个页面' })
        })
      },

      //way3 error 方式
      // asyncData ({ params, error }) {
      //      Service.get('article/archives')
      //           .then((res) => {
      //               return { 
      //                   archive: res.data.data.list,
      //                   totalRecords: res.data.data.totalRecords
      //                  }
      //           })
      //           .catch((e) => {
      //               error({ statusCode: 404, message: '对不起，没有找到这个页面' })
      //           })
      // },
      head () {
        return {
          title: "文章归档"
        }
      },
       created () {
        //test
        //this.getArchives()
      },
     methods: {
      getArchives() {
         Service.get('article/archives')
          .then(res => {
            console.log(res.data.data)
            const success = res.data && res.data.code === 200
            if (success) {
                 this.articleArchives.archive = res.data.data.list
                 this.articleArchives.totalRecords = res.data.data.totalRecords 
            }
          },err => {
             console.log(err)
          })
      }

      }
  }
</script>
<style>
@media (max-width: 767px) {
  .posts-collapse {
    margin: 0 20px;
  }
  .posts-collapse .post-title,
  .posts-collapse .post-meta {
    display: block;
    width: auto;
    text-align: left;
  }
}

  .post-block{
    margin:0 auto;
    max-width: 1290px;
    padding-top:90px;
  }
.posts-collapse {
  position: relative;
  margin-left: 0;
}
.posts-collapse::after {
  content: " ";
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: -2px;
  width: 4px;
  height: 100%;
  background: #f5f5f5;
  z-index: -1;
}
@media (max-width: 767px) {
  .posts-collapse {
    margin: 0 20px;
  }
}
.posts-collapse .collection-title {
  position: relative;
  margin: 60px 0;
}
.posts-collapse .collection-title h1,
.posts-collapse .collection-title h2 {
  margin-left: 20px;
}
.posts-collapse .collection-title small {
  color: #bbb;
  margin-left: 5px;
}
.posts-collapse .collection-title::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -4px;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  background: #bbb;
  border-radius: 50%;
}
.posts-collapse .post {
  margin: 30px 0;
}
.posts-collapse .post-header {
  position: relative;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: border;
  border-bottom: 1px dashed #ccc;
}
.posts-collapse .post-header::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 12px;
  width: 6px;
  height: 6px;
  margin-left: -4px;
  background: #bbb;
  border-radius: 50%;
  border: 1px solid #fff;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: background;
}
.posts-collapse .post-header:hover {
  border-bottom-color: #666;
}
.posts-collapse .post-header:hover::before {
  background: #222;
}
.posts-collapse .post-meta {
  position: absolute;
  font-size: 12px;
  left: 20px;
  top: 5px;
}
.posts-collapse .post-comments-count {
  display: none;
}

.posts-collapse .post-title {
  margin-left: 125px;
  font-size: 24px;
  font-weight: normal;
  line-height: inherit;
}
.posts-collapse .post-title::after {
  margin-left: 3px;
  opacity: 0.6;
}
.posts-collapse .post-title a {
  color: #666;
  border-bottom: none;
}
.page-home .post-type-quote .post-header,
.page-post-detail .post-type-quote .post-header,
.page-home .post-type-quote .post-tags,
.page-post-detail .post-type-quote .post-tags {
  display: none;
}
.posts-expand .post-title {
  text-align: center;
  word-break: break-word;
  font-weight: 400;
}
.posts-expand .post-title-link {
  display: inline-block;
  position: relative;
  color: #555;
  border-bottom: none;
  line-height: 1.2;
  vertical-align: top;
}
.posts-expand .post-title-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}
.posts-expand .post-title-link:hover::before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
.posts-expand .post-title-link .fa {
  font-size: 16px;
}
.posts-expand .post-meta {
  margin: 3px 0 60px 0;
  color: #999;
  font-family: '华文中宋', "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 12px;
  text-align: center;
}
.posts-expand .post-meta .post-category-list {
  display: inline-block;
  margin: 0;
  padding: 3px;
}
.posts-expand .post-meta .post-category-list-link {
  color: #999;
}
.posts-expand .post-meta .post-description {
  font-size: 14px;
  margin-top: 2px;
}
.post-meta-divider {
  margin: 0 0.5em;
}
.post-meta-item-icon {
  margin-right: 3px;
}
@media (min-width: 768px) and (max-width: 991px) {
  .post-meta-item-icon {
    display: inline-block;
  }
}
@media (max-width: 767px) {
  .post-meta-item-icon {
    display: inline-block;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .post-meta-item-text {
    display: none;
  }
}
@media (max-width: 767px) {
  .post-meta-item-text {
    display: none;
  }
}
@media (max-width: 767px) {
  .posts-expand .post-comments-count {
    display: none;
  }
}
.post-button {
  margin-top: 40px;
}
.post-button .btn {
  color: #555;
  font-size: 14px;
  background: transparent;
  border-radius: 0;
  line-height: 2;
  margin: 0 4px 8px 4px;
}
.post-button .fa-fw {
  width: 1.285714285714286em;
  text-align: left;
}
.posts-expand .post-tags {
  margin-top: 40px;
  text-align: center;
}
.posts-expand .post-tags a {
  display: inline-block;
  margin-right: 10px;
  font-size: 13px;
}
.post-nav {
  display: table;
  margin-top: 15px;
  width: 100%;
  border-top: 1px solid #eee;
}
.post-nav-divider {
  display: table-cell;
  width: 10%;
}
.post-nav-item {
  display: table-cell;
  padding: 10px 0 0 0;
  width: 45%;
  vertical-align: top;
}
.post-nav-item a {
  position: relative;
  display: block;
  line-height: 25px;
  font-size: 14px;
  color: #555;
  border-bottom: none;
}
.post-nav-item a:hover {
  color: #222;
  border-bottom: none;
}
.post-nav-item a:active {
  top: 2px;
}
.post-nav-item .fa {
  position: absolute;
  top: 8px;
  left: 0;
  font-size: 12px;
}
.post-nav-next a {
  padding-left: 15px;
}
.post-nav-prev {
  text-align: right;
}
.post-nav-prev a {
  padding-right: 15px;
}
.post-nav-prev .fa {
  right: 0;
  left: auto;
}
.posts-expand .post-eof {
  display: block;
  margin: 80px auto 60px;
  width: 8%;
  height: 1px;
  background: #ccc;
  text-align: center;
}
.post:last-child .post-eof.post-eof.post-eof {
  display: none;
}
.post-gallery {
  display: table;
  table-layout: fixed;
  width: 100%;
  border-collapse: separate;
}
.post-gallery-row {
  display: table-row;
}
.post-gallery .post-gallery-img {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border: none;
}
.post-gallery .post-gallery-img img {
  max-width: 100%;
  max-height: 100%;
  border: none;
}
</style>