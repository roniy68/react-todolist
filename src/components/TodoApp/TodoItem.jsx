/* eslint-disable */
import { useState, useRef } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
  //const [updateInput, setUpdateInput] = useState(itemProp.title);
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      //setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        //value={updateInput}
        //onChange={(e) => setUpdateInput(e.target.value)}
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
