import React from "react";
import { Grid, Container, Card } from "semantic-ui-react";
import FilterPanel from "./FilterPanel";
import MyFavoriteMap from "./MyFavoriteMap";
import MyFavoritesList from "./MyFavoritesList";

export default function MyFavoritesPage({
  handleFilterInput,
  favorites,
  removeFavorite,
  setSearchTerm,
}) {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Grid stackable columns={2}>
        <Grid.Column width={10}>
          <FilterPanel
            handleFilterInput={handleFilterInput}
            setSearchTerm={setSearchTerm}
          />
          <MyFavoritesList
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Card fluid>
            <MyFavoriteMap favorites={favorites} />
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
