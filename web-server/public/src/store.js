const Vue = require('vue')
const Vuex = require('vuex')
const moduleBook = require('./vuex/book')
const moduleA = require('./vuex/moduleA')
const moduleB = require('./vuex/moduleB')

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    books: moduleBook,
    a: moduleA,
    b: moduleB
  }
})

module.exports = store