import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));
  const { queryByText } = render(
    <CategoriesContainer />,
  );

  expect(queryByText(/김밥제국/)).toBeNull();
});
