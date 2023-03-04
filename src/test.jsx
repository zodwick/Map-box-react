import * as React from 'react';
import Map from 'react-map-gl';
import { useState } from 'react';

function Map2() {

  const [lat, setLat] = useState(10.7);
  const [lon, setLon] = useState(76.3125);

   var longitude,latitude
      // if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
             latitude=position.coords.latitude;
            setLat(latitude);
            longitude= position.coords.longitude;
            setLon(longitude);});
            // console.log(latitude,longitude);
      //   }, error => {
      //     console.log(error);
      //   });
      // } else {
      //   console.log("Geolocation is not supported by this browser.");
      // }
      console.log(lat,lon);
  return (
    <Map
      
      initialViewState={{
        longitude: lon,
        latitude: lat,
        zoom: 140
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export  default  Map2;