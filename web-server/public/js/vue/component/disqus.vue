<template>
  <b-card>
    <Disqus shortname='gmpl' :pageConfig="pageConfig" />
  </b-card>
</template>

<script>
module.exports = {
  data(){
    return{
      pageConfig: {
        title: this.$route.params.id,
        url: this.$route.path,
        identifier: this.$route.params.id
      }
    }
  }
}
</script>

<style></style>