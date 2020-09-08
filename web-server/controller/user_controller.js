const UserModel = require('../database/model/user_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserController = {
    getAll: async () => await UserModel.find({}),
    signUp: async (_, { email, password, username }) => {
        try {
            let isUserEmailDuplicate = await UserModel.find({ email: email })
            if(isUserEmailDuplicate.length !== 0) return
            let encrypt = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS))
            let response = await UserModel.create({ email: email, password: encrypt, username: username })
            return response
        } catch(e) {
            console.log(e.message)
        }
    },
    logIn: async (_, { email, password }) => {
        try {
            let user = await UserModel.find({ email: email })
            if(user.length == 0) return
            let passwordCompare = await bcrypt.compare(password, user[0].password)
            if(!passwordCompare) return
            return jwt.sign({ uid: user[0] }, process.env.SECRET, { expiresIn: '1d' })
        } catch(e) {
            console.log(e.message)
        }
    }
}

module.exports = UserController