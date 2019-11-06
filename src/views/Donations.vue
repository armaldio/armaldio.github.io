<template>
  <v-container fluid>
    <v-btn to="/" text dark fab top left>
      <v-icon>fas fa-long-arrow-alt-left</v-icon>
    </v-btn>
    <div class="text-center">
      <div class="display-2 text-xs-center mb-5">✨ Making a donation ✨</div>
      <v-expansion-panels>
        <v-expansion-panel expand-icon="mdi-menu-down">
          <v-expansion-panel-header>Why should I donate ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              Before anything else, you <strong>DON'T HAVE TO</strong>
              donate to support me.
            </p>
            <p>
              Most of the money goes back to the community,
              mainly for the hosting of my Discord bot for
              the Construct Community
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand-icon="mdi-menu-down">
          <v-expansion-panel-header> Can I make a 1 time donation ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Yes!</p>
            <p>You can use Paypal button to make a 1 time donation.</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand-icon="mdi-menu-down">
          <v-expansion-panel-header>Can I make a recurrent donation ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>Also yes!</p>
            <p>
              You can sponsor me on my Github profile!
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel expand-icon="mdi-menu-down">
          <v-expansion-panel-header>Buu..but, I don't have any money ?</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              This is not a problem, the only important t
              hing in the end is that you enjoy the tools I
              create.
            </p>
            <p>
              A thing that is even more important than
              making a donation is sharing my work. So, feel free
              to do so
              everywhere you can.
            </p>
            <p>
              You can also share my Discord server about
              Construct to your friends, this is even more
              important than money. Help the community grow!
              (<a href="https://discord.gg/dZDU7Re">https://discord.gg/dZDU7Re</a>)
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="text-center my-5">
        <v-btn class="mx-2" color="blue" large target="_blank" href="https://www.paypal.me/armaldio">Paypal
        </v-btn>
        <v-btn class="mx-2" color="green" large target="_blank" href="https://github.com/sponsors/Armaldio">
         Github
        </v-btn>
      </div>

      <div class="display-2 text-center mb-5">
        ▼ You can also register an account on Vultr.com ▼
      </div>
      <a class="centered" href="https://www.vultr.com/?ref=7308355" target="_blank">
        <img src="https://www.vultr.com/media/banner_1.png" width="728" height="90">
      </a>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Donations',
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
