import React, { useEffect, useState } from 'react';

const WEATHER_API = 'https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1611&daily=temperature_2m_max,temperature_2m_min,weathercode&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles';

const weatherIcons = {
  0: '☀️', // Clear sky
  1: '🌤️', // Mainly clear
  2: '⛅', // Partly cloudy
  3: '☁️', // Overcast
  45: '🌫️', // Fog
  48: '🌫️', // Depositing rime fog
  51: '🌦️', // Drizzle: Light
  53: '🌦️', // Drizzle: Moderate
  55: '🌦️', // Drizzle: Dense
  56: '🌧️', // Freezing Drizzle: Light
  57: '🌧️', // Freezing Drizzle: Dense
  61: '🌦️', // Rain: Slight
  63: '🌧️', // Rain: Moderate
  65: '🌧️', // Rain: Heavy
  66: '🌧️', // Freezing Rain: Light
  67: '🌧️', // Freezing Rain: Heavy
  71: '🌨️', // Snow fall: Slight
  73: '🌨️', // Snow fall: Moderate
  75: '🌨️', // Snow fall: Heavy
  77: '🌨️', // Snow grains
  80: '🌦️', // Rain showers: Slight
  81: '🌧️', // Rain showers: Moderate
  82: '🌧️', // Rain showers: Violent
  85: '🌨️', // Snow showers: Slight
  86: '🌨️', // Snow showers: Heavy
  95: '⛈️', // Thunderstorm: Slight/Moderate
  96: '⛈️', // Thunderstorm with hail: Slight
  99: '⛈️', // Thunderstorm with hail: Heavy
};

function WeatherWidget() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(WEATHER_API)
      .then(res => res.json())
      .then(data => {
        setForecast(data.daily);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (!forecast) return <div>Weather unavailable</div>;

  return (
    <div style={{ background: '#f5f7fa', borderRadius: 12, padding: '1rem', margin: '1.5rem 0', boxShadow: '0 2px 8px #0001', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
      <h4 style={{ margin: '0 0 1rem 0', textAlign: 'center' }}>San Diego 7-Day Forecast</h4>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        {forecast.time.map((date, i) => (
          <div key={date} style={{ flex: 1, textAlign: 'center', fontSize: 14 }}>
            <div style={{ fontWeight: 600 }}>{new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <div style={{ fontSize: 28 }}>{weatherIcons[forecast.weathercode[i]] || '❓'}</div>
            <div style={{ color: '#333' }}>{Math.round(forecast.temperature_2m_max[i])}&deg; / {Math.round(forecast.temperature_2m_min[i])}&deg;F</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherWidget; 