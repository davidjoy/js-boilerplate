import React from 'react'
import { render } from 'react-dom'
import App from './containers/App.js'
import './style.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/RootReducer'

let store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react')
)

//import meh from './content.js';
//document.write(meh);
