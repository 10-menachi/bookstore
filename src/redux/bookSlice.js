import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedBooks: [],
  filteredBooks: [],
};

export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const response = await fetch("http://localhost:3000/api/v1/bookstore_app");
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.filteredBooks = action.payload;
    },
    searchBooks: (state, action) => {
        state.filteredBooks = state.fetchedBooks.filter((book) =>
            book.title.toLowerCase().includes(action.payload.toLowerCase())
        );
        }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.fetchedBooks = action.payload;
      state.filteredBooks = action.payload;
    });
  },
});

export const { searchBooks, changeGenre } = bookSlice.actions;

const booksReducer = bookSlice.reducer;
export default booksReducer;
