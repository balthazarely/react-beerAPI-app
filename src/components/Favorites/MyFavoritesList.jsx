import React from "react";
import MyFavoritesListCard from "./MyFavoritesListCard";
import { Grid } from "semantic-ui-react";

const rowStyle = {
  maxHeight: "500px",
  overflowY: "scroll",
  marginTop: "10px",
};

export default function MyFavoritesList({
  favorites,
  removeFavorite,
  clickedCard,
}) {
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
                clickedCard={clickedCard}
              />
            );
          })}
      </Grid.Row>
    </Grid>
  );
}
