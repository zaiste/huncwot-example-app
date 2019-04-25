import Vue from 'vue';
import Vuex from 'vuex';
import { install } from 'huncwot/store';

Vue.use(Vuex);

import * as counter from '~/counter/store';
import * as task from '~/task/store';

export default new Vuex.Store({
  plugins: [install],
  modules: {
    counter,
    task
  }
});
