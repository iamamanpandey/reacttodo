import { configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import  todosSlice from "./todosSlice";

const reducer = combineReducers({
  todos: todosSlice,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false })],
});

export default store;
