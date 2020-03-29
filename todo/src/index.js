import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';

const App = () => {
  const todoData = [
    {id : 1, label : 'Drink Cofee', important : false},
    {id : 2, label : 'Create React App', important : true},
    {id : 3, label : 'Have a luch', important : false},
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos = {todoData}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);