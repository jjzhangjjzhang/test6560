import React from 'react';

function Contact() {
  return (
    <div className="section">
      <h2>Contact Information</h2>
      
      <p>
        Here's how to reach us during your stay. We're available to help with any questions or concerns you might have.
      </p>
      
      <div className="contact-grid">
        <div className="contact-card">
          <h4>👤 Host Contact</h4>
          <p><strong>Name:</strong> Jingjing Zhang</p>
          <p><strong>Phone:</strong> 858-252-5617</p>
        </div>
        
        <div className="contact-card">
          <h4>🏠 Property Details</h4>
          <p><strong>Address:</strong> 6560 Cascade St, San Diego, CA 92122</p>
          <p><strong>Check-in:</strong> After 4:00 PM</p>
          <p><strong>Check-out:</strong> By 12:00 PM</p>
        </div>
        
        <div className="contact-card">
          <h4>🚨 Emergency Contacts</h4>
          <p><strong>Emergency Services:</strong> 911</p>
          <p><strong>Local Police:</strong> San Diego Police Department</p>
          <p><strong>SDPD Non-Emergency:</strong> <a href="tel:6195312000">(619) 531-2000</a> &nbsp;|&nbsp; <a href="https://www.sandiego.gov/police" target="_blank" rel="noopener noreferrer">Website</a></p>
          <p><strong>Nearest Hospital:</strong> <a href="https://maps.app.goo.gl/hrhuU3Vqqi3nRkE9A" target="_blank" rel="noopener noreferrer">Scripps Memorial Hospital La Jolla</a></p>
        </div>
      </div>
      
      <div style={{ 
        background: '#fef5e7', 
        border: '1px solid #fed7aa', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '2rem'
      }}>
        <h4 style={{ color: '#c05621', marginBottom: '0.5rem' }}>💡 Pro Tip</h4>
        <p style={{ margin: 0, color: '#744210' }}>
          Save our contact information to your phone for quick access during your stay. We typically respond within 30 minutes during business hours.
        </p>
      </div>
    </div>
  );
}

export default Contact; 