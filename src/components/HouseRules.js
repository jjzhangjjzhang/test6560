import React from 'react';

function HouseRules() {
  return (
    <div className="section">
      <h2>House Rules & Guidelines</h2>
      
      <p>
        To ensure everyone has a comfortable and enjoyable stay, please follow these house rules. They help us maintain a clean, safe, and welcoming environment for all our guests and our neighbors.
      </p>
      
      <div className="rules-grid">
        <div className="rule-item">
          <h4>🕐 Check-in & Check-out</h4>
          <p><strong>Check-in:</strong> After 4:00 PM (We are unable to offer early check-in due to cleaning and preparation requirements.)</p>
          <p><strong>Check-out:</strong> By 12:00 PM</p>
          <p><strong>Early Check-in/Late Check-out:</strong> Not available due to cleaning requirements</p>
        </div>
        
        <div className="rule-item">
          <h4>👥 Guest Limits</h4>
          <p><strong>Maximum Guests:</strong> 10 total (including children)</p>
          <p><strong>Adult Limit:</strong> No more than 8 adults</p>
          <p><strong>Enforcement:</strong> These limits are strictly enforced for safety and neighborhood compliance</p>
        </div>
        
        <div className="rule-item">
          <h4>🚭 Smoking & Pets</h4>
          <p><strong>Smoking:</strong> Smoking, vaping, and e-cigarettes are not allowed anywhere on the property</p>
          <p><strong>Pets:</strong> Pets are not allowed</p>
          <p><strong>Service Animals:</strong> Please contact us in advance if you have a service animal</p>
        </div>
        
        <div className="rule-item">
          <h4>🔇 Noise & Quiet Hours</h4>
          <p><strong>Quiet Hours:</strong> 10:00 PM - 8:00 AM</p>
          <p><strong>Noise Policy:</strong> Keep all noise, including music, at low volumes, especially outdoors</p>
          <p><strong>Important:</strong> Please be especially quiet between 12:00 AM and 6:00 AM</p>
        </div>
        
        <div className="rule-item">
          <h4>🎉 Events & Parties</h4>
          <p><strong>Parties:</strong> Events or parties are strictly prohibited</p>
          <p><strong>Camera Monitoring:</strong> Security cameras monitor guest count for compliance</p>
          <p><strong>Enforcement:</strong> If more than 16 people are detected, immediate eviction may be required</p>
        </div>
        
        <div className="rule-item">
          <h4>📸 Photography & Filming</h4>
          <p><strong>Commercial Use:</strong> Commercial photography and filming are allowed</p>
          <p><strong>Residential Use:</strong> Personal photos and videos are welcome</p>
          <p><strong>Restrictions:</strong> Please respect privacy and noise guidelines</p>
        </div>
        
        <div className="rule-item">
          <h4>🏘️ Neighborhood Respect</h4>
          <p><strong>Environment:</strong> This is a quiet, family-oriented neighborhood</p>
          <p><strong>Outdoor Activities:</strong> Keep outdoor noise minimal, especially in front and back yards</p>
          <p><strong>Community:</strong> We want to be respectful of our neighbors</p>
        </div>
        
        <div className="rule-item">
          <h4>📹 Security & Safety</h4>
          <p><strong>Cameras:</strong> Security cameras are installed at the front and back of the property</p>
          <p><strong>Purpose:</strong> For your safety and to ensure compliance with house rules</p>
          <p><strong>Privacy:</strong> Cameras are positioned to monitor exterior areas only</p>
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
      
      <div style={{ 
        background: '#fef5e7', 
        border: '1px solid #fed7aa', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '1rem'
      }}>
        <h4 style={{ color: '#c05621', marginBottom: '0.5rem' }}>💡 Pro Tip</h4>
        <p style={{ margin: 0, color: '#744210' }}>
          Plan your arrival after 4:00 PM and departure before 12:00 PM to ensure a smooth check-in and check-out process. Remember, this is a peaceful neighborhood - keeping noise levels down helps everyone enjoy their stay!
        </p>
      </div>
    </div>
  );
}

export default HouseRules; 