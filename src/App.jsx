
import React, { useEffect , useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';



mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhcGFub3NraSIsImEiOiJjbGVxMjhjbmowaTZpNDVvNWQ4NTBsc2JtIn0.LFIPoIEmYQJv5bfRPueMQQ';





function Map() {


  function saveLocationData () {
    let longitude,latitude
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            latitude=position.coords.latitude,
            longitude= position.coords.longitude
            console.log(latitude,longitude)
        }, error => {
          console.log(error);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    
    
    };
    

    navigator.geolocation.getCurrentPosition(position => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 12
      });

      new mapboxgl.Marker().setLngLat([position.coords.longitude, position.coords.latitude]).addTo(map);
    });
  

  return (
    <>
      <div id='map' className='map-container' ></div>
      <button className='addDistress' onClick={saveLocationData}>h</button>

    </>
  );


  }

  
    export default Map;