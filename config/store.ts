import Vue from 'vue';
import Vuex from 'vuex';
import { install } from 'huncwot/store';

Vue.use(Vuex);

import * as counter from '../app/features/counter/store';
import * as task from '../app/features/task/store';

export default new Vuex.Store({
  plugins: [install],
  modules: {
    counter,
    task
  }
});
