import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const App = () => {
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

  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  return (
    <div className="my-4 py-4 ">
      <h2 className="text-center"> Todo App</h2>

      <ul className="todo-list text-center py-4 p-4">
        {todos.map((todo, id) => (
          <TodoList
            key={id}
            id={id}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            todo={todo}
          />
        ))}
      </ul>

      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
