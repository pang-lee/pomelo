const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{ type: String },
    age:{ type: Number },
}, { collection:'User' })

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel