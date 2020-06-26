import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';

// test
// describe - it => describe('List') => it('renders tasks')
// describe - context - it
// jest-plugins => jest-plugin-context
//
// with tasks
// - List renders tasks
// - List renders "delete" button to delete task
// without tasks
// - List renders no task message.

// TDD cycle: RED - GREEN - REFACTORING

describe('List', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render(
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />,
    );
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('renders "완료" button to delete task', () => {
      const { getAllByText } = renderList(tasks);

      const Buttons = getAllByText('완료');

      fireEvent.click(Buttons[0]); // 완료 눌렀을때

      expect(handleClickDelete).toBeCalled(); // handleClickDeleteTask가 호출
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];
      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
