import React from "react";

const TodoList = ({ todo, id, completeTodo,removeTodo }) => {

 return (
    <div className="container-fluid w-25  my-1 ">
      <div className="row">
        <ul className="list-group">
          <li
            style={{ textDecoration: todo.isCompleted && " line-through" }}
            className="list-group-item d-flex justify-content-between align-items-center"
         ><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>completeTodo(id)}  />
            {todo.task}
             <div className="p-1"> 

            <button class="badge bg-success"  >
              {todo.isCompleted ? "Completed" : "Incomplete"}
            </button>
            <button
              class="badge bg-danger rounded-pill"
              onClick={() => removeTodo(id)}
            >
              x
            </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
