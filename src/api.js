import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

const socketStock = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')


function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  // socket.emit('subscribeToTimer');
  socket.emit('subscribeToTimer', 1000);
}

function getStock(go) {
  socket.on('connect', () => {

    // Subscribe to topics (i.e. appl,fb,aig+)
    socket.emit('subscribe', 'appl,snap,fb,aig+')

    // Unsubscribe from topics (i.e. aig+)
    // socket.emit('unsubscribe', 'aig+')
  })
}

export { subscribeToTimer, getStock };
