<template>
    <div id="content" class="container-fluid">
      <div class="container">
        <div id="blog-nav" class="f-c">
          <div id="blog-tabs" class="f-c v-a-c">
            <form action="/search" type="GET" id="form-cat">
              <ul class="v-a-b">
                <li class="active-tab">
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      全部
                    </font></font></span>
                    <input type="radio" name="cat" value="all">
                  </label>
                </li>
                <li>
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      web前端
                    </font></font></span>
                    <input type="radio" name="cat" value="ux-design">
                  </label>
                </li>
                <li>
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      服务端
                    </font></font></span>
                    <input type="radio" name="cat" value="usability">
                  </label>
                </li>
                <li>
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      构建工具
                    </font></font></span>
                    <input type="radio" name="cat" value="tools">
                  </label>
                </li>
                <li>
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      数据库
                    </font></font></span>
                    <input type="radio" name="cat" value="illustration">
                  </label>
                </li>
                <li>
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      后端开发
                    </font></font></span>
                    <input type="radio" name="cat" value="animation">
                  </label>
                </li>
                <li>
                  <label>
                    <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                      系统架构
                    </font></font></span>
                    <input type="radio" name="cat" value="animation">
                  </label>
                </li>
              </ul>
            </form>
          </div>
          <div id="search" class="v-a-c">
            
              <div class="v-a-b">
                <input type="text" name="s" placeholder="全文检索">
                <div class="search-icon">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
                    <path id="XMLID_3_" class="st0" d="M16.5,18.2c-0.5-0.5-0.5-1.3,0-1.8c0.5-0.5,1.3-0.5,1.8,0l5.3,5.3c0.5,0.5,0.5,1.3,0,1.8
                    c-0.5,0.5-1.3,0.5-1.8,0L16.5,18.2z"></path>
                    <circle id="XMLID_5_" class="st1" cx="10.3" cy="10.5" r="8.5"></circle>
                  </svg>
                </div>
              </div>
          
          </div>
        </div>
        <div id="content-area">
          <div id="ajax">
            <div class="posts f-c">
              <div class="post-area">
                <div class="post">
                  <div class="post-thumbnail">
                   <a href="/article/3333">
                      <img width="410" height="231" src="~assets/img/apple-device-computer-dark-986812-410x231.jpg" >
                    </a>
                  </div>
                  <div class="post-footer">
                    <div class="post-cat">
                      <span class="hidden-link">
                        web前端
                      </span>
                    </div>
                    <div class="post-title">
                      <a href="/article/3333">如何选择最佳网站配色方案...</a>
                    </div>
                    <div class="post-descr">
                      <div class="post-date">
                        2018年5月1日
                      </div>
                      <span class="disc-separ">
                        ·
                      </span>
                      <div class="post-social">
                        <ul>
                          <li>
                            <div class="facebook-btn">
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21 21" style="enable-background:new 0 0 21 21;" xml:space="preserve">
                                <g id="XMLID_185_">
                                  <path id="XMLID_5_" class="st0" d="M15.5,0.5l-2.6,0c-2.9,0-4.8,1.9-4.8,4.9v2.3H5.5c-0.2,0-0.4,0.2-0.4,0.4v3.3
                                  c0,0.2,0.2,0.4,0.4,0.4h2.6v8.3c0,0.2,0.2,0.4,0.4,0.4h3.4c0.2,0,0.4-0.2,0.4-0.4v-8.3h3c0.2,0,0.4-0.2,0.4-0.4l0-3.3
                                  c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1h-3.1V5.8c0-0.9,0.2-1.4,1.4-1.4l1.7,0c0.2,0,0.4-0.2,0.4-0.4V0.9
                                  C15.9,0.7,15.7,0.5,15.5,0.5z"></path>
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li>
                            <div class="twitter-btn">
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 21 21" style="enable-background:new 0 0 21 21;" xml:space="preserve">
                                <g id="XMLID_185_">
                                  <g id="XMLID_186_">
                                    <path id="XMLID_5_" class="st0" d="M20.5,4.3c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1
                                    c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9C6.9,7.2,3.9,5.6,1.9,3.1C1.5,3.7,1.3,4.4,1.3,5.2
                                    c0,1.4,0.7,2.7,1.8,3.4c-0.7,0-1.3-0.2-1.9-0.5v0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1
                                    c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7l0-0.5
                                    C19.3,5.8,20,5.1,20.5,4.3z"></path>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <span class="disc-separ">
                        ·
                     </span>
                      <div class="post-rating">
                        <div data-star-group="1258" data-star="1" class="post-rating-image star-empty">
                        </div>
                        <div data-star-group="1258" data-star="2" class="post-rating-image star-empty">
                        </div>
                        <div data-star-group="1258" data-star="3" class="post-rating-image star-empty">
                        </div>
                        <div data-star-group="1258" data-star="4" class="post-rating-image star-empty">
                        </div>
                        <div data-star-group="1258" data-star="5" class="post-rating-image star-empty">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </div>
            <div class="posts-pagination">
              <ul>
                <li>
                  <span class="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a class="page-numbers" href="?page=2">
                    2
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="?page=3">
                    3
                  </a>
                </li>
                <li>
                  <a class="page-numbers" href="?page=4">
                    4
                  </a>
                </li>
                <li>
                  <span class="page-numbers dots">
                    …
                  </span>
                </li>
                <li>
                  <a class="page-numbers" href="?page=11">
                    11
                  </a>
                </li>
                <li>
                  <a class="next page-numbers" href="?page=2">
                    Next
                  </a>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

/*@import '../assets/css/style.css'
*/
</style>