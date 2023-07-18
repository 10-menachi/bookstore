import React from 'react'
import './App.css'
import BooksPage from './components/BooksPage'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Hero />
      <BooksPage />
    </div>
  )
}

export default App
