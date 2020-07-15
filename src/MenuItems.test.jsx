import React from 'react';

import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('with menu items', () => {
    const menuItems = [
      { id: 1, name: '공기밥' },
    ];
    it('renders menu names', () => {
      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('공기밥');
    });
  });

  context('without menu items', () => {
    const menuItems = [];
    it('renders no menu discription', () => {
      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('메뉴가 없어요');
    });
  });
});
