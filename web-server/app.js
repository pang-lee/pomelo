require('dotenv').config()
const express = require('express')
const apollo = require('./GraphQL/apollo')
const connect = require('./database/connect')
const app = express()

app.configure(function(){
  app.use(express.methodOverride())
  app.use(express.urlencoded())
  app.use(express.json())
  app.use(app.router)
  app.set('view engine', 'jade')
  app.set('views', __dirname + '/public')
  app.set('view options', {layout: false})
  app.set('basepath',__dirname + '/public')
});

app.configure('development', function(){
  app.use(express.static(__dirname + '/public'))
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
});

app.configure('production', function(){
  const oneYear = 31557600000
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }))
  app.use(express.errorHandler())
});

console.log("Web server has started at http://127.0.0.1:3001/index.html")

connect()
apollo()

app.listen(3001)
