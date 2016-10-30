'use strict';

import React from 'react'
import auth from './auth'

class AdminCard extends React.Component {
  static isplayName = "admin"

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
      </div>
    )
  }
}

export default auth(AdminCard)
