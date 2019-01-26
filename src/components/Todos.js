import React from "react";

export default function Todos({ todos, handleDelete }) {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {todo.content}
              <span
                className="btn btn-danger btn-sm ml-2"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </span>
            </li>
          </ul>
        </div>
      );
    })
  ) : (
    <h4 className="bg-danger text-white  p-2 text-center">
      To-Do List Is Empty
    </h4>
  );
  return <div>{todoList}</div>;
}
