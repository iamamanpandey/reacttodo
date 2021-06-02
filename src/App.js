import React, { useState } from "react";
import TodoList from "./TodoList";
import {Tabs, Tab} from 'react-bootstrap';
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "learn react js",
      isCompleted: false,
    },
  ]);

  const [value, setvalue] = useState("All");
  const [key, setKey] = useState('1');
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
          return todo;
        case "Completed":
          return todo.isCompleted === true;
        case "Active":
          return todo.isCompleted === false;
        default:
          return todo.length;
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
        >
          todos
        </h1>
      </div>
      <div
        class="card mx-auto shadow-lg"
        style={{ width: "30%", backgroundColor: "#ffff" }}
      >
        
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
          <div className="d-flex my-2 justify-content-between ">
            <p className="my-3" style={{   marginLeft: "3%",  fontSize: "14px",  color: "#4d4d4d",  fontFamily: "sans-serif",}}>
              {falseCount} items left </p>
           
            
              <div class="my-2" onClick={handlefilterChange}>  
                <button  value="All"       className={value == 'All' ? 'active' : 'btnn'}       onClick={() => setvalue('All')}> All </button>
                <button  value="Active"    className={value == 'Active' ? 'active' : 'btnn'}    onClick={() => setvalue('Active')}>  Active </button>
                <button  value="Completed" className={value == 'Completed' ? 'active' : 'btnn'} onClick={() => setvalue('Completed')} > Completed </button>
              </div>
           

            <a class="nav-item nav-link btn1" style={{
             marginLeft: "1%",
                marginRight: "3%",
                marginTop: "1%",
                fontSize: "14px",
                color: "#4d4d4d",
                fontFamily: "sans-serif",
              }}
              onClick={clearCompletedTodo}
            >
              Clear completed
            </a> 
          </div>
        </div>  
      </div>
  
  );
}
export default App;
