import React, { useState } from 'react';

function Amenities() {
  const [activeCategory, setActiveCategory] = useState('entertainment');

  const categories = [
    { id: 'entertainment', label: 'Entertainment', icon: '📺' },
    { id: 'kitchen', label: 'Kitchen', icon: '🍽️' },
    { id: 'climate', label: 'Climate & Power', icon: '🌡️' },
    { id: 'bathroom', label: 'Bathroom & Laundry', icon: '🚿' },
    { id: 'access', label: 'Access & Security', icon: '🔑' },
    { id: 'games', label: 'Games & Activities', icon: '🎮' }
  ];

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'entertainment':
        return (
          <div className="amenity-card">
            <h4><span className="amenity-icon">📺</span> Television & Entertainment</h4>
            <p><strong>Living Room TV:</strong> Smart TV with streaming capabilities</p>
            <p><strong>Living Room Remote:</strong> Located on the coffee table</p>
            <p><strong>Master Bedroom TV:</strong> Regular TV (not smart TV)</p>
            <p><strong>Master Bedroom Remote:</strong> Located beside the TV</p>
            <p><strong>Instructions:</strong> Press the power button to turn on. For the smart TV, use the input button to switch between cable and streaming apps</p>
          </div>
        );
      
      case 'kitchen':
        return (
          <>
            <div className="amenity-card">
              <h4><span className="amenity-icon">☕</span> Coffee Maker & Kitchen</h4>
              <p><strong>Keurig K-Cup Machine:</strong> Single-serve coffee maker</p>
              <p><strong>K-Cups:</strong> Provided beside the coffee machine</p>
              <p><strong>Regular Coffee Machine:</strong> 10-cup traditional coffee maker</p>
              <p><strong>Coffee Grounds:</strong> Provided beside the coffee machine</p>
              <p><strong>Instructions:</strong> For Keurig: Add water, insert K-Cup, press brew. For regular machine: Add water and coffee grounds, press brew</p>
              <p><strong>Dishes:</strong> All dishes and utensils provided</p>
            </div>
            
            <div className="amenity-card">
              <h4><span className="amenity-icon">🍚</span> Kitchen Appliances</h4>
              <p><strong>Rice Maker:</strong> Available in the kitchen</p>
              <p><strong>Rice:</strong> Available in the pantry</p>
              <p><strong>Toaster:</strong> Available in the kitchen</p>
              <p><strong>Instructions:</strong> For rice maker: Add rice and water according to the markings inside the pot. For toaster: Insert bread and press down the lever</p>
            </div>
          </>
        );
      
      case 'climate':
        return (
          <div className="amenity-card">
            <h4><span className="amenity-icon">🌡️</span> Climate Control</h4>
            <p><strong>System:</strong> Central AC and heater</p>
            <p><strong>Thermostat:</strong> Google Nest located in the hallway</p>
            <p><strong>Instructions:</strong> Tap on the side of the Nest thermostat, then select your desired temperature</p>
            <p><strong>Fan:</strong> Floor fans provided in living room and bedrooms</p>
          </div>
        );
      
      case 'bathroom':
        return (
          <div className="amenity-card">
            <h4><span className="amenity-icon">🚿</span> Bathroom & Laundry</h4>
            <p><strong>Shower:</strong> Hot water available 24/7</p>
            <p><strong>Clean Towels:</strong> Located in the closet in the hallway</p>
            <p><strong>Washer/Dryer:</strong> Located in the garage</p>
            <p><strong>Instructions:</strong> Use regular detergent, cold water for colors</p>
          </div>
        );
      
      case 'access':
        return (
          <>
            <div className="amenity-card">
              <h4><span className="amenity-icon">🔑</span> Keys & Access</h4>
              <p><strong>Front Door:</strong> Smart lock - passcode will be provided on the day of arrival</p>
              <p><strong>Security System:</strong> Disarmed during your stay</p>
              <p><strong>Emergency Exit:</strong> Back door and windows</p>
            </div>
            
            <div className="amenity-card">
              <h4><span className="amenity-icon">💡</span> Lighting & Power</h4>
              <p><strong>Light Switches:</strong> Located at each room entrance</p>
              <p><strong>Electrical Panel:</strong> Located on the outside wall of the garage. Exit the door near the dryer to access the panel</p>
              <p><strong>Power Outage:</strong> Contact us immediately if power goes out</p>
            </div>
          </>
        );
      
      case 'games':
        return (
          <>
            <div className="amenity-card">
              <h4><span className="amenity-icon">🎮</span> Game Room & Entertainment</h4>
              <p><strong>Air Hockey Table:</strong> Available in the game room</p>
              <p><strong>3-in-1 Game Table:</strong> Available in the game room</p>
              <p><strong>Basketball Machine:</strong> Available in the game room</p>
              <p><strong>Child Play Kitchen:</strong> Available in the game room</p>
              <p><strong>Drawing Supplies:</strong> Available in the game room</p>
              <p><strong>Toddler Bookshelf:</strong> Small book collection for toddlers in the game room</p>
            </div>
            
            <div className="amenity-card">
              <h4><span className="amenity-icon">🏌️</span> Backyard Activities</h4>
              <p><strong>Putty Mat:</strong> Available in the backyard</p>
              <p><strong>Putter:</strong> Located in the game room</p>
              <p><strong>Cornhole:</strong> Available in the backyard</p>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="section">
      <h2>Home Guide & Amenities</h2>
      
      <p>
        Here's everything you need to know about the amenities in your home. Click on a category below to find specific information.
      </p>
      
      {/* Category Navigation */}
      <div className="category-nav" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '0.5rem', 
        marginBottom: '2rem',
        padding: '1rem',
        background: '#f8f9fa',
        borderRadius: '12px'
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              padding: '0.75rem 1rem',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              background: activeCategory === category.id ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
              color: activeCategory === category.id ? 'white' : '#4a5568',
              boxShadow: activeCategory === category.id ? '0 4px 12px rgba(102, 126, 234, 0.4)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Category Content */}
      <div className="category-content">
        {renderCategoryContent()}
      </div>
      
      <div style={{ 
        background: '#e6fffa', 
        border: '1px solid #81e6d9', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '2rem'
      }}>
        <h4 style={{ color: '#234e52', marginBottom: '0.5rem' }}>🔧 Troubleshooting</h4>
        <p style={{ margin: 0, color: '#285e61' }}>
          If something isn't working properly, please check the troubleshooting guide in the welcome packet or contact us immediately. We're here to help!
        </p>
      </div>
    </div>
  );
}

export default Amenities; 