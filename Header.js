import React from 'react';
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = ({ toggleSidebar, setActivePage }) => {
    return (
        <div className="header">
            {/* Left-side Hamburger and Navigation Links */}
            <div className="header-navigation">
                {/* Hamburger Menu Icon */}
                <FaBars className="hamburger-icon" onClick={toggleSidebar} />

                <ul>
                    {/* On click, we use setActivePage to switch to the correct page */}
                    <li><a href="#" onClick={() => setActivePage('calendar')}>Calendar</a></li>
                    <li><a href="#" onClick={() => setActivePage('statistic')}>Statistic</a></li>
                    <li><a href="#" onClick={() => setActivePage('employee')}>Employee</a></li>
                </ul>
            </div>

            {/* Right-side User Actions */}
            <div className="header-actions">
                <button className="help-button">Help</button>

                <div className="notifications">
                    <FaEnvelope className="icon" />
                    <span className="badge green">2</span> {/* Green Pop-up badge */}
                </div>

                <div className="alerts">
                    <FaBell className="icon" />
                    <span className="badge red">2</span> {/* Red Pop-up badge */}
                </div>

                <div className="user-profile">
                    <FaUserCircle className="icon" />
                    <span>Evan Morales</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
