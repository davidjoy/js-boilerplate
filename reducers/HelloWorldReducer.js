const defaultHelloState = "Hello"
const defaultWorldState = "World"

import { UPDATE_HELLO, UPDATE_WORLD } from '../constants/ActionTypes'

function helloReducer(state = defaultHelloState, action) {
    switch (action.type) {
        case UPDATE_HELLO:
            return action.hello
        default:
            return state
    }
}

function worldReducer(state = defaultWorldState, action) {
    switch (action.type) {
        case UPDATE_WORLD:
            return action.world
        default:
            return state
    }
}

const defaultState = {
}

export default function helloWorldReducer(state = defaultState, action) {
    return {
        hello: helloReducer(state.hello, action),
        world: worldReducer(state.world, action)
    }
}