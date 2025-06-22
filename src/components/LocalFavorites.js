import React from 'react';

function LocalFavorites() {
  return (
    <div className="section">
      <h2>Local Guide & Recommendations</h2>
      
      <p>
        Discover the best of our neighborhood! These are our personal favorites - places we love and think you will too. From amazing restaurants to hidden gems, here's your local insider guide.
      </p>
      
      <div className="local-categories">
        <div className="category">
          <h3><span className="category-icon">🍽️</span> Restaurants & Dining</h3>
          <ul>
            <li><strong>[Restaurant Name]</strong> - Our absolute favorite! Perfect for [occasion]. Try the [signature dish]. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Restaurant Name]</strong> - Great for [cuisine type]. Known for their [specialty]. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Restaurant Name]</strong> - Casual dining with amazing [food type]. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Restaurant Name]</strong> - Perfect for date night or special occasions. <em>📍 [Address] | 📞 [Phone]</em></li>
          </ul>
        </div>
        
        <div className="category">
          <h3><span className="category-icon">☕</span> Cafes & Coffee Shops</h3>
          <ul>
            <li><strong>[Cafe Name]</strong> - Best coffee in the neighborhood! Great pastries too. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Cafe Name]</strong> - Cozy spot with amazing lattes and breakfast. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Cafe Name]</strong> - Perfect for working remotely with good Wi-Fi. <em>📍 [Address] | 📞 [Phone]</em></li>
          </ul>
        </div>
        
        <div className="category">
          <h3><span className="category-icon">🛍️</span> Shopping & Essentials</h3>
          <ul>
            <li><strong>[Grocery Store]</strong> - Best local grocery store for fresh produce and essentials. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Pharmacy]</strong> - 24-hour pharmacy for any medical needs. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Shopping Center]</strong> - Great for shopping, movies, and entertainment. <em>📍 [Address] | 📞 [Phone]</em></li>
          </ul>
        </div>
        
        <div className="category">
          <h3><span className="category-icon">🎭</span> Attractions & Activities</h3>
          <ul>
            <li><strong>[Attraction Name]</strong> - A must-see! [Description of what makes it special]. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Park Name]</strong> - Beautiful park perfect for walking, jogging, or picnics. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Museum/Gallery]</strong> - Great for a cultural afternoon. [Special exhibits or features]. <em>📍 [Address] | 📞 [Phone]</em></li>
            <li><strong>[Activity Center]</strong> - Perfect for families with kids. [Activities available]. <em>📍 [Address] | 📞 [Phone]</em></li>
          </ul>
        </div>
        
        <div className="category">
          <h3><span className="category-icon">🚗</span> Transportation</h3>
          <ul>
            <li><strong>Public Transit:</strong> Bus stop at [location] - Route [number] to downtown</li>
            <li><strong>Ride Share:</strong> Uber and Lyft readily available in the area</li>
            <li><strong>Bike Paths:</strong> Beautiful bike trails starting at [location]</li>
            <li><strong>Parking:</strong> Free street parking available, garage at [location]</li>
          </ul>
        </div>
      </div>
      
      <div style={{ 
        background: '#fef5e7', 
        border: '1px solid #fed7aa', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '2rem'
      }}>
        <h4 style={{ color: '#c05621', marginBottom: '0.5rem' }}>💡 Local Insider Tips</h4>
        <ul style={{ margin: 0, color: '#744210', paddingLeft: '1.5rem' }}>
          <li>Best time to visit [popular spot]: [time/day]</li>
          <li>Don't miss the [local event/festival] happening [when]</li>
          <li>For the best photos, visit [location] during [time]</li>
          <li>Local secret: [hidden gem or insider tip]</li>
        </ul>
      </div>
    </div>
  );
}

export default LocalFavorites; 