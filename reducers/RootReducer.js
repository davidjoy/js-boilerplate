import { combineReducers } from 'redux'
import { UPDATE_HELLO, UPDATE_WORLD } from '../constants/ActionTypes'

const defaultHelloState = "Hello"
const defaultWorldState = "World"

function hello(state = defaultHelloState, action) {
    switch (action.type) {
        case UPDATE_HELLO:
            return action.hello
        default:
            return state
    }
}

function world(state = defaultWorldState, action) {
    switch (action.type) {
        case UPDATE_WORLD:
            return action.world
        default:
            return state
    }
}

const rootReducer = combineReducers({
    hello,
    world
})

export default rootReducer