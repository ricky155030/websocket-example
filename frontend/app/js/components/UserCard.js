'use strict';

import React from 'react';

class UserCard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log('UserCard update')
  }

  render() {
    return (
      <div>
        <h1>User</h1>
      </div>
    )
  }
}

export default UserCard
