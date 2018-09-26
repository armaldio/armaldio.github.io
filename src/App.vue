<template>
  <v-app dark>
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
  .content {
    background-color: #424242;
  }
</style>
