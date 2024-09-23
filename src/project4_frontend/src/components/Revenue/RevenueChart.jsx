// RevenueChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler } from 'chart.js';
import './RevenueChart.css'; // Import the CSS file

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

const RevenueChart = () => {
    // Data for the line chart
    const data = {
        labels: ['February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Revenue (Last 1 year)',
                data: [3000, 4500, 2500, 4000, 3500, 5000, 3500, 4000, 3000, 4500, 4700],
                backgroundColor: 'rgba(66, 135, 245, 0.2)', // Gradient background color
                borderColor: '#4169E1', // Line color
                pointBackgroundColor: '#fff', // White points on the line
                pointBorderColor: '#4169E1',
                fill: true,
                tension: 0.4, // Curved line
            },
        ],
    };

    // Options for the line chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide the legend if not needed
            },
        },
        scales: {
            x: {
                grid: {
                    display: true,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                },
            },
        },
    };

    return (
        <div className="chart-container">
            <div className="chart-title">Revenue (Last 1 year)</div>
            <div className="canvas-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default RevenueChart;
