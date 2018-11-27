<template>
  <v-container fluid>
    <div class="fullHeight text-xs-center">
      <img class="mb-5 profile-pic"
           src="https://fr.gravatar.com/userimage/60115314/7100a2db99dac4b3ba928ce1a1ea0012.png?size=500"
           height="150"/>
      <span>Hey, I'm Armaldio</span>
      <span>I'm a french guy that loves to code and experiment new techs ⚡</span>
      <span>I'm currently studying at Epitech Lyon, a French IT school (4th year)</span>
      <br>
      <span>➡️ Open to any remote freelance mission based on my skills ⬅️</span>
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
        class="mt-3"
        @click="showCV = true"
        color="red"
        large>
        Standard CV (FR)
      </v-btn>
      <v-btn
        @click="$vuetify.goTo('#projects')"
        class="mt-3 scroller"
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
      <div class="grid">
        <div class="item" v-for="(project, i) in projects" :class="[project.tags, `size-${getSize()}`]">
          <div class="item-content">
            <Project :id="`project-${i}`" :key="i" :project="project"></Project>
          </div>
        </div>
      </div>

    </div>
    <div class="testimonials">

    </div>
    <div class="certificates mt-5">
      <h2 id="certificates" class="text-xs-center mb-5 display-2">Certificates</h2>
      <v-dialog v-model="certificateDialog" width="80%">
        <v-card>
          <v-img contain
                 height="70%"
                 :src="images[selectedImageCertificate]"
                 :lazy-src="images[selectedImageCertificate]"
                 class="grey lighten-2 cursor">
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-card>
      </v-dialog>
      <v-container grid-list-sm fluid>
        <v-layout row wrap justify-center>
          <v-flex v-for="(image, index) in images" :key="image" xs12 lg6>
            <v-card>
              <v-img :src="image"
                     :lazy-src="image"
                     class="grey lighten-2"
                     @click="selectedImageCertificate = index; certificateDialog = true">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn target="_blank" href="https://ude.my/UC-ZLMRLAWU">See</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-dialog v-model="showCV" width="80%">
      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          CV
        </v-card-title>

        <v-card-text>
          <iframe src="https://docs.google.com/viewer?url=https://armaldio.xyz/static/CV.pdf" frameborder="0" height="500px" width="100%"></iframe>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="showCV = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import Muuri from 'muuri';
  import Tab from './Tab';
  import projects from '../projects';
  import Project from './Project';

  export default {
    name      : 'Home',
    components: {
      Tab,
      Project,
    },
    data() {
      return {
        arrow      : false,
        selectedTab: 0,
        projects,

        showCV: false,

        grid: null,

        certificateDialog       : false,
        selectedImageCertificate: 0,

        images: [
          'https://udemy-certificate.s3.amazonaws.com/image/UC-ZLMRLAWU.jpg',
        ],
        tabs  : [
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
    computed  : {},
    watch     : {
      selectedTab() {
        const tab = this.tabs[ this.selectedTab ];
        if (tab.search === 'all') {
          console.log(this.grid.getItems());
          this.grid.show(this.grid.getItems());
          return;
        }
        this.grid.filter(`.${tab.search}`);
      },
    },
    methods   : {
      getSize() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return '100';
          case 'sm':
            return '100';
          case 'md':
            return '50';
          case 'lg':
            return '33';
          case 'xl':
            return '25';
          default:
            return '50';
        }
      },
    },
    mounted() {
      this.grid = new Muuri('.grid', {
        layout        : {
          fillGaps: true,
          rounding: false,
        },
        layoutOnResize: false,
      });

      window.addEventListener('resize', () => {
        this.grid.layout();
        this.grid.refreshItems();
      });
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

  .cursor {
    cursor: pointer;
  }

  /*
  Muuri
   */
  .grid {
    position: relative;
  }

  .item {
    display: block;
    position: absolute;
    z-index: 1;
    background: #000;
    color: #fff;
    margin: 0;
  }

  .size-25 {
    width: 25%;
  }

  .size-33 {
    width: 33%;
  }

  .size-50 {
    width: 50%;
  }

  .size-100 {
    width: 100%;
  }

  .item.muuri-item-dragging {
    z-index: 3;
  }

  .item.muuri-item-releasing {
    z-index: 2;
  }

  .item.muuri-item-hidden {
    z-index: 0;
  }

  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
