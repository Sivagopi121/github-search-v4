import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../src/Error/index'
import FetchMore from '../src/FetchMore';
import Input from '../src/Input/index'
import Loading from '../src/Loading';

test('Error renders correctly', () => {
  const tree = renderer
    .create(
      <Error error="Some error"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


test('Input renders correctly', () => {
  const tree = renderer
    .create(
      <Input/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('FetchMore renders correctly', () => {
  const tree = renderer
    .create(
      <FetchMore/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


test('Loading renders correctly', () => {
  const tree = renderer
    .create(
      <Loading/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});