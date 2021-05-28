import React, { useState, useEffect } from "react";

function List() {
  const [todoList, setTodo] = useState(["todo1", "todo2", "todo3"]);
  useEffect(() => {
    window.localStorage.setItem("todoList", todoList);
    return () => {
      window.localStorage.clear();
    };
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <ul className="list-group">
          {todoList.map((item, id) => {
            return (
              <li
                key={id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item}
                <button
                  class="badge bg-danger rounded-pill"
                  onClick={(id) =>
                    setTodo(todoList.filter((todo) => todo.id !== id))
                  }
                 >
                  &times;{id}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        className="btn btn-danger m-2"
        onClick={() => setTodo([...todoList, "todo" + (todoList.length + 1)])}
      >
        Add Random Test Todo
      </button>
    </div>
  );
}
export default List;
