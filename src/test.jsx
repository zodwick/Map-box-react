import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef ,useState } from "react";
import ReactDOM from "react-dom";
import geoJson from "./chicago-parks.json";
import "./Map.css";

mapboxgl.accessToken =
'pk.eyJ1IjoiYWxhcGFub3NraSIsImEiOiJjbGVxMjhjbmowaTZpNDVvNWQ4NTBsc2JtIn0.LFIPoIEmYQJv5bfRPueMQQ';


function Map() {
  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(null);
const [lat, setLat] = useState(null);
const [zoom, setZoom] = useState(9);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude)
      setLng(position.coords.longitude)
      console.log(lat,lng)
      
          

  }, error => {
    console.log(error);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

if (lat!=null){
useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: zoom
  });
  });}



  return (
    <div>
    <div ref={mapContainer} className="map-container" />
    </div>
    );
}

export default Map;