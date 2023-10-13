// src/components/Navbar.js
import React from 'react';
import './Nav.css'; // Import the CSS file for styling

const Nav = () => (
  <nav className="nav">
    <div className='navleft'>
    <div className="hamburger-menu">&#9776;</div> {/* Hamburger menu icon */}
    <div className="banner">Joe's Run Diary</div>
    </div>
  </nav>
);

export default Nav;
