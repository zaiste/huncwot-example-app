<docs>
  <code>Counter</code> component shows how to centralize state management using a store.
  It is located in <code>components/Counter.vue</code> on the client side, i.e. within
  <code>client/</code> directory. It uses Vuex library to manage the application state.
  Its configuration is in <code>store/index.js</code>.
</docs>

<template>
  <div class="content">
    <Docs :content="$options.__docs" v-if="$options.docs"/>
    <h2>Counter</h2>
    <div>
      <span class="counter">{{ count }}</span>
      <span class="notice">(count is: {{ evenOrOdd }})</span>
    </div>
    <div class="btn-group">
      <button class="btn btn-success" @click="increment">Increment</button>
      <button class="btn btn-danger" @click="decrement">Decrement</button>
      <button class="btn btn-info" @click="incrementIfOdd">Increment if odd</button>
      <button type="button" class="btn btn-dark" @click="incrementAsync">Increment async</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sync, get, action, getter, field, namespace } from "huncwot/store";

const counter = namespace("counter");

import Docs from "./Docs.vue";

@Component({ docs: true, components: { Docs } })
export default class extends Vue {
  msg = "Hello, Huncwot!";

  @counter.field
  count: any;

  @counter.getter
  evenOrOdd: any;

  @counter.action
  incrementAsync: any;

  @counter.action
  incrementIfOdd: any;

  @counter.action
  increment: any;

  @counter.action
  decrement: any;
}
</script>

<style lang="css" scoped>
.counter {
  font-size: 5rem;
}

.notice {
  color: #666;
  font-weight: 500;
}
</style>
