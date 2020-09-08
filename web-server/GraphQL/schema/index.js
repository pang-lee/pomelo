const { gql } = require('apollo-server')
const bookSchema = require('./book')
const userSchema = require('./user')

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    test: Boolean
  }
`

const resolvers = {
  Query: {
    hello: () => 'world'
  },
  Mutation: {
    test: () => 'test'
  }
}

module.exports = {
  typeDefs: [ typeDefs, bookSchema.typeDefs, userSchema.typeDefs ],
  resolvers: [ resolvers, bookSchema.resolvers, userSchema.resolvers ]
}