import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./BrowseTrails.js";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function BrowseTrails() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/trails")
      .then(res => res.json())
      .then(data => setTrails(data));
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-120, 37], // change to your region
      zoom: 8
    });

    trails.forEach(trail => {
      new mapboxgl.Marker().setLngLat([trail.lon, trail.lat]).addTo(map);
    });

    return () => map.remove();
  }, [trails]);

  return (
    <div>
      <h1>Browse Trails</h1>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

