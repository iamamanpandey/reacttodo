import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Learn Reactjs today",
      isCompleted: false,
    },
    {
      task: "Learn Nodejs today",
      isCompleted: false,
    },
    {
      task: "Learn Mongodb today",
      isCompleted: false,
    },
  ]);

  const [value, setvalue] = useState();
  const [filtertodos, setfilterTodos] = useState([...todos]);

  const addTodo = (task) => {
    setTodos([...todos, { task, isCompleted: false }]);
     setfilterTodos([...todos]);
    
  };


  const handlefilterChange = (e) => {
    setvalue(e.target.value);
    const filtertodo=
      todos.filter((todo) => {
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
      })
    setfilterTodos(filtertodo)
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className="App">
      <h1 className="text-center my-5">Todo List</h1>

      <TodoForm addTodo={addTodo} />
      <div className="text-center">
      <select onChange={handlefilterChange} value={value} className="mx-auto">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incompleted">Incompleted</option>
      </select>

    <p >{filtertodos.length}</p>
    </div>
      {filtertodos.map((todo, id) => (
        <TodoList
          key={id}
          id={id}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          todo={todo}
        />
      ))}
      <h1 className="text-center">second</h1>
    </div>
  );
}
export default App;
