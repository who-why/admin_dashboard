import React from 'react';
import { FaSearch, FaMoon, FaComments, FaBell, FaThLarge, FaGlobe } from 'react-icons/fa';
import './Navbar.css'
import user from './user.avif'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand/Logo */}
      <div className="brand">AdminDashboard</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search.." />
        <FaSearch className="search-icon" />
      </div>

      {/* Icons and Profile */}
      <div className="icons-profile">
        {/* Language Switcher */}
        <div className="language-switcher">
          <FaGlobe />
          <span>English</span>
        </div>

        {/* Icons */}
        <FaMoon className="icon" />
        <FaThLarge className="icon" />
        <div className="icon-container">
          <FaComments className="icon" />
          <span className="notification">2</span>
        </div>
        <div className="icon-container">
          <FaBell className="icon" />
          <span className="notification">1</span>
        </div>

        {/* Profile Picture */}
        <img src={user} alt="Profile" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
