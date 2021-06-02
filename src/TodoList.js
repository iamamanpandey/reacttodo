import React from "react";

const TodoList = ({ todo, id, completeTodo, removeTodo }) => {
  return (
    <ul >
      <li style={{ background: todo.isCompleted && "rgba(255, 0, 0, 0.1)" }} >
        {todo.task}
        <span>
          <button className="button" onClick={() => completeTodo(id)}>
            {todo.isCompleted ? "Completed" : "Complete"}
          </button>
          <button className="button" onClick={() => removeTodo(id)}> X  </button>
        </span>
      </li>
    </ul>
  );
};

export default TodoList;
