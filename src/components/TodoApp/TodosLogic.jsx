import { TodosProvider } from 'context/TodosContext';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

const TodosLogic = () => (
  <TodosProvider>
    <InputTodo />
    <TodoList />
  </TodosProvider>
);

export default TodosLogic;
