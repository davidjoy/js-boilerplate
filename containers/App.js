import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateHello, updateWorld } from '../actions/HelloWorldActions'
import { helloWorldSelector } from '../selectors/HelloWorldSelector'

export default class App extends Component {
    render() {
        const dispatch = this.props.dispatch
        return (
            <div>
                <div>{this.props.helloWorld}</div>
                <input type="text" defaultValue={this.props.hello}
                    onChange={event =>
                        dispatch(updateHello(event.target.value))
                    } />

                <input type="text" defaultValue={this.props.world}
                    onChange={event =>
                        dispatch(updateWorld(event.target.value))
                    } />
            </div>

        );
    }
}

export default connect(helloWorldSelector)(App)