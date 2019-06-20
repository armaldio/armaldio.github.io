<template>
    <v-app :dark="true" id="app-container">
        <div id="clip" class="hidden-sm-and-down"></div>

        <v-toolbar flat absolute :hidden="$vuetify.breakpoint.mdAndDown" class="toolbar">
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat @click="$vuetify.goTo('#websites', {offset: -200})">Websites</v-btn>
                <v-btn flat @click="$vuetify.goTo('#apps', {offset: -200})">Apps</v-btn>
                <v-btn flat @click="$vuetify.goTo('#other', {offset: -200})">Other</v-btn>
                <v-btn flat @click="$vuetify.goTo('#certificates', {offset: -200})">Certificates</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid grid-list-xl>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer height="auto">
            <v-card class="flex" flat tile>
                <v-card-title class="grey darken-4">
                    <div class="subheading"><strong>Armaldio</strong> &nbsp; &copy; &nbsp; 2018 &nbsp; - &nbsp; Get
                        connected with
                        me on social networks!
                    </div>
                    <v-spacer></v-spacer>
                    <template v-for="(icon, i) in icons">
                        <v-tooltip v-if="icon.hover" top :key="i">
                            <v-btn slot="activator" class="mx-3" dark icon>
                                <v-icon size="24px">{{ icon.icon }}</v-icon>
                            </v-btn>
                            <span>{{ icon.url }}</span>
                        </v-tooltip>
                        <v-btn v-else class="mx-3" dark icon :href="icon.url" target="_blank" :key="i">
                            <v-img v-if="icon.image" :max-height="24" :max-width="24" :src="icon.image"></v-img>
                            <v-icon v-else size="24px">{{ icon.icon }}</v-icon>
                        </v-btn>
                    </template>
                </v-card-title>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
  export default {
    data   : () => ({
      isDark: true,
      icons : [
        {
          icon : 'fab fa-twitter',
          url  : 'https://twitter.com/armaldio',
          color: '#55acee',
        },
        {
          icon : 'fab fa-youtube',
          url  : 'https://www.youtube.com/channel/UC2NMlBmS-rttQ16lb6AKFYg',
          color: '',
        },
        {
          icon : 'fab fa-github',
          url  : 'https://github.com/armaldio',
          color: '',
        },
        {
          icon : 'fab fa-linkedin',
          url  : 'https://www.linkedin.com/in/quentin-goinaud-105922111/',
          color: '',
        },
        {
          icon : 'fab fa-discord',
          url  : 'Armaldio#5087',
          color: '',
          hover: true,
        },
        {
          image : '/static/sourcerer.png',
          url  : 'https://sourcerer.io/armaldio',
          color: '',
        },
        {
          icon : 'fas fa-edit',
          url  : 'https://blog.armaldio.xyz/',
          color: '',
        },
      ],
    }),
    name   : 'App',
    methods: {
      screenTest(e) {
        this.isDark = !!e.matches;
      },
    },
    mounted() {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');

      this.screenTest(mql);
      mql.addListener(this.screenTest);
    },
  };
</script>

<style>
    html {
        overflow: auto;
        font-family: Roboto,sans-serif;
    }

    .mailtoui-modal {
        font-size: 20px;
    }

    .v-icon {
        vertical-align: middle;
    }

    #clip {
        width: 100%;
        height: 500px;
        position: absolute;
        left: 0;
        top: 0;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
        background-image: linear-gradient(to top, #2196f3, #1d89e1, #177cd0, #1170bf, #0964ae);
    }

    .toolbar {
        background-color: transparent !important;
    }
</style>
