<template>
  <v-container fluid>
    <div class="fullHeight text-xs-center">
      <span>Hey, I'm Armaldio</span>
      <span>I'm a french guy that loves to code and experiment new techs ⚡</span>
      <v-btn
        class="mt-5"
        large
        @mouseenter="arrow = true"
        @mouseleave="arrow = false">
        View my projects
        <v-icon v-show="arrow" right dark>fas fa-arrow-down</v-icon>
        <v-icon v-show="!arrow" right dark>fas fa-arrow-right</v-icon>
      </v-btn>
    </div>
    <div class="projects mt-5">
      <h2 class="text-xs-center mb-5 display-2">Projects</h2>
      <v-tabs fixed-tabs v-model="tabs" slot="extension">
        <v-tab>All</v-tab>
        <v-tab>Node.js</v-tab>
        <v-tab>Electron</v-tab>
        <v-tab>Web</v-tab>
        <v-tab>Construct 2 / 3</v-tab>
        <v-tab>Other</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tabs">
        <!-- All -->
        <v-tab-item>
          <v-container fluid grid-list-lg>
            <v-layout row wrap>
              <v-flex xs6 md4 lg3
                      v-for="(project, i) in filteredProjects"
                      :id="`project-${i}`"
                      :key="i">
                <v-card color="grey darken-4"
                        class="white--text card-container">

                  <div v-if="project.pro" class="ribbon ribbon-top-right"><span>pro</span></div>
                  <div v-if="project.wip" class="ribbon ribbon-top-right"><span>wip</span></div>

                  <img class="centered-image" width="120" height="auto" :src="project.image" alt="">
                  <v-card-title class="fluid centered project-title">
                    <div class="headline">{{ project.title }}</div>
                    <br>
                    <vue-markdown>{{ project.description }}</vue-markdown>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn depressed class="view-button" :style="{ 'background-color': project.color }"
                           :href="project.link"
                           target="_blank">
                      View
                      <v-icon small right>far fa-eye</v-icon>
                    </v-btn>
                    <v-btn depressed outline color="grey" class="more-button">
                      More
                      <v-icon small right>fas fa-external-link-alt</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>

        <!-- Nodejs -->

      </v-tabs-items>
    </div>
    <div class="blog-posts mt-5">
      <h2 class="text-xs-center mb-5 display-2">Blog</h2>
    </div>
  </v-container>
</template>

<script>
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'Home',
    components: {
      VueMarkdown,
    },
    data() {
      return {
        arrow: false,
        tabs: 'tabs',
        projects: [
          {
            title: 'Les ateliers du bien être',
            description: 'Simple website for an association',
            color: '#E44A2B',
            link: 'http://www.ateliersdubienetre.org/',
            image: 'https://armaldio.xyz/img/ateliers.png',
            pro: true,
          },
          {
            title: 'Legion Handball',
            description: 'Website about Handball team manager tool',
            color: '#2C2B2C',
            link: 'http://legion-handball.com/',
            image: 'https://armaldio.xyz/img/legion.png',
            pro: true,
          },
          {
            title: 'Georges.tech',
            description: 'The accountant bot for liberal workers',
            color: '#38B39F',
            link: 'https://georges.tech',
            image: 'https://www.appvizer.fr/media/application/1868/logo/logo-georges-le-robot-comptable.png',
            pro: true,
          },
          {
            title: 'Direct Nature',
            description: 'Your specialist in organic and natural products, creates, manufactures and distributes natural products of aromatherapy and diffusers of oils',
            color: '#389824',
            link: 'https://directnature.fr',
            image: 'https://annuaire.laposte.fr/uploads/495/049/49504971000033/logo.jpg',
            pro: true,
          },
          {
            title: 'Node.js modules',
            description: 'Node.js packages, mostly about Construct and Electron',
            color: '#d01919',
            link: 'https://www.npmjs.com/~armaldio',
            image: 'https://armaldio.xyz/img/npm.png',
          },
          {
            title: 'Electron for Construct 2',
            description: 'Complete set of tools to allow your Construct 2 games to run with Electron',
            color: '#16ab39',
            link: 'https://github.com/C2Electron/template',
            image: 'https://armaldio.xyz/img/electron-logo.png',
          },
          {
            title: 'Discord',
            description: 'Administrator of the biggest Discord community about Construct 2',
            color: '#1678c2',
            link: 'https://discord.gg/0eLPLj96B4tUr1D3',
            image: 'https://armaldio.xyz/img/discordandc2.png',
          },
          {
            title: 'Github',
            description: 'Find all of my open sources projects and contributions that are not featured here!',
            color: '#838383',
            link: 'https://github.com/armaldio',
            image: 'https://armaldio.xyz/img/github.png',
          },
          {
            title: 'Construct plugins',
            description: 'A collection of my Construct plugins',
            color: '#d01919',
            link: 'https://armaldio.itch.io/',
            image: 'https://armaldio.xyz/img/itch.jpg',
          },
          {
            title: 'TIGER Editor',
            description: 'The ultimate game editor',
            color: '#F6D76F',
            link: 'https://github.com/TIGER-PROJECT/tiger-editor',
            image: 'https://github.com/TIGER-PROJECT/tiger-editor/raw/master/assets/icons/github/icon.png',
            wip: true,
          },
          {
            title: 'LiveSMS',
            description: 'Open-source, self-hostable Pushbullet clone',
            color: '#16ab39',
            link: 'https://github.com/livesms',
            image: 'https://armaldio.xyz/img/livesms.png',
          },
          {
            title: 'Android Messages for desktop',
            description: 'A cross-platform Android Messages desktop app',
            color: '#2C54B8',
            link: 'https://github.com/Android-Messages-For-Desktop/android-messages-for-desktop',
            image: 'https://avatars2.githubusercontent.com/u/40691851?s=200&v=4',
          },
          {
            title: 'Addon Installer',
            description: 'Never worry about installing an addon by hand again 💪',
            color: '#272727',
            link: 'https://github.com/WebCreationClub/AddonInstaller',
            image: 'https://github.com/armaldio/AddonInstaller/raw/develop/store/Addoninstaller%20Icon%20(96).png',
          },
          {
            title: 'Awesome Construct',
            description: 'An [Awesome](https://github.com/sindresorhus/awesome) list about Construct',
            color: '#FC60A8',
            link: 'https://github.com/WebCreationClub/awesome-construct',
            image: 'https://raw.githubusercontent.com/github/explore/c304601f028774885ef27f72e6fe2d331729d8bc/topics/awesome/awesome.png',
          },
          {
            title: 'BulbHub',
            description: 'An open source idea voting system for your github repository 💡',
            color: '#2348CF',
            link: 'https://github.com/Armaldio/BulbHub',
            image: 'https://raw.githubusercontent.com/Armaldio/BulbHub/master/logo/BH.png',
          },
          {
            title: 'TTV Desktop Light',
            description: 'A cross-platform desktop Twitch.tv wrapper with more control and no ads',
            color: '#514091',
            link: 'https://github.com/Armaldio/ttv-desktop-lite',
            image: 'https://raw.githubusercontent.com/Armaldio/ttv-desktop-lite/develop/images/twitchy_icon.png',
          },
          {
            title: 'Content Loader Designer',
            description: 'A visual app to generate Vue and React content loaders',
            color: '#272727',
            link: 'https://github.com/Armaldio/content-loader-designer',
            image: 'https://fakeimg.pl/80x80/424242/fff/?text=?',
          },
          {
            title: 'DonateHub',
            description: 'A personal page to share all your donation links',
            color: '#272727',
            link: 'https://github.com/Armaldio/DonateLinks',
            image: 'https://fakeimg.pl/80x80/424242/fff/?text=?',
          },
          {
            title: 'DeskGet',
            description: 'Create your very own desktop widget with html, css and javascript with node.js access',
            color: '#272727',
            link: 'https://github.com/Armaldio/deskget',
            image: 'https://fakeimg.pl/80x80/424242/fff/?text=?',
          },
        ],
      };
    },
    computed: {
      filteredProjects() {
        return this.projects;
      },
    },
    methods: {},
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

  .container {
    padding: 0;
  }

  .title {
    font-size: 23px;
  }

  .fluid {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
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

  .container {
    margin: 8px;
  }

  .card-container {
    height: 275px;
  }

  .view-button {
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .more-button {
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
