import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./bookSlice";

const bookStore = configureStore({
  reducer: {
    books: booksReducer
  }
})

export default bookStore