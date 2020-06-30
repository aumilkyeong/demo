import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('./services/api');
jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
    categories: [],
  }));

  const { queryByText } = render(
    <App />,
  );
  expect(dispatch).toBeCalledTimes(2);
  expect(queryByText(/김밥제국/)).toBeNull();
});
