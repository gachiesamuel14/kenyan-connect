'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [location, setLocation] = useState<{lat: number; lng: number} | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [county, setCounty] = useState<string>('Detecting...');

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        // Simple county approximation for Kenya (in a real app use reverse geocoding)
        if (latitude > -1.5 && latitude < -1.0 && longitude > 36.5 && longitude < 37.0) {
          setCounty('Nairobi');
        } else if (latitude > -4.2 && latitude < -3.8 && longitude > 39.5 && longitude < 39.8) {
          setCounty('Mombasa');
        } else {
          setCounty('Kenya');
        }
      },
      (err) => {
        setError('Unable to retrieve your location. Please enable GPS.');
        setCounty('Unknown');
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <h1>Kenyan Connect</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
          Find your match nearby. Location-based dating for Kenya.
        </p>
        <button className="btn" onClick={getLocation}>
          Refresh My Location
        </button>
        {location && (
          <p style={{ marginTop: '1rem' }}>
            You are near: <strong>{county}</strong><br />
            Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </p>
        )}
        {error && <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>{error}</p>}
      </section>

      <section className="features">
        <div className="card">
          <h3>📍 Location Matching</h3>
          <p>Connect with people in your county or within a set distance using GPS.</p>
        </div>
        <div className="card">
          <h3>👤 Profiles</h3>
          <p>Create profiles with photos, bio, age, tribe, interests, and lifestyle.</p>
        </div>
        <div className="card">
          <h3>💬 Chat</h3>
          <p>Match and chat in real-time once you both like each other.</p>
        </div>
        <div className="card">
          <h3>🇦🇪 Kenya Focused</h3>
          <p>Filters for county, Sheng vibes, student/professional/church modes, M-Pesa ready.</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.6 }}>
        <p>Built for Kenyans. Deployed on Netlify. Source on GitHub.</p>
      </footer>
    </div>
  );
}
