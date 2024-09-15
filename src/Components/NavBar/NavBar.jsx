import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.png';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showMenu && !event.target.closest('.navMenu') && !event.target.closest('.mobMenu')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showMenu]);

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logoText">ShoeKicks</span>
      </div>
      
      <div className="desktopMenu">
        <Link to="/" className="desktopMenuListItem">Home</Link>
        <Link to="/product" className="desktopMenuListItem">Product</Link>
        <Link to="/cart" className="desktopMenuListItem">Cart</Link>
        <Link to="/about" className="desktopMenuListItem">About</Link>
        
      </div>
      <Link to="/contact" className="desktopMenuBtn">
        Contact
      </Link>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={handleToggleMenu}
        aria-label="Toggle Menu"
      />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="/" className="listItem" onClick={handleToggleMenu}>Home</Link>
        <Link to="/product" className="listItem" onClick={handleToggleMenu}>Product</Link>
        <Link to="/cart" className="listItem" onClick={handleToggleMenu}>Cart</Link>
        <Link to="/about" className="listItem" onClick={handleToggleMenu}>About</Link>
        <Link to="/contact" className="listItem" onClick={handleToggleMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
