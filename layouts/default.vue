<template>
  <div class="default-layout">
    <header-nav/>
    <header-area/>
    <div class="box">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  //import {seo} from '~/utils/seo'
  import Vue from 'vue'
  //时间过滤器
  Vue.filter('formatDate',function (value) {
      if (value == 0) return ''
      let date = new Date(Number(value))
      let year = date.getFullYear()
      let month = date.getMonth()+1
      let day = date.getDate()
      let hour = date.getHours()
      let minute = date.getMinutes()
      function filter(num) {
          return num >= 10 ? num : '0' + num
      }
      return filter(year)+'.'+filter(month)+'.'+filter(day)+' '+filter(hour)+':'+filter(minute);
  })

   //时间过滤器
  Vue.filter('formatType',function (value) {
      if (value == 0) return ''
      if(value ==1){
        return 'web前端'
      }
      if(value ==2){
        return '服务端'
      }
      if(value ==3){
        return '构建工具'
      }
      if(value ==4){
        return '数据库'
      }
      if(value ==5){
        return '后端开发'
      }
      if(value ==6){
        return '系统架构'
      }
  })
  export default {
    components: {
      HeaderNav: () => import('~/components/Header'),
      HeaderArea: () => import('~/components/HeaderArea'),
      ContentBox: () => import('~/components/Content'),
      FooterNav: () => import('~/components/Footer'),
    },
     mounted(){
      //直接将SEO脚本放在页面会被当成文本解析，所以将方法提取出来，放到mounted hook里面执行
      //seo()
    }
  }
</script>

<style lang="css" >

</style>
