import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import './TodoApp.css';
import TodosLogic from './TodosLogic';

const TodoApp = () => (
  <div className="todo">
    <Header />
    <InputTodo />
    <TodosLogic />
  </div>
);

export default TodoApp;
