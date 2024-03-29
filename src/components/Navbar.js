import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleclick = () => setclick(!click); // not clicked
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 150) {
        setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg":"header"}>
      <Link to="/">
        <h1>Roshan</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="havburger" onClick={handleclick}>
        {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
      </div>
    </div>
  );
};

export default Navbar;
