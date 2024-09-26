import React from 'react';
import './DashboardLayout.css'; // Styles for dashboard layout

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-header">
        <h1>Statistic</h1>
        <div className="dashboard-header-actions">
          <button>Last 7 Days</button>
          <button>Export</button>
          <button>inf0</button>

        </div>
      </div>

      <div className="dashboard-cards">
        <div className="card">Card 1 - Sessions By Channel</div>
        <div className="card">Card 2 - Events</div>
        <div className="card">Card 3 - Device Stats</div>
        <div className="card">Card 4 - Sales Analytics</div>
        <div className="card">Card 5 - Total Earnings</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
