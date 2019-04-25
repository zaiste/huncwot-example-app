import Vue from 'vue'
import Router from 'vue-router'

import Home from 'app:/base/component/Home.vue';
// import Widgets from '../components/Widgets.vue'
import Counter from 'features:/counter/component/index.vue';
import Tasks from 'features:/task/component/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/widgets',
    //   name: 'Widgets',
    //   component: Widgets
    // },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
})
