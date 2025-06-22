import React from 'react';

function HouseRules() {
  return (
    <div className="section">
      <h2>House Rules & Guidelines</h2>
      
      <p>
        To ensure everyone has a comfortable and enjoyable stay, please follow these house rules. They help us maintain a clean, safe, and welcoming environment for all our guests.
      </p>
      
      <div className="rules-grid">
        <div className="rule-item">
          <h4>🕐 Check-in & Check-out</h4>
          <p><strong>Check-in:</strong> After [Your Check-in Time]</p>
          <p><strong>Check-out:</strong> Before [Your Check-out Time]</p>
          <p><strong>Early Check-in/Late Check-out:</strong> Available upon request (subject to availability)</p>
        </div>
        
        <div className="rule-item">
          <h4>📶 Wi-Fi & Connectivity</h4>
          <p><strong>Network:</strong> [Network Name]</p>
          <p><strong>Password:</strong> [Password]</p>
          <p><strong>Speed:</strong> High-speed internet included</p>
        </div>
        
        <div className="rule-item">
          <h4>🚭 Smoking & Pets</h4>
          <p><strong>Smoking:</strong> No smoking indoors. Designated smoking area available outside.</p>
          <p><strong>Pets:</strong> [Pet Policy - Allowed/Not Allowed]</p>
          <p><strong>Service Animals:</strong> Always welcome</p>
        </div>
        
        <div className="rule-item">
          <h4>🔇 Noise & Quiet Hours</h4>
          <p><strong>Quiet Hours:</strong> 10:00 PM - 8:00 AM</p>
          <p><strong>Parties:</strong> No parties or large gatherings without prior approval</p>
          <p><strong>Music:</strong> Keep volume at reasonable levels</p>
        </div>
        
        <div className="rule-item">
          <h4>🧹 Cleanliness & Maintenance</h4>
          <p><strong>Kitchen:</strong> Please clean up after cooking</p>
          <p><strong>Trash:</strong> Use designated bins and take out regularly</p>
          <p><strong>Damages:</strong> Report any issues immediately</p>
        </div>
        
        <div className="rule-item">
          <h4>🔒 Security & Safety</h4>
          <p><strong>Keys:</strong> Keep keys secure and return upon check-out</p>
          <p><strong>Doors:</strong> Always lock doors when leaving</p>
          <p><strong>Emergency:</strong> Know emergency exits and procedures</p>
        </div>
      </div>
      
      <div style={{ 
        background: '#f0fff4', 
        border: '1px solid #9ae6b4', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '2rem'
      }}>
        <h4 style={{ color: '#22543d', marginBottom: '0.5rem' }}>✅ Important Reminder</h4>
        <p style={{ margin: 0, color: '#2f855a' }}>
          Following these rules helps ensure a great experience for everyone. If you have any questions about these guidelines, please don't hesitate to ask!
        </p>
      </div>
    </div>
  );
}

export default HouseRules; 