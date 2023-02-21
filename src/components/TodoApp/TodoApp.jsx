import React from 'react';
import Header from './Header';
import './TodoApp.css';
import TodosLogic from './TodosLogic';

const TodoApp = () => (
  <div className="todo">
    <Header />
    <TodosLogic />
  </div>
);

export default TodoApp;
