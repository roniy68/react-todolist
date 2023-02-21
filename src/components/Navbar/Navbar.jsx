import React from 'react';
import './Navbar.css';
import logo from '../../assets/ai.png';

const menus = ['HOME', 'TODO-LIST', 'CONTACT'];
const Navbar = () => (
  <div className="navbar">
    <div className="navbar__logo">
      <img src={logo} height="60px" alt="logo" />
    </div>
    <div>
      <h1>To Do List</h1>
    </div>
    <div className="navbar__menu">
      <ul className="navbar__list">
        {menus.map((menu, index) => (
          <li key={index.toString}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Navbar;
