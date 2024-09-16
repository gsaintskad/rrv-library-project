import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer.ts";
const store = configureStore({
  reducer: {
    books: booksReducer,
  }
});

export default store;
