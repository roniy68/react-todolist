import { createContext, useContext } from 'react';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => (
  <TodosContext.Provider value="todos data">
    {children}
  </TodosContext.Provider>
);
export const useTodosContext = () => useContext(TodosContext);
