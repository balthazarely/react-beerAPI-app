import React, { useState } from "react";
import { convertToNum } from "../Utility/_utility";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function LocationBrewMap({
  brewery,
  viewport,
  setViewport,
  setSelectedBrew,
  selectedBrew,
  setClickedBrewery,
  setShowClickedBrewery,
  mapNightMode,
}) {
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
        mapStyle={
          mapNightMode
            ? "mapbox://styles/balthazarely/ckg8fukiq14tk19mxrkt19zgv"
            : "mapbox://styles/balthazarely/ckh409qk301go19mugfre5ivl"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {brewery.map((brew) => {
          if (brew.latitude === null || brew.longitude === null) {
            return null;
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
                    setClickedBrewery(brew);
                    setShowClickedBrewery(true);
                  }}
                >
                  <img src="beer.svg" alt="beer icon" />
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
            <h4>{selectedBrew.name}</h4>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
