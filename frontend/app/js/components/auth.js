'use strict';

import React from 'react'

const auth = (Component) => {
  return class Auth extends React.Component {
    static contextTypes = {
      role: React.PropTypes.string,
      permission: React.PropTypes.object
    }

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log(this.context.role)
      console.log(this.context.permission)
      console.log(Component.name)
      console.log(Component.isplayName)
    }

    render() {
      const { role, permission } = this.context
      const componentPermission = permission[Component.name] || []
      console.log(componentPermission)
 
      if(componentPermission.indexOf(role) != -1) {
        return (
          <Component />
        )
      } else {
        return (
          <span style={{ color: 'red' }}>No permission.</span>
        )
      }
    }
  }
}

export default auth
