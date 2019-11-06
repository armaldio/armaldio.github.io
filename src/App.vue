<template>
  <v-app id="app-container">
    <v-toolbar flat
               absolute
               :hidden="$vuetify.breakpoint.mdAndDown || $route.name !== 'home'"
               class="toolbar">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text rounded large @click="$vuetify.goTo('#websites')">Websites</v-btn>
        <v-btn text rounded large @click="$vuetify.goTo('#apps')">Apps</v-btn>
        <v-btn text rounded large @click="$vuetify.goTo('#other')">Other</v-btn>
        <v-btn text rounded large @click="$vuetify.goTo('#certificates')">
          Certificates
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-scale-transition>
      <v-btn dark
             fab
             fixed
             bottom
             right
             @click="$vuetify.goTo(0)"
             v-show="offsetTop > 500"
      >
        <v-icon>fas fa-chevron-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <v-content>
      <v-container fluid grid-list-xl>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer height="auto">
      <v-card class="flex" text tile>
        <v-card-text class="grey darken-4">
          <v-layout align-center
                    justify-space-between
                    :class="{'text-xs-center': $vuetify.breakpoint.smAndDown}"
                    :column="$vuetify.breakpoint.smAndDown">
            <v-flex xs3 class="text-xs-left">
              <div class="subheading"><strong>Armaldio</strong>
                &nbsp; &copy; &nbsp; 2018 &nbsp;
              </div>
            </v-flex>
            <v-flex xs9
                    class="text-xs-right"
                    :class="{'pt-3': $vuetify.breakpoint.smAndDown}">
              <template v-for="(icon, i) in icons">
                <v-tooltip v-if="icon.hover" top :key="i">
                  <template v-slot:activator="{ on }">
                    <v-btn class="mx-3" dark icon>
                      <v-icon size="24px">{{ icon.icon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ icon.url }}</span>
                </v-tooltip>
                <v-btn v-else
                       class="mx-3"
                       dark
                       icon
                       :href="icon.url"
                       target="_blank"
                       :key="i">
                  <v-img v-if="icon.image"
                         :max-height="24"
                         :max-width="24"
                         :src="icon.image"></v-img>
                  <v-icon v-else size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
              </template>
            </v-flex>
            <div class="space"></div>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import sourcerer from './assets/sourcerer.png';

export default {
  data: () => ({
    offsetTop: 0,
    isDark: true,
    icons: [
      {
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/armaldio',
        color: '#55acee',
      },
      {
        icon: 'fab fa-youtube',
        url: 'https://www.youtube.com/channel/UC2NMlBmS-rttQ16lb6AKFYg',
        color: '',
      },
      {
        icon: 'fab fa-github',
        url: 'https://github.com/armaldio',
        color: '',
      },
      {
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/quentin-goinaud-105922111/',
        color: '',
      },
      {
        icon: 'fab fa-discord',
        url: 'Armaldio#5087',
        color: '',
        hover: true,
      },
      {
        image: sourcerer,
        url: 'https://sourcerer.io/armaldio',
        color: '',
      },
      {
        icon: 'fas fa-edit',
        url: 'https://blog.armaldio.xyz/',
        color: '',
      },
    ],
  }),
  name: 'App',
  methods: {
    screenTest(e) {
      this.isDark = !!e.matches;
    },
  },
  mounted() {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    this.screenTest(mql);
    mql.addListener(this.screenTest);

    window.addEventListener('scroll', () => {
      this.offsetTop = window.scrollY;
    });
  },
};
</script>

<style>
  html {
    overflow: auto;
    font-family: Roboto, sans-serif;
  }

  .mailtoui-modal {
    font-size: 20px;
  }

  /*.v-icon {
      vertical-align: middle;
  }*/

  .toolbar {
    background-color: transparent !important;
    padding-top: 25px;
    width: 100%;
  }

  .space {
    width: 60px;
  }
</style>
