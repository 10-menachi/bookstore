import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Graphic from '../assets/grapich.png';
import Person from '../assets/person.png';
import { searchBooks } from '../redux/bookSlice';

const Hero = () => {
  const dispatch = useDispatch();
  const search = (e) => {
    dispatch(searchBooks(e.target.value));
  };
  return (
    <div className="hero">
      <div className="left-div">
        <h2 className="hero-header">
          READ AND ADD
          {' '}
          <br />
          {' '}
          YOUR INSIGHTS
        </h2>
        <p className="hero-p">Find Your Favorite Book And Read It Here For Free</p>
        <div className="search-div">
          <AiOutlineSearch className="search-icon" />
          <input type="text" name="search" id="search" placeholder="Search Book" onChange={search} />
        </div>
      </div>
      <div className="right-div">
        <img src={Graphic} alt="Gradient" className="grapich" />
        <img src={Person} alt="Person" className="person" />
      </div>
    </div>
  );
};

export default Hero;
