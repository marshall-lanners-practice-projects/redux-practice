export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";
export const ASPHBATIZE_START = "ASPHBATIZE_START";
export const ASPHBATIZE_END = "ASPHBATIZE_END";

export const aphabaticTask = todos => {
  const aphabatic = todos.sort((a, b) => {
    let taskA = a.task.toUpperCase();
    let taskB = b.task.toUpperCase();
    if (taskA < taskB) return -1;
    if (taskA > taskB) return 1;
    return 0;
  });

  return dispatch => {
    dispatch({ type: ASPHBATIZE_START });
    setTimeout(() => {
      dispatch({ type: ASPHBATIZE_END, payload: aphabatic });
    }, 2000);
  };
};

export const clearCompleted = todos => {
  const filtered = todos.filter(todo => {
    return todo.completed === false;
  });

  return dispatch => {
    dispatch({ type: REMOVE_COMPLETED, payload: filtered });
  };
};

export const addTodo = task => {
  const id = Date.now();
  const todo = { task, completed: false, id };
  return dispatch => {
    dispatch({ type: ADD_TODO_START });
    setTimeout(() => {
      dispatch({ type: ADD_TODO_SUCCESS, payload: todo });
    }, 1000);
  };
};

export const toggleTodo = (todos, id) => {
  const toggledTodos = todos.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });

  return dispatch => {
    dispatch({ type: TOGGLE_TODO, payload: toggledTodos });
  };
};
