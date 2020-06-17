import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    tasks: [
      { id: 1, title: '아무 것도 하지 않기#1' },
      { id: 2, title: '아무 것도 하지 않기#2' },
    ],
  });

  const { taskTitle, newId, tasks } = state;

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, {
        id: newId, title: taskTitle,
      }],
    });
  }

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value,
    });
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => (id !== task.id)),
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      tasks={tasks}
      onClickAddTask={handleClickAddTask}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
