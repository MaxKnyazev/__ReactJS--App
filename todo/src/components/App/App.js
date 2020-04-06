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

    term : '',

    filter : 'all',
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

  search (items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  filter (items, filter) {
    switch (filter) {
      case 'all' : return items;
      case 'active' : return items.filter((item) => !item.done);
      case 'done' : return items.filter((item) => item.done);
      default : return items;          
    }
  }

  render () {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter((elem) => elem.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange = {this.onSearchChange}/>
          <ItemStatusFilter onFilterChange = {this.onFilterChange} filter = {filter}/>
        </div>
  
        <TodoList 
          todos = {visibleItems} 
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