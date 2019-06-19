// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/dist/vuetify.min.css';
import Viewer from 'v-viewer';
import './styles/viewer.css';
import App from './App';
import router from './router';

Vue.use(Viewer);
Vue.use(Vuetify, {
  theme   : {
    primary  : '#245784',
    secondary: '#424242',
    accent   : '#82B1FF',
    error    : '#FF5252',
    info     : '#2196F3',
    success  : '#4CAF50',
    warning  : '#FFC107',
  },
  iconfont: 'fa',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el        : '#app',
  router,
  components: { App },
  template  : '<App/>',
});
