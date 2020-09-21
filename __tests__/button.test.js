import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/Button/index'

test('App renders correctly', () => {
  const tree = renderer
    .create(
      <Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
