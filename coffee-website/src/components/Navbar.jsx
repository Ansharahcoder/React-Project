import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand brand-text" href="#home">
          <i className="bi bi-cup-hot-fill me-2"></i>Brew & Bean
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button className="btn btn-order w-100">Order Now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;