
const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// Redux action
// - type(string)
// - payload => object => { 필요한 것들 }

export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return ({
      ...state,
      taskTitle: action.payload.taskTitle,
    });
  }
  if (action.type === 'addTask') {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, {
        id: newId, title: taskTitle,
      }],
    });
  }
  if (action.type === 'deleteTask') {
    const { tasks } = state;
    return {
      ...state,
      tasks: tasks.filter((task) => (action.payload.id !== task.id)),
    };
  }
  return state;
}
