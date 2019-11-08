import {
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  ADD_TODO_START
} from '../actions/todoActions.js';

const initialState = {
  loading: false,
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return { todos: [...state.todos], loading: true };
    case ADD_TODO_SUCCESS:
      return { todos: [...state.todos, action.payload], loading: false };
    case TOGGLE_TODO:
      return { todos: action.payload, loading: false };
    default:
      return state;
  }
};

export default todoReducer;
