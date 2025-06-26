import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import HouseRules from './components/HouseRules';
import Amenities from './components/Amenities';
import LocalFavorites from './components/LocalFavorites';
import Departure from './components/Departure';

function App() {
  const [activeTab, setActiveTab] = useState('welcome');

  const tabs = [
    { id: 'welcome', label: 'Welcome', icon: '🏠', component: Welcome },
    { id: 'contact', label: 'Contact', icon: '📞', component: Contact },
    { id: 'house-rules', label: 'House Rules', icon: '📋', component: HouseRules },
    { id: 'amenities', label: 'Amenities', icon: '🔧', component: Amenities },
    { id: 'local-favorites', label: 'Local Guide', icon: '🗺️', component: LocalFavorites },
    { id: 'departure', label: 'Departure', icon: '👋', component: Departure }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="App">
      <div className="header">
        <div className="header-content">
          <div className="property-info">
            <h1>Welcome to Your Home Away From Home</h1>
            <p className="subtitle">We're excited to have you stay with us!</p>
          </div>
          <div className="property-image">
            <img 
              src="./images/inside.jpg" 
              alt="6560 Cascade St, San Diego" 
              className="header-property-image"
            />
          </div>
        </div>
      </div>
      
      <div className="main-container">
        <nav className="navigation">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">{tab.label}</span>
            </button>
          ))}
        </nav>

        <main className="content">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}

export default App; 