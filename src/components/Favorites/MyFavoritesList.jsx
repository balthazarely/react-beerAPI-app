import React from "react";
import MyFavoritesListCard from "./MyFavoritesListCard";
import { Grid } from "semantic-ui-react";

const rowStyle = {
  maxHeight: "100vh",
  overflowY: "scroll",
};

export default function MyFavoritesList({ favorites, removeFavorite }) {
  return (
    <Grid>
      <Grid.Row style={rowStyle} columns={1}>
        {favorites &&
          favorites.map((favorite) => {
            return (
              <MyFavoritesListCard
                key={favorite.id}
                favorite={favorite}
                removeFavorite={removeFavorite}
              />
            );
          })}
      </Grid.Row>
    </Grid>
  );
}
