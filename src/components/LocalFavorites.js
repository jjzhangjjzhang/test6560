import React, { useState } from 'react';

function LocalFavorites() {
  const [activeTab, setActiveTab] = useState('attractions');

  const tabs = [
    { id: 'attractions', label: 'Attractions', icon: '🎭' },
    { id: 'hiking', label: 'Hiking Trails', icon: '🥾' },
    { id: 'dining', label: 'Dining', icon: '🍽️' },
    { id: 'cafes', label: 'Cafes', icon: '☕' },
    { id: 'shopping', label: 'Shopping', icon: '🛍️' },
    { id: 'transport', label: 'Transportation', icon: '🚗' },
  ];

  return (
    <div className="section">
      <h2>Local Guide & Recommendations</h2>
      
      <p>
        Discover the best of our neighborhood! These are our personal favorites - places we love and think you will too. From amazing restaurants to hidden gems, here's your local insider guide.
      </p>
      
      {/* Tab Navigation */}
      <div className="category-nav" style={{
        display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1rem', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500', transition: 'all 0.3s ease',
              background: activeTab === tab.id ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
              color: activeTab === tab.id ? 'white' : '#4a5568',
              boxShadow: activeTab === tab.id ? '0 4px 12px rgba(102, 126, 234, 0.4)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="category-content">
        {activeTab === 'attractions' && (
          <div className="category">
            <h3><span className="category-icon">🎭</span> Attractions & Activities</h3>
            <ul>
              <li>
                <strong>San Diego Zoo</strong> – World-famous zoo with thousands of animals.<br/>
                <em>📍 2920 Zoo Dr, San Diego, CA 92101 | 📞 (619) 231-1515</em> <a href="https://www.google.com/maps/search/?api=1&query=2920+Zoo+Dr,+San+Diego,+CA+92101" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Park for free in Balboa Park and walk to the zoo.<br/>
                <img src="/images/zoo.jpg" alt="San Diego Zoo" className="local-guide-image" style={{ width: '180px', height: 'auto' }} />
              </li>
              <li>
                <strong>Balboa Park</strong> – Beautiful urban park with gardens, museums, and walking paths.<br/>
                <em>📍 1549 El Prado, San Diego, CA 92101</em> <a href="https://www.google.com/maps/search/?api=1&query=1549+El+Prado,+San+Diego,+CA+92101" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Free parking available throughout Balboa Park.<br/>
                <img src="/images/balboa_park.jpg" alt="Balboa Park" className="local-guide-image" />
              </li>
              <li>
                <strong>SeaWorld San Diego</strong> – Marine park with shows, rides, and animal encounters.<br/>
                <em>📍 500 SeaWorld Dr, San Diego, CA 92109 | 📞 (619) 222-4732</em> <a href="https://www.google.com/maps/search/?api=1&query=500+SeaWorld+Dr,+San+Diego,+CA+92109" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Onsite parking is expensive. Free street parking is available around Dana Landing (<a href="https://maps.app.goo.gl/Hd1JQ7PM4pro2PYm7" target="_blank" rel="noopener noreferrer">map</a>), about a 15-minute walk.<br/>
                <img src="/images/seaworld.jpg" alt="SeaWorld San Diego" className="local-guide-image" style={{ width: '180px', height: 'auto' }} />
              </li>
              <li>
                <strong>USS Midway Museum</strong> – Historic aircraft carrier museum on the waterfront.<br/>
                <em>📍 910 N Harbor Dr, San Diego, CA 92101 | 📞 (619) 544-9600</em> <a href="https://www.google.com/maps/search/?api=1&query=910+N+Harbor+Dr,+San+Diego,+CA+92101" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Metered parking available nearby.<br/>
                <img src="/images/uss_midway.jpg" alt="USS Midway Museum" className="local-guide-image" />
              </li>
              <li>
                <strong>La Jolla Cove</strong> – Scenic coastal area for swimming, snorkeling, and sea lion watching.<br/>
                <em>📍 1100 Coast Blvd, La Jolla, CA 92037</em> <a href="https://www.google.com/maps/search/?api=1&query=1100+Coast+Blvd,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Closest free parking is at La Jolla Shores (<a href="https://maps.app.goo.gl/qu98jCZ8EgwDqJnG9" target="_blank" rel="noopener noreferrer">map</a>).<br/>
                <img src="/images/la_jolla_cove.jpg" alt="La Jolla Cove" className="local-guide-image" />
              </li>
              <li>
                <strong>Old Town San Diego State Historic Park</strong> – Historic area with shops, restaurants, and museums.<br/>
                <em>📍 4002 Wallace St, San Diego, CA 92110 | 📞 (619) 220-5422</em> <a href="https://www.google.com/maps/search/?api=1&query=4002+Wallace+St,+San+Diego,+CA+92110" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Free parking available in the park.<br/>
                <img src="/images/old_town.jpg" alt="Old Town San Diego State Historic Park" className="local-guide-image" />
              </li>
              <li>
                <strong>Cabrillo National Monument</strong> – Monument with panoramic views and tide pools.<br/>
                <em>📍 1800 Cabrillo Memorial Dr, San Diego, CA 92106 | 📞 (619) 557-5450</em> <a href="https://www.google.com/maps/search/?api=1&query=1800+Cabrillo+Memorial+Dr,+San+Diego,+CA+92106" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Entrance fee required. Free with a National Park Pass.<br/>
                <img src="/images/cabrillo.jpg" alt="Cabrillo National Monument" className="local-guide-image" />
              </li>
              <li>
                <strong>LEGOLAND California Resort</strong> – Theme park for families and LEGO fans.<br/>
                <em>📍 1 Legoland Dr, Carlsbad, CA 92008 | 📞 (888) 690-5346</em> <a href="https://www.google.com/maps/search/?api=1&query=1+Legoland+Dr,+Carlsbad,+CA+92008" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> No free parking available.<br/>
                <img src="/images/legoland.jpg" alt="LEGOLAND California Resort" className="local-guide-image" />
              </li>
              <li>
                <strong>Belmont Park</strong> – Classic beachfront amusement park.<br/>
                <em>📍 3146 Mission Blvd, San Diego, CA 92109 | 📞 (858) 488-1549</em> <a href="https://www.google.com/maps/search/?api=1&query=3146+Mission+Blvd,+San+Diego,+CA+92109" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Free parking available.<br/>
                <img src="/images/belmont_park.jpg" alt="Belmont Park" className="local-guide-image" />
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'hiking' && (
          <div className="category">
            <h3><span className="category-icon">🥾</span> Hiking Trails</h3>
            <ul>
              <li>
                <strong>Torrey Pines State Natural Reserve</strong> – Scenic coastal trails with stunning ocean views, wildflowers, and unique sandstone formations.<br/>
                <em>📍 12600 N Torrey Pines Rd, La Jolla, CA 92037</em> <a href="https://www.google.com/maps/search/?api=1&query=12600+N+Torrey+Pines+Rd,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Easy to moderate trails, family-friendly. Parking: Free, but limited.<br/>
                <img src="/images/torrey_pines_trail.jpg" alt="Torrey Pines State Natural Reserve Trail" className="local-guide-image" />
                <img src="/images/torrey_pines.jpg" alt="Torrey Pines State Natural Reserve" className="local-guide-image" />
              </li>
              <li>
                <strong>Annie's Canyon Trail</strong> – Unique slot canyon hike with fun, narrow passages and beautiful views of the San Elijo Lagoon.<br/>
                <em>📍 498-400 Solana Hills Dr, Solana Beach, CA 92075</em> <a href="https://www.google.com/maps/search/?api=1&query=498-400+Solana+Hills+Dr,+Solana+Beach,+CA+92075" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Easy to moderate, 2 miles round trip. Great for families and photos.<br/>
                <img src="/images/annies_canyon.jpg" alt="Annie's Canyon Trail" className="local-guide-image" />
              </li>
              <li>
                <strong>Cowles Mountain</strong> – The highest point in San Diego, offering panoramic views of the city and beyond.<br/>
                <em>📍 7001 Golfcrest Dr, San Diego, CA 92119</em> <a href="https://www.google.com/maps/search/?api=1&query=7001+Golfcrest+Dr,+San+Diego,+CA+92119" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Moderate, 3 miles round trip. Popular for sunrise and sunset hikes.<br/>
                <img src="/images/cowles_mountain.jpg" alt="Cowles Mountain" className="local-guide-image" />
              </li>
              <li>
                <strong>Iron Mountain Trail</strong> – A favorite for locals, with beautiful views of the mountains and valleys.<br/>
                <em>📍 14847-14909 CA-67, Poway, CA 92064</em> <a href="https://www.google.com/maps/search/?api=1&query=14847-14909+CA-67,+Poway,+CA+92064" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Moderate, 5.6 miles round trip. Ample parking at the trailhead.<br/>
                <img src="/images/iron_mountain.jpg" alt="Iron Mountain Trail" className="local-guide-image" />
              </li>
              <li>
                <strong>Los Peñasquitos Canyon Preserve</strong> – A long, mostly flat trail with a waterfall, creek crossings, and lots of wildlife.<br/>
                <em>📍 12020 Black Mountain Rd, San Diego, CA 92129</em> <a href="https://www.google.com/maps/search/?api=1&query=12020+Black+Mountain+Rd,+San+Diego,+CA+92129" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Easy, 6.8 miles round trip. Great for families and biking.<br/>
                <img src="/images/penasquitos_canyon.jpg" alt="Los Peñasquitos Canyon Preserve" className="local-guide-image" />
              </li>
              <li>
                <strong>Mission Trails Regional Park (Fortuna Mountain Trail)</strong> – A large urban park with multiple trail options, including the challenging Fortuna Mountain.<br/>
                <em>📍 1 Father Junipero Serra Trail, San Diego, CA 92119</em> <a href="https://www.google.com/maps/search/?api=1&query=1+Father+Junipero+Serra+Trail,+San+Diego,+CA+92119" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Moderate to challenging. Multiple trailheads and parking lots.<br/>
                <img src="/images/mission_trails.jpg" alt="Mission Trails Regional Park" className="local-guide-image" />
              </li>
              <li>
                <strong>Cedar Creek Falls</strong> – A dramatic waterfall hike, best in spring.<br/>
                <em>📍 15519 Thornbush Rd, Ramona, CA 92065</em> <a href="https://www.google.com/maps/search/?api=1&query=15519+Thornbush+Rd,+Ramona,+CA+92065" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Moderate to strenuous, 6 miles round trip. Swimming allowed at the falls (seasonal).<br/>
                <img src="/images/cedar_creek_falls.jpg" alt="Cedar Creek Falls" className="local-guide-image" />
              </li>
              <li>
                <strong>Potato Chip Rock (Mount Woodson Trail)</strong> – Famous for its unique rock formation and Instagram-worthy photos.<br/>
                <em>📍 16310 Hwy 67, Ramona, CA 92065</em> <a href="https://www.google.com/maps/search/?api=1&query=16310+Hwy+67,+Ramona,+CA+92065" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Strenuous, 7.5 miles round trip. Limited parking at the trailhead.<br/>
                <img src="/images/potato_chip_rock.jpg" alt="Potato Chip Rock" className="local-guide-image" />
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'dining' && (
          <div className="category">
            <h3><span className="category-icon">🍽️</span> Restaurants & Dining</h3>
            <ul>
              <li>
                <strong>The Cottage La Jolla</strong> – Classic California brunch & lunch spot in a charming cottage setting.<br/>
                <em>📍 7702 Fay Ave, La Jolla, CA 92037 | 📞 (858) 454-8409</em> <a href="https://www.google.com/maps/search/?api=1&query=7702+Fay+Ave,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Famous for Lemon Ricotta Pancakes, Eggs Benedict, and fresh, locally sourced ingredients.<br/>
                <a href="https://thecottagerestaurants.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>George's at the Cove</strong> – Upscale Californian cuisine and seafood with stunning ocean views.<br/>
                <em>📍 1250 Prospect St, La Jolla, CA 92037 | 📞 (858) 454-4244</em> <a href="https://www.google.com/maps/search/?api=1&query=1250+Prospect+St,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Try the lobster roll, rockfish tacos, or seared yellowtail. Rooftop terrace is a must for sunset.<br/>
                <a href="https://www.georgesatthecove.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Nine-Ten Restaurant & Bar</strong> – Contemporary American, Michelin-recognized fine dining.<br/>
                <em>📍 910 Prospect St, La Jolla, CA 92037 | 📞 (858) 964-5400</em> <a href="https://www.google.com/maps/search/?api=1&query=910+Prospect+St,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Creative seasonal cuisine. Signature dishes include Jamaican jerk pork belly and cacio e pepe.<br/>
                <a href="https://www.nine-ten.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Wayfarer Bread & Pastry</strong> – Artisan bakery with amazing pastries, croissants, and sandwiches.<br/>
                <em>📍 5525 La Jolla Blvd, La Jolla, CA 92037 | 📞 (858) 454-1924</em> <a href="https://www.google.com/maps/search/?api=1&query=5525+La+Jolla+Blvd,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Perfect for breakfast or a light lunch.<br/>
                <a href="https://www.wayfarerbread.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Café Pascale</strong> – Cozy European café for breakfast, lunch, and pastries.<br/>
                <em>📍 4510 Executive Dr Plaza 8, San Diego, CA 92121 | 📞 (858) 450-9588</em> <a href="https://www.google.com/maps/search/?api=1&query=4510+Executive+Dr+Plaza+8,+San+Diego,+CA+92121" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Great for a casual meal close to your location.<br/>
                <a href="https://cafepascale.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Natsumi Sushi & Seafood Buffet</strong> – Japanese, Sushi, and seafood buffet. Great for groups and families.<br/>
                <em>📍 8650 Genesee Ave Suite 106, San Diego, CA 92122 | 📞 (858) 999-0119</em> <a href="https://www.google.com/maps/search/?api=1&query=8650+Genesee+Ave+Suite+106,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                All-you-can-eat sushi, seafood, and hot dishes in a modern setting.<br/>
                <a href="https://natsumibuffet.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Leucadia Pizza UTC</strong> – Local favorite for pizza, pasta, salads, and more. Family-friendly with delivery and takeout options.<br/>
                <em>📍 7748 Regents Rd, San Diego, CA 92122 | 📞 (858) 587-2222</em> <a href="https://www.google.com/maps/search/?api=1&query=7748+Regents+Rd,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Great for casual dining, group meals, or a quick bite. Gluten-free and vegetarian options available.<br/>
                <a href="https://leucadiapizza.com/utc/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Convoy Street (Kearny Mesa)</strong> – Asian food district with dozens of top-rated restaurants.<br/>
                <em>📍 Convoy St, San Diego, CA 92111 (10-15 min drive)</em> <a href="https://www.google.com/maps/search/?api=1&query=Convoy+St,+San+Diego,+CA+92111" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Try Tajima Ramen, Dumpling Inn, or Kura Revolving Sushi Bar for a variety of Asian cuisines.
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'cafes' && (
          <div className="category">
            <h3><span className="category-icon">☕</span> Cafes & Coffee Shops</h3>
            <ul>
              <li>
                <strong>Philz Coffee (UTC)</strong> – The closest and most popular cafe near the house. Famous for custom-blended coffees and a relaxed vibe.<br/>
                <em>📍 4545 La Jolla Village Dr Ste E-1, San Diego, CA 92122</em> <a href="https://www.google.com/maps/search/?api=1&query=4545+La+Jolla+Village+Dr+Ste+E-1,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <a href="https://maps.app.goo.gl/2QkQn6Qn6Qn6Qn6Q7" target="_blank" rel="noopener noreferrer">Google Maps</a>
              </li>
              <li>
                <strong>Café Pascale</strong> – Cozy European café for breakfast, lunch, and pastries.<br/>
                <em>📍 4510 Executive Dr Plaza 8, San Diego, CA 92121 | 📞 (858) 450-9588</em><br/>
                <a href="https://cafepascale.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Starbucks (Governor Dr)</strong> – Classic coffee shop, quick and convenient.<br/>
                <em>📍 3202 Governor Dr, San Diego, CA 92122</em> <a href="https://www.google.com/maps/search/?api=1&query=3202+Governor+Dr,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <a href="https://www.starbucks.com/store-locator/store/10113/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'shopping' && (
          <div className="category">
            <h3><span className="category-icon">🛍️</span> Shopping & Essentials</h3>
            <ul>
              <li>
                <strong>Vons (UTC)</strong> – Large, full-service supermarket with bakery, deli, pharmacy, and a wide selection of groceries.<br/>
                <em>📍 3993 Governor Dr, San Diego, CA 92122 | 📞 (858) 455-9395</em> <a href="https://www.google.com/maps/search/?api=1&query=3993+Governor+Dr,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Open daily, usually 6am–11pm.<br/>
                <a href="https://local.vons.com/ca/san-diego/3993-governor-dr.html" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Whole Foods Market (UTC)</strong> – Upscale grocery store with organic and natural foods, prepared meals, bakery, and coffee bar.<br/>
                <em>📍 8825 Villa La Jolla Dr, San Diego, CA 92122 | 📞 (858) 642-6700</em> <a href="https://www.google.com/maps/search/?api=1&query=8825+Villa+La+Jolla+Dr,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <a href="https://www.wholefoodsmarket.com/stores/utc" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Trader Joe's (UTC)</strong> – Beloved for unique snacks, frozen foods, and affordable organics.<br/>
                <em>📍 8657 Villa La Jolla Dr, La Jolla, CA 92037 | 📞 (858) 597-9184</em> <a href="https://www.google.com/maps/search/?api=1&query=8657+Villa+La+Jolla+Dr,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <a href="https://locations.traderjoes.com/ca/la-jolla/33/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Sprouts Farmers Market</strong> – Natural and organic grocery store with a focus on fresh produce, bulk foods, and healthy options.<br/>
                <em>📍 3358 Governor Dr, San Diego, CA 92122 | 📞 (858) 457-3663</em> <a href="https://www.google.com/maps/search/?api=1&query=3358+Governor+Dr,+San+Diego,+CA+92122" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <a href="https://www.sprouts.com/stores/details/-/store-details/view/store/104" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'transport' && (
          <div className="category">
            <h3><span className="category-icon">🚗</span> Transportation</h3>
            <ul>
              <li><strong>Public Transit:</strong> Bus stop at [location] - Route [number] to downtown</li>
              <li><strong>Ride Share:</strong> Uber and Lyft readily available in the area</li>
              <li><strong>Bike Paths:</strong> Beautiful bike trails starting at [location]</li>
              <li><strong>Parking:</strong> Free street parking available, garage at [location]</li>
            </ul>
          </div>
        )}
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