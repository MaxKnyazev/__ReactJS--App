import React, {Component} from 'react';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

class App extends Component {

  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ],
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newTodoData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      // const newTodoData = todoData.filter((elem) => elem.id !== idx + 1);
      // console.log(newTodoData);
      // console.log(idx);

      return {
        todoData: newTodoData,
      }
    })
  }

  render () {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
          todos = {this.state.todoData} 
          onDeleted = {this.deleteItem}/>
      </div>
    ); 
  }
};

export default App;