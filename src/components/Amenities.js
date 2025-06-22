import React from 'react';

function Amenities() {
  return (
    <div className="section">
      <h2>Home Guide & Amenities</h2>
      
      <p>
        Here's everything you need to know about the amenities in your home. If you have any questions about how to use anything, please don't hesitate to ask!
      </p>
      
      <div className="amenity-grid">
        <div className="amenity-card">
          <h4><span className="amenity-icon">📺</span> Television & Entertainment</h4>
          <p><strong>Smart TV:</strong> Located in the living room</p>
          <p><strong>Streaming Services:</strong> Netflix, Hulu, and Disney+ available</p>
          <p><strong>Remote Control:</strong> On the coffee table</p>
          <p><strong>Instructions:</strong> Press the power button and use the input button to switch between cable and streaming apps</p>
        </div>
        
        <div className="amenity-card">
          <h4><span className="amenity-icon">☕</span> Coffee Maker & Kitchen</h4>
          <p><strong>Coffee Maker:</strong> Keurig K-Cup machine</p>
          <p><strong>K-Cups:</strong> Provided in the cabinet above the coffee maker</p>
          <p><strong>Instructions:</strong> Add water, insert K-Cup, press brew button</p>
          <p><strong>Dishes:</strong> All dishes and utensils provided</p>
        </div>
        
        <div className="amenity-card">
          <h4><span className="amenity-icon">🌡️</span> Climate Control</h4>
          <p><strong>Thermostat:</strong> Located in the hallway</p>
          <p><strong>Temperature:</strong> Set to 72°F (22°C) by default</p>
          <p><strong>Instructions:</strong> Use the up/down arrows to adjust temperature</p>
          <p><strong>Fan:</strong> Ceiling fans in living room and bedrooms</p>
        </div>
        
        <div className="amenity-card">
          <h4><span className="amenity-icon">🚿</span> Bathroom & Laundry</h4>
          <p><strong>Shower:</strong> Hot water available 24/7</p>
          <p><strong>Towels:</strong> Clean towels provided in bathroom cabinet</p>
          <p><strong>Washer/Dryer:</strong> In the laundry room</p>
          <p><strong>Instructions:</strong> Use regular detergent, cold water for colors</p>
        </div>
        
        <div className="amenity-card">
          <h4><span className="amenity-icon">🔑</span> Keys & Access</h4>
          <p><strong>Front Door:</strong> Key provided in welcome packet</p>
          <p><strong>Garage:</strong> Remote control on kitchen counter</p>
          <p><strong>Security System:</strong> Disarmed during your stay</p>
          <p><strong>Emergency Exit:</strong> Back door and windows</p>
        </div>
        
        <div className="amenity-card">
          <h4><span className="amenity-icon">💡</span> Lighting & Power</h4>
          <p><strong>Light Switches:</strong> Located at each room entrance</p>
          <p><strong>Outlets:</strong> USB charging ports in living room and bedrooms</p>
          <p><strong>Emergency Light:</strong> Flashlight in kitchen drawer</p>
          <p><strong>Power Outage:</strong> Contact us immediately if power goes out</p>
        </div>
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