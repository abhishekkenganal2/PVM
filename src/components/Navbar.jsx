import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const navData = [
        {
            id: 1, title: 'Home', path: '/'
        },
        {
            id: 2, title: 'About Us', path: '/about'
        },
        {
            id: 3, title: 'Classes', path: '/classes'
        },
        {
            id: 4, title: 'Gallery', path: '/gallery'
        },
        {
            id: 5, title: 'Contact', path: '/contact'
        },
    ]

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

                <button className="dark-mode-toggle" onClick={toggleDarkMode} title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {navData.map((item) => (
                        <li className="nav-item">
                            <NavLink key={item.id} to={item.path} className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMenu}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
