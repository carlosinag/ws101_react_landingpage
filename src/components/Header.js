import React from 'react';
import './Styles.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="logo">
        <h1>Learn <span>WebDev</span></h1>
      </a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#works">Importance</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
