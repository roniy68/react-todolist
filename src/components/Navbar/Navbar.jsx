import React from 'react';
import './Navbar.css';
import logo from '../../assets/ai.png';

const Navbar = () => (
  <div className="navbar">
    <div>
      <img src={logo} height="60px" alt="logo" />
    </div>
    <div>
      <h1>Math Magician</h1>
    </div>
  </div>
);

export default Navbar;
