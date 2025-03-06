import React from 'react';
import portal from '../assets/portal.png';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-row">
                <a href="/" className="navbar-logo">
                        <img src={portal} alt="Logo" className="logo-image" />

                    <span className="logo-text">Rick and Morty App</span>
                </a>
                <a href="/characters">Characters</a>
                <a href="/locations">Locations</a>
                <a href="/episodes">Episodes</a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;