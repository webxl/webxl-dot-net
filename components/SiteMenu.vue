<template>
  <div id="site-menu">
    <div class="links">
      <nuxt-link to="/" class="button--gray" v-if="!isHome">Home</nuxt-link>
      <nuxt-link to="/resume" class="button--gray">Résumé</nuxt-link>
      <nuxt-link to="/about" class="button--gray">About</nuxt-link>

    </div>
  </div>
</template>
<style lang="scss" scoped>
  a {
    margin: 15px 0;
  }
</style>
<script>
  export default {
    data () {
      return {}
    },
    computed: {
      isHome: function () {
        return this.$route.path === '/';
      }
    }
  }
</script>
