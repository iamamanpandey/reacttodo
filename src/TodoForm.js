import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return null;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <div className="text-center">
      <h4>Enter your todo list</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Add todos.."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
