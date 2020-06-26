import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

test('Page', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();
  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];
  const { getByText } = render(
    <Page
      taskTitle=""
      onChangeTitle={handleChangeTitle}
      tasks={tasks}
      onClickAddTask={handleClickAddTask}
      onClickDeleteTask={handleClickDeleteTask}
    />,
  );

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  fireEvent.click(getByText('추가')); // 추가 텍스트가 들어간 요소를 클릭하면
  // handleClickAddTask가 호출된다. 인자까지 체크하려면 .toBeCalldedWith(someting)
  expect(handleClickAddTask).toBeCalled();
});
