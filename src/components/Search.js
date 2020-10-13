import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Axios from "axios";

import { convertToNum } from "./_utility";
import ResultsContainer from "./ResultsContainer";

// Styles
import styles from "./Search.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function App(props) {
  const classes = useStyles();

  // App Hooks
  const [address, setAddress] = useState("");
  // const [coordinates, setCoordinates] = useState({});
  const [tempCoordinates, setTempCoordinates] = useState({});
  const [location, setLocation] = useState({ city: "", state: "" });
  const [brewries, setBrewries] = useState([]);

  // Map Hooks
  const [viewport, setViewPort] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    width: "100%",
    height: "100%",
    zoom: 3,
  });
  const [selectedBrew, setSelectedBrew] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    const location = {
      city: results[0].address_components[0].long_name,
      state: results[0].address_components[2].long_name,
    };
    setAddress(value);
    setLocation(location);
    setTempCoordinates(latLng);
  };

  const handleSearch = async () => {
    let url = `https://api.openbrewerydb.org/breweries?by_city=${location.city}&per_page=50&by_state=${location.state}`;
    Axios.get(url).then((res) => {
      setBrewries(res.data);
    });
    // setCoordinates(tempCoordinates);
    setViewPort({
      latitude: tempCoordinates.lat,
      longitude: tempCoordinates.lng,
      width: "100%",
      height: "100%",
      zoom: 12,
    });
    console.log(brewries);
  };

  const getClickedCard = (data) => {
    console.log(data);
    if (isNaN(data.lat) || isNaN(data.lng)) {
      return;
    } else {
      setViewPort({
        latitude: data.lat,
        longitude: data.lng,
        width: "100%",
        height: "100%h",
        zoom: 14,
      });
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <div
              className="search-container"
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: "80px",
                zIndex: "100",
                margin: "10px",
                padding: "10px",
              }}
            >
              <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
                searchOptions={{ types: ["(cities)"] }}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <div className={styles.searchContainer}>
                      <TextField
                        label="Type City"
                        variant="outlined"
                        size="small"
                        {...getInputProps({})}
                        style={{ width: 250 }}
                      />
                      <Button onClick={handleSearch}>Search</Button>
                    </div>
                    <div>
                      {/* {loading ? <div>...loading</div> : null} */}
                      {suggestions.map((suggestion, i) => {
                        const style = {
                          backgroundColor: suggestion.active
                            ? "#41b6e6"
                            : "#fff",
                        };
                        return (
                          <div
                            style={{
                              backgroundColor: "white",
                              position: "absolute",
                              top: "0px",
                              zIndex: "100",
                              margin: "10px",
                              padding: "10px",
                            }}
                            key={i}
                            {...getSuggestionItemProps(suggestion, { style })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
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
                {brewries.map((brew) => {
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <ResultsContainer
              brewery={brewries}
              getClickedCard={getClickedCard}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
