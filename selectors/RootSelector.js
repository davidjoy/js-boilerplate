import { createSelector } from 'reselect'

import { helloWorldSelector } from './HelloWorldSelector'

export const rootSelector = createSelector(
    helloWorldSelector,

    function (helloWorld) {
        return {
            helloWorld: helloWorld,
        }
    }
)