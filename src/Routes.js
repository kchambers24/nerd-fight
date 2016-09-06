import React, { Component } from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Home from './Home'


class Routes extends Component {
  render() {
    return (
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="playerone" component={PlayerOne}/>
        <Route path="playertwo" component={PlayerTwo}/>
        <Route path="battle" component={Battle}/>
    </Router>
  )
 }
}
export default Routes;
