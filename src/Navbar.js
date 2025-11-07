
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((o) => !o);
  const closeMenu = () => setIsOpen(false);
            
  
    
  return (
    <div>
      <div className='navigation'>
        <div className='left'>
          <img className='logo-img' src={'./asset/Kallah image.jpg'} alt="Kallah Trading" />
          <span className='kallah'>Kallah </span>
              <span className='trading'>Trading PLC</span>
            
        </div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`right ${isOpen ? 'open' : ''}`}>
          <ul onClick={closeMenu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
