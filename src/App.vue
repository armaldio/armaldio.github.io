<template>
  <v-app dark>
    <v-content class="content">
      <router-view/>
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="grey darken-4">
          <strong class="subheading">Get connected with me on social networks!</strong>
          <v-spacer></v-spacer>
          <v-btn
            v-for="(icon, i) in icons"
            :key="i"
            class="mx-3"
            dark
            icon
            :href="icon.url"
            target="_blank">
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          <strong>Armaldio</strong> &nbsp; &copy; &nbsp; 2018
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/armaldio',
          color: '#55acee',
        },
        {
          icon: 'fab fa-youtube',
          url: '',
          color: '',
        },
        {
          icon: 'fab fa-github',
          url: '',
          color: '',
        },
        {
          icon: 'fab fa-linkedin',
          url: '',
          color: '',
        },
        {
          icon: 'fab fa-discord',
          url: '',
          color: '',
        },
      ],
    }),
    name: 'App',
  };
</script>

<style>
  .content {
    background-color: #424242;
  }
</style>
