import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { helloWorldSelector } from '../selectors/HelloWorldSelector'

export default class App extends Component {
  render() {
    return (
        <div>{this.props.helloWorld}</div>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(helloWorldSelector)(App)