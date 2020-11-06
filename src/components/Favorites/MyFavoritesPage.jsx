import React, { useState, useEffect } from "react";
import { Grid, Container, Card, Button } from "semantic-ui-react";
import FilterPanel from "./FilterPanel";
import MyFavoriteMap from "./MyFavoriteMap";
import MyFavoritesList from "./MyFavoritesList";
import { convertToNum } from "../Utility/_utility";

const buttonContainer = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0 150px",
  marginTop: "10px",
};

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
    zoom: 2,
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
        zoom: 2,
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
            <div style={buttonContainer}>
              <Button circular icon="beer" size="large" />
              <Button circular icon="home" size="large" />
              <Button circular icon="building" size="large" />
            </div>
            <div style={buttonContainer}>
              <p>Mirco</p>
              <p>Brewpub</p>
              <p>Large</p>
            </div>
          </Card>
        </Grid.Column>
        <Grid.Column width={8}>
          <FilterPanel setSearchTerm={setSearchTerm} />
          <MyFavoritesList
            favorites={favorites}
            removeFavorite={removeFavorite}
            clickedCard={clickedCard}
          />
          {favorites.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <h4>You haven't saved any favorites yet</h4>
            </div>
          ) : null}
        </Grid.Column>
      </Grid>
    </Container>
  );
}
