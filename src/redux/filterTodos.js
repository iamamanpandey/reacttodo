// import { createSlice } from "@reduxjs/toolkit";

// export const todosSlice = createSlice({
//   name: "filtertodos",
//   initialState: {
//     filtertodos: null,
//   },

//   reducers: {
//     setTodos: (state, { payload }) => {
//       state = payload;
//     },

//     removeTodo: (state, { payload }) => {
//       const index = state.todos.findIndex((todo) => todo.id === payload);
//       if (index !== -1) {
//         state.todos.splice(index, 1);
//       }
//     },

//     completeTodo: (state, { payload }) => {
//       state.todos.map((todo) => {
//         if (todo.id === payload) {
//           return (todo.isCompleted = !todo.isCompleted);
//         }
//         return todo;
//       });
//     },
//   }, 
// });

// export const { setTodos, addTodos, removeTodo, completeTodo } =
//   todosSlice.actions;

// export default todosSlice.reducer;
