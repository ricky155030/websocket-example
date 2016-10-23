'use strict';

var counter = 0
var io = require('socket.io')(4000)

const emitOnline = socket => {
  const clientCount = Object.keys(io.sockets.sockets).length

  io.emit('online', clientCount)
}

io.on('connection', (socket) => {
  let clientName = 'Client' + counter++

  socket.name = clientName
  emitOnline(socket)

  socket.on('create poke', () => socket.broadcast.emit('poke', socket.name + ' broadcast'))
  socket.on('disconnect', () => emitOnline(socket))
  socket.on('join', (channel) => {
    socket.join(channel)
  })
  socket.on('leave', (channel) => {
    socket.leave(channel)
  })

  // socket.broadcast.emit('new client', {name: 'hwkao'})
  // setInterval(() => socket.emit('message', new Date().toLocaleTimeString()), 1000)
})

setInterval(() => {
  console.log('channelA')
  io.to('ChannelA').emit('message', 'Channel A message (5 sec)' + new Date().toISOString())
}, 5000)

setInterval(() => {
  console.log('channelB')
  io.to('ChannelB').emit('message', 'Channel B message (3 sec)')
}, 3000)
