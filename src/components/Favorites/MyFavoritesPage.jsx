import React, { useState, useEffect } from "react";
import { Grid, Container, Card } from "semantic-ui-react";
import FilterPanel from "./FilterPanel";
import MyFavoriteMap from "./MyFavoriteMap";
import MyFavoritesList from "./MyFavoritesList";
import { convertToNum } from "../Utility/_utility";

export default function MyFavoritesPage({
  favorites,
  removeFavorite,
  setSearchTerm,
}) {
  const [viewport, setViewPort] = useState({
    latitude: 37.0902,
    longitude: -95.7129,
    width: "100%",
    height: "100%",
    zoom: 1.75,
  });

  const clickedCard = (brewery) => {
    console.log(brewery);
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
      setViewPort(newViewport);
    }
  };

  // Reset map view if no favorites are present
  useEffect(() => {
    if (favorites.length === 0)
      setViewPort({
        latitude: 37.0902,
        longitude: -95.7129,
        width: "100%",
        height: "100%",
        zoom: 1.75,
      });
  }, [favorites]);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid stackable columns={2}>
        <Grid.Column width={8}>
          <Card fluid>
            <MyFavoriteMap
              favorites={favorites}
              viewport={viewport}
              setViewPort={setViewPort}
            />
          </Card>
        </Grid.Column>
        <Grid.Column width={8}>
          <FilterPanel setSearchTerm={setSearchTerm} />
          <MyFavoritesList
            favorites={favorites}
            removeFavorite={removeFavorite}
            clickedCard={clickedCard}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
