import React from 'react';

function Welcome() {
  return (
    <div className="section">
      <h2>Welcome to Your Home Away From Home</h2>
      
      <p>
        We're thrilled to have you stay with us! This guide will help you make the most of your time here and ensure you have everything you need for a comfortable and enjoyable stay.
      </p>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '2rem', 
        borderRadius: '12px', 
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Quick Start Guide</h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Check out the navigation menu to find everything you need - from contact information to local recommendations!
        </p>
      </div>
      
      <h3>What's Included</h3>
      <ul>
        <li><strong>Essential Information:</strong> Contact details, house rules, and check-in/check-out procedures</li>
        <li><strong>Home Guide:</strong> Instructions for all amenities and appliances</li>
        <li><strong>Local Recommendations:</strong> Our favorite restaurants, cafes, and attractions</li>
        <li><strong>Departure Checklist:</strong> Everything you need to know before leaving</li>
      </ul>
      
      <h3>Need Help?</h3>
      <p>
        If you have any questions or need assistance during your stay, don't hesitate to reach out. We're here to make sure you have the best possible experience!
      </p>
    </div>
  );
}

export default Welcome; 