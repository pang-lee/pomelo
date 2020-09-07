const Vue = require('vue')
const router = require('./router')
const store = require('./store')
const App = require('./app.vue')
require('./plugin/bootstrap-vue')
require('./plugin/disqus')

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')