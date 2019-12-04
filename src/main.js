import Vue from 'vue';
import Viewer from 'v-viewer';
import vuetify from './plugins/vuetify';
import App from './App';
import router from './router';
import store from './store';

import './styles/viewer.css';

Vue.use(Viewer);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
