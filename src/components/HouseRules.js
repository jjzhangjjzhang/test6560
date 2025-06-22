import React from 'react';

function HouseRules() {
  return (
    <div className="tab-section">
      <h2>House Rules</h2>
      <ul>
        <li><strong>Check-in:</strong> After [Your Check-in Time]</li>
        <li><strong>Check-out:</strong> Before [Your Check-out Time]</li>
        <li><strong>Wi-Fi:</strong> Network: [Network Name], Password: [Password]</li>
        <li>No smoking indoors.</li>
        <li>Please keep noise to a minimum after 10 PM.</li>
        <li>(Add any other important rules here)</li>
      </ul>
    </div>
  );
}

export default HouseRules; 