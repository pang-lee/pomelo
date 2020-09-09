const { typeDefs, resolvers } = require('./schema/index')
const { ApolloServer, ForbiddenError } = require('apollo-server')
const jwt = require('jsonwebtoken')

const apollo = () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        tracing: true,
        context: async ({ req }) => {
          const token = req.headers['x-token']
          if (token) {
            try {
              const me = await jwt.verify(token, process.env.SECRET)
              return { me }
            } catch (e) {
              return new ForbiddenError('Your session expired. Sign in again.')
            }
          }
          return {}
        }
      })
      
    server.listen().then(({ url }) => {
      console.log(`Apollo Server ready at ${url}`)
    })
}

module.exports = apollo