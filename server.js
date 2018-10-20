// const io = require('socket.io')();
//
// // Import socket.io with a connection to a channel (i.e. tops)
// const socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')
// //
// //
// //
// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });
//
//
//
//
//
// // Listen to the channel's messages
// socket.on('message', message => console.log(message))
//
// // Connect to the channel
// socket.on('connect', () => {
//
//   // Subscribe to topics (i.e. appl,fb,aig+)
//   socket.emit('subscribe', 'appl,snap,fb,aig+')
//
//   // Unsubscribe from topics (i.e. aig+)
//   // socket.emit('unsubscribe', 'aig+')
// })
//
//
//
//
// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);
var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3231
//
const SocketManager = require('./src/server/SocketManager.js')
//
io.on('connection', SocketManager)
//
app.listen(PORT, ()=>{
  console.log('Connected to port: ' + PORT)
})
