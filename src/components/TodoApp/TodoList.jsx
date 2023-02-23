/* eslint-disable */
import React from 'react';
import TodoItem from './TodoItem';
import { useTodosContext } from 'context/TodosContext';

const TodoList = ({
  todosProps, handleChange, delTodo, setUpdate, setTodos
}) => {
  const value = useTodosContext();
  console.log(value);

  return (
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
}

export default TodoList;
