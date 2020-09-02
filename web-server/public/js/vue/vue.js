const url = 'url:./js/vue/component/'

Vue.use(httpVueLoader)
Vue.use(window.VueVideoPlayer)
new Vue({
  components: {
    'navbar': url + 'navbar.vue'
  },
  router,
  store
}).$mount('#app')