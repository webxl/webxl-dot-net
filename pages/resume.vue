<template>
  <section class="container">
  <div>
    <name/>
    <div class="content">

      <h2 class="subtitle">
        Résumé
      </h2>

      <h4>Full-stack web application developer with over a decade of SAAS experience
      </h4>

      <ul>
        <li v-for="hl in highlights">
          {{ hl }}
        </li>
      </ul>

      <h3>Experience</h3>
      <div v-for="pos in work">

        <div class="row position-header">
          <div class="column column-50">
            {{ pos.company }}, {{ pos.location }}
          </div>
          <div class="column column-50 date-range">
              {{ pos.dateRange }}
          </div>
        </div>
        <div class="position-title">
          {{ pos.position }}
        </div>
        <div class="summary">
          {{ pos.summary }}
        </div>
      </div>

      <h3>Education</h3>
      <div v-for="pos in education">
        <div class="row position-header">
          <div class="column column-50">
            {{ pos.institution }}
          </div>
          <div class="column column-50 date-range">
              {{ pos.dateRange }}
          </div>
        </div>
        <div class="summary">
          {{ pos.studyType }}
        </div>
      </div>

      <SiteMenu></SiteMenu>
    </div>
  </div>
  </section>
</template>
<style scoped="">
  li {
    list-style-position: outside;
    margin-left: 16px;
  }
  .position-header {
    margin-top: 20px;
    font-weight: bold;
  }
  .position-title, .summary {
    margin-bottom: 10px;
  }
  @media (min-width: 40.0rem) {
    .date-range {
      text-align: right;
    }
  }
</style>

<script>
  import Name from '~components/Name.vue';
  import SiteMenu from '~components/SiteMenu.vue';
  import resumeData from './resume.json';

  export default {
    data () {
      return resumeData
    },
    components: {
      Name, SiteMenu
    }
  }
</script>
