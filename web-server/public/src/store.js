const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    actions: {
      increment (context) {
        context.commit('increment')
      }
    }
  })

  module.exports = store