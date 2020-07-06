import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [],
      restaurants: [],
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders the HomePage', () => {
      const { container } = renderApp({ path: '/' });
      expect(container).toHaveTextContent('Home');
    });
  });
  context('with path /about', () => {
    it('renders the AboutPage', () => {
      const { container } = renderApp({ path: '/about' });
      expect(container).toHaveTextContent('20명에게 추천 ');
    });
  });
  context('with path /restaurants', () => {
    it('renders the RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });
      expect(container).toHaveTextContent('서울');
    });
  });
  context('with invalid path', () => {
    it('renders the NotFoundPage', () => {
      const { container } = renderApp({ path: '/xxx' });
      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
