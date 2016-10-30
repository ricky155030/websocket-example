'use strict';

import React from 'react';
import UserCard from './UserCard';
import ChildrenCard from './ChildrenCard';

class RerenderTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#F00'
    }
  }

  componentDidUpdate() {
    console.log('RerenderTest update')
  }

  render() {
    return (
      <div>
        <h1>Rerender Test</h1>
        <UserCard />
        <ChildrenCard>
          <h1>Children</h1>
        </ChildrenCard>
        <a href="#" onClick={() => this.setState({color: '#000'})}>
          Change
        </a>
      </div>
    )
  }
}

export default RerenderTest
