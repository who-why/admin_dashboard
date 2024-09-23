// RevenueCard.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './RevenueCard.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueCard = () => {
    // Data for the Pie chart
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                data: [30, 23, 20, 19, 15],
                backgroundColor: [
                    '#4169E1',
                    '#4682B4',
                    '#6495ED',
                    '#87CEFA',
                    '#ADD8E6',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="revenue-card">
            <div className="card-header">
                <h4>Total Revenue</h4>
                <span className="menu-icon">⋮</span>
            </div>
            <div className="chart-container">
                <Pie data={data} />
            </div>
            <div className="sales-info">
                <h3>Total sales made today.</h3>
                <h2>$324</h2>
                <p>Previous transaction processing. Last payments may not be included.</p>
            </div>
            <div className="sales-summary">
                <div className="sales-item">
                    <p>Last Week</p>
                    <span className="increase">↑ $11.9k</span>
                </div>
                <div className="sales-item">
                    <p>Last Month</p>
                    <span className="decrease">↓ $12.4k</span>
                </div>
            </div>
        </div>
    );
};

export default RevenueCard;
