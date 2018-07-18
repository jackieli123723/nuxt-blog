<template>
 <!--  滚动添加 active-work-menu -->
  <div id="header" class="container-fluid">
      <div class="container">
        <div class="row">
          <header>
            <nav class="menu">
              <div class="menu__content">
                <ul class="menu__primary">
                  <li class="menu__primary__item no-transition" >
                   <nuxt-link  class="menu__primary__item__link js-link" :class="{'nuxt-link-exact-active':this.$route.path == '/' }" to="/">首页</nuxt-link>
                  </li>
                   <li class="menu__primary__item no-transition">
                     <nuxt-link  class="menu__primary__item__link js-link" :class="{'nuxt-link-exact-active':this.$route.path == '/about'}" to="/about">关于</nuxt-link>
                  </li>
                   <li class="menu__primary__item no-transition">
                     <nuxt-link  class="menu__primary__item__link js-link" :class="{'nuxt-link-exact-active':this.$route.path == '/production'}" to="/production">作品</nuxt-link>
                  </li>
                  <li class="menu__primary__item no-transition">
                     <nuxt-link  class="menu__primary__item__link js-link" :class="{'nuxt-link-exact-active':this.$route.path == '/archives'}" to="/archives">归档</nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="social">
                <ul>
                  <li>
                    <a class="dribbble" target="_blank">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                        <g id="XMLID_2_">
                          <path id="Dribbble" class="st0" d="M12.5,0.5c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C24.5,5.9,19.1,0.5,12.5,0.5z
                          M19.9,6.7c1.2,1.5,1.9,3.3,2,5.3c-1.4-0.3-2.6-0.4-3.8-0.4v0h0c-1,0-1.9,0.1-2.7,0.2c-0.2-0.5-0.4-1-0.6-1.5
                          C16.6,9.6,18.4,8.4,19.9,6.7z M12.5,3.1c2.2,0,4.2,0.8,5.8,2.1c-1.2,1.5-2.8,2.5-4.6,3.3c-1.2-2.4-2.4-4.1-3.2-5.1
                          C11.2,3.2,11.8,3.1,12.5,3.1z M8.4,4.1c0.6,0.8,2,2.5,3.3,5.1c-2.8,0.8-5.7,1-7.4,1c0,0-0.1,0-0.1,0h0c-0.3,0-0.5,0-0.7,0
                          C4.1,7.5,5.9,5.3,8.4,4.1z M3.1,12.5c0,0,0-0.1,0-0.1c0.3,0,0.6,0,1,0h0c1.9,0,5.2-0.2,8.5-1.2c0.2,0.4,0.4,0.8,0.5,1.2
                          c-2.2,0.7-4,1.9-5.3,3.1c-1.2,1.1-2.1,2.3-2.6,3C4,16.9,3.1,14.8,3.1,12.5z M12.5,21.9c-2.1,0-4-0.7-5.6-1.8c0.3-0.5,1-1.6,2.2-2.7
                          c1.2-1.1,2.8-2.3,4.9-2.9c0.7,2,1.4,4.3,1.8,6.9C14.8,21.6,13.7,21.9,12.5,21.9z M17.8,20.2c-0.5-2.3-1.1-4.4-1.7-6.3
                          c0.6-0.1,1.2-0.1,1.9-0.1h0h0h0c1.1,0,2.3,0.1,3.7,0.4C21.2,16.7,19.8,18.8,17.8,20.2z"></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a  class="behance" target="_blank">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                        <g id="XMLID_9_">
                          <path id="Behance" class="st0" d="M22.2,7.1h-6V5.7h6L22.2,7.1C22.2,7.1,22.2,7.1,22.2,7.1z M12.2,13.3c0.4,0.6,0.6,1.3,0.6,2.2
                          c0,0.9-0.2,1.7-0.7,2.4c-0.3,0.5-0.6,0.9-1.1,1.2c-0.5,0.4-1,0.6-1.7,0.7C8.7,19.9,8,20,7.2,20H0.5V5h7.2c1.8,0,3.1,0.6,3.9,1.6
                          C12,7.3,12.3,8,12.3,8.9c0,0.9-0.2,1.6-0.7,2.2c-0.3,0.3-0.6,0.6-1.1,0.8C11.2,12.2,11.8,12.7,12.2,13.3z M3.9,10.9h3.2
                          c0.6,0,1.2-0.1,1.6-0.4c0.4-0.2,0.6-0.7,0.6-1.3c0-0.7-0.3-1.2-0.8-1.4C8,7.7,7.4,7.6,6.7,7.6H3.9V10.9z M9.6,15.2
                          c0-0.8-0.3-1.3-0.9-1.6c-0.4-0.2-0.9-0.2-1.5-0.3H3.9v4h3.2c0.6,0,1.2-0.1,1.5-0.3C9.3,16.8,9.6,16.2,9.6,15.2z M24.4,12.8
                          c0.1,0.5,0.1,1.2,0.1,2.1h-7.8c0,1.1,0.4,1.8,1.1,2.3c0.4,0.3,0.9,0.4,1.5,0.4c0.6,0,1.2-0.2,1.6-0.5c0.2-0.2,0.4-0.4,0.6-0.7h2.9
                          c-0.1,0.6-0.4,1.3-1,1.9c-1,1-2.3,1.6-4,1.6c-1.4,0-2.7-0.4-3.8-1.3c-1.1-0.9-1.6-2.3-1.6-4.3c0-1.9,0.5-3.3,1.5-4.3
                          c1-1,2.3-1.5,3.8-1.5c0.9,0,1.8,0.2,2.5,0.5c0.7,0.3,1.4,0.9,1.8,1.6C24,11.2,24.3,12,24.4,12.8z M21.6,13.1
                          c-0.1-0.7-0.3-1.3-0.7-1.7c-0.4-0.4-1-0.6-1.7-0.6c-0.7,0-1.3,0.2-1.7,0.6c-0.4,0.4-0.6,1-0.7,1.7L21.6,13.1L21.6,13.1z"></path>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="ui-menu">
              <span class="ui-menu__content">
                <i class="ui-menu__line ui-menu__line_1">
                </i>
                <i class="ui-menu__line ui-menu__line_2">
                </i>
                <i class="ui-menu__line ui-menu__line_3">
                </i>
              </span>
            </div>
            <a class="ui-logo" href="/" data-link="home">
              <i class="ui-logo__icon">
               <!--  <img src="http://demo.lilidong.cn/img/o2logo.png" > -->
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61 132.3" style="enable-background:new 0 0 61 132.3;" xml:space="preserve">
                  <path id="XMLID_7_" class="st1" d="M0,24v14.5v8.8v1.3c0,4.8,5,7.3,8,7.3v-8.6V33.5C8,26.4,3,24,0,24z"></path>
                  <path id="XMLID_6_" class="st2" d="M31-0.1v9.8v4.1V15c0,4.8-5,7.3-8,7.3v-3.8V9.4C23,2.2,28-0.1,31-0.1z"></path>
                  <path id="XMLID_2_" class="st3" d="M56.5,25c-20.3,1.8-34,18.2-36.4,42.7C14.9,63.9,8.5,62,3.9,62H0v45.7c0,6.3,1.6,11.7,4.8,15.7
                  c0,0-0.1,0,0,0.1c0.3,0.3,0.5,0.7,0.8,1c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.3,0.7,0.7,1,1c0,0,0.1,0.1,0.3,0.3c0,0,0.1,0.1,0.1,0.1
                  l1.3,0.9c4.7,3.4,11.2,5.2,19.1,5.2c27.9,0,33.4-12.5,33.4-32.8V24.6L56.5,25z M8,71.3c5,1.3,10,4.4,12,9.1v28.4
                  c0,3.5-0.7,6.7-1.7,8.8c-0.1,0.2-0.2,0.3-0.3,0.5c0,0,0,0,0,0c-0.1,0.1-0.2,0.3-0.2,0.4c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3
                  c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0
                  c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0
                  c-0.4,0.2-0.8,0.2-1.1,0.2c-0.1,0-0.2,0-0.3,0c-0.3,0-0.7-0.1-1.1-0.3c-0.8-0.3-3.7-2.7-4.8-6c-0.7-2.3-1-4.6-1-6.3V71.3z M53,99.4
                  c0,17.1-3.6,24.3-25.2,24.3c-1.1,0-2.2,0-3.2-0.1c0.2-0.3,0.4-0.7,0.6-1.1c0-0.1,0.1-0.1,0.1-0.2c0.2-0.4,0.3-0.8,0.5-1.2
                  c1.9-4.1,2.2-9,2.2-12.3V79.1v-3.4c0-22.3,9-37.7,25-41.5V99.4z"></path>
                </svg>
                <img src="~assets/img/logo.png" class="text-logo" alt="西门互联nuxt博客,前端开发,nodejs全栈,WEB前端开发,前端开发博客专注于前端开发,分享前端开发资源和前端开发技术资讯等,个人原创网站,web前端技术分享,个人博客" />
              </i>

              <strong class="ui-logo__text">
               西门互联nuxt博客，成都web前端开发，西门互联nuxt博客,前端开发,nodejs全栈,WEB前端开发,前端开发博客专注于前端开发,分享前端开发资源和前端开发技术资讯等,个人原创网站,web前端技术分享,个人博客
             </strong>

            </a>
          </header>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    computed: {
    }
  }
</script>

<style scoped>
.text-logo{
  margin-left:18px;
}

/*@import '../assets/css/new-style.css'*/
</style>