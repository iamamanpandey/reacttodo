import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      task: "Learn Reactjs today",
      isCompleted:false
    },
    {
      task: "Learn Nodejs today",
      isCompleted:false
    },
    {
      task: "Learn Mongodb today",
      isCompleted:false
    },
  ]);

  const[filterTodo, setFilterTodo] = useState([...todos])


  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };


  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setTodos(newTodos);
  };  

   const filterCompleteTodo =()=>{
     const completedTodo= filterTodo.filter((item)=>{
       return item.isCompleted===true
      })
      setFilterTodo(completedTodo)
    console.log(completedTodo)

   }

   const filterInCompleteTodo =(id)=>{
   const inCompletedTodo =filterTodo.filter((item)=>{
      return item.isCompleted ===false
    })
    setFilterTodo(inCompletedTodo)
    console.log(inCompletedTodo)
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className="App">
      <h1 className="text-center my-5">Todo List</h1>
    

      <TodoForm addTodo={addTodo} />
     <h1>hello</h1>
      <div className="text-center m-2 p-3">
      <button onClick={filterCompleteTodo}>CompleteTodo</button>
      <button onClick={filterInCompleteTodo}>InCompleteTodo</button>
      </div>

      {todos.map((todo, id) => (
        <TodoList
          key={id}
          id={id}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          todo={todo}
        />
      ))}
    </div>
  );
}
export default App;
