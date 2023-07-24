import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGenre } from '../redux/bookSlice';

const Sidebar = () => {
  const genres = ['All', 'Fiction', 'Romance', 'Dystopian'];
  const recommendations = [
    'Artist of the Month',
    'Book of the Year',
    'Top Genre',
  ];
  const dispatch = useDispatch();
  const fetchedBooks = useSelector((state) => state.books.fetchedBooks);

  const switchGenre = (genre) => {
    if (genre === 'All') {
      dispatch(changeGenre(fetchedBooks));
    } else {
      const newBooks = fetchedBooks.filter((book) => book.genre === genre);
      dispatch(changeGenre(newBooks));
    }
  };

  return (
    <div className="sidebar">
      <h3>Book by Genre</h3>
      <div className="sidebar-list">
        {genres.map((genre) => (
          <button type="button" key={genre} onClick={() => switchGenre(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <h3>Recommendations</h3>
      <div className="sidebar-list">
        {recommendations.map((recommendation) => (
          <p key={recommendation}>{recommendation}</p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
