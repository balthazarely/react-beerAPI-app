import React, { useState, useEffect } from "react";
import LocationBrewInput from "./LocationBrewInput";
import LocationBrewList from "./LocationBrewList";
import LocationBrewMap from "./LocationBrewMap";
import GetUserLocation from "./GetUserLocation";
import ClickedBeerCard from "./ClickedBeerCard";
import Modal from "./Modal";
import ListFilter from "./FormComponents/ListFilter";
import { Loader, Grid, Button, Transition } from "semantic-ui-react";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";
import style from "./LocationBrewSearchPage.module.css";

const loaderStyle = {
  position: "absolute",
  top: "50%",
  zIndex: 100000,
  left: "50%",
};

export default function LocationBrewSearchPage({ addToFavorites }) {
  // Main data array
  const [brewery, setBewery] = useState([]);
  const [serachByCity, setSearchByCity] = useState(true);
  // Default Viewport for Map
  const [viewport, setViewport] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    width: "100%",
    height: "100%",
    zoom: 3,
  });
  const [location, setLocation] = useState({ city: "", state: "" });
  // This is the brewery that is clicked on, and is passed into the brewery card
  const [clickedBrewery, setClickedBrewery] = useState({});
  // This is deciding on if the card shows or not
  const [showClickedBrewery, setShowClickedBrewery] = useState(false);
  //this gets passed down to the locationBrewMap
  const [selectedBrew, setSelectedBrew] = useState("");
  // Turns on or off the button loading
  const [geolocationLoading, setGeolocationLoading] = useState(false);
  // Open Modal
  const [openModal, setOpenModal] = useState(false);

  const handleAPIFetch = () => {
    let url = `https://api.openbrewerydb.org/breweries?by_city=${location.city}&per_page=50&by_state=${location.state}`;
    Axios.get(url).then((res) => {
      setBewery(res.data);
      setShowClickedBrewery(false);
    });
  };

  useEffect(() => {
    if (location.city !== "") {
      handleAPIFetch();
    }
  }, [location]);

  const handleNameSearched = async (e) => {
    setShowClickedBrewery(false);
    let url = `https://api.openbrewerydb.org/breweries/search?query=${e.target.value}`;
    Axios.get(url).then((res) => {
      setBewery(res.data);
    });
    let resetView = {
      latitude: 37.0902,
      longitude: -95.7129,
      width: "100%",
      height: "100%",
      zoom: 3,
    };
    setViewport(resetView);
  };

  const handleBreweryListClick = (brewery) => {
    setClickedBrewery(brewery);
    setShowClickedBrewery(true);
    if (
      isNaN(convertToNum(brewery.latitude)) ||
      isNaN(convertToNum(brewery.longitude))
    ) {
      return;
    } else {
      let newViewport = {
        latitude: convertToNum(brewery.latitude),
        longitude: convertToNum(brewery.longitude),
        width: "100%",
        height: "100%",
        zoom: 14,
      };
      setViewport(newViewport);
    }
  };

  // Filter
  const [breweryType, setBreweryType] = useState("All");
  const brewFilter = (breweries) => {
    if (breweryType === "All") {
      return breweries;
    } else if (breweryType === "Mirco") {
      return breweries.filter((brew) => brew.brewery_type === "micro");
    } else if (breweryType === "Brew Pub") {
      return breweries.filter((brew) => brew.brewery_type === "brewpub");
    } else if (breweryType === "Large") {
      return breweries.filter((brew) => brew.brewery_type === "large");
    }
  };

  const handleShowFilter = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };
  const [showFilter, setShowFilter] = useState(0);

  return (
    <Grid columns={2} style={{ margin: 0, padding: 0 }}>
      {location.city === "" ? (
        <Loader active size="large" inline="centered" style={loaderStyle} />
      ) : null}

      <Grid.Column width={12} style={{ margin: 0, padding: 0 }}>
        <div className={style.searchContainer}>
          <LocationBrewInput
            setLocation={setLocation}
            setViewport={setViewport}
            handleNameSearched={handleNameSearched}
            serachByCity={serachByCity}
            setSearchByCity={setSearchByCity}
            setGeolocationLoading={setGeolocationLoading}
            geolocationLoading={geolocationLoading}
          />
        </div>

        <Modal openModal={openModal} setOpenModal={setOpenModal} />

        {brewery.length === 0 ? null : (
          <div>
            <Button
              className={style.filterBtn}
              size="tiny"
              color="orange"
              onClick={handleShowFilter}
            >
              {showFilter ? "Hide" : "Show"} Filter
            </Button>
            <div
              className={style.listFilter}
              style={{
                height: showFilter ? "146px" : "0px",
              }}
            >
              <ListFilter
                setBreweryType={setBreweryType}
                breweryType={breweryType}
              />
            </div>
          </div>
        )}

        {showClickedBrewery ? (
          <div className={style.clickedContainer}>
            <ClickedBeerCard
              brewery={clickedBrewery}
              addToFavorites={addToFavorites}
            />
            <Button
              color="red"
              circular
              size="small"
              icon="close"
              className={style.closeBtn}
              onClick={() => setShowClickedBrewery(false)}
            />{" "}
          </div>
        ) : null}
        <div className="map-wrapper" style={{ margin: 0, padding: 0 }}>
          <LocationBrewMap
            setSelectedBrew={setSelectedBrew}
            selectedBrew={selectedBrew}
            setClickedBrewery={setClickedBrewery}
            setShowClickedBrewery={setShowClickedBrewery}
            brewery={brewFilter(brewery)}
            setViewport={setViewport}
            viewport={viewport}
          />{" "}
        </div>
      </Grid.Column>
      <Grid.Column
        width={4}
        style={{ margin: 0, padding: 0 }}
        only="computer tablet"
      >
        <LocationBrewList
          brewery={brewFilter(brewery)}
          handleBreweryListClick={handleBreweryListClick}
        />
        <GetUserLocation setLocation={setLocation} setViewport={setViewport} />
      </Grid.Column>
    </Grid>
  );
}
