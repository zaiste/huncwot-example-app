import { generate } from 'huncwot/store';

import customState from './state';

const { namespaced, mutations, actions, state } = generate({
  resource: 'task',
})({
  state: customState
});

export { namespaced, mutations, actions, state };
