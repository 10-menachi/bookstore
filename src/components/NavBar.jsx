import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => (
  <div className="navbar">
    <div className="logo">
      <h2 className="logo-text">
        MY
        <span className="strong-book">BOOK</span>
      </h2>
      <p>|</p>
      <AiOutlineShoppingCart className="cart-icon" />
    </div>
    <div className="nav-list">
      <p className="active">Explorer</p>
      <p>Shop</p>
      <p>Blog</p>
      <p className="login-button">Login</p>
    </div>
  </div>
);

export default NavBar;
