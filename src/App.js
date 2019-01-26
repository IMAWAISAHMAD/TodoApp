import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: []
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  handleDelete = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-primary text-center m-5">MY Todo's</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddTodo addTodo={this.addTodo} todo={this.state} />
      </div>
    );
  }
}

export default App;
