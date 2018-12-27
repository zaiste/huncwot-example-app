<docs>
  <code>Home</code> is the simplest possible component. It just displays a
  message. It is located in <code>components/Home.vue</code> on the client
  side, i.e. within <code>client/</code> directory.
</docs>

<template>
  <div class="content">
    <h2>Home</h2>
    <Docs :content="$options.__docs" v-if="$options.docs"/>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Docs from "./Docs.vue";

@Component({ docs: true, components: { Docs } })
export default class Home extends Vue {
  message: string = "This is the most basic component.";
}
</script>

<style scoped>
</style>
