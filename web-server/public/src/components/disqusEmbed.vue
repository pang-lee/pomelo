<template>
  <div id="disqus_thread" />
</template>

<script>
// https://github.com/disqus/disqus-react/blob/master/src/DiscussionEmbed.jsx
module.exports = {
  name: 'vue-disqus-embed',
  props: {
    identifier: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    category_id: {
      type: String,
      required: false,
      default: undefined,
    },
    remote_auth_s3: {
      type: String,
      required: false,
      default: undefined,
    },
    api_key: {
      type: String,
      required: false,
      default: undefined,
    },
    sso_config: {
      type: Object,
      required: false,
      default: undefined,
    },
    language: {
      type: String,
      required: false,
      default: undefined,
    }
  },
  created () {
    this.$watch(
      (vm) => (vm.identifier, vm.url, vm.title, vm.category_id, vm.remote_auth_s3, vm.api_key, vm.sso_config, vm.language, Date.now()),
      this.resetInstance.bind(this)
    )
  },
  mounted () {
    this.resetInstance()
  },
  methods: {
    resetInstance () {
      if (this.url && this.url.indexOf('#/') !== -1) {
        throw 'VueDisqusEmbed: `url` can not in `hash` mode, can not contain `#/`'
      }
      if (this.identifier && this.url) {
        this.$disqus_embed.load(this.getDisqusConfig())
      }
    },
    getDisqusConfig () {
      const self  = this
      return function () {
        this.page.identifier = self.identifier
        this.page.url = self.url
        this.page.title = self.title
        this.page.category_id = self.category_id
        this.page.remote_auth_s3 = self.remote_auth_s3
        this.page.api_key = self.api_key
        this.sso_config = self.sso_config
        this.language = self.language
        this.callbacks.onReady = [() => self.$emit('ready')]
        this.callbacks.onNewComment = [(comment) => self.$emit('new-comment', comment)]
      }
    },
  }
}
</script>