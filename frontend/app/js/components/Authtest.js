'use strict';

import React from 'react';
import UserCard from './UserCard';
import AdminCard from './AdminCard';

class Authtest extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <AdminCard />
      </div>
    )
  }
}

export default Authtest
