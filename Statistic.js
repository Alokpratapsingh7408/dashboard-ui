import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import './Statistic.css';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Statistic = () => {
    // Data for both charts
    const salesData = {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Online',
                data: [23342, 22000, 21000, 28000, 27000, 25000, 23000],
                borderColor: '#f74b5c',
                backgroundColor: 'rgba(247, 75, 92, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Offline',
                data: [13221, 12500, 13500, 14000, 13000, 15000, 12000],
                borderColor: '#4261f7',
                backgroundColor: 'rgba(66, 97, 247, 0.2)',
                tension: 0.4,
            },
            {
                label: 'Marketing',
                data: [1542, 1400, 1300, 1100, 1500, 1200, 1400],
                borderColor: '#fa9438',
                backgroundColor: 'rgba(250, 148, 56, 0.2)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Analytics',
            },
        },
    };

    // UseRef for chart destruction
    const chartRef = useRef(null);

    // Ensure chart instance is cleaned up
    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="statistics-page">
            {/* Header Section */}
            <header className="header-section">
                <h2>Kenneth Osborne</h2>
                <p>Your last login: 21h ago from New Zealand.</p>
                <div className="controls">
                    <button>Last 7 days</button>
                    <button>Export</button>
                    <button>Info</button>
                </div>
            </header>

            {/* Top Row Stats */}
            <div className="stats-grid top-row">
                {/* Circular Score Card */}
                <div className="card circular-card">
                    <h4>Sessions By Channel</h4>
                    <div className="circular-progress">
                        <div className="circle">
                            <span className="score">75%</span>
                        </div>
                    </div>
                    <ul>
                        <li>Firewalls(3) <span>100%</span></li>
                        <li>Ports(12) <span>100%</span></li>
                        <li>Servers(233) <span>100%</span></li>
                        <li>Firewalls(7) <span>100%</span></li>
                        <li>Firewalls(6) <span>70%</span></li>
                    </ul>
                </div>

                {/* Events Graph Card */}
                <div className="card events-card">
                    <h4>Events</h4>
                    <div className="events-graph">
                        <Line ref={chartRef} data={salesData} options={chartOptions} />
                    </div>
                </div>

                {/* Device Stats Card */}
                <div className="card device-stats-card">
                    <h4>Device Stats</h4>
                    <ul>
                        <li>Uptime: <span>195 Days, 8 hours</span></li>
                        <li>First Seen: <span>23 Sep 2019, 2.04PM</span></li>
                        <li>Collected Time: <span>23 Sep 2019, 2.04PM</span></li>
                        <li>Memory Space: <span>168.3 GB</span></li>
                    </ul>
                    <div className="memory-bar">
                        <div className="bar-fill"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Row Stats */}
            <div className="stats-grid bottom-row">
                {/* Sessions By Channel (Employee earnings) */}
                <div className="card session-channel-card">
                    <h4>Sessions By Channel</h4>
                    <ul>
                        <li>Connor Chandler <span>$4909</span></li>
                        <li>Russell Floyd <span>$857</span></li>
                        <li>Douglas White <span>$612</span></li>
                        <li>Alta Fletcher <span>$233</span></li>
                        <li>Marguerite Pearson <span>$233</span></li>
                        <li>Leonard Gutierrez <span>$35</span></li>
                        <li>Helen Benson <span>$43</span></li>
                    </ul>
                </div>

                {/* Sales Analytics Card */}
                <div className="card sales-analytics-card">
                    <h4>Sales Analytics</h4>
                    <div className="sales-stats">
                        <p>Online: <span>23,342</span></p>
                        <p>Offline: <span>13,221</span></p>
                        <p>Marketing: <span>1,542</span></p>
                    </div>
                    <Line data={salesData} options={chartOptions} />
                </div>

                {/* Earnings Cards */}
                <div className="card earnings-card">
                    <h4>Total Earnings</h4>
                    <p>287,493$</p>
                    <span>1.4% Since Last Month</span>
                    <h4>Total Earnings</h4>
                    <p>87,493$</p>
                    <span>5.43% Since Last Month</span>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
