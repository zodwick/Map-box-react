
import React, { useEffect , useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './App.css';
import MapMarker from './Marker';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhcGFub3NraSIsImEiOiJjbGVxMjhjbmowaTZpNDVvNWQ4NTBsc2JtIn0.LFIPoIEmYQJv5bfRPueMQQ';





function Map() {


    // read mrkers data object
    let cordinaates =[[76.3289828 , 10.0298734],[76.3570,10.1004],[76.3125,10.0261]]

    let longitude,latitude
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            latitude=position.coords.latitude,
            longitude= position.coords.longitude
            // console.log(latitude,longitude)
        }, error => {
          console.log(error);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
      // console.log(latitude,longitude)

    function saveLocationData(){
    }
    

    navigator.geolocation.getCurrentPosition(position => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: 12
      });

      new mapboxgl.Marker().setLngLat([76.3289828,10.0298734]).addTo(map);
      const markers = cordinaates.map((cordinaate) => {
        return new mapboxgl.Marker().setLngLat(cordinaate).addTo(map);
        // mapboxgl.Marker().setpopup(new mapboxgl.Popup().setHTML('<h1>Hello World!</h1>')).addTo(map);
      });

    });
  


  return (
    <>
      <div id='map' className='map-container' ></div>
      <button className='addDistress' onClick={saveLocationData}>h</button>
      {/* <MapMarker position={position} details={details} /> */}

    </>
  );


  }

  
    export default Map;