import PropTypes from 'prop-types';
import React from 'react';

const Book = ({
  imageurl, title, author, price,
}) => (
  <div className="book-card">
    <img src={imageurl} alt={title} />
    <h4>{title}</h4>
    <p>
      by
      {author}
    </p>
    <p>{price}</p>
  </div>
);

Book.propTypes = {
  imageurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Book;
