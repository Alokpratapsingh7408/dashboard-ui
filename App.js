import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar'; // Import Calendar component
import Employee from './Employee'; // Import Employee component
import Header from './Header'; // Import Header
import Sidebar from './Sidebar'; // Import Sidebar
import Statistic from './Statistic'; // Import Statistic component

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activePage, setActivePage] = useState('calendar'); // State to track the active page

    // Function to toggle the sidebar open/close
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to render the correct page based on activePage state
    const renderPage = () => {
        switch (activePage) {
            case 'calendar':
                return <Calendar />;
            case 'employee':
                return <Employee />;
            case 'statistic':
                return <Statistic />;
            default:
                return <Calendar />;
        }
    };

    return (
        <div className="app">
            {/* Sidebar Component */}
            <Sidebar isSidebarOpen={isSidebarOpen} />
             
            {/* Main Content Area */}
            <div className="main-content">
                {/* Pass toggleSidebar and setActivePage as props to Header */}
                 
                <Header toggleSidebar={toggleSidebar} setActivePage={setActivePage} />
                
                {/* Render the current page based on the activePage state */}
                <div className="page-content">
                    {renderPage()}
                </div>
                
            </div>
        </div>
    );
};

export default App;
