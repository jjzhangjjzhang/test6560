import React from 'react';

function Departure() {
  return (
    <div className="section">
      <h2>Departure Checklist</h2>
      
      <p>
        Thank you for choosing to stay with us! To ensure a smooth check-out process and help us prepare for our next guests, please follow this departure checklist.
      </p>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '12px', 
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Check-out Time: [Your Check-out Time]</h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Please ensure you've completed all items on the checklist below before leaving.
        </p>
      </div>
      
      <div className="rules-grid">
        <div className="rule-item">
          <h4>🧹 Cleanliness</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Take out all trash and recycling</li>
            <li>Place used towels in the laundry basket</li>
            <li>Clean up any spills or messes</li>
            <li>Wash any dishes you used</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🔌 Electronics & Appliances</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Log out of all streaming services (Netflix, Hulu, etc.)</li>
            <li>Turn off all lights and ceiling fans</li>
            <li>Set thermostat back to 72°F (22°C)</li>
            <li>Unplug any personal electronics</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🔑 Keys & Access</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Return all keys to the designated location</li>
            <li>Lock all doors and windows</li>
            <li>Return garage remote to kitchen counter</li>
            <li>Ensure security system is armed (if applicable)</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>📱 Personal Items</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Check all rooms for personal belongings</li>
            <li>Empty refrigerator of any food you brought</li>
            <li>Collect any items from bathroom</li>
            <li>Check under beds and in closets</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🚗 Transportation</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Move your car from the driveway/garage</li>
            <li>Return any borrowed items (umbrellas, etc.)</li>
            <li>Ensure parking spot is clear for next guests</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>📞 Final Steps</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Send us a quick message when you leave</li>
            <li>Leave any feedback in the guest book</li>
            <li>Rate your stay on the booking platform</li>
            <li>Consider leaving a review for future guests</li>
          </ul>
        </div>
      </div>
      
      <div style={{ 
        background: '#f0fff4', 
        border: '1px solid #9ae6b4', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '2rem'
      }}>
        <h4 style={{ color: '#22543d', marginBottom: '0.5rem' }}>💝 Thank You!</h4>
        <p style={{ margin: 0, color: '#2f855a' }}>
          We hope you had a wonderful stay! It was a pleasure hosting you, and we'd love to welcome you back anytime. Safe travels!
        </p>
      </div>
      
      <div style={{ 
        background: '#fef5e7', 
        border: '1px solid #fed7aa', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '1rem'
      }}>
        <h4 style={{ color: '#c05621', marginBottom: '0.5rem' }}>📞 Need Help?</h4>
        <p style={{ margin: 0, color: '#744210' }}>
          If you need assistance with check-out or have any questions, please don't hesitate to contact us. We're here to help make your departure as smooth as possible.
        </p>
      </div>
    </div>
  );
}

export default Departure; 