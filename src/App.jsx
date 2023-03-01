
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';



mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhcGFub3NraSIsImEiOiJjbGVxMjhjbmowaTZpNDVvNWQ4NTBsc2JtIn0.LFIPoIEmYQJv5bfRPueMQQ';

function Map() {
  
    navigator.geolocation.getCurrentPosition(position => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 12
      });

      new mapboxgl.Marker().setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);
    });
  

  return <div id='map' className='map-container' />;

  }
export default Map;
