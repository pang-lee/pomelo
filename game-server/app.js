const pomelo = require('pomelo')
const routeUtil = require('./app/utils/routeUtil.js')

/**
 * Init app for client.
 */
const app = pomelo.createApp()
app.set('name', 'hello')

// app configuration
app.configure('production|development', function(){
  app.route('chat', routeUtil.chat)
  app.set('connectorConfig',{
    connector : pomelo.connectors.sioconnector,
    // 'websocket', 'polling-xhr', 'polling-jsonp', 'polling'
    transports : ['websocket', 'polling'],
    heartbeats : true,
    closeTimeout : 60 * 1000,
    heartbeatTimeout : 60 * 1000,
    heartbeatInterval : 25 * 1000
  })
  app.filter(pomelo.timeout())
})

// app.configure('production|development', 'connector', function(){
//   app.set('connectorConfig',{
//     connector : pomelo.connectors.sioconnector,
//     // 'websocket', 'polling-xhr', 'polling-jsonp', 'polling'
//     transports : ['websocket', 'polling'],
//     heartbeats : true,
//     closeTimeout : 60 * 1000,
//     heartbeatTimeout : 60 * 1000,
//     heartbeatInterval : 25 * 1000
//   })
// })

// start app
app.start()

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack)
})
