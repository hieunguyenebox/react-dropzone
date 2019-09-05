import React from 'react';
import Dropzone from '../lib';
import renderer from 'react-test-renderer';

test('ok fine', () => {
  const component = renderer.create(<Dropzone defaultStyle />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
