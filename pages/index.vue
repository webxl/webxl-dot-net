<template>
  <section class="title">
    <div>
      <name/>
      <div class="subtitle">
        software engineer
      </div>
      <SiteMenu/>
    </div>
  </section>
</template>

<script>
  import Name from '~components/Name.vue';
  import SiteMenu from '~components/SiteMenu.vue';

  export default {
    components: {
      Name, SiteMenu
    }
  }
</script>

<style lang="scss">
  @import "../vars.scss";


  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1 0 auto;

    .links {
      a {
        background-color: $titleColor;

        &:hover {
          color: #fff;
          background-color: #35495e;
        }
      }
    }

    h1 {
      font-size: 3em;
      text-shadow: 3px 3px 4px $headingShadowColor;
    }
  }



  @media (min-width: 40.0rem) {

    .title {
      h1 {
        font-size: 100px;
      }
    }

  }

  /* Larger than tablet screen */
  @media (min-width: 80.0rem) {

    .title {
      h1 {
        font-size: 100px;
      }
    }
  }

  /* Larger than desktop screen */
  @media (min-width: 120.0rem) { }
</style>
