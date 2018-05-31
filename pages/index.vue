<template>
   <div>
      <content-box
        :articleLists="articleLists"
        @inputChanged="inputChanged"
        @typeChanged="typeChanged"
       />
       </content-boxt>
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
        callback(null, { articleLists: res.data.data.list })
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
          articleLists:[]
        }
    },
    created () {
        //这里调用没挂在window.__NUXT__
        //不能调用这个否者的话会覆盖tab切换数据
        //this.getArticles()
    },
     methods: {
      inputChanged(title){
        this.title = title
        this.getArticles()
      },
      typeChanged(type){
        this.type = type
        this.getArticles()
      },

      getArticles() {
        let params = {
          title:this.title,
          type:this.type,
          page:1,
          pageSize:9
        }
         Service.post('article/front/list',params)
          .then(res => {
            console.log(res.data.data)
            const success = res.data && res.data.code === 200
            if (success) {
                 this.articleLists = res.data.data.list
            }
          }, err => {
             console.log(err)
          })
      }

      }
  }
</script>

<style scoped>

</style>
