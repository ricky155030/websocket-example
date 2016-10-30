'use strict';

import React from 'react';

class ChildrenCard extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log('ChildrenCard update')
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default ChildrenCard
