import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

class App extends Component {

  state = {
    todoData : [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
  }

  createTodoItem (label) {
    return {
      label,
      important : false, 
      done : false,
      id : Math.floor(Date.now() * Math.random())
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      // const idx = todoData.findIndex((el) => el.id === id);

      // const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      const newTodoData = todoData.filter((elem) => elem.id !== id);
      // console.log(newTodoData);
      // console.log(idx);

      return {
        todoData: newTodoData,
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({todoData}) => {
      return { 
        todoData : todoData.concat(newItem) 
      }
    })
    console.log(newItem)
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName] : !oldItem[propName]};
    return [
      ...arr.slice(0, idx), 
      newItem, 
      ...arr.slice(idx + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData : this.toggleProperty(todoData, id, 'important') 
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { 
        todoData : this.toggleProperty(todoData, id, 'done') 
      }
    })
  }

  render () {
    const { todoData } = this.state;
    const doneCount = todoData.filter((elem) => elem.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos = {todoData} 
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
        />

        <ItemAddForm onItemAdded = {this.addItem}/>
      </div>
    ); 
  }
};

export default App;