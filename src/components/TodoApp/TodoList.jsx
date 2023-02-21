import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todosProps }) => (
  <ul>
    {todosProps.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
  </ul>

);

export default TodoList;
