import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Donations from '@/components/Donations';

Vue.use(Router);

export default new Router({
  mode  : 'history',
  routes: [
    {
      path     : '/',
      name     : 'Home',
      component: Home,
    },
    {
      path     : '/donations',
      name     : 'Donations',
      component: Donations,
    },
  ],
});
