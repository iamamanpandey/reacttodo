import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../redux/todosSlice";
import Button  from "./Button";

const TodoList = ({ todo }) => {

  const [style, setStyle] = useState({ display: "none" });
  const dispatch = useDispatch();

  return (
    <div className="border-top">
      <ul className="list-group">
        <li
          style={{
            textDecoration: todo.isCompleted && "line-through",
            opacity: todo.isCompleted && "0.5",
          }}
          className="list-group-item d-flex  justify-content-between align-items-center input mx-1 mt-2"
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
         >
          <div className="w-100">
            <label class="container task">
              {todo.task}
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onClick={() => dispatch(completeTodo(todo.id))}
                class="checkmark"
              />
              <span class="checkmark"></span>
            </label>
          </div>
          <Button
            className="btn btn-link"
            onClick={() => dispatch(removeTodo(todo.id))}
            style={style}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
              style={{ color: "#b66a6c" }}
             >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
