const Vue = require('vue')
const Router = require('vue-router')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'main', component: require('./components/game.vue') },
      { path: '/login', name: 'login', component: require('./components/login.vue')},
      { path: '/live', name: 'live', component: require('./components/live.vue') },
      { path: '/profile', name: 'profile', component: require('./components/profile.vue') },
      { path: '/comment/:id', name: 'disqus', component: require('./components/disqus.vue') },
      { path: '/game/:id', name: 'driving', meta: { layout: 'play' }, component: require('./components/game/driving.vue')}
    ]
})

module.exports = router