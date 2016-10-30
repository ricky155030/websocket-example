'use strict';

import React from 'react';

const socket = io.connect('http://localhost:4000/')

class Websocket extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: [],
      online: -1
    }
  }

  componentDidMount() {
    socket.on('poke', (message) => {
      toastr.info(message)
      const tmp = [
        ...this.state.message,
        message
      ]
      this.setState({message: tmp})
    })

    socket.on('online', (online) => {
      this.setState({online})
    })

    socket.on('message', (message) => {
      toastr.success(message)
    })

    socket.on('error', (err) => {
      toastr.error(err)
    })

    socket.on('error', () => {
      console.log('error')
    })
  }

  poke() {
    socket.emit('create poke', '')
  }
        
  generateNotification(datas) {
    return datas.map((data) => {
      return (
        <p>{data}</p>
      )
    })
  }

  joinChannel(channel) {
    socket.emit('join', channel)
  }

  leaveChannel(channel) {
    socket.emit('leave', channel)
  }

  render() {
    return (
      <div>
        <h1>Online: {this.state.online}</h1>
        <a className="btn btn-default" onClick={() => this.poke()}>Poke</a>
        <br />
        <p>ChannelA</p>
        <a className="btn btn-default" onClick={() => this.joinChannel('ChannelA')}>Join</a>
        <a className="btn btn-default" onClick={() => this.leaveChannel('ChannelA')}>Leave</a>
        <br />
        <p onClick={() => this.joinChannel('ChannelB')}>ChannelB</p>
        <a className="btn btn-default" onClick={() => this.joinChannel('ChannelB')}>Join</a>
        <a className="btn btn-default" onClick={() => this.leaveChannel('ChannelB')}>Leave</a>
        <br />
        {this.generateNotification(this.state.message)}
      </div>
    )
  }
}

export default Websocket
