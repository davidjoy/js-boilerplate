import { UPDATE_HELLO, UPDATE_WORLD } from '../constants/ActionTypes'

export function updateHello(hello) {
    return {
        type: UPDATE_HELLO,
        hello: hello
    }
}

export function updateWorld(world) {
    return {
        type: UPDATE_WORLD,
        world: world
    }
}