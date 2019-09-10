import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/todoActions.js';

const Todo = ({todo, i}) => {
	return (
		<p key={i}>{todo.task}</p>
	)
}

const Todos = ({todos, addTodo}) => {

	const [input, setInput] = useState('')

	const toSubmit = (e) => {
		e.preventDefault()
		addTodo(input)
		setInput("")
	}

	return (
		<div>
			<h1>Redux Todo List</h1>
			<form>
				<input
					name="input"
					placeholder="add todo"
					value={input}
					onChange={event => setInput(event.target.value)}
				/><br/>
				<button onClick={toSubmit}>Submit</button>
			</form>
			{todos.map((todo, i) => {
				return <Todo todo={todo} i={i}/>
			})}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
} 


export default connect(mapStateToProps, { addTodo })(Todos);