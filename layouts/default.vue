<template>
  <div class="default-layout">
    <header-nav/>
    <header-area/>
    <div class="b">
      <nuxt/>
    </div>
   
  </div>
</template>

<script>
  export default {
    components: {
      HeaderNav: () => import('~/components/Header'),
      HeaderArea: () => import('~/components/HeaderArea'),
      ContentBox: () => import('~/components/Content'),
      FooterNav: () => import('~/components/Footer'),
    }
  }
</script>

<style lang="css" >

</style>
