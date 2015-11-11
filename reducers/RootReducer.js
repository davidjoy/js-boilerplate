import { combineReducers } from 'redux'

const defaultHelloState = "Hello"
const defaultWorldState = "World"

function hello(state = defaultHelloState, action) {
  switch(action.type) {
    default:
      return state
  }
}

function world(state = defaultWorldState, action) {
  switch(action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  hello,
  world
})

export default rootReducer