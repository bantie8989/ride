// MapView.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapView = ({ pickupLocation, dropoffLocation }) => {
  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const center = {
    lat: (pickupLocation.lat + dropoffLocation.lat) / 2,
    lng: (pickupLocation.lng + dropoffLocation.lng) / 2,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        <Marker position={pickupLocation} />
        <Marker position={dropoffLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;