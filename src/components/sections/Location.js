import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./map/data.json";
import '../css/Location.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 12.8447999, 
    longitude: 77.66323896266928,
    width: "100vw",
    height: "50vh",
    zoom: 15,
  });

  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div style={{width: 10}}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWdhbS1rYXNoeWFwIiwiYSI6ImNrNHBvMGR6ejBodGUzbHAxNjR5ODN3a28ifQ.nOBYQvNGFZgXlMhMum9QHQ"
        mapStyle="mapbox://styles/agam-kashyap/ck4ppvyzc40xg1dqlnra1aki9"
        onViewportChange={viewport => { setViewport(viewport); }}
      >
        {parkDate.features.map(park => (
            <Marker
                key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[0]}
                longitude={park.geometry.coordinates[1]}
            >
            <button onClick={e => {e.preventDefault();setSelectedPark(park); console.log("hello")}}></button>
            </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => { setSelectedPark(null); }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}