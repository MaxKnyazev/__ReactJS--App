import React, { Component } from 'react';
import './TodoListItem.css';

class TodoListItem extends Component {
  render () {
    const { label, onDeleted, onToggleImportant, onToggleSpecial, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }
    
    return (
      <span className = {classNames}>
        <span
          className='todo-list-item-label'
          
          onClick = {onToggleDone}>
          {label}
        </span>
  
        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick = {onDeleted}>
          <i className="fa fa-trash-o" />
        </button>

        <button type="button"
          className="btn btn-outline-primary btn-sm float-right"
          onClick = {onToggleSpecial}>
          <i className="fa fa-exclamation-triangle"></i>
        </button>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick = {onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>


      </span>
    )
  }
}

export default TodoListItem;