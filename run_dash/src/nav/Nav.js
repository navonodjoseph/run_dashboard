// src/components/Navbar.js
import React from 'react';
import './Nav.css'; // Import the CSS file for styling

const Nav = () => (
  <nav className="navbar">
    <div className="hamburger-menu">&#9776;</div> {/* Hamburger menu icon */}
    <div className="banner">Joe's Run Diary</div>
  </nav>
);

export default Nav;
