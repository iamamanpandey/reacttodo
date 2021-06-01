import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return null;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <div className="w-100">
      <form onSubmit={handleSubmit}>
       
          <input
            type="text"
            placeholder="what needs to be done..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className=" container-fluid  py-4 input border-bottom" 
          />
       
      </form>

    </div>
  );
};

export default TodoForm;