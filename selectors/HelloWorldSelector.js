import { createSelector } from 'reselect'

const helloSelector = state => state.hello
const worldSelector = state => state.world

export const helloWorldSelector = createSelector(
    helloSelector,
    worldSelector,
    function (hello, world) {
        return {
            hello: hello,
            world: world,
            helloWorld: hello + " " + world + "!"
        }
    }
)