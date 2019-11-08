export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

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
