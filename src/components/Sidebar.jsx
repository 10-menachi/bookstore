import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>Book by Genre</h3>
      <div className="sidebar-list">
        <p>All Genres</p>
        <p className='active-genre'>Business</p>
        <p>Science</p>
        <p>Fiction</p>
        <p>Philosophy</p>
        <p>Biography</p>
      </div>
      <h3>Recommendations</h3>
      <div className="sidebar-list">
        <p>Artist of the Month</p>
        <p>Book of the Year</p>
        <p>Top Genre</p>
      </div>
    </div>
  )
}

export default Sidebar
