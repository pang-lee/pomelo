const Vue = require('vue')
const Vuex = require('vuex')
const gql = require('graphql-tag')
const graphqlClient = require('./utils/graphql')

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      books:[]
    },
    mutations: {
      setBookList(state, data) {
        state.books = data
      },
    },
    actions: {
      async fetchBookList(context) {
        try {
          const response = await graphqlClient.query({
            query: gql`
              query {
                books {
                  title
                  author
                }
              }`,
          })
          context.commit('setBookList', response.data.books)
        } catch (error) {
          console.log(error)
        }
      },
    }
  })

  module.exports = store