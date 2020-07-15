import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantPage() {
    return render(
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>,
    );
  }

  it('renders category & region select buttons', () => {
    const { queryByText } = renderRestaurantPage();

    expect(dispatch).toBeCalled();

    expect(queryByText(/서울/)).not.toBeNull();
    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('renders links of restaurants', () => {
    const { container } = renderRestaurantPage();

    expect(container.innerHTML).toContain('<a href="');
  });
});
