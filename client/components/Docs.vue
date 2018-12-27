<template>
  <article class="callout callout-info">
    <p v-html="content"></p>
  </article>
</template>

<script>
export default {
  props: ["content"]
};
</script>

