import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
 const openCerificate=() =>{
  var element = document.getElementById("certificate");

  element.scrollIntoView({behavior: "smooth"});
 }
 const openSkills=() =>{
  var element = document.getElementById("skills");

  element.scrollIntoView({behavior: "smooth"});
 }
 const openProjects=() =>{
  var element = document.getElementById("project");

  element.scrollIntoView({behavior: "smooth"});
 }
 const openContect=() =>{
  var element = document.getElementById("contact");

  element.scrollIntoView({behavior: "smooth"});
 }
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          NaveenPortfolio
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu , openProjects}
            >
              Projects <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu , openCerificate}>
              Certificate
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu , openSkills}>
              Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='#contact'
              className='nav-links'
              onClick={closeMobileMenu , openContect}
            >
              Contact Us
            </Link>
          </li>
         
        </ul>
      </nav>
    </>
  );
}

export default Navbar;