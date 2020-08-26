const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: httpVueLoader('./js/vue/component/game.vue') },
    { path: '/login', name: 'login', component: httpVueLoader('./js/vue/component/login.vue')},
    { path: '/live', name: 'live', component: httpVueLoader('./js/vue/component/live.vue') },
  ]
})