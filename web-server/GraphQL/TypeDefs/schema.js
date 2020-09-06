const { gql } = require('apollo-server')

const typeDefs = gql`
type Book {
  title: String
  author: String
}

type user{
  name: String,
  age: Int
}

type Query {
  books: [Book]
  getUsers: [user]
}

type Mutation {
  addUser(name: String!, age: Int!): user
}
`
module.exports = typeDefs