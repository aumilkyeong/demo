import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

jest.mock('react-redux');

test('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  const { getByText } = render(
    <Categories categories={categories} />,
  );

//   expect(getByText(/김밥제국/)).not.toBeNull();
});
