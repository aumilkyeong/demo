import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const task = {
    id: 1,
    title: '아무 것도 하지 않기#1',
  };

  const handleClickDelete = jest.fn();

  const { container, getByText } = render((
    <Item
      task={task}
      onClick={handleClickDelete}
    />
  ));

  expect(container).toHaveTextContent('아무 것도 하지 않기#1');
  expect(container).toHaveTextContent('완료');

  expect(handleClickDelete).not.toBeCalled();

  fireEvent.click(getByText('완료'));

  expect(handleClickDelete).toBeCalledWith(1);
});
