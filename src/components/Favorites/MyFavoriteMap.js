import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { convertToNum } from "../Utility/_utility";

export default function FavoriteMap(props) {
  const [viewport, setViewPort] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    width: "100%",
    height: "100%",
    zoom: 1.75,
  });
  const [selectedBrew, setSelectedBrew] = useState("");
  return (
    <div
      className="map-wrapper"
      style={{ position: "relative", height: "300px" }}
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
        {props.favorites &&
          props.favorites.map((brew) => {
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
