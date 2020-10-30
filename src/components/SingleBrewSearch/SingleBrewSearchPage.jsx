import React, { useState, useEffect } from "react";
import SingelBrewInput from "./SingleBrewInput";
import SingleBrewList from "./SingleBrewList";
import SingleBrewMap from "./SingleBrewMap";
import Pagination from "./Pagination";
import Posts from "./Posts";
import { Container, Grid } from "semantic-ui-react";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";

export default function SingleBrewSearchPage() {
  const [brewery, setBewery] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [breweriesPerPage, setBreweriesPerPage] = useState(8);

  const [viewport, setViewPort] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    width: "100%",
    height: "100%",
    zoom: 3,
  });

  const handleSearch = () => {
    setLoading(true);
    let url = `https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`;
    Axios.get(url).then((res) => {
      setBewery(res.data);
      console.log(res.data);
    });
    let resetView = {
      latitude: 37.0902,
      longitude: -95.7129,
      width: "100%",
      height: "100%",
      zoom: 3,
    };
    setViewPort(resetView);
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleBreweryListClick = (brewery) => {
    if (
      isNaN(convertToNum(brewery.latitude)) ||
      isNaN(convertToNum(brewery.longitude))
    ) {
      return;
    } else {
      let brew = {
        latitude: convertToNum(brewery.latitude),
        longitude: convertToNum(brewery.longitude),
        width: "100%",
        height: "100%",
        zoom: 10,
      };
      setViewPort(brew);
    }
  };

  //Get Current Post
  const indexOfLastBrewery = currentPage * breweriesPerPage;
  const indexOfFirstBrewery = indexOfLastBrewery - breweriesPerPage;
  const currentPost = brewery.slice(indexOfFirstBrewery, indexOfLastBrewery);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Container>
      <SingelBrewInput setSearchTerm={setSearchTerm} />
      <Grid stackable columns={2}>
        <Grid.Column>
          {/* <Posts posts={currentPost}  /> */}

          <SingleBrewList
            brewery={currentPost}
            handleBreweryListClick={handleBreweryListClick}
          />
          <Pagination
            breweriesPerPage={breweriesPerPage}
            totalBreweries={brewery.length}
            paginate={paginate}
          />
        </Grid.Column>
        <Grid.Column>
          <SingleBrewMap
            brewery={brewery}
            setViewPort={setViewPort}
            viewport={viewport}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
