<template>
   <div id="content" style="background:#fff">
     <div class="ct-box ct-author-page">
      <div class="ct-author-avatar">
        <img alt="" src="https://avatars1.githubusercontent.com/u/10346511?v=4"
        class="avatar avatar-150 photo" height="150" width="150">
      </div>

    <div class="ct-author-page-desc">
      <h1>
       Jackie Li 
      </h1>
      <p>
        前端工程师 
      </p>
       <p>
        擅长：Node.js Javascript MySQL Mongodb Redis React Vue Angular Linux Centos React Native  小程序
      </p>
        <p class="ct-author-page-url">
        <strong>
          Github:
        </strong>
        <a href="https://github.com/jackieli123723" target="_blank">
          https://github.com/jackieli123723
        </a>
      </p>
      <p class="ct-author-page-url">
        <strong>
          Website:
        </strong>
        <a href="http://issue.lilidong.cn" target="_blank">
          http://issue.lilidong.cn
        </a>
      </p>
      <p class="ct-author-page-url">
        <strong>
          Website:
        </strong>
        <a href="http://demo.lilidong.cn" target="_blank">
          http://demo.lilidong.cn
        </a>
      </p>
    
      <p class="ct-author-page-url">
        <strong>
          Website:
        </strong>
        <a href="http://lilidong.cn" target="_blank">
          http://lilidong.cn
        </a>
      </p>
      <p class="ct-author-page-url">
        <strong>
          Website-https:
        </strong>
        <a href="https://wordpress.lilidong.cn" target="_blank">
           https://wordpress.lilidong.cn
        </a>
      </p>

    </div>

  </div>
    <footer-nav/>
  </div>
</template>

<script>
  export default {
    components: {
      FooterNav: () => import('~/components/Footer')
    },
    head () {
      return {
        title: "关于"
      }
    },
  }
</script>

<style scoped>
.ct-archive .ct-box {
    font-style: normal;
}

.ct-author-page p {
    padding: 10px;
    line-height: 26px;
}


.ct-author-page-url strong {
    margin-right: 5px;
    font-weight: 700
}
a {
    outline: none;
    color: #647993;
    text-decoration: none;
    font-weight: inherit;
}
.ct-box {
    margin: 0 auto;
    padding: 28px;
    background-color: #fff;
    max-width: 1290px;
}
.ct-author-page {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 50px;
}

.ct-author-page-url {
    padding: 10px 0;
}

.ct-author-page-url strong {
    margin-right: 5px;
}

.ct-author-avatar {
    float: left;
}

.ct-author-avatar img {
    display: block;
    margin: 0 0 8px 0;
    background: #E5EAF0;
}

.ct-author-page h1 {
    padding: 7px 0 10px 10px;
    font-size: 36px;
}

.ct-author-page-desc {
    margin-left: 175px;
}

.ct-author-info .ct-author-page-desc {
    margin-left: 110px;
}

.ct-box .ct-author-page-desc h4 {
    margin: 0 0 10px 0;
    padding: 5px 5px 0px 0px;
}

.ct-page .ct-box .ct-author-page-desc h4 {
    margin: 0px 5px 10px 0px
}

.ct-box .ct-author-page-desc h4 a {
    display: inline;
    font-weight: normal;
    font-size: 26px;
}

.ct-author-page p {
    padding: 10px;
    line-height: 26px;
}

ul.ct-social-profiles {
    float: none;
    clear: none;
    padding: 5px 0px 20px 0px;
    height: 33px;
    list-style: none;
    line-height: 30px;
}

.ct-author-page ul.ct-social-profiles {
    padding-left: 10px
}

.ct-social-profiles li {
    float: left
}

.ct-connect {
    float: right;
    margin: 15px 22px 0 0;
    padding: 0px;
    width: 252px;
    height: 34px;
}

.ct-connect li {
    float: left
}

.ct-connect li a {
    position: relative;
    display: block;
    margin: 0 2px;
    width: 34px;
    height: 34px;
    outline: none;
    color: #fff;
    text-align: center;
    line-height: 40px;
}

.ct-connect li a span {
    display: none
}

.ct-connect li a:before,
.ct-icon-search:before,
.ct-icon-info:before {
    text-transform: none;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    font-size: 18px;
    font-family: 'codrops-social';
    line-height: 40px;
    line-height: 1;
    speak: none;
    -webkit-font-smoothing: antialiased;
}

.ct-connect li a:hover:before {
    color: #056495
}

.ct-icon-search:hover:before {
    color: #fff
}

.ct-icon-google-plus:before {
    content: "\e001"
}

.ct-icon-facebook:before {
    content: "\e002"
}

.ct-icon-github:before {
    content: "\e003"
}

.ct-icon-twitter:before {
    content: "\e000"
}

.ct-icon-feed:before {
    content: "\e004"
}

.ct-icon-mail:before {
    content: "\e005"
}

.ct-icon-search:before {
    content: "\e006";
    font-size: 20px;
}

</style>
