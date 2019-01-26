import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    const todo = e.target.value;
    this.setState({
      content: todo
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    // console.log(this.props.todo);
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              <h5 className="text-default">Enter To-Do</h5>
            </label>
            <input
              className="form-control"
              type="text"
              required
              id="to-do"
              placeholder="Enter To-Do Here"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <button className="btn btn-success form-control mt-2">
              Add To-Do
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTodo;
