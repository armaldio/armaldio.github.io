<template>
    <v-layout row wrap class="text-center">
        <v-flex class="badge" xs4 v-if="online > 0">{{ online }} online</v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DiscordLiveBadge',
  data() {
    return {
      online: 0,
    };
  },
  async mounted() {
    const json = await axios.get('https://discordapp.com/api/servers/116497549237551109/embed.json');
    this.online = json.data.members.length;
  },
};
</script>

<style scoped>
    .badge {
        background: #7289da;
        margin: 0 auto;
        height: 20px;
        padding: 0 !important;
        border-radius: 20px;
    }
</style>
