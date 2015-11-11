import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './style.css'
import App from './containers/App.js'
import rootReducer from './reducers/RootReducer'

let store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react')
)
