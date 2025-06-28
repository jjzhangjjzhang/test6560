import React from 'react';
import WeatherWidget from './WeatherWidget';

function Welcome() {
  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/page-cover_photo-16978.jpg',
      alt: 'Beautiful San Diego property',
      title: 'Your Home Away From Home'
    },
    {
      src: process.env.PUBLIC_URL + '/images/crystal pier pacific beach sunset.jpg',
      alt: 'Crystal Pier Pacific Beach Sunset',
      title: 'Stunning Pacific Beach Views'
    },
    {
      src: process.env.PUBLIC_URL + '/images/blue-horizons.jpg',
      alt: 'Seaworld San Diego',
      title: 'Seaworld San Diego'
    },
    {
      src: process.env.PUBLIC_URL + '/images/San_Diego_Zoo_Entrance_.jpg',
      alt: 'San Diego Zoo Entrance',
      title: 'World-Famous San Diego Zoo'
    },
    {
      src: process.env.PUBLIC_URL + '/images/Legoland-California-on-a-Budget-Park-Entrance.webp',
      alt: 'Legoland California Park Entrance',
      title: 'Legoland California'
    }
  ];

  return (
    <div className="section">
      <h2>Welcome to Your Home Away From Home</h2>
      
      <p>
        We're thrilled to have you stay with us! This guide will help you make the most of your time here and ensure you have everything you need for a comfortable and enjoyable stay.
      </p>
      
      {/* Hero Image */}
      <div className="hero-image-container">
        <img 
          src={process.env.PUBLIC_URL + "/images/67-print-Radiate_6560CascadeSt-67.jpg"} 
          alt="6560 Cascade St, San Diego - Your Home Away From Home" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <h3>Welcome to 6560 Cascade St!</h3>
          <p>Your perfect San Diego vacation home awaits</p>
        </div>
      </div>
      
      {/* Weather Widget */}
      <WeatherWidget />
      
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
      
      {/* Image Gallery */}
      <h3>Discover San Diego</h3>
      <p>Explore the amazing attractions and beautiful scenery that make San Diego a world-class destination:</p>
      
      <div className="image-gallery">
        {images.slice(1).map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image"
            />
            <div className="image-caption">
              <h4>{image.title}</h4>
            </div>
          </div>
        ))}
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