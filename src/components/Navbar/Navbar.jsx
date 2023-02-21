import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
// import logo from '../../assets/ai.png';

// const menus = ['HOME', 'TODO-LIST', 'CONTACT'];
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    return () => document.addEventListener('mousedown', handler);
  }, [dropdown]);

  return (
    <nav>
      <ul className="navbar">
        <li>Home</li>
        <li>About</li>
        <li>
          <button className="navbar__button" onClick={() => setDropdown((prev) => !prev)} type="submit">
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>

  // <div className="navbar">
  //   <div className="navbar__logo">
  //     <img src={logo} height="60px" alt="logo" />
  //   </div>
  //   <div>
  //     <h1>To Do List</h1>
  //   </div>
  //   <div className="navbar__menu">
  //     <ul className="navbar__list">
  //       {menus.map((menu, index) => (
  //         <li key={index.toString}>
  //           {menu}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // </div>
  );
};

export default Navbar;
