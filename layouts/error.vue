<template>
  <div class="error">
    <img src="~assets/img/404.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      页面被UFO抓跑了
    </h2>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.error {
  text-align: center;
  padding: 30px 0;
}
.title {
  margin-top: 15px;
  font-size: 5em;
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