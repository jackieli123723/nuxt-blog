<template>
    <div id="content" class="container-fluid">
      <div class="container">
        <div id="blog-nav" class="f-c">
          <div id="blog-tabs" class="f-c v-a-c">
            <form action="/search" type="GET" id="form-cat">
              <ul class="v-a-b">
                <li class="" :class="{'active-tab':typeId == tab.id}" v-for="(tab,index) in tabs"  @click="emitTypeChanged(tab.id)" >
                  <span>{{tab.name}}</span>
                </li>
              </ul>
            </form>
          </div>
          <div id="search" class="v-a-c">
              <div class="v-a-b">
                <input type="text" name="s" v-model="title"  @input="emitTitleChanged" placeholder="搜索">
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

            <div class="posts f-c" >

              <div class="post-area" v-for="(article,index) in articleLists">
                <div class="post">
                  <div class="post-thumbnail">
                      <nuxt-link :to="'/article/' + article._id ">
                          <img width="410" height="231" :src=article.placeholder_img  >
                      </nuxt-link>
                  </div>
                  <div class="post-footer">
                    <div class="post-cat">
                      <span class="hidden-link">
                        {{article.type | formatType}}
                      </span>
                    </div>
                    <div class="post-title">
                      <nuxt-link :to="'/article/' + article._id ">
                         {{article.title}}
                      </nuxt-link>
                    </div>
                    <div class="post-descr">
                      <div class="post-date">
                      {{article.creat_date | formatDate}}
                      </div>
                      <span class="disc-separ">
                        ·
                      </span>

                      <div class="number-view">
                         <span class="view-icon"></span>
                         <span class="num">{{article.comment_count}}</span> 
                      </div>

                       <span class="disc-separ">
                        ·
                     </span>
                    
                      <div class="number-view">
                         <span class="view-icon mes"></span>
                         <span class="num">{{article.pv}}</span> 
                      </div>
                     

                      <div class="post-rating">
                        <div class="post-rating-image star-full">
                        </div>
                        <div class="post-rating-image star-full">
                        </div>
                        <div class="post-rating-image star-full">
                        </div>
                        <div class="post-rating-image star-empty">
                        </div>
                        <div  class="post-rating-image star-empty">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             </div>



            <div class="posts-pagination">
              <ul>
                <li><a class="prev page-numbers" href="?page=2">Previous</a></li> 
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

<script>
 // import {formatDate} from  '../utils/utils'
  export default {
   props: {
    //总数据
    articleLists:{
       type: Array,
       default: Array
    }
  },
  computed:{
  },
  data(){
       return {
        typeId:0, 
        title:"",
        tabs:[
          {
            id:0,
            name:"全部"
          },
          {
            id:1,
            name:"web前端"
          },
          {
            id:2,
            name:"服务端"
          },
          {
            id:3,
            name:"构建工具"
          },
          {
            id:4,
            name:"数据库"
          },
          {
            id:5,
            name:"后端开发"
          },
          {
            id:6,
            name:"系统架构"
          }
        ]
       }
    },
    methods:{
      emitTitleChanged(e){
        this.$emit('inputChanged', this.title)
      },
      emitTypeChanged(typeId){
        this.typeId = typeId
        this.$emit('typeChanged', typeId);
      }
    }
  }

</script>

<style lang="less" scoped>

.number-view{
  vertical-align: middle;
  display: inline-block;
  position: relative;
  width: 55px;
  .view-icon{
     display:inline-block;
     width:20px;
     height:20px;
     background:url(~assets/img/message.svg) 0 0 no-repeat;
     &.mes{
       background:url(~assets/img/icon_eyes.svg) 0 0 no-repeat;
     }
     
  }
  .num{
    font-size:12px;
    position: absolute;
    left:24px;
    top:4px;
  }
}

</style>

