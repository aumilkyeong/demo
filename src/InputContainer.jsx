import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle, addTask,
} from './actions';

function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}

export default function InputContainer() {
  const { taskTitle } = useSelector(selector);

  const dispatch = useDispatch();

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  return (
    <Input
      value={taskTitle}
      onChange={handleChangeTitle}
      onClick={handleClickAddTask}
    />
  );
}
