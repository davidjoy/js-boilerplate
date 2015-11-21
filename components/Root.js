import React, { Component } from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import { Route } from 'react-router';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createHistory } from 'history';

import App from '../containers/App'
import HelloWorld from '../containers/HelloWorld'
import rootReducer from '../reducers/RootReducer'

const store = compose(
    reduxReactRouter({createHistory}),
    devTools()
)(createStore)(rootReducer);

export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <ReduxRouter>
                        <Route path="/" component={App}>
                            <Route path="helloworld" component={HelloWorld}/>
                        </Route>
                    </ReduxRouter>
                </Provider>
                <DebugPanel top right bottom>
                    <DevTools store={store} monitor={LogMonitor}/>
                </DebugPanel>
            </div>
        )
    }
}