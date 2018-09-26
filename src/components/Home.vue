<template>
  <v-container fluid>
    <div class="fullHeight text-xs-center">
      <img class="mb-5 profile-pic"
           src="https://fr.gravatar.com/userimage/60115314/7100a2db99dac4b3ba928ce1a1ea0012.png?size=500"
           height="150"/>
      <span>Hey, I'm Armaldio</span>
      <span>I'm a french guy that loves to code and experiment new techs ⚡</span>
      <span>I'm currently studying at Epitech Lyon, a French IT school (4th year)</span>
      <div class="d-inline-flex pt-5">
        <v-btn href="mailto:armaldio@gmail.com" color="green" large>
          Hire me
          <v-icon small right dark>far fa-envelope</v-icon>
        </v-btn>
        <span>or</span>
        <v-btn to="/donations" color="blue" large>
          Support me
          <v-icon small right dark>fas fa-money-bill</v-icon>
        </v-btn>
      </div>
      <v-btn
        @click="$vuetify.goTo('#projects')"
        class="mt-5 scroller"
        color="orange"
        large>
        View my projects
        <v-icon small right dark>fas fa-arrow-down</v-icon>
      </v-btn>
    </div>
    <div class="projects mt-5">
      <h2 id="projects" class="text-xs-center mb-5 display-2">Projects</h2>
      <v-tabs fixed-tabs v-model="selectedTab" slot="extension">
        <v-tab v-for="tab in tabs" :key="tab.search">{{ tab.name }}</v-tab>
      </v-tabs>
      <v-tabs-items>
        <Tab :projects="filteredProjects"></Tab>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
  import Tab from './Tab';
  import projects from '../projects';

  export default {
    name      : 'Home',
    components: {
      Tab,
    },
    data() {
      return {
        arrow      : false,
        selectedTab: 0,
        projects,
        tabs       : [
          {
            name  : 'All',
            search: 'all',
          },
          {
            name  : 'Node.js',
            search: 'nodejs',
          },
          {
            name  : 'Electron',
            search: 'electron',
          },
          {
            name  : 'Web',
            search: 'web',
          },
          {
            name  : 'Construct 2 / 3',
            search: 'construct',
          },
          {
            name  : 'Other',
            search: 'other',
          },
        ],
      };
    },
    computed  : {
      filteredProjects() {
        const tab = this.tabs[this.selectedTab];
        if (tab.search === 'all') {
          return this.projects;
        }
        return this.projects.filter(x => x.tags.includes(tab.search));
      },
    },
    methods   : {},
    mounted() {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fullHeight {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 35px;
  }

  .profile-pic {
    border-radius: 5px;
  }
</style>
