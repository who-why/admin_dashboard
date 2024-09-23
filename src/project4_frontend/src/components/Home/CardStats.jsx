import React from 'react';
import './Home.css';
import { FaUser, FaShoppingCart, FaDollarSign, FaCoins } from 'react-icons/fa';

const CardStats = () => {
    const stats = [
        { title: 'USERS', value: '232', icon: <FaUser />, linkText: 'See all users', link: '#', change: '20 %', bgColor: '#FFC0CB' },
        { title: 'ORDERS', value: '34', icon: <FaShoppingCart />, linkText: 'View all orders', link: '#', change: '20 %', bgColor: '#FFFFE0' },
        { title: 'PRODUCTS', value: '$107', icon: <FaDollarSign />, linkText: 'See all products', link: '#', change: '20 %', bgColor: '#E0FFE0' },
        { title: 'BALANCE', value: '$444', icon: <FaCoins />, linkText: 'See all details', link: '#', change: '20 %', bgColor: '#E6E6FA' },
    ];

    return (
        <div className="card-stats-container">
            {stats.map((stat, index) => (
                <div key={index} className="card-stat">
                    <div className="card-header">
                        <span>{stat.title}</span>
                        <span className="card-percentage">↑ {stat.change}</span>
                    </div>
                    <div className="card-value">{stat.value}</div>
                    <div className="card-footer">
                        <a href={stat.link}>{stat.linkText}</a>
                        <div className="card-icon" style={{ backgroundColor: stat.bgColor }}>
                            {stat.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardStats;
