<template>
  <v-container fluid>
    <v-btn to="/" flat dark fab top left>
      <v-icon>fas fa-long-arrow-alt-left</v-icon>
    </v-btn>
    <div class="display-3 text-xs-center mb-5">✨ Making a donation ✨</div>
    <v-expansion-panel>
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header">Why should I donate ?</div>
        <v-card>
          <v-card-text class="grey darken-4">
            <p>Before anything else, you <strong>DON'T HAVE TO</strong> donate to support me.</p>
            <p>Most of the money goes back to the community, mainly for the hosting of my Discord bot for the Construct Community</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header"> Can I make a 1 time donation ?</div>
        <v-card>
          <v-card-text class="grey darken-4">
            <p>Yes!</p>
            <p>You can use Paypal button to make a 1 time donation.</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header">Can I make a recurrent donation ?</div>
        <v-card>
          <v-card-text class="grey darken-4">
            <p>Also yes!</p>
            <p>I'm on Liberapay, as service that allow recurring payments as you like.</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header">Buu..but, I don't have any money ?</div>
        <v-card>
          <v-card-text class="grey darken-4">
            <p>This is not a problem, the only important thing in the end is that you enjoy the tools I create.</p>
            <p>A thing that is even more important than making a donation is sharing my work. So, feel free to do so
              everywhere you can.</p>
            <p>You can also share my Discord server about Construct to your friends, this is even more important than money. Help the community grow!
              (<a href="https://discord.me/construct">https://discord.me/construct</a>)</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <div class="text-xs-center my-5">
      <v-btn color="blue" large target="_blank" href="https://www.paypal.me/armaldio">Paypal</v-btn>
      <v-btn color="orange" large target="_blank" href="https://en.liberapay.com/armaldio/donate">Liberapay</v-btn>
    </div>

    <div class="display-3 text-xs-center mb-5">▼ You can also register an account on Vultr.com ▼</div>
    <a class="centered" href="https://www.vultr.com/?ref=7308355" target="_blank">
      <img src="https://www.vultr.com/media/banner_1.png" width="728" height="90">
    </a>
  </v-container>
</template>

<script>
  export default {
    name      : 'Donations',
    components: {},
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .centered {
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>
