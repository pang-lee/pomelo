const UserModel = require('../database/model/user_model')

const UserController = {
    getAll: async () => await UserModel.find({}),
    addU: async (_, args) => {
        try {
            let response = await UserModel.create(args)
            return response
        } catch(e) {
            return e.message
        }
    }
}

module.exports = UserController