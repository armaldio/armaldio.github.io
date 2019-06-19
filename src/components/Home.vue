<template>
    <div id="home">
        <v-container fluid class="fullHeight">
            <div class="entry">
                <img class="mb-5 profile-pic"
                     src="https://fr.gravatar.com/userimage/60115314/7100a2db99dac4b3ba928ce1a1ea0012.png?size=500"
                     height="150"/>
                <span>Hey, I'm Quentin "Armaldio" Goinaud</span>
            </div>
            <v-layout row wrap class="pt-5">
                <v-flex xs6>
                    <div class="text-xs-left">
                        <p class="headline">
                            <v-icon large class="mr-3">fas fa-language</v-icon>
                            French, English
                        </p>
                        <p class="headline">
                            <v-icon large class="mr-3">fas fa-graduation-cap</v-icon>
                            Epitech Lyon
                        </p>
                        <p class="headline">
                            <v-icon large class="mr-3">fas fa-door-open</v-icon>
                            Open
                            <v-btn href="mailto:armaldio@gmail.com" color="green" round>
                                Hire me
                                <v-icon small right dark>far fa-envelope</v-icon>
                            </v-btn>
                        </p>
                        <br>
                        <p class="headline">
                            <v-icon large class="mr-3">fas fa-desktop</v-icon>
                            Full Stack developer
                            <v-btn color="red"
                                   round
                                   href="https://drive.google.com/file/d/1Q0UYpDYvfpHm7XqsdgcPetq2LlJoClHW/view"
                                   target="_blank">
                                View my resume (FR)
                            </v-btn>
                        </p>
                        <p class="headline">
                            <v-icon large class="mr-3">fab fa-github</v-icon>
                            Open Source contributor
                            <v-btn to="/donations" color="blue" round>
                                Support me
                                <v-icon small right dark>fas fa-money-bill</v-icon>
                            </v-btn>
                        </p>
                        <p class="headline">
                            <v-icon large class="mr-3">fas fa-rocket</v-icon>
                            Tech enthusiast
                        </p>
                        <p class="headline">
                            <v-icon large class="mr-3">fas fa-layer-group</v-icon>
                            Stack
                            <img class="icon-text-align" src="https://onlyweb-formation.com/uploads/mod_logo/js.png" alt="" height="36">
                            <img class="icon-text-align" src="https://cdn-images-1.medium.com/max/672/1*GrnZQhGidCAjnfE7CUyzcA.png" alt="" height="36">
                            <img class="icon-text-align" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/128px-Electron_Software_Framework_Logo.svg.png" alt="" height="36">
                            <img class="icon-text-align" src="https://cdn2.iconfinder.com/data/icons/nodejs-1/128/nodejs-128.png" alt="" height="36">
                        </p>
                    </div>
                </v-flex>
                <v-flex xs6 class="text-xs-center">
                    <div class="d-inline-flex pt-5">
                        <img class="code-image" src="/static/code.svg" height="250">
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid>
            <div class="split split-1"></div>

            <div class="display-3 py-3" id="websites">
                Websites
            </div>
            <div class="right-shape"></div>
            <flickity :options="flickityOptions">
                <div class="carousel-cell" v-for="(project, i) in projects">
                    <Project :key="i" :project="project"></Project>
                </div>
            </flickity>

            <div class="split split-2"></div>

            <div class="display-3 py-3" id="apps">
                Apps
            </div>
            <flickity :options="flickityOptionsInverted">
                <div class="carousel-cell" v-for="(project, i) in projects">
                    <Project :key="i" :project="project"></Project>
                </div>
            </flickity>

            <div class="split split-3"></div>

            <div class="display-3 py-3" id="other">
                Other
            </div>
            <flickity :options="flickityOptionsCentered">
                <div class="carousel-cell" v-for="(project, i) in projects">
                    <Project :key="i" :project="project"></Project>
                </div>
            </flickity>

            <div class="split split-4"></div>

            <div class="certificates mt-5">
                <h2 id="certificates" class="text-xs-center mb-5 display-2">Certificates</h2>
                <v-container grid-list-sm fluid>
                    <v-layout row wrap justify-center>
                        <v-flex v-for="(image, index) in images" :key="image" xs12 lg6>
                            <v-img :src="image"
                                   :lazy-src="image"
                                   class="grey lighten-2"
                                   @click="selectedImageCertificate = index; certificateDialog = true">
                                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-layout>
                            </v-img>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn target="_blank" href="https://ude.my/UC-ZLMRLAWU">See</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </v-container>
    </div>
</template>

<script>
  import Flickity from 'vue-flickity';
  import Tab from './Tab';
  import projects from '../projects';
  import Project from './Project';

  export default {
    name      : 'Home',
    components: {
      Flickity,
      Tab,
      Project,
    },
    data() {
      return {
        flickityOptions        : {
          autoPlay: false,
        },
        flickityOptionsInverted: {
          autoPlay   : false,
          rightToLeft: true,
        },
        flickityOptionsCentered: {
          autoPlay   : false,
          rightToLeft: false,
        },

        arrow      : false,
        selectedTab: 0,
        projects,

        showCV: false,

        certificateDialog       : false,
        selectedImageCertificate: 0,

        images: [
          'https://udemy-certificate.s3.amazonaws.com/image/UC-ZLMRLAWU.jpg',
        ],
      };
    },
    computed  : {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .carousel-cell {
        width: 350px;
        height: 350px;
        margin-right: 50px;
        counter-increment: carousel-cell;
    }

    .carousel-cell {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    }

    .carousel-cell:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }

    .flickity-viewport {
        height: 400px !important;
    }

    .fullHeight {
        font-size: 35px;
    }

    .entry {
        padding-top: 92px;
        text-align: left;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        align-content: stretch;
    }

    @media only screen and (max-device-width: 768px) and (orientation: portrait) {
        .fullHeight {
            font-size: 20px;
        }
    }

    .profile-pic {
        border-radius: 5px;
    }

    @media only screen and (max-device-width: 768px) and (orientation: portrait) {
        .profile-pic {
            width: 100px;
            height: 100px;
        }
    }

    .cursor {
        cursor: pointer;
    }

    .padding-around {
        padding: 0 10px;
    }

    .split {
        position: absolute;
        height: 508px;
        width: 100%;
        left: 0;
        /*background-image: linear-gradient(to top, #2196f3, #1d89e1, #177cd0, #1170bf, #0964ae);*/
        background-color: #2196f3;
    }

    .split-1 {
        clip-path: polygon(0 15%, 0% 100%, 80% 100%);
    }

    .split-2 {
        clip-path: polygon(25% 0%, 100% 0, 100% 100%, 50% 100%);
    }

    .split-3 {
        clip-path: polygon(22% 0, 77% 0, 85% 100%, 0 100%);
    }
    .split-4 {
        clip-path: polygon(0 0, 85% 0, 73% 21%, 37% 35%);
    }

    .display-3 {
        mix-blend-mode: difference;
    }

    .icon-text-align {
        vertical-align: middle;
    }
</style>
