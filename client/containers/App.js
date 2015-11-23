import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import { rootSelector } from '../selectors/RootSelector'

export default class App extends Component {
    render() {
        return (
            <div>
                <div style={{marginBottom: 10}}>
                    <Link to={'/'}>Home</Link>&nbsp;|&nbsp;
                    <Link to={'/helloworld'}>Hello World</Link>
                </div>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(rootSelector)(App)