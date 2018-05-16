<template>
   <div>
      <content-box/>
      <footer-nav/>
  </div>
</template>
<script>
  export default {
    components: {
      ContentBox: () => import('~/components/Content'),
      FooterNav: () => import('~/components/Footer')
    }
  }
</script>

<style scoped>

</style>
