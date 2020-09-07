const VueDisqusEmbed = require('../components/disqusEmbed.vue')

module.exports = {
  install (Vue, options) {

    if (!options || !options.shortname) {
      throw 'VueDisqusEmbed: options.shortname should be exist'
    }

    if (window.location.hash.indexOf('#/') !== -1) {
      throw 'VueDisqusEmbed: The plugin does not working with `hash` mode, Vue.router.mode should be `history`'
    }

    Vue.prototype.$disqus_embed = {
      shortname: options.shortname,
      load (config) {
        if (window.DISQUS && window.document.getElementById('dsq-embed-scr')) {
          window.DISQUS.reset({
            reload: true,
            config: config
          })
        } else {
          window.disqus_config = config
          const script = window.document.createElement('script')
          script.async = true
          script.src = `https://${this.shortname}.disqus.com/embed.js`
          script.id = 'dsq-embed-scr'
          window.document.body.appendChild(script)
        }
      }
    }

    Vue.component('vue-disqus-embed', VueDisqusEmbed)
  }
}