import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import '@fortawesome/fontawesome-free/css/all.css';
import 'vuetify/dist/vuetify.min.css';
import Viewer from 'v-viewer';
import './styles/viewer.css';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Viewer);
Vue.use(Vuetify, {
  theme: {
    primary: '#245784',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  iconfont: 'fa',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
