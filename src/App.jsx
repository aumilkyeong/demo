import React, { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '아무 것도 하지 않기#1' },
    { id: 2, title: '아무 것도 하지 않기#2' },
  ],
};

function updateTaskTitle(state, taskTitle) {
  return ({
    ...state,
    taskTitle,
  });
}

function addTask(state) {
  const { newId, tasks, taskTitle } = state;
  return {
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, {
      id: newId, title: taskTitle,
    }],
  };
}

function deleteTask(state, id) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => (id !== task.id)),
  };
}

export default function App() {
  const [state, setState] = useState(initialState);

  const { taskTitle, tasks } = state;

  function handleClickAddTask() {
    setState(addTask(state));
  }

  function handleChangeTitle(event) {
    setState(updateTaskTitle(state, event.target.value));
  }

  function handleClickDeleteTask(id) {
    setState(deleteTask(state, id));
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
