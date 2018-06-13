<template>
   <div>
      <content-box
        :articleLists="articleLists"
        :totalPage="totalPage"
        :currentPage="page"
        @changePageButton="changePageButton" 
        @inputChanged="inputChanged"
        @typeChanged="typeChanged"

       />
       </content-box>
       <div v-if="articleLists && articleLists.length == 0">
         <div class="error">
            <img src="~assets/img/404.png" alt="错误页面" class="logo" />
            <h1 class="title">
             数据不存在
            </h1>
          </div>
       </div>
      <footer-nav/>
  </div>
</template>
<script>
  import { Service } from '~/plugins/axios'
  export default {
    components: {
      ContentBox: () => import('~/components/Content'),
      FooterNav: () => import('~/components/Footer')
    },
    //way1
    // async asyncData({ params }) {
    //   let {data} = await Service.post('article/front/list',params)
    //   return {articleLists: data.data.list}
    // },
    //way2
    asyncData ({ params }, callback) {
      Service.post('article/front/list')
      .then((res) => {
        callback(null, { 
          articleLists: res.data.data.list,
          totalPage: res.data.data.pages
          })
      })
    },
    head () {
      return {
        title: "首页"
      }
    },
    data () {
        return {
          title:"",
          type:0,
          page:1,
          pageSize:9,
          articleLists:[],
          totalPage:0
        }
    },
    watchQuery: ['page'],
    created () {
        //这里调用没挂在window.__NUXT__
        //不能调用这个否者的话会覆盖tab切换数据
       // this.getArticles()
    },
     methods: {
      inputChanged(title){
        this.page = 1
        this.title = title
        this.getArticles()
      },
      typeChanged(type){
        this.page = 1
        this.type = type
        this.getArticles()
      },
      changePageButton(page){
         this.page = page
         this.getArticles()
         // console.log('接收的页码',page)
      },
      getArticles() {
        //way1 这个window.__NUXT__ 没有挂上tab切换的数据
        let params = {
          title:this.title,
          type:this.type,
          page:this.page,
          pageSize:this.pageSize
        }
        Service.post('article/front/list',params)
          .then(res => {
            console.log(res.data.data)
            const success = res.data && res.data.code === 200
            if (success) {
                 this.articleLists = res.data.data.list
                 this.totalPage = res.data.data.pages //总共分几页 要和totalRecords一起判断分页显示
            }
          }, err => {
             console.log(err)
          })

        //way2  
      }

      }
  }
</script>

<style scoped>
.error {
  text-align: center;
  padding: 30px 0;
}
.title {
  margin:0 auto;
  margin-top: 15px;
  font-size: 2em;
  text-align: center;
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

</style>
