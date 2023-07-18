import React from 'react'
import BooksList from './BooksList'
import Sidebar from './Sidebar'

const BooksPage = () => {
  return (
    <div className='books-page'>
      <Sidebar />
      <BooksList />
    </div>
  )
}

export default BooksPage
