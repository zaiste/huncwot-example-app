<docs>
  <code>Widgets</code> component shows how to integrate with a GraphQL endpoint. It is
  located in <code>components/Widgets.vue</code> on the client side, i.e. within
  <code>client/</code> directory. It connects to Huncwot's GraphQL endpoint defined
  in the backend at <code>/graphql</code> using Apollo library.
</docs>

<template>
  <div class="content">
    <h2>Widgets</h2>
    <Docs :content="$options.__docs" v-if="$options.docs"/>
    <ul>
      <li v-for="widget in widgets" :key="widget.id">{{ widget.name }}</li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  {
    widgets {
      name
    }
  }
`;

import { Component, Vue } from "vue-property-decorator";
import Docs from "./Docs.vue";

@Component({
  docs: true,
  components: { Docs },
  apollo: {
    widgets: {
      query
    }
  }
})
export default class Widgets extends Vue {
  widgets = [];
}
</script>
