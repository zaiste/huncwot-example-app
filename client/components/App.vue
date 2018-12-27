<template>
  <div>
    <Docs :content="$options.__docs" v-if="$options.docs"/>
    <ul class="nav-tabs nav">
      <router-link tag="li" class="nav-item" active-class="is-active" to="/" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/widgets">
        <a class="nav-link">GraphQL: Widgets</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/tasks">
        <a class="nav-link">REST: Tasks</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/counter">
        <a class="nav-link">Counter</a>
      </router-link>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Docs from "./Docs.vue";

@Component({ docs: true, components: { Docs } })
export default class App extends Vue {}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

ul.nav.nav-tabs {
  a {
    color: black;
  }
}

ul.nav.nav-tabs li a:hover {
  border-color: transparent;
  background-color: transparent;
  margin-bottom: -3px;
  border-bottom: 3px solid #3498db;
}

ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover,
ul.nav-tabs li.active a:focus,
ul.nav-tabs li.active a:active {
  border-color: transparent;
  margin-bottom: -3px;
  border-bottom: 3px solid #3498db;
}
</style>

<docs markdown>
Root component with routes. It is located in <code>components/App.vue</code> on the client side,
i.e. within <code>client/</code> directory.
</docs>
