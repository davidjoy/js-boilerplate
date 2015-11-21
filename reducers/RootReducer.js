import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

import helloWorldReducer from './HelloWorldReducer'

const rootReducer = combineReducers({
    helloWorld: helloWorldReducer,
    router: routerStateReducer
})

export default rootReducer