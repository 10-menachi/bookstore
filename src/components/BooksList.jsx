import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/bookSlice';
import Book from './Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const fetchedBooks = useSelector((state) => state.books.filteredBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="books-list">
      <h2>Business</h2>
      <div className="books-cards">
        {fetchedBooks.map((book) => (
          <Book
            key={book.id}
            imageurl={book.imageurl}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BooksList;
