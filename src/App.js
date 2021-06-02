import React, { useState } from "react";
import TodoList from "./TodoList";
import {Tab,Tabs} from 'react-bootstrap';
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
  var falseCount = 0;
  filtertodos.forEach((i) => {
    i.isCompleted === true ? trueCount++ : falseCount++;
  });

  const addTodo = (task) => {
    setTodos([...todos, { task, isCompleted: false }]);
    setfilterTodos([...todos, { task, isCompleted: false }]);
  };

  const handlefilterChange = (e) => {
    console.log(e.target.value)
    const filtertodo = todos.filter((todo) => {
      switch (e.target.value) {
        case "All":
          return todo ;
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

  const completeTodo = (id) => {
    const newTodos = [...filtertodos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setfilterTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = filtertodos.filter((todo, index) => index !== id);
    setTodos(newTodos);
    setfilterTodos(newTodos);
  };

  const clearCompletedTodo = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos(newTodos);
    setfilterTodos(newTodos);
  };

  const handleTabs =(e)=>{
 console.log(e.target.value)
  } 

  return (
    <div className="App mx-auto">
      <div className="text-center " style={{ marginTop: "3%" }}>
        <h1
          style={{
            color: "#EBDBDB",
            fontFamilyL: "Helvetica",
            fontSize: "100px",
            fontWeight: "400",
          }}
        >todos
        </h1>
      </div>
      <div
        class="card mx-auto shadow-lg"
        style={{ width: "30%", backgroundColor: "#ffff" }}
      >
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
          <div className="d-flex my-2 justify-content-between border-top">
            <p
              className="my-3"
              style={{
                marginLeft: "3%",
                fontSize: "16px",
                color: "#4d4d4d",
                fontFamily: "sans-serif",
              }}
            >
              {falseCount} items left
            </p>
            <div
              class="btn-group btn-group-toggle "
              data-toggle="buttons"
              onClick={handlefilterChange}
              value={value}
            >
            <div class="my-2"  aria-label="Basic example" onClick={handlefilterChange}  value={value}>
             <button type="button" class="btnn" value="All" tabindex="1" activeClassName="active">All</button>
             <button type="button" class=" btnn  mx-1" value="Active" tabindex="2">Active</button>
             <button type="button" class=" btnn  "  value="Completed" tabindex="3">Completed</button>
            </div>
      
            </div>
          
            <a class="nav-item nav-link btn1" style={{
                marginLeft: "1%",
                marginRight:'3%',
                marginTop:'2%',
                fontSize: "16px",
                color: "#4d4d4d",
                fontFamily: "sans-serif",
              }}   onClick={clearCompletedTodo}>Clear completed</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
