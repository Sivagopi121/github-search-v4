import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../src/App/Navigation/index'
import { MemoryRouter } from 'react-router-dom';


test('Error renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navigation/>
      </MemoryRouter>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
