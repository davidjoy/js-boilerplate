import { createSelector } from 'reselect'

const helloSelector = state => state.helloWorld.hello
const worldSelector = state => state.helloWorld.world

export const helloWorldSelector = createSelector(
    helloSelector,
    worldSelector,
    function (hello, world) {
        return {
            hello: hello,
            world: world,
            greeting: hello + " " + world + "!"
        }
    }
)