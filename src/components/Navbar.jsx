import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    {/* You can replace this with an image logo */}
                    <span className="logo-text">Parivartan <span className="highlight">Vidya Mandir</span></span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/classes" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Classes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/gallery" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Gallery
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </li>
                    {/* CTA Button in mobile menu if needed, or keeping it inline */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
