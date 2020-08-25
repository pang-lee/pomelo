const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: GameCard },
    { path: '/login', name: 'login', component: Login},
    { path: '/live', name: 'live', component: Live },
  ]
})