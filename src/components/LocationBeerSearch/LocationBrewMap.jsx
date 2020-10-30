import React, { useState } from "react";
import { convertToNum } from "../Utility/_utility";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function LocationBrewMap({ brewery, viewport, setViewPort }) {
  //   const [viewport, setViewPort] = useState({
  //     latitude: 37.0902,
  //     longitude: -95.7129,
  //     width: "100%",
  //     height: "100%",
  //     zoom: 3,
  //   });

  const [selectedBrew, setSelectedBrew] = useState("");

  console.log(brewery);
  return (
    <div
      className="map-wrapper"
      style={{ position: "relative", height: "500px" }}
    >
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/balthazarely/ckg8fukiq14tk19mxrkt19zgv"
        onViewportChange={(viewport) => {
          setViewPort(viewport);
        }}
        style={{ position: "absolute", height: "100%" }}
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
