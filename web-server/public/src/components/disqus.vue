<template>
  <b-card>
    <vue-disqus-embed :identifier="$route.params.id" :url="$route.path" :title="$route.params.id" />
  </b-card>
</template>

<script>
module.exports = {
  name:'disqus',
}
</script>

<style></style>