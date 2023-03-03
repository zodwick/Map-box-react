import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function MapMarker({ position, details }) {
  const markerRef = useRef(null);

  useEffect(() => {
    if (!markerRef.current) return;

    const marker = new mapboxgl.Marker(markerRef.current)
      .setLngLat(position)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${details.title}</h3><p>${details.description}</p>`))
      .addTo(map);

    return () => marker.remove();
  }, [position, details]);

  return (
    <div ref={markerRef} style={{ display: 'none' }} />
  );
}


export default MapMarker;