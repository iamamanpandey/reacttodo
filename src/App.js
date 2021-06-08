import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import { clearCompletedTodo } from "./redux/todosSlice";

function App() {

  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  useEffect(() => {
    handlefilterChange(value);
  }, [todos]);

  const [filtertodos, setfilterTodos] = useState([...todos]);
  const [value, setvalue] = useState("All");

 
  const handlefilterChange = (val) => {
    const filtertodo = todos.filter((todo) => {
      switch (val) {
        case "All":
          return todo;
        case "Completed":
          return todo.isCompleted === true;
        case "Active":
          return todo.isCompleted === false;
        default:
          return todo;
      }
    });
    setfilterTodos(filtertodo);
  };

  const clearcompletedTodo = () => {
    const newTodos = todos.filter((todo)=>todo.isCompleted===false) 
   dispatch(clearCompletedTodo(newTodos))
   handlefilterChange(value)
  };

  // for items left
  var trueCount = 0;
  var falseCount = 0;
  filtertodos.forEach((i) => {
    i.isCompleted === true ? trueCount++ : falseCount++;
  });

  return (
    <div className="App mx-auto">
      <div className="text-center" >
        <h1 className="heading">todos </h1>
      </div>
      <div  class="card mx-auto shadow-lg">
        <TodoForm />
        <ul class="list-group list-group-flush">
          {filtertodos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
        <div className="d-flex justify-content-between ">
          <p className="my-3 false">{falseCount} items left </p>
          <div  class="my-2 filter" onClick={(e) => handlefilterChange(e.target.value)}>
            <button
              value="All"
              className={value === "All" ? "active" : "btnn"}
              onClick={() => setvalue("All")}
            > All
            </button>
            <button
              value="Active"
              className={value === "Active" ? "active" : "btnn"}
              onClick={() => setvalue("Active")}
             > Active
            </button>
            <button
              value="Completed"
              className={value === "Completed" ? "active" : "btnn"}
              onClick={() => setvalue("Completed")}
            > Completed </button>
          </div>
          <a class="nav-item nav-link btn1"   onClick={clearcompletedTodo}> Clear completed</a>
        </div>
      </div>
    </div>
  );
}
export default App;
