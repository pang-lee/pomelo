const { gql } = require('apollo-server')

const typeDefs = gql`
type Book {
  title: String
  author: String
}

type user{
  email: String
  password: String
  username: String
}

type signup{
  email: String
  password: String
  username: String
}

type Query {
  books: [Book]
  getUsers: [user]
}

type Mutation {
  signup(email: String!, password: String!, username: String!): signup
  login(email: String!, password: String!): String
}
`
module.exports = typeDefs