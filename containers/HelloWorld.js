import React, { Component } from 'react';
import { connect } from 'react-redux'

import { updateHello, updateWorld } from '../actions/HelloWorldActions'
import { helloWorldSelector } from '../selectors/HelloWorldSelector'

export default class HelloWorld extends Component {
    render() {
        return (
            <div>
                <div>{this.props.greeting}</div>
                <input type="text" defaultValue={this.props.hello} onChange={event =>
                    this.props.dispatch(updateHello(event.target.value))
                }/>

                <input type="text" defaultValue={this.props.world} onChange={event =>
                    this.props.dispatch(updateWorld(event.target.value))
                }/>
            </div>
        )
    }
}

export default connect(helloWorldSelector)(HelloWorld)