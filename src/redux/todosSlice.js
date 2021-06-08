import { createSlice } from "@reduxjs/toolkit";
import * as uuid from "uuid";

export const todosSlice = createSlice({
  name: "todos",

  initialState: {
    todos: [{ id: uuid.v4(), task: "first task", isCompleted: true }],
  },

  reducers: {
    setTodos: (state, { payload }) => {
       state= payload
    },

    addTodos: (state, { payload }) => {
      state.todos.push({ id: uuid.v4(), task: payload, isCompleted: false });
    },

    removeTodo: (state, { payload }) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    completeTodo: (state, { payload }) => {
      state.todos.map((todo) => {
        if (todo.id === payload) {
          return (todo.isCompleted = !todo.isCompleted);
        }
        return todo;
      });
    },

    clearCompletedTodo:(state,action) =>{
     state.todos = action.payload
    },
  }, 
});

export const { setTodos, addTodos, removeTodo, completeTodo ,clearCompletedTodo} =  todosSlice.actions;

export default todosSlice.reducer;
