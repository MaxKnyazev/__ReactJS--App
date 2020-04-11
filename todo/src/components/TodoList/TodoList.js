import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleSpecial, onToggleDone }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    let classNames = 'list-group-item';

    if (item.special) {
      classNames += ' special';
    }

    return (
      <li key={id} className={classNames}>
        <TodoListItem {...itemProps }
          onDeleted = {() => onDeleted(id)} 
          onToggleImportant = {() => onToggleImportant(id)}
          onToggleDone = {() => onToggleDone(id)}
          onToggleSpecial = {() => onToggleSpecial(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
