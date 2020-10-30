import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";
import ResultsContainer from "./ResultsContainer";
import BreweryCard from "./BreweryCard";
import FormToggle from "./FormComponents/FormToggle";
// Styles
import styles from "./Search.module.css";
import { Container, Grid, Input, Card, Button, Icon } from "semantic-ui-react";

export default function App(props) {
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
  const [breweryCard, setBreweryCard] = useState({});

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

  // const handleAutoLocation = () => {
  //   console.log("click");
  //   let location = {};
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log(position);
  //     Axios.get(
  //       "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
  //         position.coords.latitude +
  //         "," +
  //         position.coords.longitude +
  //         "&key=AIzaSyDEn27GYmmHEz2tz-wNZJAfeqePlIP2_GI"
  //     )
  //       .then((response) => {
  //         console.log(response.data);
  //         location = {
  //           city: response.data.results[0].address_components[3].long_name,
  //           state: response.data.results[0].address_components[5].long_name,
  //         };
  //       })
  //       .then(() => {
  //         setViewPort({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           width: "100%",
  //           height: "100%",
  //           zoom: 3,
  //         });
  //         setLocation(location);
  //       });
  //   });
  // };

  // useEffect(() => {
  //   if (location.city !== "" && location.state !== "") {
  //     handleSearch();
  //   }
  // }, [location]);

  // This chooses whether seach is by query or state.
  const [searchByCityOrName, setSearchByCityOrName] = useState("city");
  // const handleSearchCityOrName = (event, { value }) => setSearchByCity(value);

  const handleSearch = async () => {
    if (searchByCityOrName === "city") {
      let url = `https://api.openbrewerydb.org/breweries?by_city=${location.city}&per_page=50&by_state=${location.state}`;
      Axios.get(url).then((res) => {
        setBrewries(res.data);
        console.log(res.data);
      });
      setViewPort({
        latitude: tempCoordinates.lat,
        longitude: tempCoordinates.lng,
        width: "100%",
        height: "100%",
        zoom: 12,
      });
    }
  };

  const getClickedCard = (data) => {
    setBreweryCard(data);
    console.log(data);
    if (
      isNaN(convertToNum(data.latitude)) ||
      isNaN(convertToNum(data.longitude))
    ) {
      return;
    } else {
      setViewPort({
        latitude: convertToNum(data.latitude),
        longitude: convertToNum(data.longitude),
        width: "100%",
        height: "100%h",
        zoom: 14,
      });
    }
  };

  return (
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <Card fluid>
            <div
              className="search-container"
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: "0px",
                zIndex: "100",
                margin: "10px",
                padding: "10px",
                boxShadow: "0px 5px 10px -2px rgba(0, 0, 0, 0.25)",
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
                      <Input
                        variant="outlined"
                        placeholder="search city"
                        size="small"
                        {...getInputProps({})}
                        style={{ width: 250 }}
                      />

                      <Button onClick={handleSearch}>Search</Button>
                      <Button icon>
                        <Icon
                          name="world"
                          // onClick={handleAutoLocation}
                        />
                      </Button>
                      {/* <FormToggle
                          setSearchByCityOrName={setSearchByCityOrName}
                        /> */}
                      <div id="error"></div>
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
          </Card>
        </Grid.Column>
        <Grid.Column width={6}>
          <Card fluid>
            <ResultsContainer
              brewery={brewries}
              getClickedCard={getClickedCard}
            />
          </Card>
        </Grid.Column>
      </Grid>
      <Grid stackable columns={1}>
        <Grid.Column width={10}>
          <Card.Group>
            <BreweryCard
              breweryCard={breweryCard}
              addToFavorites={props.addToFavorites}
            />
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
