<template>
  <section class="container" id="about">
    <name/>
    <div class="content">
      <h2 class="subtitle">About</h2>
      <h4>Me</h4>
      <p>
        I'm a professional software engineer specializing in web applications, but have a strong DevOps background as well
        having set up a few high-end Sun servers back in the dotcom days (for literally 10s of users). The money ran out
        before that spike came, but we were ready, by golly! I spent a few years in Los Angeles learning the LAMP stack
        and JavaScript before joining a CRM company.
      </p>
        <p>
        I currently live in Reno, NV with my crazy-beautiful wife and kids, 2 labs, and cat (anyone want a cat?).
        My current technical interests include machine learning, Internet of Things (IOT), and security. My hobbies include
        mountain biking, local issues and all things Lego!
      </p>
      <h5>Profiles</h5>
      <ul>
        <li v-for="link in profile_links">
          <a :href="link.url" target="_blank">{{ link.name }}</a>
        </li>
      </ul>
      <h4>Site</h4>
      <p>
        This site was statically generated by <a :href="ssgen_url">{{ ssgen_name }}</a> version {{ ssgen_version }}, which
        is a {{ ssgen_desc }}. The source is available at <a :href="my_public_repo">{{ my_public_repo }}</a>. There you
        can witness the pure awesomeness that is NUXT, Vue.js, SASS, <a
          href="https://github.com/davidkpiano/sass-svg">sass-svg</a> and <a href="https://milligram.github.io/">Milligram</a>.
        <!-- This page was just rendered on the {{ generated_where }} because you {{ generated_reason }}. -->
      </p>
      <p>

      </p>
      <SiteMenu></SiteMenu>
    </div>
  </section>
</template>
<script>
  import pkg from '../package.json';
  import Name from '~components/Name.vue';
  import SiteMenu from '~components/SiteMenu.vue';

  export default {
    asyncData (context) {
      let req = context.req;
      return {
        ssgen_url: 'https://nuxtjs.org/',
        ssgen_name: 'NUXT.js',
        ssgen_version: '0.10.5',
        ssgen_desc: 'Vue.js based static site generator',
        my_public_repo: pkg.url,
        generated_where: req ? 'server' : 'client',
        generated_reason: req ? (req.referer ? `clicked on a link from ${req.referer}`
          : 'entered this address in your browser or refreshed')
          : `clicked the 'About' link in the menu`,
        profile_links: [
          { url: 'https://github.com/webxl', name: 'Github' },
          { url: 'https://linkedin.com/in/webxl', name: 'LinkedIn' },
          { url: 'https://twitter.com/mattmotherway', name: 'Twitter' }
        ]
      }
    },
    components: {
      SiteMenu, Name
    }
  }
</script>
