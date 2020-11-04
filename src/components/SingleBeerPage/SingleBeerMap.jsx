import React from "react";
import { Segment, Item } from "semantic-ui-react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { convertToNum } from "../Utility/_utility";

export default function SingleBeerMap({ viewport, brewery, setViewPort }) {
  return (
    <>
      <div attached="top" style={{ position: "relative", height: "400px" }}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/balthazarely/ckg8fukiq14tk19mxrkt19zgv"
          style={{ position: "absolute", height: "100%" }}
          onViewportChange={(viewport) => {
            setViewPort(viewport);
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
                      // setSelectedBrew(brew);
                      // setClickedBrewery(brew);
                      // setShowClickedBrewery(true);
                    }}
                  >
                    <img src="beer.svg" alt="beer icon" />
                  </button>
                </Marker>
              );
            }
          })}
        </ReactMapGL>
      </div>
    </>
  );
}
