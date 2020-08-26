const url = 'url:./js/vue/component/'

document.addEventListener('DOMContentLoaded', () => {
  Vue.use(httpVueLoader)
  new Vue({
    components: {
      'navbar': url + 'navbar.vue'
    },
    router,
    store
  }).$mount('#app')
})