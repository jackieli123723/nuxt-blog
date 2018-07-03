<template>
  <section id="comments" class="ct-comments" v-if="commentList && commentList.length > 0">

  <div class="ct-commenttitle ct-cf">
    <h2 id="comments-title">
      <span>
        留言区
      </span>
      <sup>
        {{totalRecords}}
      </sup>
    </h2>
  </div>

  <ol class="ct-commentlist">
<!-- 单个留言 -->
    <li class="comment even thread-even depth-1" v-for="(comment,index) in commentList">
      <article  class="ct-comment">
        <footer class="comment-meta">
          <div class="comment-author vcard">
            <span class="ct-commentthumb">
              <img alt="" src="https://secure.gravatar.com/avatar/bbe9674f35b1d481db7901e00854487b?s=60&amp;d=retro&amp;r=g"
              class="avatar avatar-60 photo" height="60" width="60">
            </span>
            <span class="ct-commentauthorname">
              {{comment.username}}
            </span>
            <span v-if="comment.stars == 1">
              <span class="atar_Show atar_Show_1"></span>
            </span>
            <span v-if="comment.stars == 2">
              <span class="atar_Show atar_Show_2"></span>
            </span>
            <span v-if="comment.stars == 3">
             <span class="atar_Show atar_Show_3"></span>
            </span>
            <span v-if="comment.stars == 4">
             <span class="atar_Show atar_Show_4"></span>
            </span>
            <span v-if="comment.stars == 5">
              <span class="atar_Show atar_Show_5"></span>
            </span>
            <a 
            class="ct-commenttime">
           {{comment.creat_date | formatDate}}
            </a>
          </div>
          <!-- .comment-author .vcard -->
        </footer>
        <div class="ct-commentnumber">
     <!-- {{index+1}} 下面是给每个序号添加正确的 -->
          {{ 10*(page-1) + index+1}}
        </div>
        <div class="ct-commentcontent" v-html="getFace(comment.content)">
        </div>
      </article>
    </li>
  
  </ol>
   

</section>
</template>

<script>
  export default {
    props:{
      commentList:{
        type: Array,
        required: true
      },
      totalRecords:{
        type: Number,
        required: true
      },
      page:{
        type: Number,
        required: true
      }
    },
    components: {
  
    },
    data(){
      return {
       
      }
    },
     methods:{
      //https://github.com/sxei/isite/blob/master/src/res/blog/js/comment.js
       getFace(content){
        //return content.replace(/\[qq_(\d+?)\]/g, `<img src="//res.haoji.me/blog/images/face/qq/qq_$1.gif"/>`)
        return content.replace(/\[qq_(\d+?)\]/g, `<img src="http://118.24.30.92:9000/static/img/face/qq/qq_$1.gif"/>`)
       }
    }
  }
</script>


<style >

.atar_Show {
    background: url(~assets/img/stars2.png);
    height: 21px;
    width: 200px;
    display: inline-block;
    margin-left: 6px;
    margin-top: 4px;

}

.atar_Show_5 {
    width: 160px;
}

.atar_Show_4 {
    width: 123px
}
.atar_Show_3 {
    width: 100px
}
.atar_Show_2 {
    width: 67px
}
.atar_Show_1 {
    width: 35px
}
.rate-stars{
    width: 100px;
    height: 28px;
    font-size: 20px;
    color:#BCCEDE;
}
.ct-cf:before,
.ct-cf:after {
    content: " ";
    display: table;
}

.ct-cf:after {
    clear: both
}

.ct-cf {
    *zoom: 1
}
.ct-commenttitle {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(222, 228, 239);
}

.ct-commenttitle h2 {
    float: left;
    font-size: 36px;
}

.ct-commenttitle h2 sup {
    font-size: 22px
}


.ct-comments {
    clear: both;
    padding-top: 30px;
    max-width: 1290px;

    margin:10px auto;
}

.ct-closed-right {
    float: right;
    padding-right: 10px;
    color: #BCCEDE;
    text-transform: none;
    font-size: 14px;
    line-height: 60px;
}

.ct-commenttitle {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(222, 228, 239);
    padding: 0 4px;
}

.ct-commenttitle h2 {
    float: left;
    font-size: 36px;
}

.ct-commenttitle h2 sup {
    font-size: 22px
}

.ct-comment {
    position: relative
}

.ct-comments ol li,
.comment-meta .ct-commentthumb {
    margin: 10px 0px 10px 40px;
    padding: 4px;
    border: 1px solid #f4f4f4;
    background-color: #fff;
    list-style: none;
}

.ct-comments ol li.depth-2 {
    margin: 0px 13px 15px 50px;
    border: 1px solid #f4f4f4;
}

.ct-commentreply a {
    position: absolute;
    right: 12px;
    bottom: 3px;
    display: block;
}

.ct-commentedit a {
    position: absolute;
    bottom: 3px;
}

.comment-meta {
    position: relative;
    padding-left: 45px;
    min-height: 37px;
    height: auto;
    background: #f1f5f8;
    line-height: 37px;
}

a.ct-commenttime {
    display: inline;
    float: right;
    margin-right: 10px;
    color: rgb(165, 175, 192);
}

.comment-meta .ct-commentthumb {
    position: absolute;
    top: 10px;
    left: -40px;
    display: block;
    margin: 0;
}

.comment-meta .ct-commentthumb img {
    display: block
}

.ct-commentnumber {
    position: absolute;
    right: 10px;
    bottom: 23px;
    color: #F4F5F7;
    font-size: 36px;
    line-height: 36px;
}

.ct-commentauthorname {
    color: #A5AFC0;
    font-weight: bold;
}

.ct-commentcontent {
    position: relative;
    padding: 20px 55px 30px 45px;
    word-break:break-all;
}

.ct-commentcontent a {
    outline: none;
    color: #647993;
    text-decoration: none;
    font-weight: inherit;
}

.ct-commentcontent,
.ct-author-page-desc {
    line-height: 1.5;
}

.ct-commentcontent p {
    padding: 5px 0
}

.ct-commentmessage {
    color: #ccc
}

h3#reply-title {
    margin-top: 30px;
    padding: 10px 0px;
    padding: 25px 0px 10px 0;
   /* background: transparent url(../images/line.png) repeat-x top left;*/
    color: #d1dfec;
    font-size: 30px;
}

.ct-comment-form {
    clear: both;
    min-height: 40px;
}

.ct-commentlist #respond {
    margin: 0px 40px
}

.ct-comment-form #respond {
    margin: 0 5px
}

h3#reply-title a {
    margin-right: 10px;
    text-transform: uppercase;
    text-shadow: none;
    font-size: 12px;
}

#respond form p.form-allowed-tags {
    font-size: 12px;
    line-height: 20px;
}

#respond form p.form-allowed-tags code {
    font-size: 13px
}

#respond form p.form-submit {
    float: right;
    margin-right: 10px;
}

#respond h3#reply-title a {
    float: right
}

/* Partner Section */

.partner_section_post {
    position: relative;
    display: none;
    clear: both;
    padding: 10px;
    border-top: 1px solid #f7f7f7;
    border-left: 1px solid #f7f7f7;
    background-color: #fff;
    color: #fff;
    font-size: 11px;
    line-height: 20px;
}

.partner_section_post span {
    padding-right: 5px
}

/* Collective Style */

.ct-content-coll .ct-inner {
    padding: 0;
    max-width: none;
}

.ct-main-coll {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 0;
    max-width: 1320px;
}

.ct-coll-featured-thumb img {
    display: block;
    margin: 0 auto;
    box-shadow: 2px 2px 0px #e5eaed;
}

.ct-coll-container .ct-coll-item {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.ct-coll-container .ct-coll-cover {
    padding: 0;
    background: #0099cc;
}

.ct-main-coll .ct-post .ct-coll-item.ct-coll-cover article {
    padding: 0;
    box-shadow: none;
}

.coll-cover-bg {
    margin: 0;
    padding: 30px 0 10px;
    color: #fff;
}

.ct-post .ct-coll-cover h1 {
    clear: both;
    margin: 0;
    padding: 0;
    border: none;
    color: #fff;
    font-size: 1.75em;
}

.ct-coll-cover,
.ct-coll-item.ct-coll-cover p {
    text-align: center
}

.ct-coll-cover img {
  width: 105px;
  transform: translate3d(0,0,0);
}

.ct-coll-designer {
    position: absolute;
    top: 100%;
    margin-top: 20px;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
    font-size: 0.75em;
}

.ct-coll-cover a {
    color: rgba(0, 0, 0, 0.4)
}

.ct-coll-cover a:hover {
    color: #fff
}

.ct-main-coll .ct-row-wrapper:last-child {
    padding-bottom: 30px
}

.ct-main-coll .ct-post article {
    padding: 0px;
    background-color: transparent;
    box-shadow: none;
}

.ct-coll-nav {
    position: relative;
    margin: 0 auto 60px auto;
    width: 80%;
}

.ct-coll-nav span {
    position: absolute;
    top: 50%;
    margin-top: -35px;
}

.ct-coll-nav span:first-child {
    left: 0
}

.ct-coll-nav span:last-child {
    right: 0
}

.ct-coll-nav span.ct-coll-nav-empty {
    position: absolute;
    top: 50%;
    margin-top: -35px;
    width: 50px;
    height: 70px;
    box-sizing: border-box;
    border: 1px dotted rgba(0, 0, 0, 0.3);
}

.ct-coll-nav span.ct-coll-nav-empty:after {
    content: 'Future Issue';
    position: absolute;
    left: 0;
    padding-top: 26px;
    width: 100%;
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 9px;
    line-height: 9px;
}

.ct-coll-nav a {
    position: relative;
    display: block;
    float: left;
    width: 50px;
    height: 70px;
}

.ct-coll-nav a img {
    margin: 0px;
    width: 50px;
    border: none;
    opacity: 0.3;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
}

.ct-coll-nav a:hover img {
    opacity: 1
}

.ct-coll-nav a:after {
    content: '\e600';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    margin: -15px 0 0 -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    color: #237dac;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    font-family: 'codrops-icons';
    line-height: 30px;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    speak: none;
}

.ct-coll-nav .ct-coll-nav-next a:after {
    content: '\e604'
}

.ct-coll-nav a:hover::after,
.ct-coll-nav a:hover::before {
    opacity: 0
}

.ct-coll-nav-bottom {
    text-align: center
}

.ct-coll-nav-bottom a,
.ct-coll-nav-bottom span {
    position: relative;
    display: inline-block;
    padding: 10px 0px;
}

.ct-coll-nav-bottom-next a::after,
.ct-coll-nav-bottom-prev a::before {
    font-size: 0.85em;
    font-family: 'codrops-icons';
}

.ct-coll-nav-bottom-prev a::before {
    content: "\e600";
    margin-right: 5px;
}

.ct-coll-nav-bottom-next a::after {
    content: "\e604";
    margin-left: 5px;
}

.ct-coll-nav-bottom a {
    font-weight: bold;
}

.ct-coll-nav-bottom span {
    color: #ddd
}

.ct-coll-nav-bottom a:hover {
    color: #056495
}

.ct-vert-lines:before,
.ct-vert-lines:after {
    content: '\2022';
    padding: 0 10px;
    color: #ddd;
    font-size: 26px;
}

.ct-main-coll .ct-post p.ct-coll-excerpt,
.ct-coll-subline {
    font-size: 0.75em
}

.ct-main-coll .ct-post p.ct-coll-excerpt {
    padding: 10px 20px;
    color: #036281
}

.ct-coll-subline {
    display: block;
    font-weight: bold;
    padding: 5px 0 10px;
    text-transform: uppercase;
}

.ct-coll-subline time::after {
    content: " \00B7";
    margin: 0 4px;
}

.ct-coll-container-wrap {
    padding: 30px 0px 10px 0;
    min-height: 1060px;
}

.ct-coll-loading {
   /* background: transparent url(../images/preload.gif) no-repeat 50% 100px*/
}

.ct-coll-container {
    visibility: hidden;
    clear: both;
    margin: 0 auto;
}

.ct-coll-item {
    float: left;
    margin: 0px 0px 30px 0px;
    padding: 0px;
    width: 300px;
    background-color: #fff;
}

.ct-coll-emailsep {
    display: none;
}

.ct-coll-item-multi nav {
    position: relative;
}

.ct-coll-item-multi nav a {
    position: absolute;
    top: 15px;
    z-index: 10000;
    width: 20px;
    height: 20px;
  /*  background: #79bbdd url(../images/cs.png) no-repeat -194px -463px;*/
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    text-indent: -9000px;
}

.ct-main-coll .ct-post .ct-coll-item article {
    position: relative;
    padding: 15px 0 40px 0;
    box-shadow: inset 0 3px 0 #30abd5;
}

.ct-coll-item-multi nav a:hover {
    background-color: #46a4da;
}

.ct-coll-item-multi nav a.ct-coll-nav-prev {
    right: 40px;
}

.ct-coll-item-multi nav a.ct-coll-nav-next {
    right: 15px;
    background-position: -192px -489px;
}

.ct-coll-item-multi.ct-coll-item a.ct-coll-thumb {
    display: block;
    float: none;
    margin: 5px 30px 0px 30px;
}

.ct-coll-item-multi.ct-coll-item p {
    padding: 10px 30px
}

.ct-main-coll .ct-post .ct-coll-item.ct-coll-item-nobg {
    background-color: transparent
}

.ct-coll-item h2 {
    margin-bottom: 10px;
    padding: 5px 15px 10px;
    color: #666;
    text-align: left;
    text-transform: none;
    font-size: 1.5em;
    line-height: 1.2;
}

.ct-coll-item-multi.ct-coll-item h2 {
    padding-right: 55px
}

.ct-coll-item.ct-coll-item-nobg h2 {
    background: transparent
}

.ct-coll-item p {
    padding: 35px;
    text-align: left;
    line-height: 1.5;
}

.ct-coll-item p:before,
.ct-coll-item p:after {
    content: "";
    display: table;
}

.ct-coll-item p:after {
    clear: both
}

.ct-coll-item p {
    zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}

.ct-coll-item-dribbble.ct-coll-item p {
    min-height: 48px
}

.ct-coll-item a.ct-coll-thumb {
    position: relative;
    display: block;
    overflow: hidden;
}

.ct-coll-item .ct-coll-sponsorship {
    margin: -20px 0 20px;
    background: #C6CAD1;
    padding: 9px 15px;
    font-size: 0.75em;
    font-weight: bold;
}

.ct-coll-item a.ct-coll-thumb:first-child {
    margin-top: -15px;
    margin-bottom: 20px;
}

.ct-coll-item .ct-coll-thumb ~ h2 {
    display: block;
    margin-bottom: -10px;
    padding: 15px 35px 0;
}

.ct-coll-item h2 a {
    display: block
}

.ct-coll-item h2 a:visited,
.ct-coll-item h2 a:hover,
.ct-coll-item a.ct-coll-link:visited,
.ct-coll-item a.ct-coll-link:hover {
    color: #2D3E4A;
}

.ct-coll-item a.ct-coll-thumb img {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    border: none;
}

.ct-coll-item a.ct-coll-thumb:hover img {
    opacity: 1
}

.ct-coll-item a.ct-coll-thumb span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -35px 0 0 -35px;
    width: 70px;
    height: 70px;
    border: 3px solid rgba(152, 188, 220, 0.8);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.4);
    color: rgba(91, 148, 178, 0.8);
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    line-height: 70px;
}

.ct-coll-item a.ct-coll-thumb span i {
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1)
}

.ct-coll-item a.ct-nofloat {
    float: none;
    margin: 0px;
}

.ct-coll-item a.ct-coll-link {
    padding: 0 35px;
    font-weight: bold;
    font-size: 0.95em;
}

.ct-coll-item a.ct-coll-link:after {
    content: "\e604";
    margin-left: 5px;
    font-size: 0.85em;
    font-family: 'codrops-icons';
}

/* Normal Archive Style */
.ct-archive-container {
    padding-bottom: 2em;
}

.ct-archive-container,
.ct-row-wrapper {
    width: 100%; 
    border-spacing: 10px; 
    border-collapse: separate;  
}

.ct-row-wrapper {
    margin-left: -20px;
    width: calc(100% + 40px);
    border-spacing: 20px;
}

.ct-archive-container .ct-row {
    display: table-row;
    margin: 0;
}

.ct-archive-container .ct-row-bottom.ct-row {
    display: block
}

.ct-archive-container .ct-row-bottom.ct-row .ct-box {
    display: block;
    width: auto;
}

.ct-archive-container .ct-row .ct-box {
    display: table-cell;
    margin: 0;
    width: 50%;
}

.ct-archive .ct-box {
    font-style: normal
}

.ct-archive h1 {
    padding: 1em 0px 0.25em 10px;
    line-height: 1;
    font-size: 2.25em;
}

.ct-archive-subline-centered {
    padding: 1em;
    color: #A0A7AD;
    text-align: center;
    font-weight: bold;
}

.ct-archive article .ct-subline {
    padding: 0 0 1.5em;
}

.ct-archive .ct-feat-excerpt p {
    display: inline;
    line-height: 20px;
}

.ct-archive .ct-feat-excerpt span a {
    white-space: nowrap
}

.ct-archive #wp_page_numbers ul {
    float: right;
    width: auto;
}
</style>