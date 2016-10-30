'use strict';

import React from 'react';
import Websocket from './Websocket';
import RerenderTest from './RerenderTest';
import Authtest from './Authtest';
import { Router, Route, IndexRoute, withRouter, Link, browserHistory} from 'react-router'

import App from '../containers/AppContainer'

class Routing extends React.Component {
  static childContextTypes = {
    role: React.PropTypes.string,
    permission: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      role: 'user'
    }
  }

  getChildContext() {
    return {
      role: this.state.role,
      permission: {
        AdminCard: ['admin'],
        UserCard: ['admin', 'user'],
      }
    }
  }

  checkAuth(roles, nextState, replace) {
    if(roles.indexOf(this.state.role) == -1) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname  }
      })
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={withRouter(App)} onChange={() => console.log('Change /')} onEnter={() => console.log('Enter /')}>
          <Route path="/authtest" component={withRouter(Authtest)} />
          <Route path="/websocket" component={withRouter(Websocket)} />
          <Route path="/rerender" component={withRouter(RerenderTest)} />
          <Route path="/admin" component={withRouter(Authtest)} onEnter={(nextState, replace) => this.checkAuth(['admin'], nextState, replace)}/>
        </Route>
      </Router>
    )
  }
}

export default Routing;
