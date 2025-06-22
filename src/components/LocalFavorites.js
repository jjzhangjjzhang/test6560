import React from 'react';

function LocalFavorites() {
  return (
    <div className="tab-section">
      <h2>Our Local Favorites</h2>
      <h3>Restaurants</h3>
      <ul>
        <li>[Restaurant Name]: Great for [Cuisine Type]. [Short description].</li>
      </ul>
      <h3>Cafes</h3>
      <ul>
        <li>[Cafe Name]: Best coffee in town.</li>
      </ul>
      <h3>Attractions</h3>
      <ul>
        <li>[Attraction Name]: A must-see! [Short description].</li>
      </ul>
    </div>
  );
}

export default LocalFavorites; 