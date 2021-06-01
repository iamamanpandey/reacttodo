import React, { useState } from "react";
import TodoList from "./TodoList";

import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "learn react js",
      isCompleted: false,
    },
  ]);

  const [value, setvalue] = useState();
  const [filtertodos, setfilterTodos] = useState([...todos]);

  var trueCount = 0;
  var  falseCount = 0;
  filtertodos.forEach((i)=> {
    i.isCompleted === true ? trueCount++ : falseCount++;
  });

  const addTodo = (task) => {
    setTodos([...todos, { task, isCompleted: false }]);
    setfilterTodos([...todos, { task, isCompleted: false }]);
  };

  const handlefilterChange = (e) => {
    const filtertodo = todos.filter((todo) => {
      switch (e.target.value) {
        case "All":
          return todo;
        case "Completed":
          return todo.isCompleted === true;
        case "Incompleted":
          return todo.isCompleted === false;
        default:
          return todos;
      }
    });
    setfilterTodos(filtertodo);
  };

  const completeTodo = (id) => {
    const newTodos = [...filtertodos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setfilterTodos(newTodos);
  };

    // const allSelect = () => {
    //   const newTodos = filtertodos.map((todo) => todo.isCompleted === true)
    //   console.log(newTodos)
    //   setTodos
    // };


  const removeTodo = (id) => {
    setfilterTodos(filtertodos.filter((todo, index) => index !== id));
  };

  const clearCompletedTodo = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos(newTodos);
    setfilterTodos(newTodos);
  };


  return (
    <div className="App mx-auto">
      <div className="text-center " style={{ marginTop: "3%" }}>
        <h1  style={{ color: "#EBDBDB", fontFamilyL: "Helvetica", fontSize: "100px",fontWeight: "400",}}> todos</h1>
      </div>
      <div class="card mx-auto shadow-lg" style={{ width: "35%" }}>
        <div>
          <TodoForm addTodo={addTodo} />
          <ul class="list-group list-group-flush">
            {filtertodos.map((todo, id) => (
              <TodoList
                key={id}
                id={id}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                todo={todo}
              />
            ))}
          </ul>
          <div className="d-flex my-2 justify-content-between">
            <h4 className="my-3" style={{marginLeft:'3%',fontSize:'20px',color:'#4d4d4d',fontFamily:'sans-serif'}}>{falseCount} left</h4>
            <div
              class="btn-group btn-group-toggle p-2"
              data-toggle="buttons"
              onChange={handlefilterChange}
              value={value}
            >
              <label class="btn btn-outline-primary  mx-2" value="All">
                <input
                  type="radio"
                  name="options"
                  id="option1"
                  autocomplete="off"
                  value="All"
                />
                All
              </label>
             
              <label class="btn btn-outline-danger mx-2">
                <input
                  type="radio"
                  name="options"
                  id="option3"
                  autocomplete="off"
                  value="Incompleted"
                />
                Active
              </label>
              <label class="btn btn-outline-success  mx-2" value="Completed">
                <input
                  type="radio"
                  name="options"
                  id="option2"
                  autocomplete="off"
                  value="Completed"
                />
                Completed
              </label>
            </div>
            <button type="button" class="btn btn-link"
             onClick={clearCompletedTodo} > Clear completed
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
