import React, { useState, useEffect, useRef } from "react";
import LocationBrewInput from "./LocationBrewInput";
import LocationBrewList from "./LocationBrewList";
import LocationBrewMap from "./LocationBrewMap";
import GetUserLocation from "./GetUserLocation";
import Pagination from "./Pagination";
import { Container, Grid, Card } from "semantic-ui-react";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";

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

  //Pagination Stuff
  const [currentPage, setCurrentPage] = useState(1);
  const [breweriesPerPage, setBreweriesPerPage] = useState(8);

  //Get Current Post
  const indexOfLastBrewery = currentPage * breweriesPerPage;
  const indexOfFirstBrewery = indexOfLastBrewery - breweriesPerPage;
  const currentPost = brewery.slice(indexOfFirstBrewery, indexOfLastBrewery);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Grid stackable columns={2}>
      <Grid.Column width={10}>
        <div
          className="search-container"
          style={{
            backgroundColor: "white",
            position: "absolute",
            top: "25px",
            left: "25px",
            zIndex: "100",
            margin: "10px",
            padding: "10px",
            boxShadow: "0px 5px 10px -2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <LocationBrewInput
            setLocation={setLocation}
            setViewport={setViewport}
          />
        </div>
        <div className="map-wrapper">
          <LocationBrewMap
            brewery={brewery}
            setViewport={setViewport}
            viewport={viewport}
          />{" "}
        </div>
      </Grid.Column>
      <Grid.Column width={6}>
        <LocationBrewList
          brewery={currentPost}
          handleBreweryListClick={handleBreweryListClick}
        />
        <Pagination
          breweriesPerPage={breweriesPerPage}
          totalBreweries={brewery.length}
          paginate={paginate}
        />{" "}
        <GetUserLocation setLocation={setLocation} setViewport={setViewport} />
      </Grid.Column>
    </Grid>
  );
}
