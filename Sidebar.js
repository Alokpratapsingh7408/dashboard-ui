import React from 'react';
import { FaBook, FaChartLine, FaExclamationTriangle, FaFileAlt, FaHome, FaIcons, FaSearch, FaTable, FaUser } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isSidebarOpen, onMenuClick }) => {
    return (
        <>
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>

            <div className="sidebar-logo">
                <h2>Celestial</h2>
            </div>

            <div className="sidebar-profile">
                <img 
                    src="https://via.placeholder.com/150"  
                    alt="Kenneth Osborne" 
                    className="profile-pic" 
                />
                <div className="profile-info">
                    <h3>Kenneth Osborne</h3>
                    <p>Welcome</p>
                    <span className="status-dot online"></span>
                </div>
            </div>

            {/* Search Box */}
            <div className="sidebar-search">
                <label htmlFor="search-box">
                    <input 
                        type="text" 
                        id="search-box" 
                        placeholder="Type to search..."
                    />
                    <FaSearch className="search-icon" />
                </label>
            </div>

            <p className="category-title">Dash menu</p>
            
            <div className="sidebar-menu">
            <ul>
                    <li className="active"><a href="#"><FaHome /> Dashboard <span className="menu-badge">New</span></a></li>
                    <li><a href="#"><FaIcons /> UI Elements</a></li>
                    <li><a href="#"><FaFileAlt /> Form Elements</a></li>
                    <li><a href="#"><FaChartLine /> Charts</a></li>
                    <li><a href="#"><FaTable /> Tables</a></li>
                    <li><a href="#"><FaIcons /> Icons</a></li>
                    <li><a href="#"><FaUser /> User Pages</a></li>
                    <li><a href="#"><FaExclamationTriangle /> Error Pages</a></li>
                    <li><a href="#"><FaBook /> Documentation</a></li>
                </ul>
            </div>

            <div className="sidebar-category">
                <p className="category-title">Category</p>
                <ul>
                    <li><span className="dot red"></span>#Sales</li>
                    <li><span className="dot green"></span>#Marketing</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
