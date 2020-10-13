import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function MapV2(props) {
  const [viewport, setViewPort] = useState({
    latitude: 55.7615,
    longitude: -106.9812,
    width: "100%",
    height: "50vh",
    zoom: 12,
  });

  console.log(props);

  return (
    <div className="map-wrapper">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/balthazarely/ckg47ld8x2gqz19pukjgx6vlk"
        onViewportChange={(viewport) => {
          setViewPort(viewport);
        }}
      >
        {/* {filteredBrewries.map((brew) => {
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
                })} */}
        {/* {selectedBrew ? (
                  <Popup
                    latitude={convertToNum(selectedBrew.latitude)}
                    longitude={convertToNum(selectedBrew.longitude)}
                    onClose={() => {
                      setSelectedBrew("");
                    }}
                  >
                    <h2>{selectedBrew.name}</h2>
                  </Popup>
                ) : null} */}
      </ReactMapGL>
    </div>
  );
}
