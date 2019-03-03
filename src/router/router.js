import Vue from 'vue';
import Router from 'vue-router';
import Tabs from '../Tabs.vue';
import Form from '../Form.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Tabs
    },
    {
      path: '/form',
      component: Form
    }
  ]
})
