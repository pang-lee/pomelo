const gql = require('graphql-tag')
const graphqlClient = require('../utils/graphql')

const moduleBook = {
    namespaced: true,
    state: () => ({
      books:[]
    }),
    getters: {
        getbook(state){
            return state.books
        }
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
              console.log(response)
              context.commit('setBookList', response.data.books)
            } catch (error) {
              console.log(error)
            }    
        }
    }
}

module.exports = moduleBook