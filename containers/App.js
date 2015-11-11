import React, { Component } from 'react';
import { connect } from 'react-redux'

import { helloWorldSelector } from '../selectors/HelloWorldSelector'

export default class App extends Component {
    render() {
        return (
            <div>{this.props.helloWorld}</div>
        );
    }
}

export default connect(helloWorldSelector)(App)