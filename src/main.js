import Vue from 'vue';
import Viewer from 'v-viewer';
import './styles/viewer.css';
import vuetify from './plugins/vuetify';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Viewer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
