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
            <p>Before anything else, you <strong>DON'T HAVE TO</strong> donate to support us.</p>
            <p>Sharing this server to your friends is even more important than money. Help the community grow!
              (<a href="https://discord.me/construct">https://discord.me/construct</a>)</p>
            <p>We have a Discord bot running on this server, and hosting it is made by ourself. But it costs money.
              You can help us keep this bot alive with a small donation.
              We plan to integrate even more features and integrations in relation to Construct in the next months</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header"> Can I make a 1 time donation ?</div>
        <v-card>
          <v-card-text class="grey darken-4">
            <p>Yes!</p>
            <p>You can use the Paypal or Crypto button to make a 1 time donation in the currency you like.</p>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content expand-icon="mdi-menu-down">
        <div slot="header">Can I make a recurrent donation ?</div>
        <v-card>
          <v-card-text class="grey darken-4">
            <p>Also yes!</p>
            <p>I'm on Liberapay, as service that allow recurring payments as you like.</p>
            <p>This page is not only for this Discord server but is also used for all my work on the web (Github, NPM,
              etc...)</p>
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
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <div class="text-xs-center my-5">
      <v-btn color="blue" large href="https://www.paypal.me/armaldio">Paypal</v-btn>
      <v-btn color="green" large href="https://coingate.com/pay/armaldio">Crypto</v-btn>
      <v-btn color="orange" large href="https://en.liberapay.com/armaldio/donate">Liberapay</v-btn>
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
