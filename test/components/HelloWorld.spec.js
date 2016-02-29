import React from 'react';
import HelloWorld from '../../client/containers/HelloWorld';
import * as utils from '../utils';

describe('Components', () => {
  describe('HelloWorld', () => {
    const component = utils.shallowlyRenderedOutput(<HelloWorld />);
    it('should contain one "<div>" element', () => {
      expect(component.type).to.be.equal('div');
    });

    it('should contain two child "<input>" elements', () => {
      expect(component.props.children.props.children).to.contain(<input/>).twice;
    });

    it('should contain one child "<div>" element', () => {
      expect(component.props.children.props.children).to.contain(<div/>).once;
    });
  });
});
