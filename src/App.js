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
    { id: 'welcome', label: 'Welcome', component: Welcome },
    { id: 'contact', label: 'Contact', component: Contact },
    { id: 'house-rules', label: 'House Rules', component: HouseRules },
    { id: 'amenities', label: 'Amenities', component: Amenities },
    { id: 'local-favorites', label: 'Local Favorites', component: LocalFavorites },
    { id: 'departure', label: 'Departure', component: Departure }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Guest!</h1>
        <p>We're so happy to have you. Here's a little guide to help you get settled.</p>
      </header>
      
      <div className="container">
        <div className="tab-container">
          <div className="tab-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}

export default App; 