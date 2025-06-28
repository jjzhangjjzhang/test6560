import React from 'react';

function Departure() {
  return (
    <div className="section">
      <h2>Departure Checklist</h2>
      
      <p>
        Thank you for choosing to stay with us! We hope you're having a 5-star stay. To ensure a smooth check-out process and help us prepare for our next guests, please follow this departure checklist.
      </p>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '12px', 
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Check-out Time: 12:00 PM</h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          There isn't too much you need to do, just a few small actions that will really help us turn the house around for the next guest.
        </p>
      </div>
      
      <div className="rules-grid">
        <div className="rule-item">
          <h4>📦 Personal Items</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Double-check for any personal items before you head out</li>
            <li>Check all rooms, closets, and under beds</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🗑️ Trash & Cleanup</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Collect all the trash and put it in the trash cans in the backyard with trash bags</li>
            <li>Wash all the dishes</li>
            <li>Place used towels in the laundry basket</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🔌 Electronics & Lights</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Turn off all the lights and electronics</li>
            <li>Log out of any streaming services on the smart TV</li>
            <li>Unplug any personal electronics</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🚪 Doors & Security</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Lock the front door by pressing the right bottom key (with ✔️) in the keypad</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🎮 Game Room & Backyard</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Return any game equipment to its proper place</li>
            <li>Put away drawing supplies and toys</li>
            <li>Return putter to the game room if used</li>
            <li>Clean up any outdoor activities</li>
          </ul>
        </div>
        
        <div className="rule-item">
          <h4>🚗 Final Steps</h4>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Move your car from the driveway</li>
            <li>Take one final walk-through of the property</li>
            <li>Have a safe trip home!</li>
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
          Thank you in advance and welcome back anytime. We hope you had a wonderful stay and would love to host you again in the future!
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