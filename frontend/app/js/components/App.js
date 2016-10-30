'use strict';

import React from 'react';

const pageWrapperStyle = {
  minHeight: '966px',
}

const pageStyle = {
  width: '100%',
  position: 'absolute',
  top: '64px'
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div id="page-wrapper" className="gray-bg" style={pageWrapperStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
