/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        setUpdate={setUpdate}
      />
    ))}
  </ul>

);

export default TodoList;
