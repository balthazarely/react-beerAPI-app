import React, { useState, useEffect } from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import SingleBeerPageHeader from "./SingleBeerPageHeader";
import SingleBeerMap from "./SingleBeerMap";
import SingleBeerInfo from "./SingleBeerInfo";
import Axios from "axios";
import { convertToNum } from "../Utility/_utility";
import { useSelector } from "react-redux";

export default function SingleBeerPage({ match }) {
  const [brewery, setBrewery] = useState({});
  const [isAlreadyAFavorite, setIsAlreadyAFavorite] = useState();
  const { favorites } = useSelector((state) => state.favorite);

  useEffect(() => {
    let url = `https://api.openbrewerydb.org/breweries/${match.params.id}`;
    Axios.get(url).then((res) => {
      setBrewery(res.data);
    });
  }, [match]);

  useEffect(() => {
    const even = (element) => element.id === Number(match.params.id);
    favorites.some(even)
      ? setIsAlreadyAFavorite(true)
      : setIsAlreadyAFavorite(false);
  });

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid>
        <Grid.Column width={16}>
          <SingleBeerPageHeader
            brewery={brewery}
            isAlreadyAFavorite={isAlreadyAFavorite}
          />
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
