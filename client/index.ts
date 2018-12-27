import Vue from 'vue';

import router from './router';
import store from './store';
import apolloProvider from './graphql';

import App from './components/App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  store,
  render: h => h(App)
});
