import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import rootReducer from '../client/reducers/RootReducer'

const store = createStore(rootReducer);

export function shallowlyRenderedOutput(Component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Provider store={store}>{Component}</Provider>);

  return shallowRenderer.getRenderOutput();
}
