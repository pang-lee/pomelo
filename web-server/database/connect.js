const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})

    mongoose.connection.on('connected', function () {    
        console.log('Mongoose connection successfully')
    })

    mongoose.connection.on('error',function (err) {    
        console.log('Mongoose connection error: ' + err)
    })

    mongoose.connection.on('disconnected', function () {    
        console.log('Mongoose connection disconnected')
    })
}

module.exports = connect