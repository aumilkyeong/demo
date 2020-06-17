import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const task = {
    id: 1,
    title: '아무 것도 하지 않기#1',
  };
  const { container } = render((
    <Item task={task} />
  ));

  expect(container).toHaveTextContent('아무 것도 하지 않기#1');
});
