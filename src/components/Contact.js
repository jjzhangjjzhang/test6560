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
          <p><strong>Name:</strong> [Your Name]</p>
          <p><strong>Phone:</strong> [Your Phone Number]</p>
          <p><strong>Email:</strong> [Your Email]</p>
        </div>
        
        <div className="contact-card">
          <h4>🏠 Property Details</h4>
          <p><strong>Address:</strong> [Your Property Address]</p>
          <p><strong>Check-in:</strong> [Your Check-in Time]</p>
          <p><strong>Check-out:</strong> [Your Check-out Time]</p>
        </div>
        
        <div className="contact-card">
          <h4>🚨 Emergency Contacts</h4>
          <p><strong>Emergency Services:</strong> 911</p>
          <p><strong>Local Police:</strong> [Local Police Number]</p>
          <p><strong>Nearest Hospital:</strong> [Hospital Name & Number]</p>
        </div>
        
        <div className="contact-card">
          <h4>🔧 Maintenance</h4>
          <p><strong>Property Manager:</strong> [Manager Name]</p>
          <p><strong>Maintenance:</strong> [Maintenance Contact]</p>
          <p><strong>Cleaning Service:</strong> [Cleaning Contact]</p>
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