import React from 'react';

function LocalFavorites({ activeSubTab = 'attractions' }) {
  return (
    <div className="section">
      <h2>Local Guide & Recommendations</h2>
      
      <p>
        Discover the best of our neighborhood! These are our personal favorites - places we love and think you will too. From amazing restaurants to hidden gems, here's your local insider guide.
      </p>
      
      {/* Tab Content */}
      <div className="category-content">
        {activeSubTab === 'attractions' && (
          <div className="category">
            <h3><span className="category-icon">🎭</span> Attractions & Activities</h3>
            <ul>
              <li>
                <strong>San Diego Zoo</strong> – World-famous zoo with thousands of animals.<br/>
                <em>📍 2920 Zoo Dr, San Diego, CA 92101 | 📞 (619) 231-1515</em> <a href="https://www.google.com/maps/search/?api=1&query=2920+Zoo+Dr,+San+Diego,+CA+92101" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Zoo has paid parking, and you can also park for free in Balboa Park.<br/>
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
                <strong>Parking:</strong> Parking fee is $35. Free street parking is available around Dana Landing (<a href="https://maps.app.goo.gl/Hd1JQ7PM4pro2PYm7" target="_blank" rel="noopener noreferrer">map</a>), about a 15-minute walk.<br/>
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
              <li>
                <strong>Sesame Street in Chula Vista</strong> – Family-friendly theme park featuring Sesame Street characters, rides, and shows.<br/>
                <em>📍 2052 Entertainment Cir, Chula Vista, CA 91911 | 📞 (619) 425-7900</em> <a href="https://www.google.com/maps/search/?api=1&query=2052+Entertainment+Cir,+Chula+Vista,+CA+91911" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                <strong>Parking:</strong> Parking fee required.<br/>
                <img src="/images/sesame_street.jpg" alt="Sesame Street in Chula Vista" className="local-guide-image" style={{ width: '180px', height: 'auto' }} />
                <a href="https://sesameplace.com/san-diego/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
            </ul>
          </div>
        )}
        {activeSubTab === 'hiking' && (
          <div className="category">
            <h3><span className="category-icon">🥾</span> Hiking Trails</h3>
            <ul>
              <li>
                <strong>Torrey Pines State Natural Reserve</strong> – Scenic coastal trails with stunning ocean views, wildflowers, and unique sandstone formations.<br/>
                <em>📍 12600 N Torrey Pines Rd, La Jolla, CA 92037</em> <a href="https://www.google.com/maps/search/?api=1&query=12600+N+Torrey+Pines+Rd,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Easy to moderate trails, family-friendly. Parking: Free, but limited.<br/>
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
        {activeSubTab === 'dining' && (
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
                <strong>Oscar's Mexican Seafood</strong> – Popular local chain known for fresh fish tacos, ceviche, and Mexican seafood dishes.<br/>
                <em>📍 703 Turquoise St, San Diego, CA 92109 | 📞 (858) 488-6392</em> <a href="https://www.google.com/maps/search/?api=1&query=703+Turquoise+St,+San+Diego,+CA+92109" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Famous for their fish tacos, shrimp tacos, and fresh ceviche. Casual, counter-service style.<br/>
                <a href="https://oscarsmexicanseafood.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Aqua Mare Cucina Italiana & Cocktails</strong> – Upscale Italian restaurant with fresh pasta, seafood, and craft cocktails.<br/>
                <em>📍 1298 Prospect St, La Jolla, CA 92037 | 📞 (858) 459-0311</em> <a href="https://www.google.com/maps/search/?api=1&query=1298+Prospect+St,+La+Jolla,+CA+92037" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Elegant dining with ocean views. Known for their handmade pasta, fresh seafood, and extensive wine list.<br/>
                <a href="https://aquamare.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
              <li>
                <strong>Convoy Street (Kearny Mesa)</strong> – Asian food district with dozens of top-rated restaurants.<br/>
                <em>📍 Convoy St, San Diego, CA 92111 (10-15 min drive)</em> <a href="https://www.google.com/maps/search/?api=1&query=Convoy+St,+San+Diego,+CA+92111" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Try Tajima Ramen, Dumpling Inn, or Kura Revolving Sushi Bar for a variety of Asian cuisines.
              </li>
            </ul>
          </div>
        )}
        {activeSubTab === 'cafes' && (
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
              <li>
                <strong>Better Buzz Coffee Hillcrest</strong> – Popular local coffee chain with great drinks and atmosphere. A bit far from the house, but perfect to visit when going to Balboa Park.<br/>
                <em>📍 801 University Ave, San Diego, CA 92103 | 📞 (619) 269-4200</em> <a href="https://www.google.com/maps/search/?api=1&query=801+University+Ave,+San+Diego,+CA+92103" target="_blank" rel="noopener noreferrer">Google Maps</a><br/>
                Known for their "Best Drink Ever" and other creative coffee beverages. Great spot to fuel up before or after exploring Balboa Park.<br/>
                <a href="https://betterbuzzcoffee.com/" target="_blank" rel="noopener noreferrer">Website</a>
              </li>
            </ul>
          </div>
        )}
        {activeSubTab === 'shopping' && (
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
        {activeSubTab === 'transport' && (
          <div className="category">
            <h3><span className="category-icon">🚗</span> Transportation</h3>
            <ul>
              <li>
                <strong>🚌 Public Transit - MTS Bus Routes</strong><br/>
                <em>📍 Nearest Bus Stop:</em> Governor Dr & Cascade St (0.2 miles from house)<br/>
                <strong>Route 30:</strong> UTC Transit Center ↔ Downtown San Diego<br/>
                <em>📍 Alternative Stop:</em> Governor Dr & Regents Rd (0.3 miles)<br/>
                <strong>Route 41:</strong> UTC Transit Center ↔ Old Town Transit Center<br/>
                <strong>Route 237:</strong> UTC Transit Center ↔ Fashion Valley Transit Center<br/>
                <a href="https://www.sdmts.com/" target="_blank" rel="noopener noreferrer">MTS Website</a> | <a href="https://www.sdmts.com/schedules-and-maps" target="_blank" rel="noopener noreferrer">Schedules</a>
              </li>
              <li>
                <strong>🚄 Trolley & Light Rail</strong><br/>
                <em>📍 UTC Transit Center:</em> 4545 La Jolla Village Dr (0.8 miles)<br/>
                <strong>Blue Line:</strong> UTC ↔ San Ysidro (via Downtown, Old Town)<br/>
                <strong>Green Line:</strong> UTC ↔ Santee (via Mission Valley)<br/>
                <strong>Frequency:</strong> Every 7-15 minutes during peak hours<br/>
                <a href="https://www.sdmts.com/getting-around/trolley" target="_blank" rel="noopener noreferrer">Trolley Information</a>
              </li>
              <li>
                <strong>🚕 Ride Share Services</strong><br/>
                <strong>Uber & Lyft:</strong> Readily available in the area<br/>
                <strong>Typical fares:</strong> $8-15 to UTC, $15-25 to downtown, $25-35 to airport<br/>
                <strong>Wait time:</strong> Usually 3-8 minutes<br/>
                <a href="https://www.uber.com/" target="_blank" rel="noopener noreferrer">Uber</a> | <a href="https://www.lyft.com/" target="_blank" rel="noopener noreferrer">Lyft</a>
              </li>
              <li>
                <strong>🚲 Bike Paths & Trails</strong><br/>
                <em>📍 Rose Canyon Bike Path:</em> Accessible via Governor Dr (0.5 miles)<br/>
                <strong>Route:</strong> Connects to UCSD, La Jolla, and Mission Bay<br/>
                <em>📍 San Diego River Trail:</em> Accessible via Regents Rd (0.8 miles)<br/>
                <strong>Route:</strong> Connects to Mission Valley and Ocean Beach<br/>
                <a href="https://www.sandiego.gov/park-and-recreation/parks/regional/bikeways" target="_blank" rel="noopener noreferrer">Bike Paths Map</a>
              </li>
              <li>
                <strong>🅿️ Parking Information</strong><br/>
                <strong>Street Parking:</strong> Free parking available on Cascade St and surrounding streets<br/>
                <strong>UTC Parking:</strong> Free parking at UTC Transit Center and shopping centers<br/>
                <strong>Airport Parking:</strong> Long-term parking available at San Diego International Airport<br/>
                <em>Note:</em> No permit required for street parking in this area
              </li>
              <li>
                <strong>✈️ Airport Transportation</strong><br/>
                <em>📍 San Diego International Airport (SAN):</em> 12 miles away<br/>
                <strong>By Car:</strong> 20-30 minutes (depending on traffic)<br/>
                <strong>By Trolley:</strong> Take Blue Line from UTC to Old Town, then transfer to airport shuttle<br/>
                <strong>By Uber/Lyft:</strong> $25-35, 20-30 minutes<br/>
                <a href="https://www.san.org/" target="_blank" rel="noopener noreferrer">Airport Website</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default LocalFavorites; 