export const ADD_TODO = 'ADD_TODO';

export const addTodo = (task) => {
	const id = Math.random().toString().replace('0.', '') 
	const todo = {task: task, completed: false, id: id}
	return dispatch => {
		dispatch({type: ADD_TODO, payload: todo})
	}
}