import { useTodosContext } from 'context/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useTodosContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
        />
      ))}
    </ul>

  );
};

export default TodoList;
