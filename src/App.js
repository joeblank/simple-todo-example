import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['code', 'eat', 'sleep']
    }
  }
  render() {

    const todos = this.state.todos.map( (todo, i) => {
      console.log(todo)
      return <ListItem key={i} item={todo} />
    })
    console.log(todos)

    return (
      <div className="App">

        <h1>To-Do App</h1>
        { todos }

      </div>
    );
  }
}

export default App;
