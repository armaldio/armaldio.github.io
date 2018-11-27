<template>
  <v-app dark id="app-container">
    <v-content>
      <v-container fluid grid-list-xl>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="grey darken-4">
          <div class="subheading"><strong>Armaldio</strong> &nbsp; &copy; &nbsp; 2018 &nbsp; - &nbsp; Get connected with
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
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </template>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
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
          icon : 'fas fa-edit',
          url  : 'https://blog.armaldio.xyz/',
          color: '',
        },
      ],
    }),
    name: 'App',
  };
</script>

<style>
  html {
    overflow: auto;
  }

  #app-container {

    /*background: #0f0c29; !* fallback for old browsers *!
    background: -webkit-linear-gradient(to left bottom, hsl(240.85, 100%, 13.92%) 0%,
    hsl(236.76, 91.4%, 14.62%) 9.5%,
    hsl(233.29, 84.61%, 15.37%) 17.9%,
    hsl(229.94, 78.8%, 16.2%) 25.2%,
    hsl(226.77, 73.95%, 17.08%) 31.7%,
    hsl(223.84, 69.96%, 17.98%) 37.5%,
    hsl(221.18, 66.69%, 18.88%) 42.8%,
    hsl(218.81, 64.03%, 19.76%) 47.9%,
    hsl(216.74, 61.87%, 20.6%) 52.9%,
    hsl(214.96, 60.12%, 21.38%) 57.9%,
    hsl(213.47, 58.73%, 22.09%) 63.2%,
    hsl(212.24, 57.64%, 22.7%) 68.9%,
    hsl(211.28, 56.81%, 23.21%) 75.3%,
    hsl(210.58, 56.22%, 23.59%) 82.5%,
    hsl(210.15, 55.86%, 23.84%) 90.6%,
    hsl(210, 55.74%, 23.92%) 100%
    ); !* Chrome 10-25, Safari 5.1-6 *!*/

    /*background: linear-gradient(to left bottom, hsl(240.85, 100%, 13.92%) 0%,
    hsl(236.76, 91.4%, 14.62%) 9.5%,
    hsl(233.29, 84.61%, 15.37%) 17.9%,
    hsl(229.94, 78.8%, 16.2%) 25.2%,
    hsl(226.77, 73.95%, 17.08%) 31.7%,
    hsl(223.84, 69.96%, 17.98%) 37.5%,
    hsl(221.18, 66.69%, 18.88%) 42.8%,
    hsl(218.81, 64.03%, 19.76%) 47.9%,
    hsl(216.74, 61.87%, 20.6%) 52.9%,
    hsl(214.96, 60.12%, 21.38%) 57.9%,
    hsl(213.47, 58.73%, 22.09%) 63.2%,
    hsl(212.24, 57.64%, 22.7%) 68.9%,
    hsl(211.28, 56.81%, 23.21%) 75.3%,
    hsl(210.58, 56.22%, 23.59%) 82.5%,
    hsl(210.15, 55.86%, 23.84%) 90.6%,
    hsl(210, 55.74%, 23.92%) 100%
    ); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/

  }
</style>
