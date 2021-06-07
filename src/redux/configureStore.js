import { configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import filterTodos from './filterTodos';
import  todosSlice from "./todosSlice";

const reducer = combineReducers({
  todos: todosSlice,
  filterTodos:filterTodos
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
});

export default store;
