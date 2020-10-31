import React, { useState } from "react";
import { convertToNum } from "../Utility/_utility";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function LocationBrewMap({ brewery, viewport, setViewport }) {
  const [selectedBrew, setSelectedBrew] = useState("");

  return (
    <div
      className="map-wrapper"
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        top: 0,
      }}
    >
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/balthazarely/ckg8fukiq14tk19mxrkt19zgv"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        // style={{ position: "absolute", height: "100%" }}
      >
        {brewery.map((brew) => {
          if (brew.latitude === null || brew.longitude === null) {
            return;
          } else {
            return (
              <Marker
                key={brew.id}
                latitude={convertToNum(brew.latitude)}
                longitude={convertToNum(brew.longitude)}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    width: "40px",
                    height: "50px",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedBrew(brew);
                    console.log("i clicked", brew);
                  }}
                >
                  <img src="beer.svg" />
                </button>
              </Marker>
            );
          }
        })}
        {selectedBrew ? (
          <Popup
            latitude={convertToNum(selectedBrew.latitude)}
            longitude={convertToNum(selectedBrew.longitude)}
            onClose={() => {
              setSelectedBrew("");
            }}
          >
            <h2>{selectedBrew.name}</h2>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
