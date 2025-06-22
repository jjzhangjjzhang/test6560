import React from 'react';

function Welcome() {
  return (
    <div className="tab-section">
      <h2>A Little Welcome Note</h2>
      <p>Welcome to [Your City/Town]! We hope you have a wonderful stay. Please make yourself at home and don't hesitate to reach out if you need anything.</p>
      <img src="/images/welcome-image.jpg" alt="A welcoming picture of the property or local area" className="placeholder-image" />
      <p className="caption">Feel free to replace `welcome-image.jpg` in the `public/images` folder with your own photo!</p>
    </div>
  );
}

export default Welcome; 