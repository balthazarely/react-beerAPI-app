import React, { useState, useEffect, useRef } from "react";
import LocationBrewInput from "./LocationBrewInput";
import LocationBrewList from "./LocationBrewList";
import LocationBrewMap from "./LocationBrewMap";
import GetUserLocation from "./GetUserLocation";
import ClickedBeerCard from "./ClickedBeerCard";
import Pagination from "./Pagination";
import { Loader, Grid, Button } from "semantic-ui-react";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";
import style from "./LocationBrewSearchPage.module.css";

const loaderStyle = {
  position: "absolute",
  top: "50%",
  zIndex: 100000,
  left: "50%",
};

export default function LocationBrewSearchPage() {
  const [brewery, setBewery] = useState([]);
  // Default Viewport for Map
  const [viewport, setViewport] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    width: "100%",
    height: "100%",
    zoom: 3,
  });

  const [location, setLocation] = useState({ city: "", state: "" });
  const [clickedBrewery, setClickedBrewery] = useState({});
  const [showClickedBrewery, setShowClickedBrewery] = useState(false);

  const handleAPIFetch = () => {
    let url = `https://api.openbrewerydb.org/breweries?by_city=${location.city}&per_page=50&by_state=${location.state}`;
    Axios.get(url).then((res) => {
      setBewery(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    if (location.city !== "") {
      handleAPIFetch();
    }
  }, [location]);

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
          />
        </div>

        {showClickedBrewery ? (
          <div className={style.clickedContainer}>
            <ClickedBeerCard brewery={clickedBrewery} />
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
            brewery={brewery}
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
          brewery={brewery}
          handleBreweryListClick={handleBreweryListClick}
        />
        {/* <Pagination
          breweriesPerPage={breweriesPerPage}
          totalBreweries={brewery.length}
          paginate={paginate}
        />{" "} */}
        <GetUserLocation setLocation={setLocation} setViewport={setViewport} />
      </Grid.Column>
    </Grid>
  );
}
