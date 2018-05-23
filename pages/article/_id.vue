<template>
  <div id="content" class="container-fluid">
<!--     大图标题 -->
  <div id="header-area" class="container-fluid with-subscribe">
    <div class="placeholder">
      <!--  切换手机模式添加class="rotate" -->
      <img :class="{'rotate':isMobile == true}" src="~assets/img/background-beverage-breakfast-414645-1920x1281.jpg"  >
    </div>
   <div class="container">
      <div class="description-area">
      <div class="date">2018年5月1日</div>
      <h1 class="title">How to Create a Successful Web Design Mockup</h1>
      <div class="tags">
      <ul>
        <li><a href="">web前端</a></li>
      </ul>
      </div>
      </div>
  </div>
  </div>
  <div class="container">
    <div id="content-area">
      <div class="post-content">
        <p>
          Working on a web design mockup is about planning every idea beforehand.
          The process includes some essential steps that include deciding on the
          wireframe necessary to arrange the content properly by choosing graphic
          software for building engaging visual effects. The next stage is to focus
          on the organization of the web page mockup, with the mission here to identify
          the core layout elements. As soon as these stages are complete, it’s time
          to start building a full-scale website design mockup from scratch, adding
          all the necessary features to help you create the most catchy designs.
        </p>
        <p>
          Why is it necessary to create a mockup website? It provides a clear vision
          of how your future site and its pages will look, and you will have the
          opportunity to customize your resource before you actually start coding.
          Many amateur designers are confident that mockups do not actually differ
          from one site to another, but they are wrong to consider all mockups as
          the same.
          <br>
          Working with different softwares, tools, fidelity, and platforms may eventually
          lead to different results. For this reason, it is vital to have a clear
          understanding of your website objectives, and a basic idea of how to create
          a website mockup. You might need a powerful tool that will support and
          maintain all phases of the process.
        </p>
        <p>
          Whether you choose a graphic editor or decide to code it yourself, you
          will need to follow the essential guide that explains how to create a mockup
          of a website.
        </p>
        <p>
          &nbsp;
        </p>
        <h2>
          Tip #1 – Start With Brainstorming
        </h2>
        <p>
          <img class="alignnone wp-image-1248 size-medium_single_image" src="https://fireart.studio/blog/wp-content/uploads/2018/04/image19-1-850x562.jpg.pagespeed.ce.M5Hpv47urh.jpg"
          alt="" width="850" height="562" srcset="https://fireart.studio/blog/wp-content/uploads/2018/04/image19-1-850x562.jpg 850w, https://fireart.studio/blog/wp-content/uploads/2018/04/image19-1-410x271.jpg 410w, https://fireart.studio/blog/wp-content/uploads/2018/04/image19-1-768x508.jpg 768w, https://fireart.studio/blog/wp-content/uploads/2018/04/image19-1-1024x677.jpg 1024w"
          sizes="(max-width: 850px) 100vw, 850px">
        </p>
        <p>
          In-depth research comes first, regardless of whether you plan to create
          a complete website or simply a mockup. You need to gather as much information
          about your future resource as possible. This is where you need to define
          the key goals of your project. Set clear tasks that your website is supposed
          to accomplish in future. Get the clear vision of your buyer persona or
          target audience in order to choose the proper content. Make sure you consider
          all of the following issues:
        </p>
      
     
      </div>
    </div>
  </div>
   <comment-box />
   <footer-nav/>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {seo} from '../../utils/utils'
  export default {
      components: {
        FooterNav: () => import('~/components/Footer'),
        CommentBox: () => import('~/components/Comment')
      },
      mounted(){
        //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
        seo()
      },
      computed: {
          isMobile() {
            return this.$store.state.option.isMobile
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
