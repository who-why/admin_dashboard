import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="links">
                <ul>
                    <p className="section-title">Main</p>
                    <Link to="/" className="link">
                        <li>
                            <span className="icon">🏠</span> Dashboard
                        </li>
                    </Link>

                    <p className="section-title">Lists</p>
                    <Link to="/users" className="link">
                        <li>
                            <span className="icon">👤</span> Users
                        </li>
                    </Link>

                    <Link to="/products" className="link">
                        <li>
                            <span className="icon">📦</span> Products
                        </li>
                    </Link>
                    <Link to="/orders" className="link">
                        <li>
                            <span className="icon">💳</span> Orders
                        </li>
                    </Link>
                    <Link to="/balance" className="link"> 
                      <li>
                        <span className="icon">💰</span> Balance
                      </li>
                    </Link>
                
                    <li>
                        <span className="icon">📊</span> Status
                    </li>

                    <p className="section-title">Settings</p>
                    <li>
                        <span className="icon">👥</span> Profile
                    </li>
                    <li>
                        <span className="icon">⚙️</span> Setting
                    </li>
                    <li>
                        <span className="icon">🔓</span> Log Out
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
