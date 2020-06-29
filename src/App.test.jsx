import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
  }));

  const { queryByText } = render(
    <App />,
  );
  expect(dispatch).toBeCalledWith(
    {
      type: 'setRestaurants',
      payload: { restaurants: [] },
    },
  );
  expect(queryByText(/김밥제국/)).toBeNull();
});
