<template>
  <v-flex sm12 md6 lg4 xl3>
    <v-card color="grey darken-4" class="white--text card-container">
      <div v-if="project.pro" class="ribbon ribbon-top-right"><span>pro</span></div>
      <div v-if="project.wip" class="ribbon ribbon-top-right"><span>wip</span></div>

      <img class="centered-image" width="120" height="auto" :src="project.image" alt="">
      <v-card-title class="centered project-title">
        <div class="headline pb-2">{{ project.title }}</div>
      </v-card-title>
      <v-card-text>
        <vue-markdown class="text-xs-center" :watches="['source']" :source="project.description"></vue-markdown>
        <div class="icons py-3">
          <v-layout>
            <v-flex xs2 offset-xs3>
              <v-badge color="grey darken-2" v-if="stars > -1">
                <span slot="badge">{{ stars }}</span>
                <v-icon small>fas fa-star</v-icon>
              </v-badge>
            </v-flex>
            <v-flex xs2>
              <v-badge color="grey darken-2" v-if="watchers > -1">
                <span slot="badge">{{ watchers }}</span>
                <v-icon small right>fas fa-eye</v-icon>
              </v-badge>
            </v-flex>
            <v-flex xs2>
              <v-badge color="grey darken-2" v-if="forks > -1">
                <span slot="badge">{{ forks }}</span>
                <v-icon small right>fas fa-code-branch</v-icon>
              </v-badge>
            </v-flex>
          </v-layout>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="project.deprecated" depressed class="view-button" :style="{ 'background-color': project.color }"
               :href="project.link"
               target="_blank">
          Deprecated
          <v-icon small right>far fa-eye</v-icon>
        </v-btn>
        <v-btn v-else depressed class="view-button" :style="{ 'background-color': project.color }"
               :href="project.link"
               target="_blank">
          View
          <v-icon small right>far fa-eye</v-icon>
        </v-btn>
        <v-btn depressed color="grey" class="more-button">
          More
          <v-icon small right>fas fa-external-link-alt</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  import axios from 'axios';
  import VueMarkdown from 'vue-markdown';

  export default {
    name      : 'Project',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        stars   : -1,
        watchers: -1,
        forks   : -1,
      };
    },
    props     : {
      project: {
        type    : Object,
        required: true,
      },
    },
    async mounted() {
      if (this.project.link.startsWith('https://github.com/')) {
        const regex = /https:\/\/github.com\/(.*?)\/(.*?)$/gm;
        const match = regex.exec(this.project.link);

        if (match && match.length === 3) {
          const githubInfos = await axios.get(`https://api.github.com/repos/${match[1]}/${match[2]}`);
          this.stars = githubInfos.data.stargazers_count;
          this.watchers = githubInfos.data.watchers_count;
          this.forks = githubInfos.data.forks;
        }
      }
    },
  };
</script>

<style scoped>

  .container {
    padding: 0;
  }

  .title {
    font-size: 23px;
  }

  .v-card__actions {
    padding: 0;
  }

  .v-card__actions > a, .v-card__actions > button, .v-card__actions .v-btn + .v-btn {
    width: 50%;
    padding: 0;
    margin-left: 0;

    position: absolute;
    bottom: 0;
  }

  .more-button {
    transform: translate(100%);
  }

  .centered-image {
    display: block;
    margin: 0 auto;
    padding: 15px;
  }

  .centered div {
    text-align: center;
    width: 100%;
  }

  .card-container {
    height: 350px;
  }

  .view-button {
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .more-button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* Ribbon */
  .ribbon {
    width: 150px;
    height: 100px;
    overflow: hidden;
    position: absolute;
  }

  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: '';
    display: block;
    border: 5px solid #2980b9;
  }

  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 10px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    color: #fff;
    font: 700 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    text-transform: uppercase;
    text-align: center;
  }

  .ribbon-top-right {
    top: 0;
    right: 0;
  }

  .ribbon-top-right::before,
  .ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }

  .ribbon-top-right::before {
    top: 0;
    left: 0;
  }

  .ribbon-top-right::after {
    bottom: 0;
    right: 0;
  }

  .ribbon-top-right span {
    left: 15px;
    top: 5px;
    transform: rotate(45deg);
  }
</style>
