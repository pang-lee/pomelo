const UserController = require('../../controller/user_controller')

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const resolvers = {
  Query: {
    books: () => books,
    getUsers: UserController.getAll
  },
  Mutation: {
    addUser: UserController.addU
  }
}

module.exports = resolvers