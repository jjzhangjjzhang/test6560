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
  const [localGuideSubTab, setLocalGuideSubTab] = useState('attractions');
  const [showLocalGuideSubTabs, setShowLocalGuideSubTabs] = useState(false);

  const tabs = [
    { id: 'welcome', label: 'Welcome', icon: '🏠', component: Welcome },
    { id: 'contact', label: 'Contact', icon: '📞', component: Contact },
    { id: 'house-rules', label: 'House Rules', icon: '📋', component: HouseRules },
    { id: 'amenities', label: 'Amenities', icon: '🔧', component: Amenities },
    { id: 'local-favorites', label: 'Local Guide', icon: '🗺️', component: LocalFavorites },
    { id: 'departure', label: 'Departure', icon: '👋', component: Departure }
  ];

  const localGuideSubTabs = [
    { id: 'attractions', label: 'Attractions', icon: '🎭' },
    { id: 'hiking', label: 'Hiking Trails', icon: '🥾' },
    { id: 'dining', label: 'Dining', icon: '🍽️' },
    { id: 'cafes', label: 'Cafes', icon: '☕' },
    { id: 'shopping', label: 'Shopping', icon: '🛍️' },
    { id: 'transport', label: 'Transportation', icon: '🚗' },
  ];

  const handleTabClick = (tabId) => {
    if (tabId === 'local-favorites') {
      setShowLocalGuideSubTabs(!showLocalGuideSubTabs);
    } else {
      setShowLocalGuideSubTabs(false);
    }
    setActiveTab(tabId);
  };

  const handleSubTabClick = (subTabId) => {
    setLocalGuideSubTab(subTabId);
  };

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
              src="/images/inside.jpg" 
              alt="6560 Cascade St, San Diego" 
              className="header-property-image"
            />
          </div>
        </div>
      </div>
      
      <div className="main-container">
        <nav className="navigation">
          {tabs.map(tab => (
            <div key={tab.id}>
              <button
                className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span className="nav-icon">{tab.icon}</span>
                <span className="nav-label">{tab.label}</span>
                {tab.id === 'local-favorites' && (
                  <span className="expand-icon" style={{ marginLeft: 'auto', fontSize: '0.8rem' }}>
                    {showLocalGuideSubTabs ? '▼' : '▶'}
                  </span>
                )}
              </button>
              
              {tab.id === 'local-favorites' && showLocalGuideSubTabs && (
                <div className="sub-nav">
                  {localGuideSubTabs.map(subTab => (
                    <button
                      key={subTab.id}
                      className={`sub-nav-button ${localGuideSubTab === subTab.id ? 'active' : ''}`}
                      onClick={() => handleSubTabClick(subTab.id)}
                    >
                      <span className="sub-nav-icon">{subTab.icon}</span>
                      <span className="sub-nav-label">{subTab.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <main className="content">
          {activeTab === 'local-favorites' ? (
            <LocalFavorites activeSubTab={localGuideSubTab} />
          ) : (
            <ActiveComponent />
          )}
        </main>
      </div>
    </div>
  );
}

export default App; 