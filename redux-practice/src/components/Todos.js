import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../store/actions/todoActions.js';

const container = {
  border: 'solid black 1px',
  padding: '2%',
  maxWidth: '500px',
  margin: '50px'
};

const Todos = ({ t, addTodo, toggleTodo }) => {
  const { todos, loading } = t;

  const [input, setInput] = useState('');

  const toSubmit = e => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <div style={container}>
      <h1>Redux Todo List</h1>
      <form>
        <input
          name='input'
          placeholder='add todo'
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <br />
        <button onClick={toSubmit}>Submit</button>
      </form>
      {loading ? (
        <h1>LOADING . . .</h1>
      ) : (
        <>
          {todos.map((todo, i) => {
            return (
              <p
                key={i}
                style={
                  todo.completed
                    ? { backgroundColor: 'red', textDecoration: 'line-through' }
                    : null
                }
                onClick={() => toggleTodo(todos, todo.id)}
              >
                {todo.task}
              </p>
            );
          })}
          <br />
          <br />
          <div>Store: {JSON.stringify(t)}</div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    t: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todos);
