import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 0,
  lng: 0
};

export const LocationTracker = () => {
    const [currentPosition, setCurrentPosition] = useState(center);

    useEffect(() => {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        error => console.error(error)
      );
  
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }, []);
  
    return (
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      </LoadScript>
    );
}
export default LocationTracker;