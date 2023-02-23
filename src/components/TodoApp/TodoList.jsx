/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
  todosProps, handleChange, delTodo, setUpdate, setTodos
}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
        setTodos={setTodos}
      />
    ))}
  </ul>

);

export default TodoList;
