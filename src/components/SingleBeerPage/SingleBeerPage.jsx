import React, { useState, useEffect } from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import SingleBeerPageHeader from "./SingleBeerPageHeader";
import SingleBeerMap from "./SingleBeerMap";
import SingleBeerInfo from "./SingleBeerInfo";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";

export default function SingleBeerPage({ match }) {
  const [brewery, setBrewery] = useState({});

  // const [viewport, setViewPort] = useState({
  //   latitude: 37.0902,
  //   longitude: -95.7129,
  //   width: "100%",
  //   height: "100%",
  //   zoom: 1.75,
  // });

  useEffect(() => {
    let url = `https://api.openbrewerydb.org/breweries/${match.params.id}`;
    Axios.get(url).then((res) => {
      setBrewery(res.data);
      // handleBreweryListClick(res.data);
    });
  }, [match]);

  // const handleBreweryListClick = (brewery) => {
  //   if (
  //     isNaN(convertToNum(brewery.latitude)) ||
  //     isNaN(convertToNum(brewery.longitude))
  //   ) {
  //     return;
  //   } else {
  //     let newViewport = {
  //       latitude: convertToNum(brewery.latitude),
  //       longitude: convertToNum(brewery.longitude),
  //       width: "100%",
  //       height: "100%",
  //       zoom: 14,
  //     };
  //     setViewPort(newViewport);
  //   }
  // };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid>
        <Grid.Column width={16}>
          <SingleBeerPageHeader brewery={brewery} />
          <SingleBeerInfo brewery={brewery} />
          {/* <EventDetailedInfo event={event} />
        <EventDetailedChat /> */}
        </Grid.Column>
        <Grid.Column width={6}>
          {/* <SingleBeerMap
            viewport={viewport}
            setViewPort={setViewPort}
            brewery={brewery}
          /> */}
        </Grid.Column>
      </Grid>{" "}
    </Container>
  );
}
