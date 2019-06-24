<template>
    <div class="card card-container">
        <div class="top">
            <div class="middle">
                <img class="centered-image" width="120" height="auto" :src="project.image" alt="">
                <div class="centered card-title">
                    <div class="headline pb-2">{{ project.title }}</div>
                </div>
                <div class="card-text text-xs-center">
                    <span v-html="toHTML(project.description)"></span>
                </div>
                <div class="py-3" v-if="stars > -1 || watchers > -1 || forks > -1">
                    <v-layout align-center justify-center>
                        <v-flex xs3>
                            <template v-if="stars > -1">
                                <v-icon small class="mr-2" right>fas fa-star</v-icon>
                                <span slot="badge">{{ stars }}</span>
                            </template>
                        </v-flex>
                        <v-flex xs3>
                            <template v-if="watchers > -1">
                                <v-icon small class="mr-2" right>fas fa-eye</v-icon>
                                <span slot="badge">{{ watchers }}</span>
                            </template>
                        </v-flex>
                        <v-flex xs3>
                            <template v-if="forks > -1">
                                <v-icon small class="mr-2" right>fas fa-code-branch</v-icon>
                                <span slot="badge">{{ forks }}</span>
                            </template>
                        </v-flex>
                    </v-layout>
                </div>
                <component class="pt-3" v-if="project.customComponent"
                           v-bind:is="project.customComponent">
                </component>
            </div>
        </div>
        <div class="card-actions">
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-center">
                    <v-btn depressed
                           class="view-button"
                           :style="{ 'background-color': project.color }"
                           :href="project.link"
                           target="_blank">
                        Open
                        <!--<v-icon small right>far fa-eye</v-icon>-->
                    </v-btn>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import snarkdown from 'snarkdown';

export default {
  name: 'Project',
  data() {
    return {
      stars: -1,
      watchers: -1,
      forks: -1,
    };
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toHTML(md) {
      return snarkdown(md);
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
    .title {
        font-size: 23px;
    }

    .card-title {
        padding: 5px 10px;
    }

    .card-text {
        width: 90%;
        margin: 0 auto;
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
        background-color: #404040;
    }

    .card-actions {
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 60px;
        /*background-color: #626262;*/
    }

    .top {
        top: 0;
        position: absolute;
        width: 100%;
        height: 290px;

        display: flex; /* contexte sur le parent */
        flex-direction: column; /* direction d'affichage verticale */
        justify-content: center;
        /*background-color: #626262;*/
    }

    .is-selected {

    }

    .view-button {
        /*margin-bottom: 25px;*/
        margin: 10px;
    }

    .breaked {
        overflow-wrap: break-word;
    }
</style>
